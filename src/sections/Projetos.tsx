import Link from "next/link";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import { projectImagesByFilename } from "@/lib/projects-data";
import { services } from "@/lib/services-data";

const items: Gallery4Item[] = [
  {
    id: "esquadrias-03",
    title: "Esquadrias de Alumínio",
    description: services[0].description,
    href: "/esquadrias",
    image: projectImagesByFilename["esquadrias-03.jpg"].src,
  },
  {
    id: "portas-madeira-02",
    title: "Portas e Janelas",
    description: services[1].description,
    href: "/servicos#portas-e-janelas",
    image: projectImagesByFilename["portas-madeira-02.jpg"].src,
  },
  {
    id: "fechamentos-09",
    title: "Vidros e Fechamentos",
    description: services[2].description,
    href: "/servicos#vidros-e-fechamentos",
    image: projectImagesByFilename["fechamentos-09.jpg"].src,
  },
  {
    id: "box-banheiro-02",
    title: "Box para Banheiro",
    description: services[3].description,
    href: "/servicos#box-para-banheiro",
    image: projectImagesByFilename["box-banheiro-02.jpg"].src,
  },
  {
    id: "guarda-corpo-02",
    title: "Guarda-Corpos",
    description: services[4].description,
    href: "/servicos#guarda-corpos",
    image: projectImagesByFilename["guarda-corpo-02.jpg"].src,
  },
  {
    id: "vidros-especiais-03",
    title: "Espelhos e Projetos Especiais",
    description: services[5].description,
    href: "/servicos#espelhos-e-projetos-especiais",
    image: projectImagesByFilename["vidros-especiais-03.jpg"].src,
  },
  {
    id: "fachada-02",
    title: "Projetos Comerciais",
    description: "Também atendemos obras comerciais em vidro e alumínio.",
    href: "/projetos",
    image: projectImagesByFilename["fachada-02.jpg"].src,
  },
  {
    id: "esquadrias-14",
    title: "Esquadrias de Alumínio",
    description: services[0].description,
    href: "/esquadrias",
    image: projectImagesByFilename["esquadrias-14.jpg"].src,
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-paper py-24 md:py-32">
      <Gallery4
        title="Trabalhos realizados pela Stop Vidros"
        description="Veja portas, janelas, fachadas e fechamentos fabricados e instalados pela nossa equipe."
        items={items}
        headerAction={
          <Link
            href="/projetos"
            className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-md bg-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-ink-soft"
          >
            Ver todos os projetos →
          </Link>
        }
      />
    </section>
  );
}
