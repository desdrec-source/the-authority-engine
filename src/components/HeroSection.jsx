import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import AuraCore from "./AuraCore";
import VaporizeText from "./VaporizeText";

const CONSULTANT_IMAGE = "https://media.base44.com/images/public/6a8ff2bfa64e4effa3d433ac/a6482fab1_desimage.jpg";
const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-900 flex items-center">
      {/* AuraCore WebGL background */}
      <div className="absolute inset-0 opacity-80">
        <AuraCore hue={216} power={1.5} focus={28} distortion={1.2} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-500/20 border border-navy-400/30 rounded-full text-xs font-semibold text-navy-300 mb-6">
              <Youtube className="h-3.5 w-3.5" />
              YouTube-Led Lead Generation
            </div>

            {/* VaporizeText H1 */}
            <div className="w-full mb-3" style={{ height: "64px" }}>
              <VaporizeText
                texts={["Fuelling Your Pipeline.", "The Authority Engine.", "CAT Moments.", "Search-Estate."]}
                font={{ fontFamily: "Inter, sans-serif", fontSize: "40px", fontWeight: 800 }}
                color="rgb(255, 255, 255)"
                spread={5}
                density={5}
                animation={{ vaporizeDuration: 2, fadeInDuration: 1, waitDuration: 1 }}
                direction="left-to-right"
                alignment="left"
                tag="h1"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white/90 leading-snug mb-5">
              Lead generation for coaches, consultants & founders -{" "}
              <span className="text-ember-400">one video a week</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              The Authority Engine turns about six hours a month into a steady stream of inbound enquiries - built on CAT Moments and Search-Estate strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/Tool"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-navy-500/30 transition-all hover:-translate-y-0.5"
              >
                Watch the Videos
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={SKOOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-ember-400/10 border-2 border-ember-400/50 text-ember-300 font-semibold rounded-full hover:bg-ember-400/20 hover:border-ember-400 transition-all hover:-translate-y-0.5"
              >
                Join the community
              </a>
            </div>

            {/* Method badges */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Built on</span>
              {["YouTube", "Skool Community"].map((p) => (
                <span key={p} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Consultant Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-navy-400/20 rounded-full blur-3xl scale-75" />
            <div className="absolute inset-0 bg-ember-400/10 rounded-full blur-2xl scale-50 translate-x-8" />

            <motion.img
              src={CONSULTANT_IMAGE}
              alt="Des Dreckett - The Authority Engine"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl shadow-navy-900/50"
            />

            {/* Floating method card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-xs text-navy-300 font-medium">Weekly cadence</p>
              <p className="text-2xl font-bold text-white">1 video</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-8 -right-4 z-20 bg-ember-400/20 backdrop-blur-md border border-ember-400/30 rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-xs text-ember-300 font-medium">Time invested</p>
              <p className="text-2xl font-bold text-white">~6 hrs/mo</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}