import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyNarrative } from "@/components/case-study/CaseStudyNarrative";
import { CaseStudyChapter } from "@/components/case-study/CaseStudyChapter";
import { CaseStudyClose } from "@/components/case-study/CaseStudyClose";
import { MoreCaseStudies } from "@/components/case-study/MoreCaseStudies";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    openGraph: {
      title: `${study.title} — ${study.client}`,
      description: study.tagline,
      images: [study.cover.src],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyNarrative study={study} />
      {study.chapters.map((chapter, i) => (
        <CaseStudyChapter key={chapter.title} chapter={chapter} index={i} tinted={i % 2 === 1} />
      ))}
      <CaseStudyClose study={study} />
      <MoreCaseStudies currentSlug={study.slug} />
    </>
  );
}
