import React, { useRef, useEffect } from 'react';

class Vec2 extends Array {
  constructor(x = 0, y = 0) { super(x, y); return this; }
  get x() { return this[0]; } get y() { return this[1]; }
  set x(v) { this[0] = v; } set y(v) { this[1] = v; }
  set(x, y) { if (x && x.length) return this.copy(x); this[0] = x; this[1] = y; return this; }
  copy(v) { this[0] = v[0]; this[1] = v[1]; return this; }
}

class Color extends Array {
  constructor(r, g, b) {
    if (r && r.length === 3) return super(...r);
    return super(r, g, b);
  }
  get r() { return this[0]; } get g() { return this[1]; } get b() { return this[2]; }
  set(r, g, b) { if (r && r.length) return this.copy(r); this[0] = r; this[1] = g; this[2] = b; return this; }
  copy(v) { this[0] = v[0]; this[1] = v[1]; this[2] = v[2]; return this; }
}

let GEO_ID = 1, ATTR_ID = 1;

class Geometry {
  constructor(gl, attributes = {}) {
    this.gl = gl; this.attributes = attributes; this.id = GEO_ID++;
    this.drawRange = { start: 0, count: 0 }; this.instancedCount = 0;
    for (let key in attributes) this.addAttribute(key, attributes[key]);
  }
  addAttribute(key, attr) {
    this.attributes[key] = attr; attr.id = ATTR_ID++;
    if (attr.data.length && !this.drawRange.count) this.drawRange.count = attr.data.length / attr.size;
  }
}

class Program {
  constructor(gl, { vertex, fragment, uniforms = {} } = {}) {
    this.gl = gl; this.uniforms = uniforms;
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vertex); gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(vs));
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fragment); gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(fs));
    this.program = gl.createProgram();
    gl.attachShader(this.program, vs); gl.attachShader(this.program, fs); gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) console.error(gl.getProgramInfoLog(this.program));
    this.uniformLocations = new Map();
    const numU = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < numU; i++) { const u = gl.getActiveUniform(this.program, i); this.uniformLocations.set(u.name, gl.getUniformLocation(this.program, u.name)); }
    this.attributeLocations = new Map();
    const numA = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < numA; i++) { const a = gl.getActiveAttrib(this.program, i); this.attributeLocations.set(a.name, gl.getAttribLocation(this.program, a.name)); }
  }
  use() { this.gl.useProgram(this.program); }
}

class Mesh {
  constructor(gl, { geometry, program }) {
    this.gl = gl; this.geometry = geometry; this.program = program;
    this.vao = gl.createVertexArray(); gl.bindVertexArray(this.vao);
    Object.keys(geometry.attributes).forEach(key => {
      const attr = geometry.attributes[key];
      const loc = program.attributeLocations.get(key);
      if (loc === undefined) return;
      gl.enableVertexAttribArray(loc);
      const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, attr.data, gl.STATIC_DRAW);
      gl.vertexAttribPointer(loc, attr.size, gl.FLOAT, false, 0, 0);
    });
    gl.bindVertexArray(null);
  }
  draw() {
    this.program.use();
    Object.keys(this.program.uniforms).forEach(key => {
      const u = this.program.uniforms[key];
      const loc = this.program.uniformLocations.get(key);
      if (!loc) return;
      if (u.value instanceof Color) this.gl.uniform3fv(loc, u.value);
      else if (u.value instanceof Vec2) this.gl.uniform2fv(loc, u.value);
      else this.gl.uniform1f(loc, u.value);
    });
    this.gl.bindVertexArray(this.vao);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.geometry.drawRange.count);
  }
}

class Renderer {
  constructor({ canvas, dpr = 1 }) {
    this.dpr = dpr; this.canvas = canvas;
    this.gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
  }
  setSize(width, height) {
    this.canvas.width = width * this.dpr; this.canvas.height = height * this.dpr;
    this.canvas.style.width = `${width}px`; this.canvas.style.height = `${height}px`;
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  render({ scene }) {
    this.gl.clearColor(0, 0, 0, 0); this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    scene.draw();
  }
}

const makeTriangle = (gl) => new Geometry(gl, {
  position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
  uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
});

const fragmentShader = `
precision highp float;
uniform float uTime; uniform vec2 uResolution; uniform vec2 uMouse;
uniform vec3 uColor; uniform float uPower; uniform float uFocus; uniform float uDistortion;
varying vec2 vUv;
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); }
float noise(vec2 st) {
  vec2 i = floor(st); vec2 f = fract(st);
  float a = random(i), b = random(i + vec2(1.0,0.0)), c = random(i + vec2(0.0,1.0)), d = random(i + vec2(1.0,1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
}
float fbm(vec2 st) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(st); st *= 2.0; a *= 0.5; }
  return v;
}
void main() {
  vec2 uv = (vUv - 0.5) * uResolution / min(uResolution.x, uResolution.y);
  float mouseDist = distance(uv, uMouse);
  float mouseEffect = smoothstep(1.0, 0.0, mouseDist) * uPower;
  float dist = length(uv);
  float core = smoothstep(0.2, 0.18, dist);
  vec2 dUv = uv + vec2(fbm(uv*2.0+uTime*0.1), fbm(uv*2.0-uTime*0.1)) * 0.1 * uDistortion;
  float coreTexture = fbm(dUv * 5.0 + uTime * 0.2);
  core *= coreTexture * (1.0 + mouseEffect);
  float angle = atan(uv.y, uv.x), rays = 0.0;
  for (int i = 0; i < 10; i++) {
    float ao = float(i) * (3.14159 * 2.0 / 10.0);
    rays += pow(abs(sin(angle * 5.0 + uTime * 0.5 + ao)), uFocus);
  }
  rays *= smoothstep(0.8, 0.0, dist) * (1.0 + mouseEffect * 2.0);
  float particles = fbm(uv * 4.0 + uTime * 0.1) * 0.2;
  particles *= smoothstep(0.6, 0.0, dist);
  float fc = core + rays + particles;
  vec3 hsv = vec3(uColor.r, 0.7, fc * (0.5 + mouseEffect));
  gl_FragColor = vec4(hsv2rgb(hsv), 1.0);
}`;

const vertexShader = `
attribute vec2 uv; attribute vec2 position; varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 0, 1); }`;

export default function AuraCore({ hue = 174, power = 1.5, focus = 28.0, distortion = 1.2 }) {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    if (!gl) return;

    const geometry = makeTriangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader, fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(gl.canvas.width, gl.canvas.height) },
        uMouse: { value: new Vec2() },
        uColor: { value: new Color(hue / 360, 1, 1) },
        uPower: { value: power },
        uFocus: { value: focus },
        uDistortion: { value: distortion },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      program.uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height * 2 - 1);
      mousePos.current = { x: nx * (rect.width / rect.height), y: ny };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let rafId;
    const animate = (t) => {
      rafId = requestAnimationFrame(animate);
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uMouse.value.set(mousePos.current.x, mousePos.current.y);
      renderer.render({ scene: mesh });
    };
    animate(0);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}