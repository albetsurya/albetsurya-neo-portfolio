"use client";

import {
  Briefcase,
  CalendarBlank,
  CheckCircle,
  CodeBlock,
  MapPin,
  Package,
  Stack,
  User,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { StarBurst } from "@/components/Illustrations";

const MENU = [
  { label: "Bio", href: "#bio", Icon: User },
  { label: "Products", href: "#products", Icon: Package },
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Stack", href: "#stack", Icon: Stack },
];

const BOX =
  "border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] md:p-8";
const TAB_CLIP = "polygon(0 0, 85% 0, 100% 100%, 0 100%)";

export default function AboutPage() {
  const { profile, products, experiences, stacks } = PORTFOLIO_DATA;
  const primaryStacks = stacks.filter((item) => item.primary);
  const secondaryStacks = stacks.filter((item) => !item.primary);

  return (
    <main className="mx-auto max-w-7xl bg-bone px-6 py-16 md:px-12">
      <div className="mb-12 flex items-center gap-4">
        <h1 className="text-6xl leading-none font-bold tracking-tighter md:text-8xl">
          ABOUT
        </h1>
        <StarBurst className="h-12 w-12 text-yellow-400 md:h-16 md:w-16" />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav className="flex flex-row flex-wrap gap-3 lg:flex-col">
            {MENU.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 border-4 border-black bg-white px-4 py-3 font-heading font-bold uppercase shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white hover:shadow-none"
              >
                <Icon weight="bold" className="text-xl" />
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex flex-col gap-16">
          <section id="bio" className="scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold tracking-tight">
              <User weight="bold" /> Bio
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className={`${BOX} md:col-span-2`}>
                <p className="mb-4 flex items-center gap-2 font-mono text-sm font-bold text-electric">
                  <MapPin weight="bold" /> {profile.location}
                </p>
                <div className="flex flex-col gap-4 leading-relaxed text-gray-800">
                  {profile.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {profile.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] ${
                    index % 2 === 0
                      ? "bg-electric text-white"
                      : "bg-vibrant text-white"
                  }`}
                >
                  <p className="font-heading text-5xl font-bold tracking-tighter">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-mono text-sm font-bold uppercase">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="products" className="scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold tracking-tight">
              <Package weight="bold" /> Products
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group relative mt-4 flex h-full flex-col"
                >
                  <div
                    className="relative z-10 -mb-1 h-11 w-48 bg-black"
                    style={{ clipPath: TAB_CLIP }}
                  >
                    <div
                      className="absolute inset-x-1 top-1 bottom-0 flex items-center gap-2 bg-vibrant px-4 text-xs font-bold tracking-wider text-white"
                      style={{ clipPath: TAB_CLIP }}
                    >
                      <Package weight="fill" className="text-base" />
                      {product.note}
                    </div>
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none"
                  >
                    <h3 className="text-2xl font-bold tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                      {product.description}
                    </p>
                    <p className="mt-5 font-mono text-xs font-bold text-electric">
                      {product.tag} ↗
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="work" className="scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold tracking-tight">
              <Briefcase weight="bold" /> Work Experience
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col gap-6"
            >
              {experiences.map((exp) => (
                <motion.article
                  key={`${exp.company}-${exp.period}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  whileHover={{
                    x: 5,
                    y: 5,
                    boxShadow: "0px 0px 0px 0px #000",
                  }}
                  className={BOX}
                >
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="font-bold text-electric">{exp.company}</p>
                      <p className="font-mono text-xs text-gray-600">
                        {exp.domain} · {exp.location} · {exp.workType}
                      </p>
                    </div>
                    <span className="flex w-max items-center gap-2 border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold">
                      <CalendarBlank weight="bold" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-800">
                    {exp.summary}
                  </p>
                  <ul className="mb-5 flex flex-col gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed"
                      >
                        <CheckCircle
                          weight="fill"
                          className="mt-0.5 shrink-0 text-lg text-vibrant"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((item) => (
                      <span
                        key={item}
                        className="border-2 border-black bg-gray-100 px-2 py-1 text-xs font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          <section id="stack" className="scroll-mt-28">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold tracking-tight">
              <Stack weight="bold" /> Tech Stack
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className={BOX}>
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold uppercase">
                  <CodeBlock weight="bold" /> Primary
                </h3>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {primaryStacks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-4 border-black bg-electric p-3 text-white transition-all hover:bg-vibrant"
                    >
                      <p className="font-heading font-bold">{item.name}</p>
                      <p className="font-mono text-xs opacity-90">
                        {item.category}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
              <div className={BOX}>
                <h3 className="mb-4 font-heading text-lg font-bold uppercase">
                  Also Familiar With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {secondaryStacks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black bg-white px-3 py-2 text-sm font-bold transition-all hover:bg-black hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
