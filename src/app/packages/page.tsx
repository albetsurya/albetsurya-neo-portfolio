"use client";

import Image from "next/image";
import { ArrowRight, Package, Star, DownloadSimple } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SpikyDiamondBlobSvg, PuddleBlobSvg } from "@/components/BlobMascots";
import StackSection from "@/components/StackSection";

const DIGITAL_PRODUCTS = [
  {
    id: 1,
    name: "Fullstack SKILL.md",
    description: "Template SKILL.md komprehensif untuk AI Agent (Gemini CLI, Claude Code, Cursor) agar bisa membuat UI Neo-Brutalism secara otomatis.",
    price: "$15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Next.js Boilerplate",
    description: "Starter kit Next.js 15 + Tailwind CSS + Framer Motion dengan konfigurasi Neo-Brutalism siap pakai.",
    price: "$29",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Design System Asset",
    description: "Kumpulan 50+ komponen UI Neo-Brutalism (Figma & React) dengan hard shadow dan border tebal.",
    price: "$19",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const TAB_CLIP = "polygon(0 0, 85% 0, 100% 100%, 0 100%)";

export default function PackagesPage() {
  const { products } = PORTFOLIO_DATA;

  return (
    <main className="mx-auto max-w-7xl bg-bone pt-8 md:pt-16">
      <div className="px-4 md:px-12">
        <div className="relative mb-8 flex items-center gap-3 md:mb-12">
          <h1 className="cursor-highlight inline-block text-5xl leading-none font-bold tracking-tighter md:text-9xl uppercase">
            PACKAGES
          </h1>
          <SpikyDiamondBlobSvg size={60} className="md:h-20 md:w-20" />
        </div>

        <div className="mb-8 md:mb-12">
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700 md:text-lg">
            Explore my digital products and assets designed to help developers and designers build faster with the Neo-Brutalism aesthetic.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
        >
          {DIGITAL_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative mt-3 flex flex-col md:mt-4"
            >
              <div
                className="relative z-20 -mb-[4px] flex w-fit min-w-[140px] items-end md:min-w-[180px]"
                style={{ clipPath: TAB_CLIP }}
              >
                <div
                  className="absolute inset-0 bg-black"
                  style={{ clipPath: TAB_CLIP }}
                />
                <div
                  className={`relative flex items-center gap-2 px-4 pb-1 pt-2 md:px-5 md:pb-1.5 md:pt-3 bg-[#fde047] text-black`}
                  style={{ clipPath: TAB_CLIP, margin: "3px 3px 0 3px" }}
                >
                  <Package weight="fill" className="shrink-0 text-sm md:text-base" />
                  <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider md:text-xs">
                    DIGITAL ASSET
                  </span>
                </div>
                <PuddleBlobSvg size={24} className="absolute -top-3 -right-3 z-30" />
              </div>

              <div className="relative z-0 flex flex-1 flex-col border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all duration-200 group-hover:shadow-[8px_8px_0px_0px_#000] md:border-4 md:shadow-[8px_8px_0px_0px_#000]">
                <div className="relative aspect-video w-full overflow-hidden border-b-[3px] border-black bg-gray-100 md:border-b-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4 md:gap-3 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {product.name}
                    </h2>
                    <span className="shrink-0 text-xl font-black md:text-2xl text-electric">
                      {product.price}
                    </span>
                  </div>

                  <p className="line-clamp-3 text-xs leading-relaxed text-gray-700 md:text-sm mb-4">
                    {product.description}
                  </p>

                  <button className="mt-auto flex w-full items-center justify-center gap-2 border-4 border-black bg-vibrant py-2 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:py-3 md:text-base">
                    <DownloadSimple weight="bold" className="text-lg" />
                    Get Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24">
        <StackSection />
      </div>
    </main>
  );
}