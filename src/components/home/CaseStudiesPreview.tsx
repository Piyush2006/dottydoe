"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { caseStudies } from "@/lib/data";

export function CaseStudiesPreview() {
  return (
    <section className="bg-ink py-16 text-white md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Case studies"
          title="A few times we made brands noticeably smarter."
          description="Full breakdowns — challenge, strategy, creative, execution and the numbers that followed."
          dark
        />

        <div className="mt-16 flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                data-cursor-hover
                className="group grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06] md:grid-cols-[1.2fr_1fr] md:gap-10 md:p-8"
              >
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-8 w-16 shrink-0 items-center rounded-lg bg-white px-2 py-1">
                      <Image
                        src={study.clientLogo}
                        alt={study.client}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl leading-tight text-white md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                    {study.tagline}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-8">
                    {study.chapters[0].metrics.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <AnimatedCounter
                          value={m.value}
                          className="font-display text-2xl text-teal md:text-3xl"
                        />
                        <p className="mt-1 text-xs text-white/50">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read the full case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="order-1 relative aspect-video w-full overflow-hidden rounded-2xl md:order-2">
                  <Image
                    src={study.cover.src}
                    alt={study.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
