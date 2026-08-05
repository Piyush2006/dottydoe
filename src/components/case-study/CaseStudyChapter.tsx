import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp, RevealText } from "@/components/ui/RevealText";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";
import type { CaseStudyChapter as CaseStudyChapterType } from "@/lib/data";

export function CaseStudyChapter({
  chapter,
  index,
  tinted,
}: {
  chapter: CaseStudyChapterType;
  index: number;
  tinted?: boolean;
}) {
  return (
    <section className={cn("py-14 md:py-20 lg:py-28", tinted ? "bg-grey-bg" : "bg-white")}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          <div>
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-purple">
                Chapter 0{index + 1}
              </span>
            </FadeUp>
            <RevealText
              as="h3"
              text={chapter.title.replace(/^Chapter \d+ — /, "")}
              className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl"
            />
            <FadeUp delay={0.15}>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{chapter.summary}</p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <ul className="mt-8 flex flex-col gap-3">
                {chapter.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Star className="mt-0.5 h-4 w-4 shrink-0 fill-purple/20 text-purple" />
                    {obj}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {chapter.phases && (
              <FadeUp delay={0.35} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {chapter.phases.map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-2xl border border-grey-line bg-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-purple">
                      {phase.title}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-ink">{phase.description}</p>
                  </div>
                ))}
              </FadeUp>
            )}

            <FadeUp delay={0.45}>
              <div className="mt-10 rounded-2xl bg-gradient-brand p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80">
                  {chapter.metrics.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-5">
                  {chapter.metrics.metrics.map((m) => (
                    <div key={m.label}>
                      <AnimatedCounter
                        value={m.value}
                        className="font-display text-2xl text-white md:text-3xl"
                      />
                      <p className="mt-1 text-xs text-white/80">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="flex flex-col gap-6">
            {chapter.gallery.map((img, i) => (
              <FadeUp key={img.src} delay={0.1 + i * 0.1}>
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-grey-line">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
