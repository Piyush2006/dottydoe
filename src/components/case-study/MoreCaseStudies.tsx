import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/RevealText";
import { caseStudies } from "@/lib/data";

export function MoreCaseStudies({ currentSlug }: { currentSlug: string }) {
  const others = caseStudies.filter((s) => s.slug !== currentSlug);

  return (
    <section className="bg-white py-14 md:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Keep exploring" title="More case studies." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {others.map((study, i) => (
            <FadeUp key={study.slug} delay={i * 0.1}>
              <Link
                href={`/case-studies/${study.slug}`}
                data-cursor-hover
                className="group relative block overflow-hidden rounded-3xl border border-grey-line"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={study.cover.src}
                    alt={study.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal">
                      {study.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl text-white">{study.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
