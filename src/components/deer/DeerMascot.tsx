import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BITS = [0, 1, 2, 3, 4, 5, 6];

export function DeerMascot({
  className,
  priority = false,
  sizes = "(max-width: 768px) 60vw, 480px",
  bubble = true,
  bubbleDelay = "0s",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Show the animated bubblegum blow + pop over the painted bubble. */
  bubble?: boolean;
  /** Offset the bubble loop so multiple deer don't pop in lockstep. */
  bubbleDelay?: string;
}) {
  return (
    <div className={cn("relative aspect-[1240/1754] w-full", className)}>
      <Image
        src="/assets/logo/deer-mascot.png"
        alt="Dotty Doe mascot — a pop-art deer in pink sunglasses blowing a bubblegum bubble"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain drop-shadow-[0_30px_60px_rgba(76,39,168,0.25)]"
      />

      {bubble && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ "--dd-bubble-delay": bubbleDelay } as CSSProperties}
        >
          <span className="dd-bubble" />
          <span className="dd-bubble-ring" />
          {BITS.map((i) => (
            <span
              key={i}
              className="dd-bubble-bit"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>
      )}
    </div>
  );
}
