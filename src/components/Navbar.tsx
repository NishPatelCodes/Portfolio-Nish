"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./ui";
import { site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-5 md:px-8">
          <Logo />
          <button
            type="button"
            className="flex items-center gap-2.5 text-[15px] tracking-tight"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            suppressHydrationWarning
          >
            Menu
            <Menu className="size-4" strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-[#efefed]/96 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-5 md:px-8">
              <Logo />
              <button
                type="button"
                className="flex items-center gap-2.5 text-[15px]"
                onClick={() => setOpen(false)}
                suppressHydrationWarning
              >
                Close
                <X className="size-4" />
              </button>
            </div>
            <nav className="mx-auto flex max-w-[1280px] flex-col px-5 pt-8 md:px-8">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-line py-5 text-4xl font-medium tracking-tight md:text-6xl"
                  >
                    {item.label}
                    <ArrowUpRight className="size-8 opacity-40" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
