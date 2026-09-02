export const siteConfig = {
  brand: "Stop Vidros",
  tagline: "Esquadrias em Alumínio",
  legalName: "Stop Vidros",
  professionalExperienceYears: 25,
  yearsExperience: 14,
  description:
    "Esquadrias de alumínio e soluções em vidro sob medida para projetos residenciais e comerciais em Cornélio Procópio e região.",
  url: "https://stopvidros.com.br",
  phoneDisplay: "(43) 98438-4849",
  phoneE164: "+5543984384849",
  whatsappNumber: "5543984384849",
  email: null as string | null,
  address: {
    street: "Avenida Paraíso, 921",
    neighborhood: null as string | null,
    city: "Cornélio Procópio",
    state: "PR",
    postalCode: "86303-236",
    country: "BR",
  },
  serviceArea: "Cornélio Procópio e região",
  hours: [
    { days: "Segunda a sexta", time: "8h às 11h e 13h às 18h" },
    { days: "Sábado e domingo", time: "Fechado" },
  ],
  social: {
    // TODO: confirmar se é o Instagram comercial da empresa antes de publicar
    instagram: null as string | null,
    facebook: null as string | null,
  },
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Avenida+Para%C3%ADso+921+Corn%C3%A9lio+Proc%C3%B3pio+PR&output=embed",
  mapsLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Para%C3%ADso+921+Corn%C3%A9lio+Proc%C3%B3pio+PR",
} as const;

export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
] as const;
