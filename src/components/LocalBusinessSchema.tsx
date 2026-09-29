import { siteConfig } from "@/config/site";
import { services } from "@/lib/services-data";

// Catálogo de serviços derivado da mesma fonte de dados que alimenta /servicos —
// evita que o schema fique dessincronizado do que é realmente exibido no site.
const offerCatalogItems = services.flatMap((service) => {
  const mainOffer = {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.pageTitle ?? service.title,
      description: service.description,
      areaServed: siteConfig.serviceArea,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.brand,
      },
    },
  };

  const subOffers = (service.subServices ?? []).map((sub) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: sub.title,
      description: sub.text,
      areaServed: siteConfig.serviceArea,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.brand,
      },
    },
  }));

  return [mainOffer, ...subOffers];
});

// Só entra no sameAs o que já estiver confirmado em src/config/site.ts — nunca inventado.
const sameAs = [siteConfig.social.instagram, siteConfig.social.facebook].filter(
  (url): url is string => Boolean(url)
);

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.brand,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/loja/fachada-loja.jpg`,
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceArea,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Stop Vidros",
      itemListElement: offerCatalogItems,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "13:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
