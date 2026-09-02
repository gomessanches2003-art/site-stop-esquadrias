import { buildWhatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/WhatsappButton";

export function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 md:bottom-5 md:right-5">
      <p className="hidden max-w-[13rem] rounded-md bg-surface px-4 py-3 text-sm leading-snug text-ink shadow-md sm:block">
        Alguma dúvida?
        <br />
        Fale com a gente pelo WhatsApp.
      </p>

      <a
        href={buildWhatsappLink(whatsappMessages.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-md transition-colors hover:bg-[#1DA851] md:h-13 md:w-13"
      >
        <span
          aria-hidden
          className="absolute inset-0 hidden animate-ping rounded-full bg-[#25D366] opacity-50 group-hover:opacity-0 sm:block"
        />
        <WhatsappIcon className="relative h-6 w-6" />
      </a>
    </div>
  );
}
