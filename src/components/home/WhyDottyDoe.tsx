"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Rocket, LineChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeerMascot } from "@/components/deer/DeerMascot";
import { whyDottyDoe } from "@/lib/data";

const icons = [Layers, Sparkles, Rocket, LineChart];

export function WhyDottyDoe() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:mx-0">
            <div
              aria-hidden="true"
              className="animate-blob absolute inset-6 bg-gradient-brand opacity-[0.14] blur-2xl"
            />
            <DeerMascot sizes="(max-width: 1024px) 60vw, 420px" />
          </div>

          <div>
            <SectionHeading
              eyebrow="Why dotty doe"
              title="Have we done this before? A few times."
              description="Let's just say some brands got noticeably smarter."
            />

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {whyDottyDoe.map((point, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex flex-col gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-soft text-purple">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg text-ink">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
