"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.02 },
  },
};

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealText({
  text,
  as: Tag = "span",
  className,
  once = true,
  delay = 0,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  once?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      <motion.span
        className="inline-block"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.4, margin: "0px 0px -80px 0px" }}
        transition={{ delayChildren: delay }}
      >
        {words.map((w, i) => (
          <React.Fragment key={i}>
            <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
            {i !== words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
  once = true,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
