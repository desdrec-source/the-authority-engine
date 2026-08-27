import React from "react";
import { motion } from "framer-motion";
import { Youtube, Users, MessageCircle, Zap, ArrowRight, Sparkles, Star, TrendingUp, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const SKOOL = "https://www.skool.com/the-authority-engine-7664/about";

const triggers = [
  { icon: Youtube, text: "Weekly YouTube videos on CAT Moments & Search-Estate" },
  { icon: Users, text: "A free community of coaches, consultants, and founders" },
  { icon: MessageCircle, text: "Ask questions and get answers" },
  { icon: Zap, text: "No cost, no pitch — just the method" },
];

const floatingSymbols = [
  { icon: Hash, x: "8%", y: "15%", delay: 0, size: 28, color: "text-navy-400/40" },
  { icon: Star, x: "90%", y: "10%", delay: 0.5, size: 22, color: "text-ember-400/50" },
  { icon: TrendingUp, x: "5%", y: "70%", delay: 1, size: 26, color: "text-navy-300/30" },
  { icon: Youtube, x: "92%", y: "65%", delay: 0.8, size: 24, color: "text-ember-400/40" },
  { icon: Sparkles, x: "15%", y: "85%", delay: 1.4, size: 20, color: "text-navy-300/40" },
  { icon: MessageCircle, x: "80%", y: "80%", delay: 0.3, size: 26, color: "text-ember-300/50" },
  { icon: Hash, x: "50%", y: "8%", delay: 0.9, size: 22, color: "text-navy-400/30" },
  { icon: Zap, x: "72%", y: "25%", delay: 1.6, size: 18, color: "text-white/20" },
  { icon: Star, x: "25%", y: "50%", delay: 0.4, size: 20, color: "text-ember-400/30" },
  { icon: Sparkles, x: "60%", y: "88%", delay: 1.1, size: 18, color: "text-navy-300/40" },
];

export default function SupportCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-ember-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating animated symbols */}
      {floatingSymbols.map((sym, i) => {
        const Icon = sym.icon;
        return (
          <motion.div
            key={i}
            className={`absolute pointer-events-none ${sym.color}`}
            style={{ left: sym.x, top: sym.y }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-10, -30, -50, -70],
              rotate: [0, 15, -10, 5],
            }}
            transition={{
              duration: 5,
              delay: sym.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Icon style={{ width: sym.size, height: sym.size }} />
          </motion.div>
        );
      })}

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ember-400/10 border border-ember-400/30 rounded-full text-xs font-semibold text-ember-300 mb-6">
            <Users className="h-3.5 w-3.5" />
            Free Community — No Strings Attached
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Join the community.{" "}
            <span className="text-bronze-400">
              Fuelling Your Pipeline.
            </span>
          </h2>

          <p className="text-slate-300/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            A free Skool community for coaches, consultants, and founder-led businesses. Learn the{" "}
            <strong className="text-white">CAT Moments</strong> framework and{" "}
            <strong className="text-white">Search-Estate</strong> strategy — one video a week, about six hours a month, inbound enquiries.
          </p>

          {/* Trust triggers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-xl mx-auto">
            {triggers.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-ember-400" />
                  </div>
                  <span className="text-sm text-slate-300">{t.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SKOOL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5 text-base"
            >
              <Users className="h-5 w-5" />
              Join the community
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/Contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/15 hover:border-white/30 transition-all hover:-translate-y-0.5 text-base"
            >
              Work with me
            </Link>
          </div>

          {/* Micro trust text */}
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Free to join · No credit card · Cancel anytime
          </div>
        </motion.div>
      </div>
    </section>
  );
}