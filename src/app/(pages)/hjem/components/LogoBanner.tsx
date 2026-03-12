"use client";

// Infinite horizontal marquee — clients & tech worked with
const items = [
  { label: "Kragero Naturstein", type: "client" },
  { label: "Nora Marketing", type: "client" },
  { label: "Holidaze", type: "client" },
  { label: "Next.js", type: "tech" },
  { label: "React", type: "tech" },
  { label: "Tailwind CSS", type: "tech" },
  { label: "Vercel", type: "tech" },
  { label: "WordPress", type: "tech" },
  { label: "Sanity CMS", type: "tech" },
  { label: "Node.js", type: "tech" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function LogoBanner() {
  return (
    <div className="relative overflow-hidden bg-[#111111] border-y border-[#1a1a1a] py-5 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-10 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span
              className={`text-sm font-medium tracking-wide ${
                item.type === "client"
                  ? "text-[#f0ede7]/80"
                  : "text-[#6e6b66]"
              }`}
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {item.label}
            </span>
            <span className="text-[#d4ff3e]/40 text-xs">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
