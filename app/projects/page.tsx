import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { allProjects } from "@/lib/data";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of premium websites, e-commerce stores, and digital experiences built for ambitious clients.",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[number];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
        {/* Screenshot mockup */}
        <div className="relative overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-[#0d1117]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <div className="flex-1 mx-3 h-5 rounded bg-white/5 border border-white/5" />
          </div>
          {/* "Screenshot" */}
          <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            {/* Decorative content inside mockup */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-white/20" />
                <div className="w-20 h-2 rounded bg-white/30" />
              </div>
              <div className="space-y-2">
                <div className="w-3/4 h-3 rounded bg-white/40" />
                <div className="w-1/2 h-2.5 rounded bg-white/25" />
                <div className="w-24 h-7 rounded-lg bg-white/20 mt-3" />
              </div>
            </div>
            {/* Grid lines overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-xs font-medium text-purple-400 mb-1.5 block">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-white/25 transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Demo
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ProjectsPage() {
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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Work We&apos;re{" "}
              <span className="gradient-text">Proud to Show</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A curated selection of projects that demonstrate our design quality, technical
              expertise, and commitment to delivering outstanding results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
