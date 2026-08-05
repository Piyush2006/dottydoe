"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/RevealText";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Anything & everything creative."
            description="You name it. And we do it. We are an extended arm of your brand — not just another boutique agency."
          />
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-grey-line bg-grey-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col justify-between gap-10 bg-white p-8 transition-colors duration-300 hover:bg-ink md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-ink-soft/60 transition-colors group-hover:text-white/40">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-1 text-ink-soft opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-white md:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft transition-colors group-hover:text-white/70">
                    {service.short}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
