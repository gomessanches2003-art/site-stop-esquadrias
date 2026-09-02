import Link from "next/link";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

export function Servicos() {
  return (
    <section id="servicos" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nossos serviços
          </p>
          <h2 className="balance mt-4 font-display text-[clamp(42px,5vw,58px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Do projeto à instalação,
            <br />
            cuidamos de cada medida.
          </h2>
          <Link
            href="/servicos"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-ink px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors duration-300 hover:bg-ink-soft"
          >
            Ver todos os serviços →
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <FeatureCarousel />
      </div>
    </section>
  );
}
