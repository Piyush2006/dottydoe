"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+\.?\d*)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const cleaned = numStr.replace(/,/g, "");
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { prefix, number: parseFloat(cleaned), suffix, decimals };
}

function formatNumber(value: number, decimals: number, useCommas: boolean) {
  const fixed = value.toFixed(decimals);
  if (!useCommas) return fixed;
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withCommas}.${dec}` : withCommas;
}

export function AnimatedCounter({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = parseValue(value);
  const useCommas = parsed ? value.replace(/[^\d,]/g, "").includes(",") : false;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (isInView && parsed) motionValue.set(parsed.number);
  }, [isInView, motionValue, parsed]);

  React.useEffect(() => {
    if (!parsed) return;
    const unsub = spring.on("change", (latest) => {
      setDisplay(formatNumber(latest, parsed.decimals, useCommas));
    });
    return unsub;
  }, [spring, parsed, useCommas]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
