import { cn } from "@/lib/utils";
import { RevealText, FadeUp } from "./RevealText";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <FadeUp>
          <span
            className={cn(
              "inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
              dark
                ? "border-white/15 bg-white/[0.06] text-teal"
                : "border-purple/20 bg-lavender-soft text-purple"
            )}
          >
            {eyebrow}
          </span>
        </FadeUp>
      )}
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-white" : "text-ink",
          titleClassName
        )}
      />
      {description && (
        <FadeUp delay={0.15}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              dark ? "text-white/60" : "text-ink-soft",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
