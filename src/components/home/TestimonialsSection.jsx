import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS =
  "https://www.google.com/search?q=xenmedia+marketing+ltd#mpd=~14015902191428276049/customers/reviews";

const testimonials = [
  {
    name: "Kim Bryant",
    date: "Oct 2020",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVIAnZIsLpGk97jCi62kg3WPUGnpe_dha1_rGCOJDwHLDVd4p78=s120-c-rp-mo-br100",
    text: "Des provided some great insights… I would highly recommend Des for your marketing needs!",
  },
  {
    name: "Rebecca Livesey",
    date: "Sept 2018",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWtbrqcrmWN_jrw8c4oVgLL6KuHADYlzGXJXe_l1QGWE0Z6P-E=s120-c-rp-mo-br100",
    text: "Des provided me with an in depth Twitter audit and strategy, full of practical tips…",
  },
  {
    name: "Kobus Avenant",
    date: "Oct 2018",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU73t4AmNTSHiZu1_b8WVrki1Ni2NvF_MHxtfC1G0Ea6RaglyQ=s120-c-rp-mo-ba4-br100",
    text: "I highly recommend that you use this company. The attention to detail and advice given was invaluable.",
  },
  {
    name: "Iain Williams",
    date: "Sept 2018",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWcZ3LPFQB-PD-uGquoeKcwgS_jOla98hkbDfUDON__Tb1F5jY=s120-c-rp-mo-br100",
    text: "I connected with XenMedia Marketing through Desmond, who has provided a massive inspiration…",
  },
  {
    name: "Yvonne A Jones",
    date: "Sept 2018",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVVh8kTfsYC7flStrCPziwMG90g8_Q64cmMiXPaKH4ph_EiwJsN=s120-c-rp-mo-ba2-br100",
    text: "I have been struggling with getting my Twitter account going again and XenMedia Marketing was hired…",
  },
  {
    name: "Jackie Hooper",
    date: "Sept 2018",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV66N5T7oxUlYU2KKxQ1U64vcMm7W6dKyvOkBFvbyX-IEzq-Ts=s120-c-rp-mo-br100",
    text: "Des really knows what he is talking about in Social Media matters. He's very helpful…",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-ember-50 text-ember-600 text-xs font-semibold rounded-full border border-ember-100 mb-4">
            <Star className="h-3.5 w-3.5 fill-ember-500 text-ember-500" />
            5.0 · 11 Google reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Client Stories</h2>
          <p className="mt-4 text-slate-500">Real reviews from coaches, consultants and founders.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-ember-500 text-ember-500" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center text-white font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy-700 bg-white border border-slate-200 rounded-full hover:border-navy-300 hover:shadow-md transition-all"
          >
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}