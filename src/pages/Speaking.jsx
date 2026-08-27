import React from "react";
import { Mic, Users, MessagesSquare, Target, TrendingUp, Zap, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ServiceFeatures from "../components/ServiceFeatures";
import PlaceholderTestimonials from "../components/PlaceholderTestimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const topics = [
  { icon: Target, title: "CAT Moments", desc: "The Challenges, Aspirations, and Transformations framework that turns expertise into content your audience searches for.", color: "navy" },
  { icon: TrendingUp, title: "Search-Estate", desc: "Owning the YouTube results for the questions your ideal clients are already asking.", color: "ember" },
  { icon: Zap, title: "One Video a Week", desc: "A sustainable cadence that fits around a busy practice - about six hours a month.", color: "navy" },
  { icon: Mail, title: "Inbound Enquiries", desc: "Replacing cold outreach with a steady stream of warm, qualified leads.", color: "ember" },
];

const formats = [
  { icon: Mic, title: "Keynote Talks", desc: "A punchy, practical keynote for conferences and business events.", color: "navy" },
  { icon: Users, title: "Interactive Workshops", desc: "Hands-on sessions where the room leaves with a plan they can use.", color: "ember" },
  { icon: MessagesSquare, title: "Round-tables", desc: "Smaller, candid discussions for founders and leadership teams.", color: "navy" },
];

export default function Speaking() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        badge="Speaking"
        title="Speaking"
        subtitle="Talks, workshops, and round-tables at UK business events - on CAT Moments, Search-Estate, and the one-video-a-week system that fuels inbound enquiries."
        cta={{ label: "Get in touch", to: "/Contact" }}
      />
      <ServiceFeatures
        eyebrow="Topics"
        title="What I Speak About"
        subtitle="Practical, repeatable methods for YouTube-led lead generation."
        items={topics}
      />
      <ServiceFeatures
        eyebrow="Formats"
        title="Ways to Book Me"
        subtitle="Talks, workshops, and round-tables - tailored to your audience."
        items={formats}
        bg="slate"
        cta={{ label: "Book a call", href: "https://calendar.app.google/1hYww8VK5qaB5DGH6" }}
      />
      <PlaceholderTestimonials
        eyebrow="Placeholders"
        title="Audience Feedback"
        subtitle="Real quotes from event organisers and attendees - coming soon."
        roles={["Event organiser", "Workshop host", "Round-table participant"]}
      />
      <CtaSection />
      <Footer />
    </div>
  );
}