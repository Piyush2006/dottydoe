import { Container } from "@/components/ui/Container";
import { FadeUp, RevealText } from "@/components/ui/RevealText";
import { DeerMascot } from "@/components/deer/DeerMascot";

export function AboutStory() {
  return (
    <section className="relative overflow-x-clip bg-white py-14 md:py-20 lg:py-28">
      <Container className="relative">
        <div className="lg:max-w-[52%]">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-purple/15 bg-lavender-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple">
              Our story
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="An extended arm of your brand, not just another boutique agency."
            className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          />
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
              <p>
                dotty doe started with a simple frustration: brands were hiring a
                strategy shop, a creative studio, a media buyer and a production
                house separately — and watching the idea get diluted at every
                handoff.
              </p>
              <p>
                We built dotty doe to close that gap. Strategy, story and screens,
                under one roof, moving as one team.
              </p>
              <p>
                The name is the mission, spelled out: connect the dots between
                marketing strategy, brand story, creative design and everything
                digital — so nothing gets lost in translation.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Mobile / tablet mascot */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden="true"
            className="animate-blob absolute inset-x-10 inset-y-2 bg-gradient-bubble opacity-20 blur-2xl"
          />
          <DeerMascot sizes="(max-width: 1024px) 80vw, 340px" className="mx-auto w-[80%] max-w-[340px]" />
        </div>
      </Container>

      {/* Desktop mascot — runs to the right edge of the screen */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[46vw] max-w-[420px] -translate-y-1/2 lg:block">
        <div
          aria-hidden="true"
          className="animate-blob absolute inset-8 bg-gradient-bubble opacity-25 blur-2xl"
        />
        <DeerMascot sizes="(max-width: 1024px) 46vw, 420px" className="w-full" />
      </div>
    </section>
  );
}
