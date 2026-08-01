import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { WhyDottyDoe } from "@/components/home/WhyDottyDoe";
import { Results } from "@/components/home/Results";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedWork />
      <CaseStudiesPreview />
      <Industries />
      <Process />
      <WhyDottyDoe />
      <Results />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
