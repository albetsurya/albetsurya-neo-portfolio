"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  Brain,
  ChartLineUp,
  CodeBlock,
  DeviceMobile,
  Folder,
  Globe,
} from "@phosphor-icons/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  AbstractBlob,
  ArrowDoodle,
  Squiggle,
  StarBurst,
} from "@/components/Illustrations";

const TAG_STYLES = [
  { bg: "bg-electric text-white", Icon: CodeBlock },
  { bg: "bg-vibrant text-white", Icon: DeviceMobile },
  { bg: "bg-white text-black", Icon: Brain },
  { bg: "bg-black text-white", Icon: ChartLineUp },
];

const FOLDER_STYLES = [
  { bg: "bg-electric", text: "text-white" },
  { bg: "bg-white", text: "text-black" },
  { bg: "bg-vibrant", text: "text-white" },
];

const FOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
];

const TAB_CLIP = "polygon(0 0, 85% 0, 100% 100%, 0 100%)";

type Project = (typeof PORTFOLIO_DATA.products)[number];

function FolderCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index === 0 ? 0 : (index - 1) * 0.3 + 0.1;
  const end = index === 0 ? 1 : index * 0.3 + 0.1;

  const y = useTransform(
    progress,
    [start, end],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
  );
  const rotate = useTransform(progress, [start, end], [index * 5, 0]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);

  const style = FOLDER_STYLES[index % FOLDER_STYLES.length];

  return (
    <motion.div
      style={{ y, rotate, scale, zIndex: index + 1 }}
      className="absolute inset-0 flex flex-col justify-end"
    >
      <div
        className="relative z-10 -mb-1 h-14 w-64 bg-black"
        style={{ clipPath: TAB_CLIP, marginLeft: `${index * 20}%` }}
      >
        <div
          className={`absolute inset-x-1 top-1 bottom-0 flex items-center gap-3 px-5 text-sm font-bold tracking-wider ${style.bg} ${style.text}`}
          style={{ clipPath: TAB_CLIP }}
        >
          <Folder weight="fill" className="text-xl" />
          PROJECT 0{index + 1}
        </div>
      </div>

      <div
        className={`relative flex flex-1 flex-col gap-8 border-4 border-black p-6 shadow-[12px_12px_0px_0px_#000] md:flex-row md:p-12 ${style.bg} ${style.text}`}
      >
        <div className="flex w-full flex-col justify-center md:w-2/5">
          <span className="mb-3 flex items-center gap-2 font-mono text-sm opacity-80">
            <Globe weight="bold" />
            {new URL(project.url).hostname}
          </span>
          <h3 className="mb-4 text-4xl font-bold tracking-tighter md:text-6xl">
            {project.name}
          </h3>
          <p className="mb-6 text-base leading-relaxed opacity-90 md:text-lg">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max items-center gap-2 border-b-4 border-current pb-1 font-bold transition-opacity hover:opacity-70"
          >
            VIEW PROJECT <ArrowRight weight="bold" />
          </a>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack?.map((item) => (
              <span
                key={item}
                className="border-2 border-current bg-black/10 px-3 py-1 text-xs font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden border-4 border-black bg-white md:h-auto md:w-3/5">
          <Image
            src={FOLDER_IMAGES[index % FOLDER_IMAGES.length]}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const { profile, products, aboutMe } = PORTFOLIO_DATA;

  const folderRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: folderRef,
    offset: ["start start", "end end"],
  });

  const displayProjects = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-bone pt-16 pb-20 text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center md:px-12"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-6 py-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 left-0 -rotate-6 border-4 border-black bg-[#a7f3d0] px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] md:-left-10 md:text-base"
          >
            Building scalable apps
          </motion.div>

          <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <span className="font-mono text-lg font-bold tracking-widest text-gray-700">
              my name is
            </span>
            <div className="mt-1 h-1 w-32 bg-black"></div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 right-0 rotate-6 border-4 border-black bg-[#fde047] px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] md:-right-10 md:text-base"
          >
            Fullstack Developer
          </motion.div>

          <h1 className="cursor-highlight relative z-10 mt-8 inline-block text-7xl leading-none font-bold tracking-tighter uppercase md:text-[10rem]">
            <StarBurst className="absolute -bottom-6 -left-6 h-16 w-16 text-yellow-400 md:-bottom-8 md:-left-10 md:h-20 md:w-20" />
            {profile.name.split(" ")[0]}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-sm font-bold uppercase tracking-widest text-gray-800 md:text-base">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 border-2 border-black bg-electric"></span>
              Fullstack
            </span>
            <span>•</span>
            <span>Web</span>
            <span>•</span>
            <span>Mobile</span>
            <span>•</span>
            <span>API</span>
            <span>•</span>
            <span>Product Maker</span>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed font-medium text-gray-700 md:text-xl">
            {profile.bioParagraphs[0]}
          </p>

          <Squiggle className="mx-auto mt-2 h-6 w-48 text-[#FF5500]" />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/work"
              className="flex items-center gap-2 border-4 border-black bg-black px-6 py-3 font-bold text-white shadow-[4px_4px_0px_0px_#0055FF] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              View Work
              <ArrowRight weight="bold" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 border-4 border-black bg-white px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_#FF5500] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              About Me
            </Link>
          </div>
        </div>
      </motion.div>

      <section className="mx-auto mb-40 max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between overflow-hidden border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000] md:col-span-2"
          >
            <AbstractBlob className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 text-electric opacity-20" />
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                About Me
              </h2>
              <p className="mb-3 text-lg leading-relaxed font-bold">
                {aboutMe.title}
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                {profile.bioParagraphs[1]}
              </p>
            </div>
            <Link
              href="/about"
              className="relative z-10 inline-flex w-max items-center gap-2 border-b-4 border-black pb-1 font-bold hover:text-electric"
            >
              FULL BIO <ArrowRight weight="bold" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center overflow-hidden border-4 border-black bg-vibrant p-6 shadow-[8px_8px_0px_0px_#000] md:row-span-2"
          >
            <AbstractBlob className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 text-white opacity-20" />
            <div className="relative z-10 w-full -rotate-3 border-4 border-black bg-white p-3 pb-12 shadow-[8px_8px_0px_0px_#000] transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-square w-full border-2 border-black bg-gray-100">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center font-mono text-sm font-bold">
                @{profile.username}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4 overflow-hidden border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] md:col-span-2 md:grid-cols-4"
          >
            <AbstractBlob className="pointer-events-none absolute inset-0 m-auto h-48 w-48 text-electric opacity-20" />
            {aboutMe.tags.map((tag, index) => {
              const { bg, Icon } = TAG_STYLES[index % TAG_STYLES.length];
              return (
                <div
                  key={tag.label}
                  className={`relative z-10 flex flex-col items-start justify-between gap-6 border-4 border-black p-4 ${bg}`}
                >
                  <Icon weight="bold" className="text-4xl" />
                  <span className="text-sm leading-tight font-bold uppercase">
                    {tag.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section ref={folderRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-4 md:px-12">
          <div className="relative mb-8 text-center">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
                FEATURED WORKS
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute -top-8 -right-12 md:-right-16"
              >
                <ArrowDoodle className="h-10 w-10 text-black md:h-12 md:w-12" />
              </motion.div>
            </div>
            <p className="mt-2 font-mono text-sm text-gray-600">
              Scroll to explore
            </p>
          </div>

          <div className="relative mx-auto h-[70vh] w-full max-w-6xl">
            {displayProjects.map((project, index) => (
              <FolderCard
                key={project.name}
                project={project}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
