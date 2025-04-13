"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

// Define proper TypeScript interface for component props
interface AnimatedKeywordProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  highlightColor?: string;
}

export default function AnimatedKeyword({
  children,
  className = "",
  delay = 0,
  duration = 1500,
  highlightColor = "text-cyan-400",
}: AnimatedKeywordProps) {
  const keywordRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // On page load, start the animation after the specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      ref={keywordRef}
      className={`transition-all duration-700 ${className} ${
        isVisible ? `${highlightColor} text-glow` : ""
      }`}
      style={
        isVisible
          ? {
              textShadow:
                "0 0 10px rgba(34, 211, 238, 0.4), 0 0 20px rgba(34, 211, 238, 0.2)",
            }
          : {}
      }
    >
      {children}
    </span>
  );
}
