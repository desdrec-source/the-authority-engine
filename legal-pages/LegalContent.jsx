import React from "react";
import { motion } from "framer-motion";

export default function LegalContent({ kicker, title, updated, children }) {
  return (
    <>
      <div className="pt-16 bg-gradient-to-b from-slate-900 to-navy-900 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center pt-16 px-6"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-400/10 text-navy-300 text-xs font-semibold rounded-full border border-navy-400/20 mb-4">
            {kicker}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{title}</h1>
          <p className="text-navy-200/60 text-lg">Last updated: {updated}</p>
        </motion.div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-16 text-slate-600 leading-relaxed space-y-4 [&_h2]:text-slate-900 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_a]:text-navy-700 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </article>
    </>
  );
}
