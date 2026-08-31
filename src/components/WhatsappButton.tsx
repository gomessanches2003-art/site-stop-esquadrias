import { buildWhatsappLink } from "@/lib/whatsapp";

type Props = {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-dark" | "outline-light" | "premium-primary";
  className?: string;
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  solid: "rounded-md bg-whatsapp text-whatsapp-ink hover:bg-whatsapp-dark",
  "outline-dark": "rounded-md bg-whatsapp text-whatsapp-ink hover:bg-whatsapp-dark",
  "outline-light": "rounded-md bg-whatsapp text-whatsapp-ink hover:bg-whatsapp-dark",
  "premium-primary": "rounded-md bg-whatsapp text-whatsapp-ink hover:bg-whatsapp-dark",
};

export function WhatsappButton({
  message,
  children,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-300 ${variantClasses[variant]} ${className}`}
    >
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      {children}
    </a>
  );
}

export function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.91L2 22l5.24-1.28A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.6 0-3.13-.42-4.46-1.22l-.32-.19-3.11.76.77-3.14-.2-.32a8.18 8.18 0 0 1-1.28-4.4c0-4.53 3.68-8.2 8.2-8.2 4.53 0 8.2 3.68 8.2 8.2s-3.68 8.2-8.2 8.2Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
