import Image from "next/image";
import sobreImage from "../../public/images/rodrigo-stop-vidros.jpg";
import { siteConfig } from "@/config/site";

const personalExperienceYears = 25;

const highlights = [
  {
    number: String(personalExperienceYears),
    label: "Anos de experiência",
    description:
      "Conhecimento construído na prática e aperfeiçoado ao longo dos anos.",
  },
  {
    number: String(siteConfig.yearsExperience),
    label: "Anos de Stop Vidros",
    description:
      "Uma trajetória construída com trabalho, qualidade e confiança.",
  },
  {
    number: null,
    label: "Atendimento personalizado",
    description:
      "Cada projeto é pensado de acordo com a necessidade de cada cliente.",
  },
  {
    number: null,
    label: "Qualidade em cada detalhe",
    description:
      "Soluções em vidros e esquadrias com atenção, experiência e mão de obra especializada.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-[#f7f4f3] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] self-center overflow-hidden rounded-2xl">
            <Image
              src={sobreImage}
              alt={`Rodrigo, fundador da ${siteConfig.brand}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="balance max-w-md font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
              Experiência que construiu uma história
            </h2>

            <div className="mt-7 max-w-md space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                Há mais de {personalExperienceYears} anos, Rodrigo trabalha
                com vidros e esquadrias, construindo sua experiência na
                prática, aperfeiçoando técnicas e acompanhando a evolução do
                setor.
              </p>
              <p>
                Depois de anos de trabalho e dedicação, nasceu a Stop Vidros.
                O que começou de forma simples cresceu com qualidade,
                compromisso e a confiança de cada cliente.
              </p>
              <p>
                Hoje, são mais de {personalExperienceYears} anos de
                experiência profissional e cerca de {siteConfig.yearsExperience}{" "}
                anos construindo a história da Stop Vidros, levando soluções
                em vidros e esquadrias para cada novo projeto.
              </p>
            </div>

            <p className="mt-8 max-w-sm border-l-2 border-accent pl-5 font-display text-lg italic leading-snug text-ink md:text-xl">
              Experiência que se transforma em confiança.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 border-t border-border pt-9 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt className="flex items-baseline gap-2.5">
                    {item.number && (
                      <span className="font-display text-3xl font-extrabold leading-none text-accent md:text-4xl">
                        {item.number}
                      </span>
                    )}
                    <span className="font-display text-xs font-bold uppercase leading-tight tracking-[0.04em] text-ink">
                      {item.label}
                    </span>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
