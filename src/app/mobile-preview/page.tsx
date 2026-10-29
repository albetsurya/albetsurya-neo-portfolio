import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Layout Preview",
  description: "Test page for the floating bottom navigation and app-like scrolling.",
};

interface DummyCard {
  title: string;
  description: string;
  tag: string;
  tagClass: string;
}

const DUMMY_CARDS: DummyCard[] = [
  { title: "Neon Commerce", description: "A headless storefront with instant search and a brutal checkout flow.", tag: "Next.js", tagClass: "bg-[#FFDE00] text-black" },
  { title: "Brutal Dashboard", description: "Realtime analytics with hard-edged charts and zero fluff.", tag: "React", tagClass: "bg-[#0055ff] text-white" },
  { title: "Pixel Portfolio", description: "Scroll-driven case studies with heavy borders and harder shadows.", tag: "TypeScript", tagClass: "bg-black text-white" },
  { title: "Inbox Zero", description: "A keyboard-first mail client that actually gets out of your way.", tag: "PWA", tagClass: "bg-[#ff5500] text-white" },
  { title: "Grid Runner", description: "An endless arcade runner built on a physics-free grid engine.", tag: "Canvas", tagClass: "bg-[#FFDE00] text-black" },
  { title: "Stack Notes", description: "Offline-first note taking with bidirectional sync and tags.", tag: "IndexedDB", tagClass: "bg-white text-black" },
  { title: "Mono Chat", description: "A terminal-flavored chat app with typewriter message delivery.", tag: "WebSocket", tagClass: "bg-[#0055ff] text-white" },
  { title: "Type Racer", description: "Live multiplayer typing duels with global leaderboards.", tag: "WebSockets", tagClass: "bg-black text-white" },
  { title: "Card Bank", description: "Personal finance tracking with chunky, legible spending cards.", tag: "Remix", tagClass: "bg-[#ff5500] text-white" },
  { title: "Wave Form", description: "A browser audio lab with draggable nodes and patch cables.", tag: "Web Audio", tagClass: "bg-[#FFDE00] text-black" },
  { title: "Map Box", description: "Offline maps with chunky markers and thick vector roads.", tag: "MapLibre", tagClass: "bg-white text-black" },
  { title: "Recipe Deck", description: "Swipeable recipe cards with unit-scaled ingredient lists.", tag: "Vite", tagClass: "bg-[#0055ff] text-white" },
];

export default function MobilePreviewPage() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-6">
      <header className="mb-6 border-[3px] border-black bg-[#FFDE00] p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tighter">
          Scroll Me
        </h1>
        <p className="mt-2 text-sm font-medium">
          On a phone the content scrolls behind the floating nav while the page
          itself stays put. Resize below the md breakpoint to see the layout
          switch, or widen the window to get the desktop navbar back.
        </p>
      </header>

      <ul className="flex flex-col gap-5">
        {DUMMY_CARDS.map((card, index) => (
          <li
            key={card.title}
            className="rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-black/50">
                #{String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`rounded-full border-[3px] border-black px-3 py-1 font-heading text-[10px] font-bold uppercase ${card.tagClass}`}
              >
                {card.tag}
              </span>
            </div>
            <h2 className="font-heading text-xl font-bold uppercase leading-none">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-black/70">{card.description}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center font-heading text-xs font-bold uppercase text-black/40">
        — End of list —
      </p>
    </div>
  );
}