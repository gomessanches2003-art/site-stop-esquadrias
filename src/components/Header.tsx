"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WhatsappButton } from "@/components/WhatsappButton";
import { navLinks } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsappButton message={whatsappMessages.geral} variant="premium-primary">
            Solicitar orçamento
          </WhatsappButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-10 w-10 place-items-center rounded-md bg-ink lg:hidden"
        >
          <span className="relative block h-3.5 w-4.5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-4.5 bg-paper transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4.5 -translate-y-1/2 bg-paper transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-4.5 bg-paper transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-paper px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.08em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <WhatsappButton
              message={whatsappMessages.geral}
              variant="solid"
              className="w-full"
            >
              Solicitar orçamento
            </WhatsappButton>
          </div>
        </div>
      )}
    </header>
  );
}
