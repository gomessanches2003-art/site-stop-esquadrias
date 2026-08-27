import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: `Confira projetos reais de esquadrias de alumínio, vidros, box para banheiro e guarda-corpos realizados pela ${siteConfig.brand} em ${siteConfig.serviceArea}.`,
  alternates: {
    canonical: "/projetos",
  },
};

export default function ProjetosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h1 className="balance max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
          Projetos realizados pela {siteConfig.brand}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Uma seleção de trabalhos reais em esquadrias de alumínio, vidros,
          box para banheiro e guarda-corpos.
        </p>

        <div className="mt-12">
          <GalleryClient />
        </div>
      </div>
    </section>
  );
}
