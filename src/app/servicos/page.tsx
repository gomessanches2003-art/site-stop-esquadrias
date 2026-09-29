import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/WhatsappButton";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Esquadrias, Portas, Janelas e Vidros",
  description: `Esquadrias de alumínio, portas, janelas, box de vidro para banheiro, fechamentos em vidro temperado, guarda-corpos e espelhos sob medida — ${siteConfig.brand}, ${siteConfig.serviceArea}.`,
  alternates: {
    canonical: "/servicos",
  },
};

const quickLinks = [
  { href: "#esquadrias-de-aluminio", label: "Esquadrias" },
  { href: "#janelas-de-aluminio", label: "Janelas" },
  { href: "#portas-de-aluminio", label: "Portas" },
  { href: "#vidros-e-fechamentos", label: "Vidro Temperado" },
  { href: "#box-para-banheiro", label: "Box de Vidro" },
  { href: "#guarda-corpos", label: "Guarda-Corpos" },
  { href: "#espelhos-e-projetos-especiais", label: "Espelhos" },
] as const;

const pageLinks: Record<string, string> = {
  "esquadrias-de-aluminio": "/esquadrias",
  "box-para-banheiro": "/box-de-vidro",
};

export default function ServicosPage() {
  return (
    <>
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="balance max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Nossos serviços
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Esquadrias de alumínio e soluções em vidro sob medida para
            projetos residenciais e comerciais em {siteConfig.serviceArea}.
          </p>

          <nav aria-label="Ir para um serviço" className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-accent-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-20 py-12 md:py-16 ${
            i % 2 === 1 ? "bg-surface" : "bg-paper"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div
              className={`grid items-center gap-7 lg:grid-cols-2 lg:gap-16 ${
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
                  {service.pageTitle ?? service.title}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {service.longDescription}
                </p>

                {service.benefits && (
                  <ul className="mt-5 max-w-md space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}

                {service.subServices && (
                  <div className="mt-8 max-w-md space-y-6 border-t border-border pt-7">
                    {service.subServices.map((sub) => (
                      <div key={sub.id} id={sub.id} className="scroll-mt-24">
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.03em] text-ink">
                          {sub.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  <WhatsappButton message={service.message} variant="solid">
                    Solicitar orçamento
                  </WhatsappButton>
                  {pageLinks[service.slug] && (
                    <Link
                      href={pageLinks[service.slug]}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-ink-soft"
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
