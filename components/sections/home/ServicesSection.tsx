"use client";

import Link from "next/link";
import {
  Palette, Code2, ShoppingCart, Search, Layers, Bot, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Palette, Code2, ShoppingCart, Search, Layers, Bot,
};

const gradients = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-green-500 to-teal-500",
  "from-pink-500 to-rose-500",
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <SectionHeader
            badge="Our Services"
            title="Everything You Need to "
            highlight="Succeed Online"
            subtitle="From stunning design to powerful development — we deliver end-to-end digital solutions tailored to your business goals."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const gradient = gradients[i % gradients.length];
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 group-hover:gap-2.5 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
