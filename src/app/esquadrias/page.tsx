import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../public/images/projetos/esquadrias-06.jpg";
import { WhatsappButton } from "@/components/WhatsappButton";
import { EsquadriasGallery } from "./EsquadriasGallery";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Esquadrias de Alumínio",
  description: `Esquadrias de alumínio sob medida em ${siteConfig.serviceArea}, com mais de ${siteConfig.yearsExperience} anos de experiência, instalação especializada e acabamento impecável.`,
  alternates: {
    canonical: "/esquadrias",
  },
};

const diferenciais = [
  {
    title: "Alta resistência e durabilidade",
    description:
      "Esquadrias dimensionadas para durar, com materiais de alto padrão.",
  },
  {
    title: "Acabamento impecável",
    description:
      "Atenção aos detalhes em cada etapa, do projeto à instalação final.",
  },
  {
    title: "Projetos personalizados",
    description: "Cada esquadria é pensada sob medida para o seu ambiente.",
  },
  {
    title: "Instalação especializada",
    description: `Mais de ${siteConfig.yearsExperience} anos de experiência prática em obra.`,
  },
  {
    title: "Atenção às normas técnicas",
    description:
      "Instalação de vidros e esquadrias seguindo as normas do setor vidreiro.",
  },
  {
    title: "Engenharia para a região",
    description:
      "Estruturas dimensionadas considerando vento e temperatura locais.",
  },
];

export default function EsquadriasPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink">
        <Image
          src={headerImage}
          alt="Esquadria de alumínio sob medida com amplo vidro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8">
          <h1 className="balance max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Esquadrias de Alumínio Sob Medida
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Desenvolvemos esquadrias que garantem vedação, resistência e
            beleza, valorizando o seu imóvel — com projetos personalizados e
            acabamento impecável.
          </p>
          <div className="mt-8">
            <WhatsappButton message={whatsappMessages.esquadrias} variant="solid">
              Solicitar orçamento
            </WhatsappButton>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="balance max-w-lg font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Diferenciais em cada esquadria
          </h2>

          <dl className="mt-9 grid grid-cols-1 gap-7 border-t border-border pt-8 sm:grid-cols-2 md:mt-12 md:gap-10 md:pt-10 lg:grid-cols-3">
            {diferenciais.map((item) => (
              <div key={item.title}>
                <dt className="font-display text-sm font-bold uppercase tracking-[0.03em] text-ink">
                  {item.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="balance max-w-lg font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Esquadrias que já entregamos
          </h2>

          <div className="mt-9 md:mt-12">
            <EsquadriasGallery />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="balance font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            Vamos falar sobre a sua esquadria?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
            Fale com nossa equipe e solicite um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsappButton message={whatsappMessages.esquadrias} variant="solid">
              Solicitar orçamento
            </WhatsappButton>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-paper"
            >
              Ver outros serviços →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
