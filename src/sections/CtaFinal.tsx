import Image from "next/image";
import ctaImage from "../../public/images/projetos/portas-madeira-08.jpg";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappMessages } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white md:py-36">
      <Image
        src={ctaImage}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/70" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="balance font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          Vamos transformar o seu projeto?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
          Fale com nossa equipe e solicite um orçamento sem compromisso.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsappButton message={whatsappMessages.geral} variant="solid">
            Solicitar orçamento pelo WhatsApp
          </WhatsappButton>
        </div>
      </div>
    </section>
  );
}
