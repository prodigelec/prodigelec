"use client";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function HeroBackground({ slides, currentSlide }) {
  const [failedMap, setFailedMap] = useState({});
  const current = slides[currentSlide] || {};
  const intendedSrc = current.image;
  const hasFailed = failedMap[intendedSrc];
  const src = hasFailed ? "/logo_camera.png" : intendedSrc;
  const objectFitClass = current.objectFit === "contain" ? "object-contain" : "object-cover";
  const alt = current.title || "Hero";

  const handleError = useMemo(
    () => () => {
      if (intendedSrc && !failedMap[intendedSrc]) {
        setFailedMap((prev) => ({ ...prev, [intendedSrc]: true }));
      }
    },
    [intendedSrc, failedMap]
  );

  return (
    <div className="absolute inset-0 bg-black">
      <AnimatePresence mode='wait'>
        <m.div
          key={currentSlide}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={currentSlide === 0}
              fetchPriority={currentSlide === 0 ? "high" : "low"}
              sizes="100vw"
              quality={85}
              className={objectFitClass}
              onError={handleError}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />
          )}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
