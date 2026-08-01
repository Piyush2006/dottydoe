import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CursorFollower } from "@/components/layout/CursorFollower";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dottydoe.com"),
  title: {
    default: "Dotty Doe — Strategy. Story. Screens.",
    template: "%s — Dotty Doe",
  },
  description:
    "Dotty Doe connects the dots between marketing strategies, brand stories, creative design and everything digital. An extended arm of your brand, not just another boutique agency.",
  keywords: [
    "Dotty Doe",
    "creative agency",
    "brand strategy",
    "360 campaign agency",
    "advertising agency India",
  ],
  openGraph: {
    title: "Dotty Doe — Strategy. Story. Screens.",
    description:
      "Connect the dots between marketing strategies, brand stories, creative design and everything digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <CursorFollower />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
