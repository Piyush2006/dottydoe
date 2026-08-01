import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealText, FadeUp } from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/data";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-32 md:pt-40">
      <Container>
        <FadeUp>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
        </FadeUp>

        <div className="mt-8 flex flex-col gap-6 md:mt-10">
          <FadeUp delay={0.1} className="flex items-center gap-4">
            <span className="relative h-10 w-20 shrink-0">
              <Image
                src={study.clientLogo}
                alt={study.client}
                fill
                sizes="80px"
                className="object-contain object-left"
              />
            </span>
            <span className="h-5 w-px bg-ink/15" />
            <span className="text-sm font-semibold uppercase tracking-[0.1em] text-purple">
              {study.category}
            </span>
          </FadeUp>

          <RevealText
            as="h1"
            text={study.title}
            className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          />

          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {study.tagline}
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-ink-soft/60">Client</p>
              <p className="mt-1 text-sm font-medium text-ink">{study.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-ink-soft/60">Year</p>
              <p className="mt-1 text-sm font-medium text-ink">{study.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-ink-soft/60">Services</p>
              <p className="mt-1 max-w-xs text-sm font-medium text-ink">
                {study.services.join(" · ")}
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>

      <FadeUp delay={0.35} className="mt-14 md:mt-20">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-grey-line">
            <Image
              src={study.cover.src}
              alt={study.cover.alt}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </FadeUp>
    </section>
  );
}
