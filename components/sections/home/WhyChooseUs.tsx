"use client";

import {
  Smartphone, Zap, TrendingUp, Sparkles, Shield, Headphones, Check,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Zap, TrendingUp, Sparkles, Shield, Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection direction="right">
            <SectionHeader
              badge="Why Choose Us"
              title="Built for Performance, "
              highlight="Designed to Convert"
              subtitle="We combine technical excellence with creative design to build websites that don't just look good — they drive real business results."
              center={false}
            />
            <div className="mt-8 space-y-4">
              {[
                "No-templates — every site is custom-built",
                "Transparent communication throughout",
                "On-time delivery guarantee",
                "Post-launch support included",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-purple-500/25 hover:bg-purple-500/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 flex items-center justify-center mb-3">
                      {Icon && <Icon className="w-5 h-5 text-purple-400" />}
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
