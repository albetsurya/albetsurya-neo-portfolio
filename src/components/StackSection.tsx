"use client";

import { CodeBlock } from "@phosphor-icons/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { CogBlobSvg, WebbedStarBlobSvg } from "@/components/BlobMascots";

const BOX =
  "border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] md:p-8 md:shadow-[8px_8px_0px_0px_#000]";

export default function StackSection() {
  const { stacks } = PORTFOLIO_DATA;
  const primaryStacks = stacks.filter((item) => item.primary);
  const secondaryStacks = stacks.filter((item) => !item.primary);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 md:py-20 border-t-4 border-black bg-bone">
      <div className="mb-6 flex items-center gap-3 md:mb-12">
        <h2 className="text-4xl leading-none font-bold tracking-tighter md:text-6xl uppercase">
          My Stack
        </h2>
        <CogBlobSvg size={40} className="md:h-12 md:w-12" />
        <WebbedStarBlobSvg size={30} className="hidden md:block opacity-50" />
      </div>

      <div className="flex flex-col gap-4 md:gap-6 relative">
        <div className={`${BOX} relative z-10`}>
          <h3 className="mb-3 flex items-center gap-2 font-heading text-base font-bold uppercase md:mb-4 md:text-lg">
            <CodeBlock weight="bold" /> Primary
          </h3>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
            {primaryStacks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black bg-electric p-2.5 text-white transition-all hover:bg-vibrant md:border-4 md:p-3"
              >
                <p className="font-heading text-sm font-bold md:text-base">
                  {item.name}
                </p>
                <p className="font-mono text-[10px] opacity-90 md:text-xs">
                  {item.category}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className={`${BOX} relative z-10`}>
          <h3 className="mb-3 font-heading text-base font-bold uppercase md:mb-4 md:text-lg">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {secondaryStacks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black bg-white px-2.5 py-1.5 text-xs font-bold transition-all hover:bg-black hover:text-white md:px-3 md:py-2 md:text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
