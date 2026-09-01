import { Hero } from "@/sections/Hero";
import { Servicos } from "@/sections/Servicos";
import { DestaqueEsquadrias } from "@/sections/DestaqueEsquadrias";
import { Projetos } from "@/sections/Projetos";
import { Sobre } from "@/sections/Sobre";
import { CtaFinal } from "@/sections/CtaFinal";
import { Faq } from "@/sections/Faq";
import { Contato } from "@/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <DestaqueEsquadrias />
      <Projetos />
      <Sobre />
      <CtaFinal />
      <Faq />
      <Contato />
    </>
  );
}
