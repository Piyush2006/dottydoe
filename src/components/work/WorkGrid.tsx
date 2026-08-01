"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { workItems } from "@/lib/data";

const filters = ["All", ...Array.from(new Set(workItems.map((w) => w.client)))];

export function WorkGrid() {
  const [active, setActive] = React.useState("All");

  const filtered =
    active === "All" ? workItems : workItems.filter((item) => item.client === active);

  return (
    <section className="bg-white pb-24 md:pb-32">
      <Container>
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                active === f
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 text-ink-soft hover:border-ink hover:text-ink"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/case-studies/${item.caseStudySlug}`}
                  data-cursor-hover
                  className="group relative block overflow-hidden rounded-3xl border border-grey-line bg-white"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-purple">
                        {item.category}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl text-ink md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft">{item.client}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
