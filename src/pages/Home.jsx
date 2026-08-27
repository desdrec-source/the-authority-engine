import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ToolSection from "../components/ToolSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import SupportCTA from "../components/home/SupportCTA";
import CtaSection from "../components/CtaSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ToolSection />
      <SupportCTA />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}