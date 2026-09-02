"use client";

import { useState } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

const faqItems = [
  {
    question: "Quais cidades vocês atendem?",
    answer:
      "Atendemos Cornélio Procópio e cidades da região em um raio de até 50 km. Para outros locais, consulte nossa equipe pelo WhatsApp.",
  },
  {
    question: `Há quanto tempo a ${siteConfig.brand} está no mercado?`,
    answer: `A Stop Vidros atua há cerca de ${siteConfig.yearsExperience} anos. Rodrigo, fundador da empresa, trabalha com vidros e esquadrias há mais de ${siteConfig.professionalExperienceYears} anos.`,
  },
  {
    question: "Como faço um orçamento?",
    answer:
      "Chame pelo WhatsApp, diga qual serviço precisa e envie fotos ou medidas aproximadas do local. Nossa equipe retorna com as orientações.",
  },
  {
    question: "Qual é o prazo do serviço?",
    answer:
      "O prazo depende das medidas, dos materiais e da complexidade da instalação. A estimativa é informada durante o orçamento.",
  },
  {
    question: "Vocês trabalham sob medida?",
    answer:
      "Sim. Portas, janelas, box, espelhos, fechamentos e outras peças são preparados conforme as medidas de cada ambiente.",
  },
  {
    question: "Vocês instalam espelhos sob medida?",
    answer:
      "Sim. Fazemos o corte e a instalação de espelhos para ambientes residenciais e comerciais.",
  },
] as const;

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-border py-5 first:border-t-0 md:py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="font-display text-base font-bold text-ink md:text-lg">
          {question}
        </span>
        <span
          aria-hidden
          className="relative mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-ink"
        >
          <span className="absolute h-px w-3 bg-paper" />
          <span
            className={`absolute h-3 w-px bg-paper transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="max-w-2xl overflow-hidden text-sm leading-relaxed text-muted md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-16 md:py-24">
      <FaqSchema />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="balance font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
              Tirando suas dúvidas
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
              Reunimos as dúvidas mais comuns sobre nossos serviços. Não
              encontrou o que procurava?
            </p>
            <div className="mt-8 hidden lg:block">
              <WhatsappButton message={whatsappMessages.duvida} variant="outline-dark">
                Falar no WhatsApp
              </WhatsappButton>
            </div>
          </div>

          <div>
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
            <div className="mt-8 lg:hidden">
              <WhatsappButton message={whatsappMessages.duvida} variant="outline-dark">
                Falar no WhatsApp
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
