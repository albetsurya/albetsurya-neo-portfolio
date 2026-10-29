"use client";

import {
  createContext,
  useContext,
  useRef,
  type RefObject,
  type ReactNode,
} from "react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const AppScrollContext = createContext<RefObject<HTMLDivElement | null> | null>(
  null,
);

export function useAppScrollContainer() {
  return useContext(AppScrollContext);
}

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MobileLayout({
  children,
  className = "",
}: MobileLayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <AppScrollContext.Provider value={mainRef}>
      {/* PERUBAHAN: h-[100dvh] dan overflow-hidden agar body tidak ikut scroll */}
      <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden">
        <header className="relative z-50 flex h-16 shrink-0 items-center justify-between border-b-4 border-black bg-white px-4 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold uppercase tracking-tighter">
              Albet Surya
            </span>
            <span className="flex h-3 w-3 border-2 border-black bg-electric"></span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="border-4 border-black bg-[#fde047] px-3 py-1.5 text-xs font-bold uppercase shadow-[3px_3px_0px_0px_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Hire Me
            </a>
          </div>
        </header>

        {/* Area Scroll Utama: Menggunakan flex-1 dan overflow-y-auto */}
        <div
          ref={mainRef}
          id="app-scroll-container"
          className={`scrollbar-hide flex-1 overflow-y-auto overscroll-contain pb-[calc(7rem+env(safe-area-inset-bottom))] md:pb-0 ${className}`}
        >
          {children}
        </div>

        <BottomNav />
      </div>
    </AppScrollContext.Provider>
  );
}
