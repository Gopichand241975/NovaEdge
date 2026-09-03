import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import BrandsSection from "@/components/sections/home/BrandsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import StatsSection from "@/components/sections/home/StatsSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "NovaEdge Digital — We Build Websites That Grow Your Business",
  description:
    "Modern websites, powerful digital experiences, and smart solutions designed to help businesses attract more customers and grow online.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
