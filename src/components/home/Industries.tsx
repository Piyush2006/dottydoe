"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Category expertise, cross-pollinated."
          description="We move between categories on purpose — the sharpest ideas usually arrive from outside the brief's own industry."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-grey-line bg-grey-bg p-8 transition-colors duration-300 hover:bg-lavender-soft md:p-10"
            >
              <h3 className="font-display text-2xl text-ink md:text-3xl">{industry.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                {industry.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.clientLogos.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
