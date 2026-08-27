import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Speaking", href: "/Speaking" },
    { label: "Training", href: "/Training" },
    { label: "Consulting", href: "/Consulting" },
    { label: "Videos", href: "/Tool" },
    { label: "Contact", href: "/Contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">
            The Authority Engine
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-ember-400 after:transition-all ${
                isActive(link.href)
                  ? "text-ember-400 after:w-full"
                  : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SKOOL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-ember-500 to-ember-600 rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5"
          >
            Join the community
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-300">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/98 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block w-full text-left text-sm font-medium py-2 transition-colors ${isActive(link.href) ? "text-ember-400" : "text-slate-300 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SKOOL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-ember-500 to-ember-600 rounded-full"
              >
                Join the community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}