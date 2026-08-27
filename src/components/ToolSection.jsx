import React from "react";
import { motion } from "framer-motion";
import { Youtube, ArrowRight } from "lucide-react";

// Replace these YouTube video IDs with Des Dreckett's real videos.
const VIDEOS = [
  { title: "CAT Moments: The Framework", id: "M7lc1UVf-VE" },
  { title: "Search-Estate Strategy Explained", id: "M7lc1UVf-VE" },
  { title: "One Video a Week, Six Hours a Month", id: "M7lc1UVf-VE" },
  { title: "Turning Views Into Inbound Enquiries", id: "M7lc1UVf-VE" },
  { title: "Positioning for Coaches & Consultants", id: "M7lc1UVf-VE" },
  { title: "Fuelling Your Pipeline", id: "M7lc1UVf-VE" },
];

export default function ToolSection() {
  return (
    <section id="tool" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Latest Videos</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            The Authority Engine on YouTube — CAT Moments, Search-Estate, and the one-video-a-week system for inbound enquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-lg shadow-navy-100/40 overflow-hidden hover:border-navy-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-video bg-slate-900">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{video.title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch on YouTube"
                  className="flex-shrink-0 h-9 w-9 rounded-full bg-ember-50 text-ember-600 flex items-center justify-center group-hover:bg-ember-500 group-hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@TheAuthorityEngineHub?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5"
          >
            <Youtube className="h-5 w-5" />
            Subscribe on YouTube
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}