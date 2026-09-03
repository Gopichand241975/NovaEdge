"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <SectionHeader
            badge="Testimonials"
            title="What Our "
            highlight="Clients Say"
            subtitle="These are sample placeholder testimonials for portfolio demonstration purposes."
          />
        </AnimatedSection>

        <AnimatedSection className="mb-8">
          <p className="text-center text-xs text-slate-600 italic">
            * Demo testimonials — for portfolio showcase purposes only
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300 h-full flex flex-col"
              >
                <Quote className="w-8 h-8 text-purple-500/40 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{t.name}</p>
                    <p className="text-slate-500 text-xs truncate">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
