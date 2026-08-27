import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";
const CALENDAR = "https://calendar.app.google/1hYww8VK5qaB5DGH6";

const plans = [
  {
    name: "Free Community",
    price: "Free",
    period: "forever",
    features: [
      "Weekly YouTube videos",
      "CAT Moments framework",
      "Search-Estate breakdowns",
      "Ask questions in the community",
    ],
    cta: "Join the community",
    highlighted: true,
    link: SKOOL,
    external: true,
    badge: "Start here",
  },
  {
    name: "Work With Me",
    price: "Bespoke",
    period: "by application",
    features: [
      "1:1 YouTube-led strategy",
      "CAT Moments positioning",
      "Search-Estate build-out",
      "Inbound enquiry system",
    ],
    cta: "Book a call",
    highlighted: false,
    link: CALENDAR,
    external: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Free Community or Work With Me</h2>
          <p className="mt-4 text-slate-500">Two ways to engage The Authority Engine.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-navy-700 to-navy-800 text-white shadow-2xl shadow-navy-300/40"
                  : "bg-white border-2 border-slate-100 hover:border-navy-100 shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-ember-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <Star className="h-3 w-3" />{plan.badge.toUpperCase()}
                </div>
              )}
              <h3 className={`text-lg font-bold ${plan.highlighted ? "text-white/80" : "text-slate-400"}`}>{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-slate-400"}`}>/{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-white/20" : "bg-navy-50"}`}>
                      <Check className={`h-3 w-3 ${plan.highlighted ? "text-white" : "text-navy-600"}`} />
                    </div>
                    <span className={plan.highlighted ? "text-white/90" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.external ? (
                <a href={plan.link} target="_blank" rel="noopener noreferrer"
                  className="mt-8 block w-full py-3.5 text-center font-semibold rounded-2xl bg-white text-navy-700 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  {plan.cta}
                </a>
              ) : (
                <Link to={plan.link}
                  className="mt-8 block w-full py-3.5 text-center font-semibold rounded-2xl bg-gradient-to-r from-navy-600 to-navy-700 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}