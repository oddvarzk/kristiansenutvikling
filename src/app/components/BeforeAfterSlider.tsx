"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Props {
  before: { src: string; alt: string };
  after:  { src: string; alt: string };
  isEn?:  boolean;
  initialPosition?: number; // 0–100, defaults to 50
}

export default function BeforeAfterSlider({
  before,
  after,
  isEn = false,
  initialPosition = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef    = useRef<HTMLDivElement>(null);
  const handleRef    = useRef<HTMLDivElement>(null);
  const isDragging   = useRef(false);
  const posRef       = useRef(initialPosition);

  const updatePosition = useCallback((pct: number) => {
    const clamped = Math.max(2, Math.min(98, pct));
    posRef.current = clamped;
    if (beforeRef.current) {
      beforeRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${clamped}%`;
    }
  }, []);

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    updatePosition(((e.clientX - rect.left) / rect.width) * 100);
  }, [updatePosition]);

  const onMouseUp = useCallback(() => { isDragging.current = false; }, []);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
  };

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    updatePosition(((e.touches[0].clientX - rect.left) / rect.width) * 100);
  }, [updatePosition]);

  const onTouchEnd = useCallback(() => { isDragging.current = false; }, []);

  useEffect(() => {
    // Set initial clip
    updatePosition(initialPosition);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend",  onTouchEnd);

    // Hint animation: nudge the handle left then right on mount
    if (handleRef.current) {
      gsap.fromTo(
        handleRef.current,
        { x: 0 },
        {
          x: -18,
          duration: 0.55,
          ease: "power2.out",
          delay: 0.8,
          yoyo: true,
          repeat: 1,
          onUpdate: () => {
            // keep clip in sync with the gsap x nudge
            if (!handleRef.current || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const left = handleRef.current.getBoundingClientRect().left - rect.left;
            if (beforeRef.current) {
              beforeRef.current.style.clipPath = `inset(0 ${100 - (left / rect.width) * 100}% 0 0)`;
            }
          },
          onComplete: () => {
            if (handleRef.current) gsap.set(handleRef.current, { x: 0 });
            updatePosition(initialPosition);
          },
        }
      );
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onTouchEnd);
    };
  }, [initialPosition, onMouseMove, onMouseUp, onTouchMove, onTouchEnd, updatePosition]);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none"
        style={{ aspectRatio: "16 / 9", borderRadius: "2px", cursor: "col-resize" }}
      >
        {/* After (base layer) */}
        <div className="absolute inset-0">
          <Image src={after.src} alt={after.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" loading="eager" priority />
        </div>

        {/* Before (clipped overlay) */}
        <div
          ref={beforeRef}
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - initialPosition}% 0 0)` }}
        >
          <Image src={before.src} alt={before.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" loading="eager" priority />
        </div>

        {/* Labels */}
        <span
          className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1 bg-[#0b0b0b]/70 text-[#ede9e2]/60 pointer-events-none"
          style={{ borderRadius: "2px" }}
        >
          {isEn ? "Before" : "Før"}
        </span>
        <span
          className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1 bg-[#0b0b0b]/70 text-[#ede9e2]/60 pointer-events-none"
          style={{ borderRadius: "2px" }}
        >
          {isEn ? "After" : "Etter"}
        </span>

        {/* Handle */}
        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 flex flex-col items-center"
          style={{ left: `${initialPosition}%`, transform: "translateX(-50%)", zIndex: 10 }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          {/* Line */}
          <div className="w-px flex-1 bg-[#ede9e2]/50" />

          {/* Grip */}
          <div
            className="shrink-0 w-9 h-9 rounded-full bg-[#ede9e2] flex items-center justify-center shadow-lg my-0"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 7H1M1 7l2-2M1 7l2 2" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7h3M13 7l-2-2M13 7l-2 2" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Line */}
          <div className="w-px flex-1 bg-[#ede9e2]/50" />
        </div>
      </div>

      {/* Caption */}
      <p className="font-mono text-[9px] tracking-[0.16em] text-[#857f7a]/50 uppercase text-center">
        {isEn ? "Drag to compare" : "Dra for å sammenligne"}
      </p>
    </div>
  );
}
