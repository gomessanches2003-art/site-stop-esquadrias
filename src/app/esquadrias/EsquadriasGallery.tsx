"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";
import { projectImages } from "@/lib/projects-data";

const images = projectImages.filter((img) => img.category === "esquadrias");
const PAGE_SIZE = 12;

export function EsquadriasGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visible = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((img, i) => (
          <button
            key={img.alt + i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-[0.08em] text-muted">
            Mostrando {visible.length} de {images.length} fotos
          </p>
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="rounded-md bg-accent px-8 py-3.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors duration-300 hover:bg-accent-dark"
          >
            Carregar mais fotos
          </button>
        </div>
      )}

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
