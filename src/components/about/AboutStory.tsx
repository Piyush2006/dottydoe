import { Container } from "@/components/ui/Container";
import { FadeUp, RevealText } from "@/components/ui/RevealText";
import { DeerMascot } from "@/components/deer/DeerMascot";

export function AboutStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
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
                  under one roof, moving as one team. From a Bank of Baroda festive
                  hoarding to a Gen AI-powered Diwali film, the same discipline
                  carries through every brief we take on.
                </p>
                <p>
                  The name is the mission, spelled out: connect the dots between
                  marketing strategy, brand story, creative design and everything
                  digital — so nothing gets lost in translation.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div
              aria-hidden="true"
              className="animate-blob absolute inset-8 bg-gradient-bubble opacity-20 blur-2xl"
            />
            <DeerMascot sizes="(max-width: 1024px) 60vw, 420px" />
          </div>
        </div>
      </Container>
    </section>
  );
}
