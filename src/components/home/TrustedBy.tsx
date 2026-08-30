import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { FadeUp } from "@/components/ui/RevealText";
import { clients } from "@/lib/data";

const rowOne = clients.slice(0, 10);
const rowTwo = clients.slice(10);

function LogoTile({ client }: { client: (typeof clients)[number] }) {
  return (
    <div className="mx-3 flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-grey-line bg-white px-4 py-3 grayscale transition-all duration-300 hover:grayscale-0 sm:h-20 sm:w-32 md:mx-6 md:h-28 md:w-48 md:rounded-2xl md:px-6 md:py-4">
      <div className="relative h-full w-full">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section id="trusted-by" className="scroll-mt-24 border-y border-grey-line bg-grey-bg py-14 md:py-20 lg:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Brands we collaborated with
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Brands brave enough to not follow the herd.
          </p>
        </FadeUp>
      </Container>

      <div className="mt-14 flex flex-col gap-6">
        <Marquee>
          {rowOne.map((client) => (
            <LogoTile key={client.name} client={client} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowTwo.map((client) => (
            <LogoTile key={client.name} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
