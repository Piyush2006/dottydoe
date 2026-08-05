"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText, FadeUp } from "@/components/ui/RevealText";
import { DeerMascot } from "@/components/deer/DeerMascot";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-12 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-32 top-10 h-[420px] w-[420px] bg-gradient-brand opacity-[0.16] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob absolute -right-40 top-40 h-[380px] w-[380px] bg-gradient-bubble opacity-[0.18] blur-3xl [animation-delay:3s]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple/15 bg-lavender-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple">
                Strategy. Story. Screens.
              </span>
            </FadeUp>

            <RevealText
              as="h1"
              text="Connect the dots between marketing, brand stories & everything digital."
              className="mt-7 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
            />

            <FadeUp delay={0.4}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
                Anything &amp; everything creative. You name it, and we do it — an
                extended arm of your brand, not just another boutique agency.
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <MagneticButton>
                  <Button asChild size="lg">
                    <Link href="/work">
                      See our work
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Start a project</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-[260px] sm:max-w-sm md:max-w-md"
          >
            <div className="animate-float-slow h-full w-full">
              <DeerMascot priority sizes="(max-width: 1024px) 70vw, 420px" className="h-full w-full" />
            </div>
          </motion.div>
        </div>

        <FadeUp delay={0.9} className="mt-10 hidden justify-center sm:flex md:mt-16 lg:mt-20">
          <a
            href="#trusted-by"
            className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-purple"
          >
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </FadeUp>
      </Container>
    </section>
  );
}
