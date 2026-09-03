"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-900/10 to-blue-900/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">
            Demo portfolio statistics
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-purple-500/25 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
