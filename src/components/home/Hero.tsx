"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText, FadeUp } from "@/components/ui/RevealText";
import { DeerMascot } from "@/components/deer/DeerMascot";

const heroStats = [
  { value: "20+", label: "Brands on board" },
  { value: "65M+", label: "Impressions" },
  { value: "20M+", label: "Campaign views" },
];

const disciplines = [
  { label: "Brand Strategy", color: "bg-purple", className: "left-[-6%] top-[12%]" },
  { label: "Creative Campaigns", color: "bg-pink", className: "right-[-8%] top-[38%]" },
  { label: "Social & Content", color: "bg-blue", className: "left-[-10%] bottom-[26%]" },
  { label: "Gen AI Films", color: "bg-teal", className: "right-[4%] bottom-[6%]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-16">
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-32 top-10 h-[420px] w-[420px] bg-gradient-brand opacity-[0.16] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob absolute -right-40 top-40 h-[380px] w-[380px] bg-gradient-bubble opacity-[0.18] blur-3xl [animation-delay:3s]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <RevealText
              as="h1"
              text="Strategy. Story. Scale."
              className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]"
            />

            <FadeUp delay={0.35}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft md:text-xl">
                Yet another bunch of creative minds. Except we use more brain.
                Less AI.
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <p className="mt-4 max-w-md font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                Because <span className="text-purple">&ldquo;Generate&rdquo;</span>{" "}
                isn&rsquo;t a strategy.
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
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

            <FadeUp delay={0.7}>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-grey-line pt-6">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink-soft">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative mx-auto w-full max-w-sm md:max-w-md"
          >
            <div className="animate-float-slow">
              <DeerMascot priority sizes="(max-width: 1024px) 70vw, 440px" />
            </div>

            {disciplines.map((chip, i) => (
              <span
                key={chip.label}
                style={{ animationDelay: `${i * 1.3}s` }}
                className={`animate-float absolute hidden items-center gap-2 rounded-full border border-purple/10 bg-white/90 px-4 py-2 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(76,39,168,0.12)] backdrop-blur-sm lg:flex ${chip.className}`}
              >
                <span className={`h-2 w-2 rounded-full ${chip.color}`} />
                {chip.label}
              </span>
            ))}
          </motion.div>
        </div>

        <FadeUp delay={0.9} className="mt-10 hidden justify-center sm:flex md:mt-12">
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
