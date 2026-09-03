import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, Palette, Target, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers, technologies } from "@/lib/data";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NovaEdge Digital — our mission, team, and approach to building premium websites and digital experiences.",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses of all sizes with world-class digital presence — combining beautiful design with powerful technology to drive real, measurable growth.",
  },
  {
    icon: Palette,
    title: "Vision",
    description:
      "To be the go-to digital partner for ambitious businesses, known for our craft, reliability, and the tangible results we deliver for every client.",
  },
  {
    icon: Users,
    title: "Values",
    description:
      "Transparency, excellence, and genuine partnership. We treat every project as if it were our own business — with care, precision, and full commitment.",
  },
];

const whyUs = [
  "Custom-built websites — no page builders",
  "Direct communication, no account managers",
  "Fixed-scope projects with clear timelines",
  "Post-launch support included",
  "Performance-first approach",
  "Clean, maintainable code",
];

export default function AboutPage() {
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
              About NovaEdge Digital
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              We&apos;re a Team of{" "}
              <span className="gradient-text">Digital Craftspeople</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              NovaEdge Digital is a boutique web design and development studio. We partner with
              ambitious businesses to create digital experiences that leave a lasting impression and
              drive sustainable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 h-full hover:border-purple-500/25 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-xl mb-3">{v.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <SectionHeader
                badge="Why NovaEdge"
                title="The Agency That "
                highlight="Over-delivers"
                subtitle="We don't just build websites — we build digital assets that work hard for your business around the clock."
                center={false}
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
                <Code2 className="w-10 h-10 text-purple-400 mb-6" />
                <blockquote className="text-white text-xl font-semibold leading-relaxed mb-6">
                  &ldquo;Every pixel is intentional. Every line of code has a purpose. We build
                  websites that respect the user and grow the business.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    JB
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Jordan Blake</p>
                    <p className="text-slate-500 text-xs">Founder, NovaEdge Digital</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader
              badge="Tech Stack"
              title="Technologies We "
              highlight="Master"
              subtitle="We stay at the cutting edge so your website uses the best tools available."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              badge="The Team"
              title="Meet the People Behind "
              highlight="NovaEdge"
              subtitle="A small, expert team with big ambitions and even bigger results."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 text-center hover:border-purple-500/25 transition-colors duration-300">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
