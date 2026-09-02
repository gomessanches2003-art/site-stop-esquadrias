"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  WindowsNewIcon,
  Door01Icon,
  Layers01Icon,
  ShowerHeadIcon,
  Stairs01Icon,
  MirrorIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { services } from "@/lib/services-data";

const ICONS = [
  WindowsNewIcon,
  Door01Icon,
  Layers01Icon,
  ShowerHeadIcon,
  Stairs01Icon,
  MirrorIcon,
];

const FEATURES = services.map((service, index) => ({
  id: service.slug,
  label: service.title,
  icon: ICONS[index % ICONS.length],
  image: service.image,
  description: service.description,
  href: service.href,
}));

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <div className="relative flex flex-col overflow-hidden border border-border lg:aspect-video lg:min-h-[600px] lg:flex-row">
        <div className="relative z-30 flex min-h-[290px] w-full flex-col items-start justify-center overflow-hidden bg-ink px-5 sm:px-8 md:min-h-[420px] md:px-16 lg:h-full lg:w-[40%] lg:pl-16">
          <div className="absolute inset-x-0 top-0 z-40 h-12 bg-gradient-to-b from-ink via-ink/80 to-transparent md:h-20 lg:h-16" />
          <div className="absolute inset-x-0 bottom-0 z-40 h-12 bg-gradient-to-t from-ink via-ink/80 to-transparent md:h-20 lg:h-16" />
          <div className="relative z-20 flex h-full w-full items-center justify-center lg:justify-start">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "group relative flex items-center gap-4 rounded-full border px-6 py-3.5 text-left transition-all duration-700 md:px-8 md:py-4",
                      isActive
                        ? "z-10 border-white bg-white text-ink"
                        : "border-white/15 bg-transparent text-white/65 hover:border-white/35 hover:text-white/90"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-accent-dark" : "text-white/35"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
                    </div>

                    <span
                      className={cn(
                        "whitespace-nowrap font-display text-[15px] tracking-normal transition-all duration-500",
                        isActive ? "font-bold" : "font-medium"
                      )}
                    >
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative flex min-h-[430px] flex-1 items-center justify-center overflow-hidden border-t border-border bg-paper px-5 py-8 md:min-h-[560px] md:px-12 md:py-16 lg:h-full lg:border-l lg:border-t-0 lg:px-10 lg:py-16">
          <div className="relative flex aspect-[4/5] w-full max-w-[420px] items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 origin-center overflow-hidden border-4 border-surface bg-surface md:border-8"
                >
                  <Image
                    src={feature.image}
                    alt={feature.label}
                    fill
                    sizes="420px"
                    className={cn(
                      "object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/50 to-transparent p-6 pr-14 pt-24 md:p-10"
                      >
                        <h3 className="font-display text-2xl font-bold leading-[1.08] tracking-[-0.015em] text-white md:text-[32px]">
                          {feature.label}
                        </h3>
                        <p className="mt-3 max-w-sm font-display text-[15px] font-normal leading-relaxed text-white/70 md:text-base">
                          {feature.description}
                        </p>
                        <Link
                          href={feature.href}
                          className="group/link pointer-events-auto mt-5 inline-flex w-fit items-center gap-2 border-b border-accent/60 pb-1 font-display text-sm font-semibold text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                        >
                          Ver serviço
                          <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
