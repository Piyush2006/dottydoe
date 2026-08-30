"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactHighlights } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Results, not testimonials"
          title="We'll let the numbers speak instead."
          description="Impressions, reach, completion rates, engagement — pulled straight from the campaigns above."
        />

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {impactHighlights.map((item, i) => (
            <motion.div
              key={item.campaign}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex w-[280px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-grey-line bg-white p-7 lg:w-auto"
            >
              <div className="relative h-9 w-24">
                <Image
                  src={item.logo}
                  alt={item.client}
                  fill
                  sizes="96px"
                  className="object-contain object-left"
                />
              </div>

              <div className="mt-8">
                <p className="font-display text-4xl text-ink">{item.metricValue}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-purple">
                  {item.metricLabel}
                </p>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-soft">{item.note}</p>

              <p className="mt-6 text-xs font-medium text-ink-soft/70">{item.campaign}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
