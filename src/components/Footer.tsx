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
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 text-center md:px-12">
        <h2 className="cursor-highlight font-heading text-6xl leading-none font-bold tracking-tighter md:text-9xl">
          LET&apos;S TALK
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 border-4 border-black bg-electric px-8 py-4 font-heading text-lg font-bold text-white shadow-[8px_8px_0px_0px_#000] transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none md:text-2xl"
        >
          <EnvelopeSimple weight="bold" />
          {profile.email}
        </a>

        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-14 w-14 items-center justify-center border-4 border-black bg-white text-2xl shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-vibrant hover:text-white hover:shadow-none"
              >
                <Icon weight="bold" />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-sm font-bold">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
