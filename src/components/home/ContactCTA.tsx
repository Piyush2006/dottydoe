"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";
import { DeerMascot } from "@/components/deer/DeerMascot";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-16 bottom-0 h-[340px] w-[340px] opacity-20 md:h-[460px] md:w-[460px]">
        <DeerMascot bubble={false} className="h-full w-full" />
      </div>
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -left-24 top-0 h-[300px] w-[300px] bg-gradient-brand opacity-20 blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal"
          >
            Let&apos;s connect the dots
          </motion.span>

          <RevealText
            as="h2"
            text="Got a brand brave enough to not follow the herd?"
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-white/60"
          >
            Tell us about your business, your goals and your timeline. We&apos;ll
            reply with next steps, not a generic pitch deck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <MagneticButton>
              <Button asChild size="lg" variant="light">
                <Link href="/contact">
                  Start a business enquiry
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
