import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60 md:mt-5">
              Esquadrias de alumínio e soluções em vidro sob medida, com mais
              de {siteConfig.yearsExperience} anos de experiência atendendo{" "}
              {siteConfig.serviceArea}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Navegação
            </h3>
            <ul className="mt-3 space-y-2 md:mt-5 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Contato
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70 md:mt-5 md:space-y-3">
              <li>{siteConfig.phoneDisplay}</li>
              <li>WhatsApp: {siteConfig.phoneDisplay}</li>
              <li>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}/{siteConfig.address.state} — CEP{" "}
                {siteConfig.address.postalCode}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Horário de atendimento
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70 md:mt-5 md:space-y-3">
              {siteConfig.hours.map((h) => (
                <li key={h.days}>
                  {h.days}
                  <br />
                  <span className="text-white/50">{h.time}</span>
                </li>
              ))}
            </ul>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-white/70 transition-colors hover:text-white md:mt-5"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-end sm:justify-between md:mt-16 md:pt-6">
          <div className="space-y-1">
            <p>
              © {year} {siteConfig.brand}. Todos os direitos reservados.
            </p>
            <p>
              Site por{" "}
              <a
                href="https://www.instagram.com/evandrosanches__/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-white/70"
              >
                Evandro Sanches
              </a>
            </p>
          </div>
          <p>{siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
