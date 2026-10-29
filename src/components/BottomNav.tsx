"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  User,
  Mail,
  Package,
  type LucideIcon,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/work", icon: FolderKanban },
  {
    label: "Contact",
    href: `mailto:${PORTFOLIO_DATA.profile.email}`,
    icon: Mail,
    external: true,
  },
  { label: "About", href: "/about", icon: User },
  { label: "Packages", href: "/packages", icon: Package },
];

interface BottomNavProps {
  items?: NavItem[];
}

export default function BottomNav({
  items = DEFAULT_NAV_ITEMS,
}: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 right-4 z-50 md:hidden"
    >
      <ul className="relative flex items-center justify-between gap-1 rounded-2xl border-4 border-black bg-white px-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {items.map((item, index) => {
          const isCenter = index === 2;
          const isActive =
            !item.external &&
            (pathname === item.href ||
              (item.href.includes("#") &&
                pathname === item.href.split("#")[0]));
          const Icon = item.icon;

          if (isCenter) {
            return (
              <li
                key={item.href}
                className="relative flex w-16 flex-col items-center justify-end"
              >
                <a
                  href={item.href}
                  aria-label="Hubungi Saya melalui Email"
                  className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-vibrant text-white shadow-[4px_4px_0px_0px_#000] transition-all duration-100 active:translate-y-1 active:shadow-none"
                >
                  <Icon className="h-7 w-7" strokeWidth={2.5} />
                </a>
                <span className="mb-2 mt-10 font-heading text-[10px] font-bold uppercase tracking-wider text-black">
                  {item.label}
                </span>
              </li>
            );
          }

          const className = [
            "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border-[3px] min-h-[48px] py-1.5 px-1",
            "font-heading text-[10px] font-bold uppercase leading-none tracking-wide",
            "transition-all duration-100",
            "active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
            isActive
              ? "border-black bg-black text-white shadow-[2px_2px_0px_0px_#0055ff]"
              : "border-transparent bg-transparent text-black hover:bg-[#FFDE00]",
          ].join(" ");

          const content = (
            <>
              <Icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              <span>{item.label}</span>
            </>
          );

          return (
            <li key={item.href} className="flex flex-1">
              {item.external ? (
                <a
                  href={item.href}
                  className={className}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`${item.label} (Buka Aplikasi Email)`}
                >
                  {content}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={className}
                  aria-current={isActive ? "page" : undefined}
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
