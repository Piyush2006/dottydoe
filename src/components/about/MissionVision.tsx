"use client";

import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    icon: Target,
    label: "Mission",
    title: "Make every brand touchpoint feel like the same brand.",
    description:
      "We exist to close the gap between strategy decks and shipped work — connecting the dots so a campaign feels consistent from the first phase reveal to the last amplification push.",
  },
  {
    icon: Compass,
    label: "Vision",
    title: "To be the extended arm brands call first.",
    description:
      "Not a vendor brought in for a single deliverable, but the team that's already thinking two campaigns ahead — brave enough to challenge the brief when it needs challenging.",
  },
];

export function MissionVision() {
  return (
    <section className="bg-grey-bg py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-grey-line bg-white p-8 md:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-soft text-purple">
                <card.icon className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-purple">
                {card.label}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
