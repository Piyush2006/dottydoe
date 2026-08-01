import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/data";

const rows: { label: string; key: keyof CaseStudy }[] = [
  { label: "The Challenge", key: "challenge" },
  { label: "Research", key: "research" },
  { label: "Our Strategy", key: "strategy" },
  { label: "Creative Execution", key: "creative" },
];

export function CaseStudyNarrative({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col divide-y divide-grey-line border-y border-grey-line">
          {rows.map((row, i) => (
            <FadeUp
              key={row.key}
              delay={i * 0.05}
              className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[0.3fr_0.7fr] md:gap-12 md:py-14"
            >
              <p className="font-display text-2xl text-ink md:text-3xl">{row.label}</p>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
                {study[row.key] as string}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
