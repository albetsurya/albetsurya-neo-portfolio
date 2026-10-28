"use client";

import Image from "next/image";
import { ArrowUpRight, Folder } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Squiggle } from "@/components/Illustrations";

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
    <main className="mx-auto max-w-7xl bg-bone px-6 py-16 md:px-12">
      <h1 className="cursor-highlight mb-12 inline-block text-6xl leading-none font-bold tracking-tighter md:text-9xl">
        ALL WORK
      </h1>

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
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -2 : 2 }}
            className="group relative mt-4 flex flex-col"
          >
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col"
            >
              <div
                className="relative z-10 -mb-1 h-11 w-56 bg-black transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"
                style={{ clipPath: TAB_CLIP }}
              >
                <div
                  className={`absolute inset-x-1 top-1 bottom-0 flex items-center gap-2 px-4 text-xs font-bold uppercase tracking-wider ${BADGES[index % BADGES.length]}`}
                  style={{ clipPath: TAB_CLIP }}
                >
                  <Folder weight="fill" className="text-base" />
                  <span className="truncate">{product.note}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                <div className="relative aspect-video w-full overflow-hidden border-b-4 border-black bg-gray-100">
                  <Image
                    src={MOCKUPS[index % MOCKUPS.length]}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-3xl font-bold tracking-tight">
                      {product.name}
                    </h2>
                    <ArrowUpRight
                      weight="bold"
                      className="mt-1 shrink-0 text-2xl"
                    />
                  </div>

                  <p className="text-sm leading-relaxed text-gray-700">
                    {product.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {product.stack?.map((item) => (
                      <span
                        key={item}
                        className="border-2 border-black bg-gray-100 px-2 py-1 text-xs font-bold"
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

      <div className="mt-16 flex justify-center">
        <Squiggle className="h-8 w-48 text-[#FF5500]" />
      </div>
    </main>
  );
}
