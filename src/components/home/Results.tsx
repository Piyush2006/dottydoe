"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { resultStats } from "@/lib/data";

export function Results() {
  return (
    <section className="bg-gradient-brand py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {resultStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center md:border-l md:border-white/25 md:first:border-l-0 md:px-6"
            >
              <AnimatedCounter
                value={stat.value}
                className="font-display text-4xl text-white sm:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-white/85">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
