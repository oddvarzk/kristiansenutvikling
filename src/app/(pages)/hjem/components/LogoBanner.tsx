"use client";

// Infinite horizontal marquee — clients & partners
const items = [
  { label: "Droomvilla Spanje" },
  { label: "Nora Marketing" },
  { label: "Kragerø Naturstein" },
  { label: "Bygg Mester Danielsen" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function LogoBanner() {
  return (
    <div className="relative overflow-hidden bg-[#0b0b0b] border-y border-[#ede9e2]/6 py-4 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-12 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span
              className="text-xs font-medium tracking-[0.12em] uppercase text-[#ede9e2]/30"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {item.label}
            </span>
            <span className="text-[#ede9e2]/15 text-[8px]">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 36s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
