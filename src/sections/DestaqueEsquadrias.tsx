import Image from "next/image";
import Link from "next/link";
import destaqueImage from "../../public/images/projetos/esquadrias-02.jpg";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappMessages } from "@/lib/whatsapp";

const diferenciais = [
  { label: "Alta resistência e durabilidade" },
  { label: "Acabamento impecável" },
  { label: "Projetos personalizados" },
  { label: "Instalação especializada" },
];

export function DestaqueEsquadrias() {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 md:px-8 lg:px-14 lg:py-0">
          <h2 className="balance max-w-md font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Esquadrias de alumínio sob medida para o seu projeto
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            Desenvolvemos esquadrias que garantem vedação, resistência e
            beleza, valorizando o seu imóvel. Projetos personalizados com
            acabamento impecável.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsappButton message={whatsappMessages.esquadrias} variant="solid">
              Solicitar orçamento
            </WhatsappButton>
            <Link
              href="/esquadrias"
              className="inline-flex items-center justify-center gap-2 border border-white/70 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white hover:text-ink"
            >
              Ver esquadrias de alumínio →
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10">
            {diferenciais.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent"
                />
                <dt className="text-sm text-white/80">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block lg:min-h-[640px]">
          <Image
            src={destaqueImage}
            alt="Esquadria de alumínio sob medida instalada, com amplo vidro fixo"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
