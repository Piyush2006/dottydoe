import { Container } from "@/components/ui/Container";
import { RevealText, FadeUp } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white pb-14 pt-28 md:pb-20 md:pt-44",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] bg-gradient-brand opacity-[0.14] blur-3xl"
      />
      <Container className="relative">
        <div
          className={cn(
            aside &&
              "grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
          )}
        >
          <div>
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
          </div>

          {aside && (
            <FadeUp delay={0.3} className="lg:pb-2">
              {aside}
            </FadeUp>
          )}
        </div>
      </Container>
    </section>
  );
}
