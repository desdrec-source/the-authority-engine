import React from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@TheAuthorityEngineHub?sub_confirmation=1", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/desmonddreckett/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/DesmondDreckett", label: "X" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/Home" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">
                The Authority Engine
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              YouTube-led lead generation for coaches, consultants, and founder-led businesses. Fuelling your pipeline.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-ember-400 hover:border-ember-400/50 hover:bg-ember-400/10 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/Home" },
                { label: "Videos", to: "/Tool" },
                { label: "Contact", to: "/Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 text-sm hover:text-ember-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get Started</h4>
            <p className="text-slate-400 text-sm mb-4">Join the free community.</p>
            <a
              href={SKOOL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-gradient-to-r from-ember-500 to-ember-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all"
            >
              Join the community
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© 2026 The Authority Engine</p>
          <p className="text-xs text-bronze-500 whitespace-nowrap">Fuelling Your Pipeline.</p>
        </div>
      </div>
    </footer>
  );
}