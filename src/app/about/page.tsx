import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutStory } from "@/components/about/AboutStory";
import { MissionVision } from "@/components/about/MissionVision";
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategy. Story. Screens. One team, connecting all three."
        description="We're not a boutique agency you rent for a quarter. We're the extended arm of your brand — embedded in the thinking, not just the execution."
      />
      <AboutStory />
      <MissionVision />
      <Process />
      <Culture />
      <Results />
      <TrustedBy />
      <ContactCTA />
    </>
  );
}
