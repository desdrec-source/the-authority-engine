import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Hash, TrendingUp, Smartphone, Globe } from "lucide-react";

const features = [
  { icon: Target, title: "CAT Moments", desc: "Turn the Challenges, Aspirations, and Transformations your clients care about into content that resonates.", color: "navy" },
  { icon: TrendingUp, title: "Search-Estate Strategy", desc: "Own the search results for the exact questions your ideal clients are asking.", color: "ember" },
  { icon: Zap, title: "One Video a Week", desc: "A sustainable YouTube cadence that fits around a busy consulting practice.", color: "navy" },
  { icon: Smartphone, title: "About Six Hours a Month", desc: "Script, film, edit, and publish — the whole process in roughly six hours a month.", color: "ember" },
  { icon: Hash, title: "Inbound Enquiries", desc: "Replace cold outreach with a steady stream of warm, inbound leads.", color: "navy" },
  { icon: Globe, title: "Built for Founders", desc: "Designed for coaches, consultants, and founder-led businesses.", color: "ember" },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full border border-navy-100 mb-4">
            Why The Authority Engine?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything You Need to Fuel Your Pipeline</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">YouTube-led lead generation built for coaches, consultants, and founders.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-navy-100 hover:shadow-lg hover:shadow-navy-50 transition-all hover:-translate-y-1"
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 ${feature.color === "navy" ? "bg-navy-100 group-hover:bg-navy-600" : "bg-ember-100 group-hover:bg-ember-500"} transition-colors`}>
                  <Icon className={`h-6 w-6 transition-colors ${feature.color === "navy" ? "text-navy-600 group-hover:text-white" : "text-ember-600 group-hover:text-white"}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}