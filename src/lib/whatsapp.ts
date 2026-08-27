import { siteConfig } from "@/config/site";

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  geral: "Olá! Gostaria de solicitar um orçamento.",
  esquadrias:
    "Olá! Gostaria de solicitar um orçamento para esquadrias de alumínio.",
  servicos: "Olá! Gostaria de saber mais sobre os serviços da Stop Vidros.",
  projetos:
    "Olá! Vi os projetos da Stop Vidros e gostaria de mais informações.",
  contato: "Olá! Gostaria de falar com a equipe da Stop Vidros.",
  duvida: "Olá! Tenho uma dúvida sobre os serviços da Stop Vidros.",
} as const;
