"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Megaphone,
  Share2,
  TrendingUp,
  PenTool,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/RevealText";
import { services } from "@/lib/data";

const icons = [Compass, Megaphone, Share2, TrendingUp, PenTool, Sparkles];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const CurrentIcon = icons[active];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Anything & everything creative."
            />
            <FadeUp delay={0.15}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                If it&rsquo;s interesting, we&rsquo;re in.
                <br />
                If it&rsquo;s never been done, we&rsquo;re even more in.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeUp>
        </div>

        {/* Desktop — interactive split showcase */}
        <FadeUp className="mt-14 hidden lg:block">
          <div className="grid grid-cols-[0.95fr_1.05fr] items-stretch gap-8">
            <ul className="flex flex-col">
              {services.map((service, i) => {
                const RowIcon = icons[i];
                const on = i === active;
                return (
                  <li key={service.slug} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-purple transition-opacity duration-300 ${
                        on ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      className={`flex w-full items-center gap-5 border-b border-grey-line px-4 py-4 text-left transition-colors duration-300 ${
                        on ? "rounded-xl border-transparent bg-grey-bg" : "hover:bg-grey-bg/50"
                      }`}
                    >
                      <span
                        className={`font-display text-sm tabular-nums transition-colors duration-300 ${
                          on ? "text-purple" : "text-ink-soft/50"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          on
                            ? "bg-purple text-white"
                            : "bg-lavender-soft text-purple"
                        }`}
                      >
                        <RowIcon className="h-5 w-5" />
                      </span>
                      <span
                        className={`font-display text-xl transition-colors duration-300 md:text-2xl ${
                          on ? "text-ink" : "text-ink-soft"
                        }`}
                      >
                        {service.title}
                      </span>
                      <ArrowUpRight
                        className={`ml-auto h-5 w-5 text-purple transition-all duration-300 ${
                          on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="relative overflow-hidden rounded-3xl border border-grey-line bg-grey-bg p-9">
              <div
                aria-hidden="true"
                className="animate-blob absolute -right-20 -top-20 h-64 w-64 bg-gradient-brand opacity-[0.13] blur-2xl"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex h-full flex-col justify-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-purple shadow-[0_10px_30px_rgba(76,39,168,0.12)]">
                    <CurrentIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl tracking-tight text-ink">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
                    {current.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {current.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-purple/15 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services#${current.slug}`}
                    className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-purple"
                  >
                    Explore {current.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

        {/* Mobile / tablet — rich cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((service, i) => {
            const RowIcon = icons[i];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-grey-line bg-grey-bg p-6 transition-colors hover:bg-lavender-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-soft text-purple">
                      <RowIcon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-ink-soft/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {service.short}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
