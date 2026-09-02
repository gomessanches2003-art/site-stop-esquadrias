import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-6 first:border-t-0">
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-base text-ink">{children}</dd>
    </div>
  );
}

export function Contato() {
  return (
    <section id="contato" className="bg-surface pb-20 pt-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="balance font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Fale com a Stop Vidros
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <dl>
              <Field label="Telefone / WhatsApp">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-dark"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </Field>
              <Field label="Endereço">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}/{siteConfig.address.state} — CEP{" "}
                {siteConfig.address.postalCode}
              </Field>
              <Field label="Horário de atendimento">
                {siteConfig.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </Field>
              {siteConfig.social.instagram && (
                <Field label="Instagram">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-dark"
                  >
                    Instagram
                  </a>
                </Field>
              )}
            </dl>

            <div className="mt-10">
              <WhatsappButton message={whatsappMessages.contato} variant="outline-dark">
                Falar no WhatsApp
              </WhatsappButton>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-border lg:aspect-auto lg:flex-1">
              <iframe
                title={`Mapa – ${siteConfig.brand}`}
                src={siteConfig.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale"
              />
            </div>
            <a
              href={siteConfig.mapsLinkSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink hover:text-accent-dark"
            >
              Ver no mapa →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
