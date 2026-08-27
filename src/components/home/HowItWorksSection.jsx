import React from "react";
import { motion } from "framer-motion";
import { PenLine, Wand2, Share2 } from "lucide-react";

const steps = [
  { step: "01", icon: PenLine, title: "Capture CAT Moments", desc: "Identify the Challenges, Aspirations, and Transformations your clients actually care about." },
  { step: "02", icon: Wand2, title: "Build Search-Estate", desc: "Turn each one into a YouTube video that ranks for the questions they're already asking." },
  { step: "03", icon: Share2, title: "Fuel Your Pipeline", desc: "Let inbound enquiries come to you — no cold outreach, no ads, just warm leads." },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-navy-900 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-400/10 text-navy-300 text-xs font-semibold rounded-full border border-navy-400/20 mb-4">
            The Method
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-navy-200/60 max-w-xl mx-auto">One video a week. About six hours a month. Inbound enquiries.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-ember-500/50 to-transparent" />
          <div className="hidden md:block absolute top-10 left-2/3 right-0 h-px bg-gradient-to-r from-ember-500/50 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="inline-flex flex-col items-center">
                  <span className="text-6xl font-black text-navy-500/20 leading-none mb-2">{step.step}</span>
                  <div className="h-16 w-16 rounded-2xl bg-ember-500/20 border border-ember-400/30 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-ember-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-navy-200/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}