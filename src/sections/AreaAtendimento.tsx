import { siteConfig } from "@/config/site";

export function AreaAtendimento() {
  return (
    <section className="border-y border-border bg-paper py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center md:px-8">
        <span aria-hidden className="grid h-11 w-11 place-items-center border border-ink">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
            />
            <circle cx="12" cy="9.5" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-ink">
          Atendemos {siteConfig.serviceArea}
        </p>
        <p className="max-w-md text-sm text-muted">
          Entre em contato e consulte a disponibilidade de atendimento na sua
          cidade.
        </p>
      </div>
    </section>
  );
}
