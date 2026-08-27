import React from "react";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16 bg-gradient-to-b from-slate-900 to-navy-900 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center pt-16 px-6"
        >
          <span className="inline-block px-4 py-1.5 bg-ember-400/10 text-ember-300 text-xs font-semibold rounded-full border border-ember-400/20 mb-4">
            Community & Coaching
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Free Community or Work With Me
          </h1>
          <p className="text-navy-200/60 text-lg">
            Join the free Skool community, or work with me 1:1 to build your YouTube-led pipeline.
          </p>
        </motion.div>
      </div>
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}