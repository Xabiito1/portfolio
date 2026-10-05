"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Check, Copy } from "./icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available (e.g. insecure context). The mailto link still works.
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <button
        type="button"
        onClick={copy}
        className="relative grid size-9 shrink-0 place-items-center rounded-md border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink"
        aria-label="Copy email address"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.12 }}
            className={copied ? "text-accent" : undefined}
          >
            {copied ? <Check /> : <Copy />}
          </motion.span>
        </AnimatePresence>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </button>
    </MotionConfig>
  );
}
