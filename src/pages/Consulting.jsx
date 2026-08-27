import React from "react";
import { motion } from "framer-motion";
import { Compass, Globe, CalendarClock, Inbox, X } from "lucide-react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ServiceFeatures from "../components/ServiceFeatures";
import PlaceholderTestimonials from "../components/PlaceholderTestimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const CALENDAR = "https://calendar.app.google/1hYww8VK5qaB5DGH6";

const build = [
  { icon: Compass, title: "Positioning", desc: "Sharpening your CAT Moments so your expertise is unmistakable to the right audience.", color: "navy" },
  { icon: Globe, title: "Search-Estate", desc: "Owning the YouTube results for the questions your ideal clients are already asking.", color: "ember" },
  { icon: CalendarClock, title: "Cadence", desc: "A sustainable one-video-a-week rhythm - about six hours a month.", color: "navy" },
  { icon: Inbox, title: "Inbound Path", desc: "The system that turns views into a steady stream of warm, inbound enquiries.", color: "ember" },
];

const notFor = [
  { title: "Not a corporate LinkedIn consultancy", desc: "This is a done-with-you build, not a generic corporate playbook." },
  { title: "Not a $19 product", desc: "Bespoke, hands-on work for founders who are serious about their pipeline." },
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        badge="Consulting"
        title="Consulting"
        subtitle="A done-with-you Authority Engine build - positioning, Search-Estate, cadence, and the inbound path. Not a corporate LinkedIn consultancy. Not a $19 product."
        cta={{ label: "Book a call", href: CALENDAR }}
      />
      <ServiceFeatures
        eyebrow="The Build"
        title="What We Build Together"
        subtitle="The four pillars of a YouTube-led pipeline - installed with you, step by step."
        items={build}
      />

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full border border-navy-100 mb-4">
              What It Isn't
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Clear Expectations</h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">No false promises - just focused, hands-on work.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notFor.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:shadow-navy-50 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-ember-50 text-ember-600 flex items-center justify-center flex-shrink-0">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PlaceholderTestimonials
        eyebrow="Placeholders"
        title="Client Outcomes"
        subtitle="Real results from consulting clients - coming soon."
        roles={["Coach · Founder", "Consultant · Agency", "Founder-led business"]}
      />
      <CtaSection />
      <Footer />
    </div>
  );
}