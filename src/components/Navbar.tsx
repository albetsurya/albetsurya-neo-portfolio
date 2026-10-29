"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { StarBurst } from "@/components/Illustrations";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Packages", href: "/packages" },
];

export default function Navbar() {
  const { profile } = PORTFOLIO_DATA;
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 hidden border-b-4 border-black bg-white md:block">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="relative inline-block"
        >
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-tighter uppercase"
          >
            {profile.shortName}
            <span className="text-electric">.</span>
          </Link>
          <StarBurst className="absolute -top-2 -right-4 h-6 w-6 text-electric" />
        </motion.div>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
                  <Link
                    href={link.href}
                    className={`font-heading text-base font-bold uppercase transition-all duration-200 px-4 py-2 border-4 ${
                      isActive
                        ? "bg-black text-white border-black shadow-[2px_2px_0px_0px_#000] translate-y-0.5"
                        : "bg-transparent text-black border-transparent hover:border-black hover:bg-electric hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ul>

        <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 border-4 border-black bg-vibrant px-4 py-2 font-heading text-sm font-bold text-white uppercase shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <EnvelopeSimple weight="bold" className="text-lg" />
            Contact Me
          </a>
        </motion.div>
      </nav>
    </header>
  );
}
