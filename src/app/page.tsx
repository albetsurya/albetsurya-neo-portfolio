"use client";

import { useRef, type RefObject } from "react";
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
  AcidDropBlobSvg,
  CloudBlobSvg,
  WavyStackBlobSvg,
  SplashBlobSvg,
  CrownBlobSvg,
  SpikyBlobSvg,
  AmoebaBlobSvg,
} from "@/components/BlobMascots";
import { useAppScrollContainer } from "@/components/MobileLayout";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticText } from "@/components/KineticText";
import StackSection from "@/components/StackSection";

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

  const styleClass = FOLDER_STYLES[index % FOLDER_STYLES.length];

  return (
    <motion.div
      style={{ y, rotate, scale, zIndex: index + 1 }}
      className="absolute inset-0 flex flex-col justify-end"
    >
      <div
        className="relative z-20 -mb-[4px] h-10 w-[35%] bg-black md:hidden"
        style={{ clipPath: TAB_CLIP, marginLeft: `${index * 30}%` }}
      >
        <div
          className={`absolute inset-x-[3px] top-[3px] bottom-0 flex items-center gap-1.5 pl-3 pr-4 text-[10px] font-bold tracking-wider ${styleClass.bg} ${styleClass.text}`}
          style={{ clipPath: TAB_CLIP }}
        >
          <Folder weight="fill" className="shrink-0 text-sm" />
          <span className="whitespace-nowrap">PROJECT 0{index + 1}</span>
        </div>
      </div>

      <div
        className="relative z-20 -mb-[4px] hidden h-14 w-64 bg-black md:block"
        style={{ clipPath: TAB_CLIP, marginLeft: `${index * 15}%` }}
      >
        <div
          className={`absolute inset-x-[3px] top-[3px] bottom-0 flex items-center gap-3 px-5 text-sm font-bold tracking-wider ${styleClass.bg} ${styleClass.text}`}
          style={{ clipPath: TAB_CLIP }}
        >
          <Folder weight="fill" className="shrink-0 text-xl" />
          <span className="whitespace-nowrap">PROJECT 0{index + 1}</span>
        </div>
      </div>

      <div
        className={`relative z-0 flex flex-1 flex-col gap-4 border-4 border-black p-4 shadow-[8px_8px_0px_0px_#000] md:flex-row md:gap-8 md:p-12 md:shadow-[12px_12px_0px_0px_#000] ${styleClass.bg} ${styleClass.text}`}
      >
        <div className="flex w-full flex-col justify-center md:w-2/5">
          <span className="mb-2 flex items-center gap-2 font-mono text-xs opacity-80 md:mb-3 md:text-sm">
            <Globe weight="bold" />
            {new URL(project.url).hostname}
          </span>
          <h3 className="mb-2 text-2xl font-bold tracking-tighter md:mb-4 md:text-6xl">
            {project.name}
          </h3>
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed opacity-90 md:mb-6 md:line-clamp-none md:text-lg">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max items-center gap-2 border-b-4 border-current pb-1 text-sm font-bold transition-opacity hover:opacity-70 md:text-base"
          >
            VIEW PROJECT <ArrowRight weight="bold" />
          </a>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {project.stack?.map((item) => (
              <span
                key={item}
                className="border-2 border-current bg-black/10 px-2 py-1 text-[10px] font-bold md:px-3 md:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-36 w-full overflow-hidden border-4 border-black bg-white sm:h-40 md:h-auto md:w-3/5">
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
  const scrollContainerRef = useAppScrollContainer() as
    | RefObject<HTMLElement | null>
    | undefined;

  const folderRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: folderRef,
    offset: ["start start", "end end"],
  });

  const displayProjects = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-bone pt-4 text-black md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 text-center md:px-12"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-4 md:gap-6">
          <div className="relative flex w-full flex-col items-center pt-14 md:pt-0">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-2 left-0 -rotate-6 border-[3px] border-black bg-[#a7f3d0] px-2 py-1 text-[9px] font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] sm:text-[10px] sm:px-3 sm:py-1.5 md:-top-4 md:-left-10 md:border-4 md:px-4 md:py-2 md:text-base z-20"
            >
              Building scalable apps
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-2 right-0 rotate-6 border-[3px] border-black bg-[#fde047] px-2 py-1 text-[9px] font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] sm:text-[10px] sm:px-3 sm:py-1.5 md:-top-4 md:-right-10 md:border-4 md:px-4 md:py-2 md:text-base z-20"
            >
              Fullstack Developer
            </motion.div>

            <div className="relative flex flex-col items-center mt-5 md:mt-8">
              <div className="relative flex flex-col items-center mb-2 md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2 md:mb-0 z-10">
                <span className="font-mono text-xs font-bold tracking-widest text-gray-700 md:text-lg">
                  my name is
                </span>
                <div className="mt-1 h-[3px] w-20 bg-black md:w-32"></div>
              </div>

              <h1 className="cursor-highlight relative inline-block text-[3.5rem] leading-none font-bold tracking-tighter uppercase sm:text-7xl md:text-[10rem] z-10">
                <AmoebaBlobSvg
                  size={70}
                  className="absolute -top-10 -left-16 hidden md:block z-0"
                />
                <AcidDropBlobSvg
                  size={50}
                  className="absolute -bottom-6 -right-12 hidden md:block z-0"
                />
                <KineticText
                  text={profile.name.split(" ")[0]}
                  className="inline-block"
                />
              </h1>
            </div>
          </div>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-gray-800 md:mt-6 md:gap-3 md:text-base">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 border-2 border-black bg-electric"></span>
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

          <div className="relative">
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed font-medium text-gray-700 md:mt-8 md:text-xl relative z-10">
              {profile.bioParagraphs[0]}
            </p>
            <SpikyBlobSvg
              size={40}
              className="absolute -right-12 -top-4 hidden md:block opacity-50"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 md:mt-8 md:gap-4">
            <MagneticButton
              className="flex items-center gap-2 border-[3px] border-black bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[3px_3px_0px_0px_#0055FF] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:border-4 md:px-6 md:py-3 md:text-base md:shadow-[4px_4px_0px_0px_#0055FF]"
              onClick={() => {
                window.location.href = "/work";
              }}
            >
              <span className="flex items-center gap-2">
                View Work
                <ArrowRight weight="bold" />
              </span>
            </MagneticButton>
            <MagneticButton
              className="flex items-center gap-2 border-[3px] border-black bg-white px-5 py-2.5 text-sm font-bold text-black shadow-[3px_3px_0px_0px_#FF5500] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:border-4 md:px-6 md:py-3 md:text-base md:shadow-[4px_4px_0px_0px_#FF5500]"
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              <span className="flex items-center gap-2">
                About Me
                <ArrowRight weight="bold" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      <section className="mx-auto mb-32 max-w-7xl px-4 md:mb-40 md:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between overflow-hidden border-4 border-black bg-white p-5 shadow-[6px_6px_0px_0px_#000] md:col-span-2 md:p-8 md:shadow-[8px_8px_0px_0px_#000]"
          >
            <CloudBlobSvg
              size={160}
              className="pointer-events-none absolute -right-12 -bottom-12 opacity-20 z-0"
            />
            <div className="relative z-10">
              <h2 className="mb-3 text-2xl font-bold tracking-tight md:mb-4 md:text-3xl">
                About Me
              </h2>
              <p className="mb-2 text-base leading-relaxed font-bold md:mb-3 md:text-lg">
                {aboutMe.title}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:mb-6 md:text-base">
                {profile.bioParagraphs[1]}
              </p>
            </div>
            <Link
              href="/about"
              className="relative z-10 inline-flex w-max items-center gap-2 border-b-4 border-black pb-1 text-sm font-bold hover:text-electric md:text-base"
            >
              FULL BIO <ArrowRight weight="bold" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center overflow-hidden border-4 border-black bg-vibrant p-5 shadow-[6px_6px_0px_0px_#000] md:p-6 md:row-span-2 md:shadow-[8px_8px_0px_0px_#000]"
          >
            <WavyStackBlobSvg
              size={180}
              className="pointer-events-none absolute -top-12 -left-12 opacity-20 z-0"
            />
            <div className="relative z-10 w-full max-w-[220px] -rotate-3 border-4 border-black bg-white p-3 pb-10 shadow-[6px_6px_0px_0px_#000] transition-transform duration-300 hover:rotate-0 md:max-w-none md:pb-12 md:shadow-[8px_8px_0px_0px_#000]">
              <div className="relative aspect-square w-full border-2 border-black bg-gray-100">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center font-mono text-xs font-bold md:mt-4 md:text-sm">
                @{profile.username}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-3 overflow-hidden border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] md:col-span-2 md:grid-cols-4 md:gap-4 md:p-6 md:shadow-[8px_8px_0px_0px_#000]"
          >
            <SplashBlobSvg
              size={120}
              className="pointer-events-none absolute inset-0 m-auto opacity-10 z-0"
            />
            {aboutMe.tags.map((tag, index) => {
              const { bg, Icon } = TAG_STYLES[index % TAG_STYLES.length];
              return (
                <div
                  key={tag.label}
                  className={`relative z-10 flex flex-col items-start justify-between gap-4 border-4 border-black p-3 md:gap-6 md:p-4 ${bg}`}
                >
                  <Icon weight="bold" className="text-3xl md:text-4xl" />
                  <span className="text-xs leading-tight font-bold uppercase md:text-sm">
                    {tag.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section ref={folderRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 flex h-[100dvh] w-full flex-col items-center justify-center gap-4 px-4 pb-28 md:gap-0 md:px-12 md:pb-0">
          <div className="relative z-50 text-center">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold tracking-tighter md:text-7xl">
                FEATURED WORKS
              </h2>
              <CrownBlobSvg
                size={50}
                className="absolute -top-6 -right-12 md:-top-10 md:-right-20 hidden md:block"
              />
            </div>
            <p className="mt-1 font-mono text-[10px] text-gray-600 md:mt-2 md:text-sm">
              Scroll to explore
            </p>
          </div>

          <div className="relative mx-auto h-[60vh] w-full max-w-6xl overflow-hidden rounded-t-xl md:h-[70vh]">
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
      <StackSection />
    </main>
  );
}
