import React from "react";
import { motion } from "framer-motion";

export default function ServiceFeatures({ eyebrow, title, subtitle, items, bg = "white" }) {
  return (
    <section className={`py-24 px-6 ${bg === "slate" ? "bg-slate-50" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {eyebrow && (
            <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full border border-navy-100 mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-4 text-slate-500 max-w-xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-navy-100 hover:shadow-lg hover:shadow-navy-50 transition-all hover:-translate-y-1"
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 ${item.color === "navy" ? "bg-navy-100 group-hover:bg-navy-600" : "bg-ember-100 group-hover:bg-ember-500"} transition-colors`}>
                  <Icon className={`h-6 w-6 transition-colors ${item.color === "navy" ? "text-navy-600 group-hover:text-white" : "text-ember-600 group-hover:text-white"}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}