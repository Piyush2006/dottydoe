import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <CaseStudiesPreview />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
