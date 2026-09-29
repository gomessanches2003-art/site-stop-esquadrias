import imgEsquadrias from "../../public/images/projetos/esquadrias-08.jpg";
import imgPortas from "../../public/images/projetos/portas-madeira-03.jpg";
import imgFechamentos from "../../public/images/projetos/fechamentos-01.jpg";
import imgBox from "../../public/images/projetos/box-banheiro-01.jpg";
import imgGuardaCorpo from "../../public/images/projetos/guarda-corpo-01.jpg";
import imgEspeciais from "../../public/images/projetos/vidros-especiais-01.jpg";
import { whatsappMessages } from "@/lib/whatsapp";
import type { StaticImageData } from "next/image";

export type SubService = {
  id: string;
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Título mais específico usado como H2 em /servicos. Se ausente, usa `title`. */
  pageTitle?: string;
  description: string;
  longDescription: string;
  /** Lista curta de aplicação/benefício, exibida apenas em /servicos. */
  benefits?: string[];
  /** Sub-tópicos com heading próprio (H3) dentro da mesma seção, para termos que merecem
   * destaque individual sem virar página separada — usado apenas em /servicos. */
  subServices?: SubService[];
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
    pageTitle: "Portas e Janelas de Alumínio",
    description:
      "Modelos de abrir, correr e pivotantes em diferentes acabamentos.",
    longDescription:
      "Portas e janelas em alumínio sob medida, nos modelos de abrir, correr e pivotante, com acabamentos que vão do preto fosco à textura amadeirada. Uma esquadria bem instalada garante vedação contra vento e chuva, isolamento acústico e mais segurança no dia a dia.",
    benefits: [
      "Modelos de abrir, correr e pivotante",
      "Acabamentos em diferentes cores e texturas",
      "Vedação contra vento e chuva",
      "Projeto sob medida para cada vão",
    ],
    subServices: [
      {
        id: "janelas-de-aluminio",
        title: "Janelas de alumínio",
        text: "Janelas de correr e de abrir fabricadas sob medida, priorizando vedação, ventilação e acabamento — para ambientes residenciais e comerciais.",
      },
      {
        id: "portas-de-aluminio",
        title: "Portas de alumínio",
        text: "Portas de entrada, social ou de serviço, nos modelos de abrir e pivotante, com acabamento que valoriza a fachada do imóvel.",
      },
    ],
    image: imgPortas,
    alt: "Porta de entrada em alumínio com acabamento premium",
    message: whatsappMessages.servicos,
    href: "/servicos#portas-e-janelas",
  },
  {
    slug: "vidros-e-fechamentos",
    title: "Vidros e Fechamentos",
    pageTitle: "Fechamentos em Vidro Temperado",
    description:
      "Fechamentos para varandas, sacadas e áreas gourmet.",
    longDescription:
      "Fechamento de varandas, sacadas e áreas gourmet em vidro temperado ou laminado, com estrutura em alumínio e instalação profissional. O resultado é um ambiente mais protegido do vento e da chuva, sem perder luminosidade nem a vista.",
    benefits: [
      "Vidro temperado ou laminado",
      "Fechamento de varandas e sacadas",
      "Áreas gourmet integradas",
      "Estrutura em perfis de alumínio",
    ],
    image: imgFechamentos,
    alt: "Fechamento de área em vidro e alumínio",
    message: whatsappMessages.servicos,
    href: "/servicos#vidros-e-fechamentos",
  },
  {
    slug: "box-para-banheiro",
    title: "Box para Banheiro",
    pageTitle: "Box de Vidro para Banheiro",
    description: "Box de vidro temperado fabricado para o vão do seu banheiro.",
    longDescription:
      "Box de vidro temperado sob medida, com perfis em alumínio, fabricado nas medidas exatas do seu banheiro. O vidro temperado é mais resistente a impactos e variações de temperatura — a opção mais indicada para áreas molhadas.",
    benefits: [
      "Vidro temperado sob medida",
      "Perfis em alumínio",
      "Fabricação nas medidas do seu vão",
      "Instalação especializada",
    ],
    image: imgBox,
    alt: "Box de vidro temperado para banheiro",
    message: whatsappMessages.box,
    href: "/box-de-vidro",
  },
  {
    slug: "guarda-corpos",
    title: "Guarda-Corpos",
    pageTitle: "Guarda-Corpos de Vidro",
    description:
      "Vidro e alumínio para escadas, sacadas e mezaninos.",
    longDescription:
      "Guarda-corpos de vidro com corrimão em alumínio, projetados para escadas, sacadas e mezaninos. Além de dar segurança, o vidro mantém a vista livre e deixa o ambiente com um visual mais leve e contemporâneo.",
    benefits: [
      "Vidro temperado de segurança",
      "Corrimão em alumínio",
      "Para escadas, sacadas e mezaninos",
      "Projeto sob medida",
    ],
    image: imgGuardaCorpo,
    alt: "Guarda-corpo de vidro com corrimão em alumínio",
    message: whatsappMessages.servicos,
    href: "/servicos#guarda-corpos",
  },
  {
    slug: "espelhos-e-projetos-especiais",
    title: "Espelhos e Projetos Especiais",
    pageTitle: "Espelhos Sob Medida",
    description: "Corte e instalação de espelhos e peças de vidro sob medida.",
    longDescription:
      "Espelhos sob medida para qualquer ambiente — do banheiro à sala de academia — além de projetos especiais em vidro que fogem do padrão, sempre com corte e instalação cuidadosos.",
    benefits: [
      "Corte sob medida",
      "Instalação profissional",
      "Projetos especiais em vidro",
    ],
    image: imgEspeciais,
    alt: "Vidro especial sob medida",
    message: whatsappMessages.servicos,
    href: "/servicos#espelhos-e-projetos-especiais",
  },
];
