"use client";

import Image from "next/image";
import { ArrowUpRight, Folder } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  SpikyDiamondBlobSvg,
  PuddleBlobSvg,
  StarfishBlobSvg,
} from "@/components/BlobMascots";
import StackSection from "@/components/StackSection";

const MOCKUPS = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
];

const BADGES = [
  "bg-electric text-white",
  "bg-vibrant text-white",
  "bg-black text-white",
  "bg-white text-black",
];

const TAB_CLIP = "polygon(0 0, 85% 0, 100% 100%, 0 100%)";

export default function WorkPage() {
  const { products } = PORTFOLIO_DATA;

  return (
    <main className="mx-auto max-w-7xl bg-bone px-4 py-8 md:px-12 md:py-16">
      <div className="relative mb-8 flex items-center gap-3 md:mb-12">
        <h1 className="cursor-highlight inline-block text-5xl leading-none font-bold tracking-tighter md:text-9xl">
          ALL WORK
        </h1>
        <SpikyDiamondBlobSvg size={60} className="md:h-20 md:w-20" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group relative mt-3 flex flex-col md:mt-4"
          >
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col transition-transform duration-200 group-hover:-translate-y-2"
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
                  className={`relative flex items-center gap-2 px-4 pb-1 pt-2 md:px-5 md:pb-1.5 md:pt-3 ${BADGES[index % BADGES.length]}`}
                  style={{
                    clipPath: TAB_CLIP,
                    margin: "3px 3px 0 3px",
                  }}
                >
                  <Folder
                    weight="fill"
                    className="shrink-0 text-sm md:text-base"
                  />
                  <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider md:text-xs">
                    {product.note}
                  </span>
                </div>

                <PuddleBlobSvg
                  size={24}
                  className="absolute -top-3 -right-3 z-30"
                />
              </div>

              <div className="relative z-0 flex flex-1 flex-col border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all duration-200 group-hover:shadow-[8px_8px_0px_0px_#000] md:border-4 md:shadow-[8px_8px_0px_0px_#000]">
                <div className="relative aspect-video w-full overflow-hidden border-b-[3px] border-black bg-gray-100 md:border-b-4">
                  <Image
                    src={MOCKUPS[index % MOCKUPS.length]}
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
                    <ArrowUpRight
                      weight="bold"
                      className="mt-1 shrink-0 text-xl md:text-2xl"
                    />
                  </div>

                  <p className="line-clamp-3 text-xs leading-relaxed text-gray-700 md:text-sm">
                    {product.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3 md:gap-2 md:pt-4">
                    {product.stack?.map((item) => (
                      <span
                        key={item}
                        className="border-2 border-black bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold md:px-2 md:py-1 md:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center md:mt-16">
        <StarfishBlobSvg size={60} />
      </div>
      <StackSection />
    </main>
  );
}
