import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ badge, title, subtitle, cta }) {
  return (
    <div className="pt-16 bg-gradient-to-b from-slate-900 to-navy-900 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center pt-16 px-6"
      >
        <span className="inline-block px-4 py-1.5 bg-ember-400/10 text-ember-300 text-xs font-semibold rounded-full border border-ember-400/20 mb-4">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{title}</h1>
        <p className="text-navy-200/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        {cta &&
          (cta.to ? (
            <Link
              to={cta.to}
              className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
      </motion.div>
    </div>
  );
}