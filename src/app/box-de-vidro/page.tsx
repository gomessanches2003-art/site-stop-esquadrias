import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../public/images/projetos/box-banheiro-02.jpg";
import { WhatsappButton } from "@/components/WhatsappButton";
import { BoxGallery } from "./BoxGallery";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Box de Vidro para Banheiro",
  description: `Box de vidro temperado sob medida para banheiro em ${siteConfig.serviceArea}, com perfis em alumínio e instalação especializada — ${siteConfig.brand}.`,
  alternates: {
    canonical: "/box-de-vidro",
  },
};

const diferenciais = [
  {
    title: "Vidro temperado de segurança",
    description:
      "Mais resistente a impactos e variações de temperatura — indicado para áreas molhadas do banheiro.",
  },
  {
    title: "Fabricação sob medida",
    description:
      "Cada box é fabricado nas medidas exatas do seu vão, sem improviso.",
  },
  {
    title: "Perfis em alumínio",
    description:
      "Ferragens e perfis em alumínio, unindo resistência e acabamento discreto.",
  },
  {
    title: "Instalação especializada",
    description: `Mais de ${siteConfig.yearsExperience} anos de experiência prática em obra.`,
  },
  {
    title: "Atenção às normas técnicas",
    description:
      "Instalação de vidros seguindo as normas do setor vidreiro.",
  },
];

export default function BoxDeVidroPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink">
        <Image
          src={headerImage}
          alt="Box de vidro incolor com perfil em alumínio preto"
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
            Box de Vidro para Banheiro
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Box de vidro temperado sob medida, com perfis em alumínio e
            instalação especializada — para valorizar e dar segurança ao seu
            banheiro em {siteConfig.serviceArea}.
          </p>
          <div className="mt-8">
            <WhatsappButton message={whatsappMessages.box} variant="solid">
              Solicitar orçamento
            </WhatsappButton>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="balance max-w-lg font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Diferenciais em cada box de vidro
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
            Box de vidro que já entregamos
          </h2>

          <div className="mt-9 md:mt-12">
            <BoxGallery />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="balance font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            Vamos falar sobre o seu box de vidro?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
            Fale com nossa equipe e solicite um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsappButton message={whatsappMessages.box} variant="solid">
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
