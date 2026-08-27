import { Hero } from "@/sections/Hero";
import { Servicos } from "@/sections/Servicos";
import { DestaqueEsquadrias } from "@/sections/DestaqueEsquadrias";
import { Projetos } from "@/sections/Projetos";
import { Sobre } from "@/sections/Sobre";
import { AreaAtendimento } from "@/sections/AreaAtendimento";
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
      <AreaAtendimento />
      <CtaFinal />
      <Faq />
      <Contato />
    </>
  );
}
