"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "dark" | "light" | "ghost";
  className?: string;
  type?: "button" | "submit";
  arrow?: boolean;
};

export function Button({
  href,
  onClick,
  children,
  variant = "dark",
  className = "",
  type = "button",
  arrow = true,
}: ButtonProps) {
  const styles = {
    dark: "bg-ink text-white hover:bg-black",
    light: "bg-white/85 text-ink backdrop-blur-md hover:bg-white",
    ghost: "bg-transparent text-ink border border-line hover:bg-white",
  }[variant];

  const cls = `inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium tracking-tight transition ${styles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight className="size-3.5" strokeWidth={2.2} /> : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    if (external) {
      return (
        <a href={href} className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} suppressHydrationWarning>
      {content}
    </button>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
      <span className="grid size-3.5 place-items-center rounded-[3px] bg-ink text-white">
        <span className="block size-1.5 rounded-[1px] bg-white" />
      </span>
      <span className="font-label">{children}</span>
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} suppressHydrationWarning>
      <span className="grid size-8 place-items-center rounded-lg bg-ink text-white">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <path d="M7 3.5 12 8l5-4.5L21.5 8 12 16.5 2.5 8 7 3.5Zm0 9L12 17l5-4.5 4.5 4.5L12 22.5 2.5 17 7 12.5Z" />
        </svg>
      </span>
      <span className="text-[17px] font-medium tracking-tight">Faseelh</span>
    </Link>
  );
}
