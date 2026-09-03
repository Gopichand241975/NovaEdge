"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/lib/data";

function ProjectMockup({ gradient }: { gradient: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/3">
        <div className="w-2 h-2 rounded-full bg-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-2 h-4 rounded bg-white/5" />
      </div>
      {/* Content */}
      <div className={`h-40 bg-gradient-to-br ${gradient} opacity-80 relative`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <div className="w-1/2 h-2 rounded bg-white/40 mb-1.5" />
          <div className="w-1/3 h-1.5 rounded bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <SectionHeader
            badge="Featured Work"
            title="Projects We're "
            highlight="Proud Of"
            subtitle="A selection of recent work that showcases our design quality, technical depth, and attention to detail."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-white/15 transition-all duration-300"
              >
                <ProjectMockup gradient={project.gradient} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-medium text-purple-400 mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    </div>
                    <Link
                      href="/projects"
                      className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 flex-shrink-0"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
