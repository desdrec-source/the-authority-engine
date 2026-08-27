import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 p-12 sm:p-16 text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-ember-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Start Fuelling Your Pipeline</h2>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            One video a week, about six hours a month, and a steady stream of inbound enquiries. Join the free community to learn the method.
          </p>
          <a
            href={SKOOL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-10 px-10 py-4 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5 text-lg"
          >
            Join the community
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}