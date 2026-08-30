"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/RevealText";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import type { CaseStudy } from "@/lib/data";

const stripPrefix = (title: string) =>
  title.replace(/^Chapter\s*\d+\s*[—–-]\s*/, "").trim();

export function CaseStudyCampaigns({ study }: { study: CaseStudy }) {
  if (!study.chapters?.length) return null;

  const count = study.chapters.length;

  return (
    <section className="bg-white pt-14 md:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple">
              The campaigns
            </p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
              {count} campaigns, one brand.
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Open each for the brief in brief — then jump straight into the full
              story.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Accordion
              type="multiple"
              defaultValue={[stripPrefix(study.chapters[0].title)]}
              className="w-full border-t border-grey-line"
            >
              {study.chapters.map((chapter, i) => {
                const name = stripPrefix(chapter.title);
                return (
                  <AccordionItem key={chapter.title} value={name}>
                    <AccordionTrigger>
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-sm tabular-nums text-purple">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{name}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{chapter.summary}</p>
                      <a
                        href={`#chapter-${i + 1}`}
                        className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-colors hover:text-purple-deep"
                      >
                        Know more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
