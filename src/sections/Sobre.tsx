import Image from "next/image";
import sobreImage from "../../public/images/loja/fachada-loja.jpg";
import { siteConfig } from "@/config/site";

const highlights = [
  {
    title: `+${siteConfig.yearsExperience} anos de experiência`,
    description: "Tradição e confiança que fazem a diferença.",
  },
  {
    title: "Atendimento personalizado",
    description: "Entendemos sua necessidade e entregamos a solução ideal.",
  },
  {
    title: "Qualidade garantida",
    description: "Materiais de alto padrão e mão de obra especializada.",
  },
  {
    title: "Projetos sob medida",
    description: "Soluções exclusivas para cada tipo de ambiente.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/11] lg:aspect-auto">
            <Image
              src={sobreImage}
              alt={`Fachada da loja ${siteConfig.brand} em ${siteConfig.address.city}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
                Nossa história
              </p>
            </div>
            <h2 className="balance mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
              Uma história construída com trabalho
            </h2>

            <div className="mt-6 max-w-lg space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                Há {siteConfig.yearsExperience} anos, Rodrigo começou sua
                trajetória de forma simples, trabalhando no fundo de casa e
                dando os primeiros passos na construção da empresa.
              </p>
              <p>
                Com muito trabalho, dedicação e a confiança de cada cliente,
                aquele começo pequeno foi crescendo. Hoje, a empresa ocupa seu
                espaço no mercado e é reconhecida pelo trabalho que realiza e
                pela forma como trata cada cliente.
              </p>
              <p>
                Mais do que {siteConfig.yearsExperience} anos de mercado, são{" "}
                {siteConfig.yearsExperience} anos de experiências,
                aprendizados e histórias construídas ao lado de quem confiou
                no nosso trabalho.
              </p>
              <p className="font-display text-base font-bold text-accent md:text-lg">
                E essa história continua.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title}>
                  <dt className="font-display text-sm font-bold uppercase tracking-[0.03em] text-ink">
                    {item.title}
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
