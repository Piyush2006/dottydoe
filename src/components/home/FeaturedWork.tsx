"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/RevealText";
import { workItems } from "@/lib/data";

const featured = workItems.slice(0, 5);

export function FeaturedWork() {
  return (
    <section className="bg-grey-bg py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected campaigns, shipped."
            description="A few of the creative worlds we've built — from festive 360° rollouts to a Gen AI-powered Diwali film."
          />
          <FadeUp delay={0.2}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              View all work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={item.size === "large" ? "md:col-span-2" : ""}
            >
              <Link
                href={`/case-studies/${item.caseStudySlug}`}
                data-cursor-hover
                className="group relative block overflow-hidden rounded-3xl border border-grey-line bg-white"
              >
                <div
                  className={
                    item.size === "large"
                      ? "relative aspect-[16/9] w-full overflow-hidden"
                      : "relative aspect-video w-full overflow-hidden"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-purple">
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.client}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
