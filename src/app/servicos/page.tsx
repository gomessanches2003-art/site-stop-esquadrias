import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/WhatsappButton";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: `Esquadrias de alumínio, portas e janelas, vidros e fechamentos, box para banheiro, guarda-corpos e projetos especiais em vidro — ${siteConfig.brand}, ${siteConfig.serviceArea}.`,
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicosPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="balance max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Nossos serviços
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Esquadrias de alumínio e soluções em vidro sob medida para
            projetos residenciais e comerciais em {siteConfig.serviceArea}.
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-20 py-16 md:py-20 ${
            i % 2 === 1 ? "bg-surface" : "bg-paper"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {service.longDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <WhatsappButton message={service.message} variant="solid">
                    Solicitar orçamento
                  </WhatsappButton>
                  {service.slug === "esquadrias-de-aluminio" && (
                    <Link
                      href="/esquadrias"
                      className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                      Ver página completa →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
