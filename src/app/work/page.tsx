import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WorkGrid } from "@/components/work/WorkGrid";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A portfolio of campaigns for Bank of Baroda, Reliance Foundation and more — 360° activations, audio partnerships, influencer campaigns and Gen AI films.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="A few times we made brands noticeably smarter."
        description="Every project here shipped across multiple phases, multiple platforms, and closed with real, reportable numbers."
      />
      <WorkGrid />
      <TrustedBy />
      <ContactCTA />
    </>
  );
}
