import {
  EnvelopeSimple,
  FigmaLogo,
  GithubLogo,
  Globe,
  LinkedinLogo,
  RocketLaunch,
} from "@phosphor-icons/react/dist/ssr";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const socials = [
    { label: "GitHub", href: profile.socials.github, Icon: GithubLogo },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinLogo },
    { label: "Portfolio", href: profile.socials.portfolio, Icon: Globe },
    { label: "Figma", href: profile.socials.figma, Icon: FigmaLogo },
    {
      label: "Product Hunt",
      href: profile.socials.producthunt,
      Icon: RocketLaunch,
    },
  ];

  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center md:gap-10 md:px-12 md:py-20">
        <h2 className="cursor-highlight font-heading text-4xl leading-none font-bold tracking-tighter md:text-9xl">
          LET&apos;S TALK
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 border-4 border-black bg-electric px-5 py-3 font-heading text-sm font-bold text-white shadow-[6px_6px_0px_0px_#000] transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none md:gap-3 md:px-8 md:py-4 md:text-2xl md:shadow-[8px_8px_0px_0px_#000]"
        >
          <EnvelopeSimple weight="bold" />
          {profile.email}
        </a>

        <ul className="mt-2 flex flex-wrap justify-center gap-3 md:mt-6 md:gap-4">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border-4 border-black bg-white text-xl shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-vibrant hover:text-white hover:shadow-none md:h-14 md:w-14 md:text-2xl md:shadow-[4px_4px_0px_0px_#000]"
              >
                <Icon weight="bold" />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs font-bold md:text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
