"use client";

import { useState } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

const faqItems = [
  {
    question: `Quais cidades a ${siteConfig.brand} atende, além de Cornélio Procópio?`,
    answer:
      "Atendemos Cornélio Procópio e toda a região em um raio de até 50 km, incluindo as cidades vizinhas. Em casos especiais também atendemos fora desse raio — fale com a gente pelo WhatsApp para confirmar seu endereço.",
  },
  {
    question: `Há quanto tempo a ${siteConfig.brand} está no mercado?`,
    answer: `São mais de ${siteConfig.yearsExperience} anos de experiência no ramo de vidros e esquadrias de alumínio, com uma trajetória construída a partir da confiança de cada cliente atendido na região.`,
  },
  {
    question: "A empresa segue alguma norma técnica nas instalações?",
    answer:
      "Sim. Todos os projetos seguem as normas técnicas da ABNT para vidros e esquadrias, e levamos em conta fatores como temperatura e pressão do vento da região na hora de definir materiais e método de instalação, especialmente em coberturas e fechamentos.",
  },
  {
    question: "Como faço um orçamento?",
    answer:
      "O jeito mais rápido é chamar a gente no WhatsApp. Conte o que você precisa (tipo de vidro, esquadria, box, portão etc.) e, se possível, envie fotos ou medidas do local — retornamos com as informações do seu orçamento.",
  },
  {
    question: "Quanto tempo demora para instalar uma esquadria de alumínio ou um box de vidro?",
    answer:
      "O prazo varia de acordo com o tipo de serviço, a complexidade do projeto e se as peças são sob medida. Na conversa pelo WhatsApp já conseguimos dar uma estimativa mais precisa para o seu caso.",
  },
  {
    question: "Vocês fazem vidros e esquadrias fora do padrão (sob medida)?",
    answer:
      "Sim, essa é uma das nossas especialidades. Para vidros e esquadrias fora do padrão, contamos com apoio técnico especializado para garantir que a peça fique segura e no tamanho certo para o seu projeto.",
  },
  {
    question: "Qual a diferença entre vidro temperado e vidro comum?",
    answer:
      "O vidro temperado passa por um processo térmico que o torna muito mais resistente a impactos que o vidro comum e, quando quebra, se fragmenta em pequenos pedaços sem pontas cortantes — por isso é o mais indicado para box, portas, janelas e guarda-corpos.",
  },
  {
    question: "Qual o melhor tipo de vidro para box de banheiro?",
    answer:
      "Para box de banheiro, o recomendado é sempre o vidro temperado, pela segurança em caso de quebra. A espessura ideal depende do tamanho do vão e do modelo do box — podemos te ajudar a definir isso na hora do orçamento.",
  },
  {
    question: "Esquadria de alumínio ou de ferro: qual vale mais a pena?",
    answer:
      "O alumínio não enferruja, pesa menos, exige menos manutenção e tem acabamento mais moderno — por isso é a opção mais usada hoje em janelas, portas e portões. O ferro pode ter custo inicial menor, mas exige pintura e manutenção periódica contra ferrugem.",
  },
  {
    question: "Portões e esquadrias de alumínio precisam de manutenção?",
    answer:
      "A manutenção é bem mais simples que a do ferro: basta limpeza periódica e, de tempos em tempos, verificar roldanas, dobradiças e borrachas de vedação. Se notar dificuldade para abrir/fechar ou ruído, vale chamar a gente para dar uma olhada.",
  },
  {
    question: "Vocês fazem cobertura de vidro ou policarbonato?",
    answer:
      "Sim, fazemos cobertura em vidro, em policarbonato e em alumínio para áreas externas, varandas, garagens e quintais — sempre considerando a estrutura e as condições climáticas da região para uma instalação segura.",
  },
  {
    question: "Vocês instalam espelhos sob medida?",
    answer:
      "Sim, fazemos espelhos sob medida para banheiros, quartos, salas, academias e comércios, com o corte e a fixação adequados para cada ambiente.",
  },
  {
    question: `Por que escolher a ${siteConfig.brand}?`,
    answer: `Além de ${siteConfig.yearsExperience} anos de experiência, seguimos as normas ABNT, avaliamos as condições do local antes de instalar e temos clientes antigos na região que podem servir de referência do nosso trabalho. Atendimento direto pelo WhatsApp, sem burocracia.`,
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
    <div className="border-t border-border py-6 first:border-t-0">
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
          className="relative mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent"
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
    <section id="faq" className="bg-paper py-24 md:py-32">
      <FaqSchema />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                Perguntas frequentes
              </p>
            </div>
            <h2 className="balance mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
              Tirando suas dúvidas
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
              Reunimos as dúvidas mais comuns sobre nossos serviços. Não
              encontrou o que procurava?
            </p>
            <div className="mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
