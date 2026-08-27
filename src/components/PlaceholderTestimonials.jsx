import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function PlaceholderTestimonials({
  eyebrow = "Placeholders",
  title = "Client Stories",
  subtitle = "Real quotes - coming soon.",
  roles = ["Coach · Founder", "Consultant · Agency", "Founder-led business"],
}) {
  const testimonials = roles.map((role) => ({
    name: "Client name",
    role,
    text: "Your testimonial will appear here - this is a placeholder until you add a real quote.",
  }));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-ember-50 text-ember-600 text-xs font-semibold rounded-full border border-ember-100 mb-4">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
          <p className="mt-4 text-slate-500">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-300 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-50 transition-all hover:-translate-y-1"
            >
              <span className="inline-block px-2.5 py-1 bg-white text-ember-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-ember-100 mb-4">
                Coming soon
              </span>
              <p className="text-slate-400 italic text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy-400 to-navy-600 flex items-center justify-center text-white">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-navy-600 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}