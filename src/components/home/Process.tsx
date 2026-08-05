"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section className="bg-grey-bg py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our process"
          title="Five steps. Zero guesswork."
          description="Every campaign — big or small — moves through the same rigor, from first brief to final metrics."
        />

        <div className="mt-16 grid grid-cols-1 gap-0 divide-y divide-grey-line border-y border-grey-line md:grid-cols-5 md:gap-6 md:divide-y-0 md:border-none">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-4 py-8 md:py-0"
            >
              <span className="font-display text-5xl text-purple/25 md:text-6xl">
                {step.number}
              </span>
              <h3 className="font-display text-xl text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              {i < process.length - 1 && (
                <span className="pointer-events-none absolute right-0 top-8 hidden h-px w-6 translate-x-full bg-grey-line md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
