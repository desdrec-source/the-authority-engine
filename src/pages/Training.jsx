import React from "react";
import { MapPin, Video, Laptop, Target, TrendingUp, Zap, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ServiceFeatures from "../components/ServiceFeatures";
import PlaceholderTestimonials from "../components/PlaceholderTestimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const sessions = [
  { icon: Target, title: "CAT Moments", desc: "The Challenges, Aspirations, and Transformations framework that turns expertise into content your audience searches for.", color: "navy" },
  { icon: TrendingUp, title: "Search-Estate", desc: "Owning the YouTube results for the questions your ideal clients are already asking.", color: "ember" },
  { icon: Zap, title: "One Video a Week", desc: "A sustainable cadence that fits around a busy practice — about six hours a month.", color: "navy" },
  { icon: Mail, title: "Inbound Enquiries", desc: "Replacing cold outreach with a steady stream of warm, qualified leads.", color: "ember" },
];

const delivery = [
  { icon: MapPin, title: "In-Person", desc: "On-site workshops with your team, wherever you're based.", color: "navy" },
  { icon: Video, title: "Remote", desc: "Live virtual sessions that keep everyone engaged on the call.", color: "ember" },
  { icon: Laptop, title: "Hybrid", desc: "A blend of in-person and remote for distributed teams.", color: "navy" },
];

export default function Training() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        badge="Training"
        title="Training"
        subtitle="Team workshops that install the Authority Engine method — in-person, remote, or hybrid."
        cta={{ label: "Get in touch", to: "/Contact" }}
      />
      <ServiceFeatures
        eyebrow="Sessions"
        title="What We Cover"
        subtitle="The core sessions every team walks away with."
        items={sessions}
      />
      <ServiceFeatures
        eyebrow="Delivery"
        title="How It's Delivered"
        subtitle="Choose the format that suits your team."
        items={delivery}
        bg="slate"
      />
      <PlaceholderTestimonials
        eyebrow="Placeholders"
        title="Participant Feedback"
        subtitle="Real quotes from workshop participants — coming soon."
        roles={["Team lead", "Marketing manager", "Founder"]}
      />
      <CtaSection />
      <Footer />
    </div>
  );
}