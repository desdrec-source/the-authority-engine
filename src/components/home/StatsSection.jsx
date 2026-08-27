import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1", label: "Video a week", sub: "A sustainable cadence" },
  { value: "~6", label: "Hours a month", sub: "Script to publish" },
  { value: "3", label: "CAT Moments", sub: "Challenges · Aspirations · Transformations" },
  { value: "0", label: "Cold outreach", sub: "Inbound enquiries only" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-navy-600 to-navy-700">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-navy-100/70 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}