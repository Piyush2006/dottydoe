import { Container } from "@/components/ui/Container";
import { RevealText, FadeUp } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-white pb-16 pt-36 md:pb-24 md:pt-44", className)}>
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] bg-gradient-brand opacity-[0.14] blur-3xl"
      />
      <Container className="relative">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple/15 bg-lavender-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple">
            {eyebrow}
          </span>
        </FadeUp>
        <RevealText
          as="h1"
          text={title}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        />
        {description && (
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {description}
            </p>
          </FadeUp>
        )}
      </Container>
    </section>
  );
}
