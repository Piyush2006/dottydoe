import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutStory } from "@/components/about/AboutStory";
import { Process } from "@/components/home/Process";
import { Culture } from "@/components/about/Culture";
import { Results } from "@/components/home/Results";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "dotty doe is an extended arm of your brand — connecting marketing strategy, brand story, creative design and everything digital under one roof.",
};

const facts = [
  { value: "20+", label: "Brands on board" },
  { value: "6", label: "Disciplines, one roof" },
  { value: "4", label: "Industries, cross-pollinated" },
  { value: "100%", label: "In-house production" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategy. Story. Screens. One team, connecting all three."
        description="We're not a boutique agency you rent for a quarter. We're the extended arm of your brand — embedded in the thinking, not just the execution."
        aside={
          <div className="rounded-3xl border border-grey-line bg-grey-bg p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple">
              The shape of us
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="font-display text-3xl font-medium tracking-tight text-ink">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-ink-soft">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <AboutStory />
      <Process />
      <Culture />
      <Results />
      <TrustedBy />
      <ContactCTA />
    </>
  );
}
