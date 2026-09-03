import type { Metadata } from "next";
import {
  Palette, Code2, ShoppingCart, Search, Layers, Bot, Check, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NovaEdge Digital's full range of services: web design, web development, e-commerce, SEO, branding, and AI automation.",
};

const serviceDetails = [
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design",
    tagline: "Designs that captivate and convert",
    description:
      "We create stunning, bespoke website designs that reflect your brand identity and are engineered for conversion. Every element — from typography to colour palette — is thoughtfully crafted to create a premium user experience.",
    features: [
      "Custom UI/UX design from scratch",
      "Interactive prototypes in Figma",
      "Mobile-first responsive layouts",
      "Brand-consistent visual identity",
      "Accessibility-compliant design",
      "Micro-interaction design",
    ],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Fast, scalable, and future-proof",
    description:
      "We build high-performance websites using modern frameworks like Next.js and React. Our code is clean, maintainable, and built for speed — delivering exceptional Lighthouse scores and a smooth user experience.",
    features: [
      "Next.js & React development",
      "TypeScript for type safety",
      "Server-side rendering & static generation",
      "API development & integrations",
      "Database design & management",
      "CI/CD pipeline setup",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    tagline: "Online stores that drive sales",
    description:
      "We build powerful, secure e-commerce solutions that deliver a seamless shopping experience. From product catalogues to checkout flows, we optimise every step of the customer journey to maximise conversions.",
    features: [
      "Custom Shopify & headless builds",
      "Secure payment gateway integration",
      "Inventory & order management",
      "Product filtering & search",
      "Cart & wishlist functionality",
      "Analytics & conversion tracking",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    tagline: "Rank higher. Get found. Grow.",
    description:
      "Our data-driven SEO strategies improve your search rankings and drive sustainable organic traffic. We combine technical SEO with compelling content strategies to make your website a lead-generating machine.",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "On-page & meta optimization",
      "Core Web Vitals improvement",
      "Schema markup implementation",
      "Monthly performance reporting",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "branding",
    icon: Layers,
    title: "Branding",
    tagline: "Build an identity that's unforgettable",
    description:
      "A strong brand is the foundation of everything. We craft cohesive visual identities — logos, colour systems, typography, and brand guidelines — that communicate your values and make you instantly recognisable.",
    features: [
      "Logo design & variations",
      "Brand colour palette",
      "Typography system",
      "Brand guidelines document",
      "Business card & stationery",
      "Social media kit",
    ],
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    tagline: "Work smarter with intelligent systems",
    description:
      "We integrate AI-powered tools and automation workflows into your website and business operations — from chatbots to automated lead capture — saving you time and multiplying your output.",
    features: [
      "AI chatbot integration",
      "Automated lead qualification",
      "Smart content generation",
      "Email workflow automation",
      "CRM & tool integrations",
      "Custom AI feature development",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Services Built for{" "}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From strategy to launch — we provide everything you need to build, grow, and
              optimise your digital presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Sections */}
      {serviceDetails.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${!isEven ? "bg-white/[0.015] border-y border-white/5" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <AnimatedSection direction={isEven ? "right" : "left"}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="block text-sm font-medium text-purple-400 mb-2">
                    {service.tagline}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8">{service.description}</p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </AnimatedSection>

                {/* Features card */}
                <AnimatedSection direction={isEven ? "left" : "right"} delay={0.15} className={!isEven ? "lg:col-start-1" : ""}>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8">
                    <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                      What&apos;s Included
                    </h3>
                    <div className="space-y-3">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
