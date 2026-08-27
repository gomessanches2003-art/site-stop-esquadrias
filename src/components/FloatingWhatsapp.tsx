import { buildWhatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/WhatsappButton";

export function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <p className="hidden max-w-[13rem] border border-border bg-surface px-4 py-3 text-sm leading-snug text-ink shadow-sm sm:block">
        Alguma dúvida?
        <br />
        Fale com a gente pelo WhatsApp.
      </p>

      <a
        href={buildWhatsappLink(whatsappMessages.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1DA851] md:h-13 md:w-13"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60 group-hover:opacity-0"
        />
        <WhatsappIcon className="relative h-7 w-7 md:h-6 md:w-6" />
      </a>
    </div>
  );
}
