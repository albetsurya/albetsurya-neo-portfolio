"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

function CursorArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    </svg>
  );
}

export default function InteractiveCursor() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = event.target as Element | null;
      setActive(Boolean(target?.closest?.(".cursor-highlight")));
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [mounted, x, y]);

  if (!mounted) return null;

  return createPortal(
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden -translate-x-1/2 -translate-y-1/2 bg-white mix-blend-difference md:block"
        style={{ x: springX, y: springY, borderRadius: 0 }}
        initial={{ width: 0, height: 0 }}
        animate={{
          width: active ? 240 : 0,
          height: active ? 240 : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.4,
              rotate: active ? 0 : -20,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <CursorArrow className="h-12 w-12 text-black" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
        style={{ x: springX, y: springY }}
        animate={{ opacity: visible && !active ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className="relative flex items-center gap-2 text-white drop-shadow-[0_0_8px_#000] drop-shadow-[3px_3px_0px_#000]">
          <CursorArrow className="h-5 w-5" />
          <span className="font-heading text-xs font-bold tracking-widest">
            YOU
          </span>
        </div>
      </motion.div>
    </>,
    document.body,
  );
}
