import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Calendar, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const CALENDAR = "https://calendar.app.google/1hYww8VK5qaB5DGH6";
const TO_EMAIL = "des@theauthorityengine.org";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await base44.integrations.Core.SendEmail({
        to: TO_EMAIL,
        subject: `New enquiry from ${form.name}`,
        body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError("Something went wrong sending your message. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let's Talk</h2>
          <p className="mt-4 text-slate-500">Coaches, consultants, and founders — tell me about your business and how I can help fuel your pipeline.</p>
          <a href={CALENDAR} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-ember-500 to-ember-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-ember-500/30 transition-all hover:-translate-y-0.5">
            <Calendar className="h-4 w-4" />Book a call
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-navy-100/50 p-8"
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required
                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required
                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your business..." rows={4} required
                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-400 transition-all resize-none" />
            </div>
          </div>
          <button type="submit" disabled={sending}
            className="mt-6 w-full py-3.5 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-navy-200 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
            {sending ? <><Loader2 className="h-4 w-4 animate-spin" />Sending…</> : sent ? <><Mail className="h-4 w-4" />Message Sent!</> : <><Send className="h-4 w-4" />Send Message</>}
          </button>
          {error && <p className="mt-3 text-sm text-red-500 text-center">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
}