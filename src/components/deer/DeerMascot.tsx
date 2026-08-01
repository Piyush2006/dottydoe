import Image from "next/image";
import { cn } from "@/lib/utils";

export function DeerMascot({
  className,
  priority = false,
  sizes = "(max-width: 768px) 60vw, 480px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src="/assets/logo/deer-mascot.png"
        alt="Dotty Doe mascot — a pop-art deer wearing pink sunglasses and blowing a bubblegum bubble"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(76,39,168,0.25)]"
      />
    </div>
  );
}
