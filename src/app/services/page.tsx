import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeUp } from "@/components/ui/RevealText";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand strategy, creative campaigns, social & content, digital & performance, design & production, and AI & emerging media — everything under one roof at Dotty Doe.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Anything & everything creative, under one roof."
        description="From the first line of brand strategy to the last frame of a Gen AI film — we connect the dots so nothing gets lost between teams."
      />

      <section className="bg-white pb-16 md:pb-24 lg:pb-32">
        <Container>
          <div className="flex flex-col divide-y divide-grey-line border-t border-grey-line">
            {services.map((service, i) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 gap-8 py-14 lg:grid-cols-[0.35fr_0.4fr_0.25fr] lg:gap-12 md:py-20"
              >
                <FadeUp className="flex items-start gap-6">
                  <span className="font-display text-2xl text-purple/40">0{i + 1}</span>
                  <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                    {service.title}
                  </h2>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <p className="text-lg leading-relaxed text-ink-soft">{service.description}</p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <ul className="flex flex-col gap-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            ))}
          </div>

          <FadeUp className="mt-16 flex justify-center">
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to us about your brief
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </MagneticButton>
          </FadeUp>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
