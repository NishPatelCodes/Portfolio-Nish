"use client";

import { useEffect, useRef, useState } from "react";
import { images } from "@/data/site";

export function ImageCompare({ className = "" }: { className?: string }) {
  const [value, setValue] = useState(48);
  const track = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const sync = () => setWidth(node.clientWidth);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={track}
      className={`relative isolate overflow-hidden rounded-[32px] bg-soft ${className}`}
    >
      <img
        src={images.programPortraitB}
        alt="Restored landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
        <img
          src={images.programPortraitA}
          alt="Degraded landscape"
          className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
          style={{ width: width || "100%" }}
        />
      </div>
      <input
        aria-label="Compare before and after"
        type="range"
        min={6}
        max={94}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 z-10 cursor-ew-resize opacity-0"
        suppressHydrationWarning
      />
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-20 w-px bg-white/90"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M7 5 4 9l3 4M11 5l3 4-3 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function ReelStack() {
  return (
    <div className="relative mx-auto h-[420px] w-[220px] md:h-[520px] md:w-[260px]">
      <img
        src={images.reel}
        alt=""
        className="absolute top-8 left-6 h-[78%] w-[78%] rotate-[-8deg] rounded-[28px] object-cover opacity-80"
      />
      <img
        src={images.programPortraitB}
        alt=""
        className="absolute top-0 right-0 h-[88%] w-[82%] rotate-[7deg] rounded-[28px] object-cover shadow-2xl"
      />
    </div>
  );
}
