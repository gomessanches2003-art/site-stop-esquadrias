"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";
import {
  projectImages,
  projectCategoryLabels,
  type ProjectCategory,
} from "@/lib/projects-data";

const categories = Array.from(
  new Set(projectImages.map((img) => img.category))
) as ProjectCategory[];

const PAGE_SIZE = 12;

export function GalleryClient() {
  const [filter, setFilter] = useState<ProjectCategory | "todos">("todos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      filter === "todos"
        ? projectImages
        : projectImages.filter((img) => img.category === filter),
    [filter]
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => setFilter("todos")}
          className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
            filter === "todos"
              ? "bg-ink text-white"
              : "bg-border/60 text-muted hover:bg-ink hover:text-white"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
              filter === cat
                ? "bg-ink text-white"
                : "bg-border/60 text-muted hover:bg-ink hover:text-white"
            }`}
          >
            {projectCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
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
            Mostrando {visible.length} de {filtered.length} fotos
          </p>
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="rounded-md bg-ink px-8 py-3.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors duration-300 hover:bg-ink-soft"
          >
            Carregar mais fotos
          </button>
        </div>
      )}

      {openIndex !== null && (
        <Lightbox
          images={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
