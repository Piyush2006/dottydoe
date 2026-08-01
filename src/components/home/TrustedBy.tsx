import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { FadeUp } from "@/components/ui/RevealText";
import { clients } from "@/lib/data";

const rowOne = clients.slice(0, 10);
const rowTwo = clients.slice(10);

function LogoTile({ client }: { client: (typeof clients)[number] }) {
  return (
    <div className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-grey-line bg-white px-6 py-4 grayscale transition-all duration-300 hover:grayscale-0 md:mx-6 md:h-28 md:w-48">
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
    <section id="trusted-by" className="border-y border-grey-line bg-grey-bg py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple">
            Brands we collaborated with
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Brands brave enough to not follow the herd.
          </h2>
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
