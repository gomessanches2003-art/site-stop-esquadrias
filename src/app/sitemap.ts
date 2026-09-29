import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/services-data";
import { projectImages } from "@/lib/projects-data";

const absoluteImage = (src: string) => `${siteConfig.url}${src}`;

const serviceImages = services.map((service) => absoluteImage(service.image.src));
const esquadriasImages = projectImages
  .filter((img) => img.category === "esquadrias")
  .map((img) => absoluteImage(img.src.src));
const boxImages = projectImages
  .filter((img) => img.category === "box-banheiro")
  .map((img) => absoluteImage(img.src.src));
const allProjectImages = projectImages.map((img) => absoluteImage(img.src.src));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: serviceImages,
    },
    {
      url: `${siteConfig.url}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: serviceImages,
    },
    {
      url: `${siteConfig.url}/esquadrias`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: esquadriasImages,
    },
    {
      url: `${siteConfig.url}/box-de-vidro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: boxImages,
    },
    {
      url: `${siteConfig.url}/projetos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: allProjectImages,
    },
  ];
}
