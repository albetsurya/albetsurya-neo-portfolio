"use client";

import { useState } from "react";
import {
  Briefcase,
  CalendarBlank,
  CaretDown,
  CheckCircle,
  MapPin,
  Package,
  Stack,
  User,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  FlowerSplatBlobSvg,
  GhostBlobSvg,
  BushBlobSvg,
  OctoBlobSvg,
} from "@/components/BlobMascots";
import StackSection from "@/components/StackSection";

const MENU = [
  { label: "Bio", href: "#bio", Icon: User },
  { label: "Products", href: "#products", Icon: Package },
  { label: "Work", href: "#work", Icon: Briefcase },
];

const BOX =
  "border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] md:p-6 md:shadow-[8px_8px_0px_0px_#000]";
const TAB_CLIP = "polygon(0 0, 85% 0, 100% 100%, 0 100%)";

export default function AboutPage() {
  const { profile, products, experiences } = PORTFOLIO_DATA;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="mx-auto max-w-7xl bg-bone px-4 py-6 md:py-16 md:px-12">
      <div className="mb-6 flex items-center gap-3 md:mb-12">
        <h1 className="text-5xl leading-none font-bold tracking-tighter md:text-8xl">
          ABOUT
        </h1>
        <FlowerSplatBlobSvg size={50} className="md:h-16 md:w-16" />
        <OctoBlobSvg size={40} className="hidden md:block opacity-50" />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <div className="sticky top-0 z-40 -mx-4 bg-bone/95 px-4 py-2 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex w-full items-center justify-between border-[3px] border-black bg-[#fde047] px-3 py-2.5 text-sm font-bold uppercase shadow-[3px_3px_0px_0px_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <span className="flex items-center gap-2">
              <Stack weight="bold" /> Jump to Section
            </span>
            <CaretDown
              weight="bold"
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 right-4 mt-1 flex flex-col gap-1 border-4 border-black bg-white p-2 shadow-[6px_6px_0px_0px_#000]"
              >
                {MENU.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 border-b-2 border-transparent px-3 py-2.5 text-sm font-bold uppercase transition-colors hover:border-black hover:bg-gray-100"
                  >
                    <Icon weight="bold" className="text-lg" />
                    {label}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <nav className="flex flex-col gap-3">
            {MENU.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 border-4 border-black bg-white px-4 py-3 font-bold uppercase shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white hover:shadow-none"
              >
                <Icon weight="bold" className="text-xl" />
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex flex-col gap-10 md:gap-16">
          <section id="bio" className="scroll-mt-24 lg:scroll-mt-28">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight md:mb-6 md:text-3xl">
              <User weight="bold" /> Bio
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className={`${BOX} relative md:col-span-2 overflow-hidden`}>
                <GhostBlobSvg
                  size={120}
                  className="absolute -bottom-8 -right-8 opacity-10 z-0"
                />
                <p className="relative z-10 mb-3 flex items-center gap-2 font-mono text-xs font-bold text-electric md:mb-4 md:text-sm">
                  <MapPin weight="bold" /> {profile.location}
                </p>
                <div className="relative z-10 flex flex-col gap-4 leading-relaxed text-gray-800">
                  {profile.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {profile.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000] md:p-6 md:shadow-[8px_8px_0px_0px_#000] ${
                    index % 2 === 0
                      ? "bg-electric text-white"
                      : "bg-vibrant text-white"
                  }`}
                >
                  <p className="font-heading text-4xl font-bold tracking-tighter md:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-mono text-xs font-bold uppercase md:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="products" className="scroll-mt-24 lg:scroll-mt-28">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight md:mb-6 md:text-3xl">
              <Package weight="bold" /> Products
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group relative mt-3 flex h-full flex-col md:mt-4"
                >
                  <div
                    className="relative z-10 -mb-1 h-9 w-44 bg-black md:h-11 md:w-48"
                    style={{ clipPath: TAB_CLIP }}
                  >
                    <div
                      className="absolute inset-x-1 top-1 bottom-0 flex items-center gap-2 bg-vibrant px-3 text-[10px] font-bold tracking-wider text-white md:px-4 md:text-xs"
                      style={{ clipPath: TAB_CLIP }}
                    >
                      <Package weight="fill" className="text-sm md:text-base" />
                      {product.note}
                    </div>
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none md:p-6 md:shadow-[8px_8px_0px_0px_#000]"
                  >
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700 md:mt-3">
                      {product.description}
                    </p>
                    <p className="mt-3 font-mono text-xs font-bold text-electric md:mt-5">
                      {product.tag} ↗
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="work" className="scroll-mt-24 lg:scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight md:mb-8 md:text-3xl">
              <Briefcase weight="bold" /> Work Experience
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="relative ml-3 flex flex-col gap-7 border-l-4 border-black pb-4 pl-5 md:ml-6 md:gap-10 md:pl-10"
            >
              {experiences.map((exp) => (
                <motion.article
                  key={`${exp.company}-${exp.period}`}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  className="relative"
                >
                  <div className="absolute -left-[34px] top-5 z-10 flex h-8 w-8 items-center justify-center md:-left-[56px] md:top-6 md:h-10 md:w-10">
                    <BushBlobSvg size={32} className="md:hidden" />
                    <BushBlobSvg size={40} className="hidden md:block" />
                  </div>

                  <div
                    className={`border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] md:p-6 md:p-8 md:shadow-[8px_8px_0px_0px_#000]`}
                  >
                    <div className="mb-3 flex flex-col gap-1.5 md:mb-4 md:flex-row md:items-start md:justify-between md:gap-2">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-electric md:text-base">
                          {exp.company}
                        </p>
                        <p className="font-mono text-[10px] text-gray-600 md:text-xs">
                          {exp.domain} · {exp.location} · {exp.workType}
                        </p>
                      </div>
                      <span className="flex w-max items-center gap-1.5 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] font-bold shadow-[2px_2px_0px_0px_#000] md:gap-2 md:px-3 md:text-xs">
                        <CalendarBlank weight="bold" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-gray-800 md:mb-4 md:text-base">
                      {exp.summary}
                    </p>
                    <ul className="mb-4 flex flex-col gap-1.5 md:mb-5 md:gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs leading-relaxed md:text-sm"
                        >
                          <CheckCircle
                            weight="fill"
                            className="mt-0.5 shrink-0 text-base text-vibrant md:text-lg"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.stack.map((item) => (
                        <span
                          key={item}
                          className="border-2 border-black bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold md:px-2 md:py-1 md:text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
      <StackSection />
    </main>
  );
}
