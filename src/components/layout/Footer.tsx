import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/data";

const serviceLinks = [
  { label: "Brand Strategy", href: "/services#brand-strategy" },
  { label: "Creative Campaigns", href: "/services#creative-campaigns" },
  { label: "Social & Content", href: "/services#social-media" },
  { label: "Digital & Performance", href: "/services#digital-performance" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-grey-line bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] opacity-[0.14] md:h-[560px] md:w-[560px]">
        <Image
          src="/assets/logo/deer-mascot.png"
          alt=""
          fill
          sizes="560px"
          className="object-contain object-bottom"
        />
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="font-logo text-3xl font-semibold text-white">
              dotty<span className="text-teal">doe</span>
            </Link>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Connect the dots between marketing strategies, brand stories,
              creative design and everything digital.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Start a business enquiry
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Site</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Get in touch</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@dottydoe.com"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" /> hello@dottydoe.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {["Instagram", "LinkedIn", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dotty Doe. Strategy. Story. Screens.</p>
          <p>Anything &amp; everything creative.</p>
        </div>
      </Container>
    </footer>
  );
}
