import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/data";

const closeRows: { label: string; key: "results" | "businessImpact" | "lessonsLearned" }[] = [
  { label: "Results", key: "results" },
  { label: "Business Impact", key: "businessImpact" },
  { label: "Lessons Learned", key: "lessonsLearned" },
];

export function CaseStudyClose({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-ink py-14 text-white md:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="The outcome" title="Where it landed." dark />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {closeRows.map((row, i) => (
            <FadeUp key={row.key} delay={i * 0.1}>
              <p className="font-display text-xl text-teal">{row.label}</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">{study[row.key]}</p>
            </FadeUp>
          ))}
        </div>

        {study.videos && study.videos.length > 0 && (
          <div className="mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Campaign films
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {study.videos.map((video) => (
                <a
                  key={video.url}
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-ink/30" />
                  <PlayCircle className="relative h-14 w-14 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-white">
                    {video.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <FadeUp delay={0.2} className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <p className="max-w-md text-lg text-white/70">
            Want a campaign that lands like this one?
          </p>
          <Link
            href="/contact"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lavender-soft"
          >
            Start a business enquiry
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </Container>
    </section>
  );
}
