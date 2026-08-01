import type { Metadata } from "next";
import { Mail, MessageCircle, AtSign, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { FadeUp } from "@/components/ui/RevealText";
import { ContactForm } from "@/components/contact/ContactForm";
import { DeerMascot } from "@/components/deer/DeerMascot";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a business enquiry with dotty doe — email, WhatsApp, or fill out the form and we'll reply within one business day.",
};

const channels = [
  { icon: Mail, label: "Email", value: "hello@dottydoe.com", href: "mailto:hello@dottydoe.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/910000000000" },
  { icon: AtSign, label: "Instagram", value: "@dottydoe", href: "#" },
  { icon: Users, label: "LinkedIn", value: "dotty doe", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect the dots on your next campaign."
        description="Tell us about your business, your goals, and your timeline — we'll come back with next steps, not a boilerplate pitch."
      />

      <section className="bg-white pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.7fr]">
            <FadeUp>
              <div className="rounded-3xl border border-grey-line bg-grey-bg p-6 md:p-10">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  Business Enquiry Form
                </h2>
                <p className="mt-2 text-ink-soft">
                  Fields marked with <span className="text-pink">*</span> are required.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="flex flex-col gap-10">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xs lg:mx-0">
                <DeerMascot sizes="320px" />
              </div>

              <div className="flex flex-col gap-4">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-grey-line px-5 py-4 transition-colors hover:border-purple hover:bg-lavender-soft"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-purple">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.08em] text-ink-soft/60">
                        {channel.label}
                      </span>
                      <span className="block font-medium text-ink">{channel.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
