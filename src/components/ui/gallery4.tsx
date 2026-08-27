"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  headerAction?: React.ReactNode;
}

const Gallery4 = ({ title, description, items, headerAction }: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-14">
          <div className="flex flex-col gap-4">
            {title && (
              <h2 className="balance font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                {description}
              </p>
            )}
          </div>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            {headerAction}
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="rounded-none border border-border disabled:pointer-events-auto"
                aria-label="Projeto anterior"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="rounded-none border border-border disabled:pointer-events-auto"
                aria-label="Próximo projeto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 pl-5 md:pl-8 2xl:pl-[max(2rem,calc(50vw-640px))] 2xl:mr-[max(0rem,calc(50vw-640px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <Link href={item.href} className="group block">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="360px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-ink from-10% via-ink/40 via-60% to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 pr-16 text-white md:p-8">
                      <div className="mb-2 font-display text-lg font-bold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-sm text-white/80 md:mb-8">
                        {item.description}
                      </div>
                      <div className="flex items-center text-xs font-semibold uppercase tracking-[0.08em]">
                        Ver mais
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`h-1.5 w-6 transition-colors ${
                currentSlide === index ? "bg-ink" : "bg-border"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ir para o projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Gallery4 };
