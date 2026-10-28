export interface ProductItem {
  name: string;
  description: string;
  url: string;
  note: string;
  tag: string;
  stack?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  domain: string;
  location: string;
  workType: string;
  period: string;
  duration: string;
  website?: string;
  mobileApp?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface StackItem {
  name: string;
  category: string;
  url: string;
  primary: boolean;
}

export interface AboutMeData {
  greeting: string;
  title: string;
  description: string;
  tags: { label: string; color: string; icon: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Albet S. Kembara",
    shortName: "Albet",
    username: "albetsurya",
    avatar: "https://github.com/albetsurya.png",
    headline:
      "Fullstack Web Developer · Building performant & scalable web applications",
    tagline:
      "a fullstack web developer in Indonesia who builds performant, scalable web applications that people",
    taglineHighlight: "actually use.",
    location: "Based in Indonesia, working remotely across WIB (UTC+7).",
    soloNote: "Building web, mobile, and agentic AI systems end-to-end.",
    email: "albetsurya@example.com",
    socials: {
      github: "https://github.com/albetsurya",
      linkedin: "https://linkedin.com/in/albetsurya",
      portfolio: "https://albetsurya.github.io/portfolio-react/",
      figma: "https://figma.com",
      producthunt: "https://producthunt.com",
    },
    metrics: [
      { label: "Professional since", value: "2024" },
      { label: "Organizations", value: "6" },
      { label: "Projects shipped", value: "10+" },
      { label: "Core domains", value: "4" },
    ],
    contributionsLastYear: 10487,
    bioParagraphs: [
      "I'm a Fullstack Web Developer with a strong focus on delivering clean, maintainable, and user-centric digital products. I enjoy turning complex problems into simple, elegant interfaces — bridging thoughtful design with solid engineering.",
      "My work spans the entire stack — from crafting responsive UIs with React and Next.js, building reliable REST APIs with Node.js and Go, to integrating AI-driven solutions and agentic workflows.",
      "I thrive in collaborative environments and continuously push myself to write better code, ship faster, and learn deeper.",
    ],
  },

  aboutMe: {
    greeting: "what's up",
    title:
      "I'm Albet, a fullstack engineer in Indonesia who builds apps people actually use.",
    description:
      "I build and maintain fullstack web and mobile products end-to-end. From crafting responsive UIs to integrating AI-driven solutions.",
    tags: [
      {
        label: "Fullstack Web Apps",
        color: "bg-yellow-400",
        icon: "bx-code-alt",
      },
      { label: "Mobile Apps", color: "bg-green-400", icon: "bx-mobile" },
      {
        label: "AI Integration",
        color: "bg-pink-500 text-white",
        icon: "bx-brain",
      },
      { label: "Digitization", color: "bg-cyan-400", icon: "bx-line-chart" },
    ],
  },

  products: [
    {
      name: "Sambung Ngaji",
      description:
        "Digital worship & learning platform — 'Pusat ibadah dan pembelajaran digital dalam genggamanmu.' Making religious learning accessible anytime, anywhere.",
      url: "http://sambung-ngaji.vercel.app",
      note: "my flagship",
      tag: "Next.js · TypeScript",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "FullStuckEngineer",
      description:
        "Complete e-commerce ecosystem split into three services — backend API, admin CMS, and customer storefront — demonstrating production-grade architecture.",
      url: "https://github.com/FullStuckEngineer/Server",
      note: "open source",
      tag: "Fullstack Monorepo",
      stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
    },
    {
      name: "Portfolio (React)",
      description:
        "Personal showcase built with React — projects, skills, and contact in a clean, modern interface focused on strong visual hierarchy and smooth navigation.",
      url: "https://albetsurya.github.io/portfolio-react/",
      note: "my space",
      tag: "React · JavaScript",
      stack: ["React", "JavaScript"],
    },
    {
      name: "Coffee Shop HASTA",
      description:
        "Collaborative fullstack web app built during a bootcamp — demonstrates effective teamwork and end-to-end product delivery within a cross-functional team.",
      url: "https://github.com/triesaugustrianto/F-FSW2300964-36-CoffeeShopHASTA-PlatinumOLD",
      note: "team project",
      tag: "Fullstack",
      stack: ["JavaScript", "React"],
    },
  ] satisfies ProductItem[],

  experiences: [
    {
      company: "Narasi Data Cerdas Indonesia",
      role: "Fullstack Engineer",
      domain: "Data Intelligence & AI Solutions",
      location: "Klaten, Central Java",
      workType: "Remote",
      period: "Mar 2026 - Present",
      duration: "Current",
      website: "https://fms.ggfsystem.com/",
      mobileApp:
        "https://play.google.com/store/apps/details?id=com.ggfsystem.fmsmobile",
      summary:
        "Building fullstack solutions across web and mobile platforms, with ownership spanning UI/UX design to deployment.",
      highlights: [
        "Designed intuitive, responsive interfaces for web and mobile, ensuring a consistent UX across platforms",
        "Built high-performance, interactive client-side applications using modern frameworks",
        "Developed and maintained server-side logic, databases, and APIs for seamless cross-platform functionality",
        "Connected frontend components with backend services and continuously optimized for speed and scalability",
        "Managed end-to-end deployment pipelines across web and mobile ecosystems",
      ],
      stack: ["React.js", "React Native", "Laravel", "MySQL", "TypeScript"],
    },
    {
      company: "PT Mandatech Mataram Mukti",
      role: "Fullstack Engineer",
      domain: "Enterprise Software & Field Management",
      location: "Yogyakarta, Indonesia",
      workType: "Remote",
      period: "Sep 2024 - Present",
      duration: "1+ year",
      website: "https://fms.ggfsystem.com/",
      mobileApp:
        "https://play.google.com/store/apps/details?id=com.ggfsystem.fmsmobile",
      summary:
        "Developed and maintained GGF-FMS, a field management system designed to streamline operational workflows for field teams across the entire stack.",
      highlights: [
        "Designed and implemented core features using Laravel, React, and MySQL",
        "Built reusable UI components and improved frontend rendering performance",
        "Designed RESTful APIs and optimized database queries for high-volume operational data",
        "Collaborated with cross-functional teams to translate business requirements into technical solutions",
        "Maintained code quality through reviews and engineering best practices",
        "Managed end-to-end deployment and ensured technical consistency",
      ],
      stack: ["Laravel", "React", "React Native", "MySQL", "REST API"],
    },
    {
      company: "Semampir Academy",
      role: "Project Manager",
      domain: "EdTech & Bootcamp",
      location: "Surabaya, East Java",
      workType: "Onsite",
      period: "Feb 2024 - Jan 2026",
      duration: "2 years",
      summary:
        "Led operational strategy and growth of a self-employed bootcamp initiative focused on tech education.",
      highlights: [
        "Formulated long-term vision and operational strategy to drive program growth",
        "Coordinated team activities and ensured clear alignment on goals and responsibilities",
        "Developed relevant, industry-aligned training curricula with continuous updates",
        "Recruited and managed instructors with strong technical and teaching backgrounds",
        "Built relationships with industry partners, universities, and organizations",
        "Continuously assessed program performance and improved quality based on feedback",
      ],
      stack: [
        "Leadership",
        "E-Learning",
        "Curriculum Design",
        "Team Management",
      ],
    },
    {
      company: "Rakamin Academy",
      role: "Class Coordinator",
      domain: "Career Bootcamp & Education",
      location: "Jakarta, Indonesia",
      workType: "Remote",
      period: "Jan 2024 - Dec 2024",
      duration: "1 year",
      summary:
        "Supported delivery of Rakamin Academy's flagship bootcamp batch as a class coordinator while also selected as an awardee.",
      highlights: [
        "Facilitated live class sessions and ensured smooth technical delivery",
        "Sparked discussions and encouraged active student participation",
        "Coordinated assessments, admin tasks, and learning logistics",
        "Fostered a collaborative learning environment among participants",
        "Collected and acted on student feedback to improve session quality",
      ],
      stack: ["Communication", "Leadership", "Event Coordination"],
    },
    {
      company: "BabyBoo E-Commerce Project",
      role: "Fullstack Web Developer",
      domain: "E-Commerce",
      location: "Remote",
      workType: "Project-Based",
      period: "Apr 2024 - Jun 2024",
      duration: "3 months",
      summary:
        "Built and optimized an e-commerce platform from the ground up, focusing on performance and conversion.",
      highlights: [
        "Optimized page load speed by 30% in the first month through rendering and asset improvements",
        "Redesigned checkout flow aiming to reduce cart abandonment by 25-30%",
        "Implemented advanced search functionality targeting 30-40% increase in customer engagement",
        "Integrated a secure payment gateway for safe end-to-end transactions",
      ],
      stack: ["Next.js", "React.js", "Tailwind CSS", "Node.js"],
    },
    {
      company: "Core Initiative Studio",
      role: "Frontend Developer Intern",
      domain: "Web Development Studio",
      location: "Remote",
      workType: "Virtual Intern",
      period: "Sep 2024 - Oct 2024",
      duration: "2 months",
      summary:
        "Project-based virtual internship via Rakamin Academy — delivered web projects end-to-end with a multidisciplinary team.",
      highlights: [
        "Led creation of intuitive user interfaces focused on smooth UX",
        "Developed solid server-side systems to improve application efficiency",
        "Wrote well-structured, high-performance code to boost application capabilities",
        "Collaborated with multidisciplinary teams to deliver web projects on schedule",
      ],
      stack: ["Vue.js", "CI/CD", "Frontend Development"],
    },
  ] satisfies ExperienceItem[],

  stacks: [
    {
      name: "TypeScript",
      category: "Typed JavaScript",
      url: "https://typescriptlang.org",
      primary: true,
    },
    {
      name: "React",
      category: "UI Library",
      url: "https://react.dev",
      primary: true,
    },
    {
      name: "Next.js",
      category: "Framework React Web",
      url: "https://nextjs.org",
      primary: true,
    },
    {
      name: "React Native",
      category: "Mobile Framework",
      url: "https://reactnative.dev",
      primary: true,
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      url: "https://tailwindcss.com",
      primary: true,
    },
    {
      name: "Node.js",
      category: "JavaScript Runtime",
      url: "https://nodejs.org",
      primary: true,
    },
    {
      name: "Laravel",
      category: "Backend Framework PHP",
      url: "https://laravel.com",
      primary: true,
    },
    {
      name: "Go (Golang)",
      category: "Backend Systems & REST API",
      url: "https://go.dev",
      primary: true,
    },
    {
      name: "PostgreSQL",
      category: "Relational Database",
      url: "https://postgresql.org",
      primary: true,
    },
    {
      name: "MySQL",
      category: "Relational Database",
      url: "https://mysql.com",
      primary: true,
    },
    {
      name: "Prisma",
      category: "ORM for Node & TS",
      url: "https://prisma.io",
      primary: true,
    },
    {
      name: "Agentic AI",
      category: "AI & Agent Workflows",
      url: "https://ai.google.dev",
      primary: true,
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      url: "https://developer.mozilla.org/docs/Web/JavaScript",
      primary: false,
    },
    {
      name: "Express.js",
      category: "Node.js Framework",
      url: "https://expressjs.com",
      primary: false,
    },
    {
      name: "PHP",
      category: "Backend Language",
      url: "https://php.net",
      primary: false,
    },
    {
      name: "HTML5",
      category: "Markup Language",
      url: "https://developer.mozilla.org/docs/Web/HTML",
      primary: false,
    },
    {
      name: "CSS3",
      category: "Stylesheet Language",
      url: "https://developer.mozilla.org/docs/Web/CSS",
      primary: false,
    },
    {
      name: "Vue.js",
      category: "UI Framework",
      url: "https://vuejs.org",
      primary: false,
    },
    {
      name: "Hermes",
      category: "AI Agent Framework",
      url: "https://github.com",
      primary: false,
    },
    {
      name: "OpenCode",
      category: "AI Coding Tool",
      url: "https://opencode.ai",
      primary: false,
    },
    {
      name: "Ollama",
      category: "Local LLM Runtime",
      url: "https://ollama.com",
      primary: false,
    },
    {
      name: "Git",
      category: "Version Control",
      url: "https://git-scm.com",
      primary: false,
    },
    {
      name: "GitHub",
      category: "Repository & CI/CD",
      url: "https://github.com/albetsurya",
      primary: false,
    },
    {
      name: "VS Code",
      category: "Code Editor",
      url: "https://code.visualstudio.com",
      primary: false,
    },
    {
      name: "Postman",
      category: "API Testing",
      url: "https://postman.com",
      primary: false,
    },
    {
      name: "Vercel",
      category: "Deployment Platform",
      url: "https://vercel.com",
      primary: false,
    },
    {
      name: "Figma",
      category: "UI/UX Design Tool",
      url: "https://figma.com",
      primary: false,
    },
  ] satisfies StackItem[],
};

export function buildContributionMatrix(seed = 7): number[] {
  return Array.from({ length: 364 }, (_, i) => {
    const v = (i * 31 + seed * 17) % 100;
    if (v > 92) return 4;
    if (v > 78) return 3;
    if (v > 55) return 2;
    if (v > 30) return 1;
    return 0;
  });
}
