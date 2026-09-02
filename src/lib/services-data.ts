import imgEsquadrias from "../../public/images/projetos/esquadrias-08.jpg";
import imgPortas from "../../public/images/projetos/portas-madeira-03.jpg";
import imgFechamentos from "../../public/images/projetos/fechamentos-01.jpg";
import imgBox from "../../public/images/projetos/box-banheiro-01.jpg";
import imgGuardaCorpo from "../../public/images/projetos/guarda-corpo-01.jpg";
import imgEspeciais from "../../public/images/projetos/vidros-especiais-01.jpg";
import { whatsappMessages } from "@/lib/whatsapp";
import type { StaticImageData } from "next/image";

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  alt: string;
  message: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "esquadrias-de-aluminio",
    title: "Esquadrias de Alumínio",
    description:
      "Portas, janelas e grandes vãos fabricados nas medidas do seu imóvel.",
    longDescription:
      "Nosso principal serviço: esquadrias de alumínio sob medida, com projeto, fabricação e instalação especializada para garantir vedação, resistência e acabamento impecável.",
    image: imgEsquadrias,
    alt: "Esquadria de alumínio com amplo vidro instalada em residência",
    message: whatsappMessages.esquadrias,
    href: "/esquadrias",
  },
  {
    slug: "portas-e-janelas",
    title: "Portas e Janelas",
    description:
      "Modelos de abrir, correr e pivotantes em diferentes acabamentos.",
    longDescription:
      "Portas e janelas em alumínio em diferentes acabamentos — do preto fosco à textura amadeirada — combinando design, segurança e durabilidade para projetos residenciais e comerciais.",
    image: imgPortas,
    alt: "Porta de entrada em alumínio com acabamento premium",
    message: whatsappMessages.servicos,
    href: "/servicos#portas-e-janelas",
  },
  {
    slug: "vidros-e-fechamentos",
    title: "Vidros e Fechamentos",
    description:
      "Fechamentos para varandas, sacadas e áreas gourmet.",
    longDescription:
      "Fechamentos de área gourmet, varandas e sacadas em vidro temperado ou laminado, com instalação profissional e acabamento em alumínio.",
    image: imgFechamentos,
    alt: "Fechamento de área em vidro e alumínio",
    message: whatsappMessages.servicos,
    href: "/servicos#vidros-e-fechamentos",
  },
  {
    slug: "box-para-banheiro",
    title: "Box para Banheiro",
    description: "Box de vidro temperado fabricado para o vão do seu banheiro.",
    longDescription:
      "Box de vidro temperado sob medida, com perfis em alumínio, que unem elegância e funcionalidade para valorizar o seu banheiro.",
    image: imgBox,
    alt: "Box de vidro temperado para banheiro",
    message: whatsappMessages.servicos,
    href: "/servicos#box-para-banheiro",
  },
  {
    slug: "guarda-corpos",
    title: "Guarda-Corpos",
    description:
      "Vidro e alumínio para escadas, sacadas e mezaninos.",
    longDescription:
      "Guarda-corpos de vidro com corrimão em alumínio, projetados para dar segurança e sofisticação a escadas, sacadas e mezaninos.",
    image: imgGuardaCorpo,
    alt: "Guarda-corpo de vidro com corrimão em alumínio",
    message: whatsappMessages.servicos,
    href: "/servicos#guarda-corpos",
  },
  {
    slug: "espelhos-e-projetos-especiais",
    title: "Espelhos e Projetos Especiais",
    description: "Corte e instalação de espelhos e peças de vidro sob medida.",
    longDescription:
      "Espelhos e soluções em vidro sob medida para qualquer ambiente, incluindo projetos especiais que fogem do padrão.",
    image: imgEspeciais,
    alt: "Vidro especial sob medida",
    message: whatsappMessages.servicos,
    href: "/servicos#espelhos-e-projetos-especiais",
  },
];
