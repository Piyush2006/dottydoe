"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cultureValues } from "@/lib/data";

export function Culture() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Culture"
          title="How we actually work."
          description="Four things that stay true whether the brief is a bank hoarding or an AI-generated Diwali film."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-grey-line bg-grey-line sm:grid-cols-2">
          {cultureValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white p-8 md:p-10"
            >
              <span className="font-display text-3xl text-purple/30">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
