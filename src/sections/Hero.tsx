"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroHouseDesktop from "../../public/images/hero/hero-house-desktop.jpg";
import heroHouseMobile from "../../public/images/hero/hero-house-mobile.jpg";
import heroGlassDoors from "../../public/images/hero/hero-glass-doors.jpg";
import heroOceanGlassDesktop from "../../public/images/hero/hero-ocean-glass-desktop.jpg";
import heroOceanGlassMobile from "../../public/images/hero/hero-ocean-glass-mobile.jpg";
import { WhatsappButton } from "@/components/WhatsappButton";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/lib/whatsapp";

type Slide = {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  desktopPosition: string;
  mobilePosition: string;
  alt: string;
};

const slides: Slide[] = [
  {
    desktopSrc: heroHouseDesktop,
    mobileSrc: heroHouseMobile,
    desktopPosition: "center 42%",
    mobilePosition: "center",
    alt: "Residência contemporânea com grandes painéis de vidro e esquadrias de alumínio, jardim amplo e acabamento premium",
  },
  {
    desktopSrc: heroGlassDoors,
    mobileSrc: heroGlassDoors,
    desktopPosition: "62% 30%",
    mobilePosition: "78% 38%",
    alt: "Fachada grafite contemporânea com portas de vidro de piso a teto em esquadria de alumínio preta e jardim gramado",
  },
  {
    desktopSrc: heroOceanGlassDesktop,
    mobileSrc: heroOceanGlassMobile,
    desktopPosition: "42% 36%",
    mobilePosition: "center",
    alt: "Varanda contemporânea com fechamento de vidro em esquadria de alumínio e vista para o mar",
  },
];

const SLIDE_MS = 5500;
const FADE_MS = 1300;
const ZOOM_MS = 7000;

function SlideImage({
  src,
  alt,
  position,
  active,
  className,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  position: string;
  active: boolean;
  className: string;
  priority: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      className={className}
      style={{
        objectPosition: position,
        opacity: active ? 1 : 0,
        transform: active ? "scale(1.08)" : "scale(1)",
        transition: active
          ? `opacity ${FADE_MS}ms ease-in-out, transform ${ZOOM_MS}ms ease-out`
          : `opacity ${FADE_MS}ms ease-in-out, transform 0ms linear ${FADE_MS}ms`,
      }}
    />
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const nextIndex = (active + 1) % slides.length;
    const preloadDelay = active === 0 ? 1500 : 0;
    const id = setTimeout(() => {
      setLoadedSlides((prev) => {
        if (prev.has(nextIndex)) return prev;
        const next = new Set(prev);
        next.add(nextIndex);
        return next;
      });
    }, preloadDelay);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section
      id="inicio"
      className="relative flex h-[calc(100svh-4.5rem)] min-h-[620px] items-end overflow-hidden bg-ink md:h-[720px] md:min-h-0"
    >
      {slides.map((slide, i) => {
        if (!loadedSlides.has(i)) return null;
        const isActive = i === active;
        return (
          <div key={i} className="absolute inset-0" aria-hidden={!isActive}>
            <SlideImage
              src={slide.mobileSrc}
              alt={slide.alt}
              position={slide.mobilePosition}
              active={isActive}
              priority={i === 0}
              className="object-cover md:hidden"
            />
            <SlideImage
              src={slide.desktopSrc}
              alt={slide.alt}
              position={slide.desktopPosition}
              active={isActive}
              priority={i === 0}
              className="hidden object-cover md:block"
            />
          </div>
        );
      })}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(21,23,26,0.88) 0%, rgba(21,23,26,0.58) 40%, rgba(21,23,26,0.2) 65%, rgba(21,23,26,0) 85%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/80">
          Stop Vidros em {siteConfig.serviceArea}
        </p>

        <h1 className="balance mt-5 max-w-[420px] text-[clamp(32px,9vw,46px)] font-semibold uppercase leading-[1.1] tracking-[-0.01em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:max-w-[48vw] md:text-[clamp(42px,2.6vw,72px)] md:leading-[1.15]">
          Esquadrias de Alumínio
          <br />e Soluções em Vidro
          <br />
          Sob Medida
        </h1>
        <p className="mt-6 max-w-[500px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
          Fabricação e instalação em Cornélio Procópio e região.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <WhatsappButton
            message={whatsappMessages.geral}
            variant="premium-primary"
            className="w-full sm:w-auto"
          >
            Solicitar orçamento
          </WhatsappButton>
          <Link
            href="/#projetos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors duration-300 hover:bg-paper sm:w-auto"
          >
            Conhecer projetos
          </Link>
        </div>

        <div
          className="mt-8 flex w-40 items-center gap-2 md:mt-10"
          role="presentation"
        >
          {slides.map((_, i) => {
            const isActive = i === active;
            return (
              <span
                key={i}
                className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  className="block h-full rounded-full bg-white/90"
                  style={{
                    width: isActive ? "100%" : "0%",
                    transition: isActive
                      ? `width ${SLIDE_MS}ms linear`
                      : "width 0ms linear",
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
