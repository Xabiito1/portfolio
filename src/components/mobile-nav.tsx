"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Close, Menu } from "./icons";

type Item = { readonly label: string; readonly href: string };

export function MobileNav({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <MotionConfig reducedMotion="user">
      <button
        type="button"
        className="-mr-2 grid size-10 place-items-center rounded-md text-ink md:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={menuId}
            aria-label="Main"
            className="absolute inset-x-0 top-full border-b border-line bg-white md:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <ul className="px-4 py-3 sm:px-8">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
