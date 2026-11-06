export const profile = {
  name: "Jeffrey Irukeh",
  fullName: "Jeffrey Ajiri Irukeh",
  role: "Front-End Engineer",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "jirukeh@gmail.com",
  cv: "https://drive.google.com/file/d/1T__rllYelOgiHvjXtohJDf_XreRL0ZXW/view",
  formspree: "https://formspree.io/f/mdkdlaqk",
  socials: [
    { label: "GitHub", href: "https://github.com/Jeffreyai7", handle: "Jeffreyai7" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jirukeh", handle: "in/jirukeh" },
    { label: "X / Twitter", href: "https://x.com/jirukeh", handle: "@jirukeh" },
  ],
};

export const navLinks = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Work", href: "/#work", id: "work" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export const stats = [
  { value: "4", label: "Teams shipped with" },
  { value: "10+", label: "Products shipped" },
  { value: "8", label: "Certifications" },
  { value: "2022", label: "Writing code since" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Falpine",
    role: "Frontend Web3 Developer",
    period: "Sep 2025 — Present",
    location: "Remote",
    current: true,
    summary:
      "Building the interface layer for Web3 RPC infrastructure — turning raw node telemetry into a dashboard teams can act on.",
    highlights: [
      "Engineered a real-time RPC monitoring dashboard surfacing latency, uptime and error-rate analytics.",
      "Integrated REST APIs and Web3 RPC endpoints, and visualised performance metrics through interactive charts.",
      "Designed client-side state and data-fetching flows with Zustand and React Query for responsive, organised updates.",
      "Worked closely with backend engineers to align API contracts and blockchain data synchronisation.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Web3 RPC"],
  },
  {
    company: "Blackpride Holdings",
    role: "Frontend Developer / Project Coordinator",
    period: "Apr 2024 — Aug 2025",
    location: "Lagos",
    summary:
      "Owned delivery end-to-end — writing the code and running the projects from first brief to production.",
    highlights: [
      "Designed, built and maintained responsive web applications with React.js and Next.js.",
      "Validated cross-browser behaviour and applied accessibility practices across devices.",
      "Coordinated multiple client projects from planning to deployment using Jira and Trello.",
      "Partnered with designers and stakeholders to turn requirements into shippable priorities.",
    ],
    stack: ["React", "Next.js", "Accessibility", "Jira", "Trello"],
  },
  {
    company: "HNG Internship",
    role: "Frontend Developer Intern",
    period: "Jan 2025 — Mar 2025",
    location: "Remote",
    summary:
      "Fast-paced, competitive internship shipping production features under tight weekly deadlines.",
    highlights: [
      "Built a responsive restaurant application interface with React.js and Zustand — a reported 30% improvement in UI responsiveness.",
      "Integrated REST APIs for real-time data handling and dynamic rendering.",
      "Documented architecture and state models to speed up onboarding and maintenance.",
    ],
    stack: ["React", "Zustand", "REST APIs", "Documentation"],
  },
  {
    company: "Nigeria Jubilee Fellowship",
    role: "IT Support Assistant",
    period: "Oct 2022 — Oct 2023",
    location: "Delta State",
    summary:
      "Where it started — keeping systems and people running, and teaching others to use them.",
    highlights: [
      "Resolved hardware and software issues and ran preventive maintenance.",
      "Configured office networking, including routers and LAN switches.",
      "Prepared instructional material for computer appreciation training.",
    ],
    stack: ["Networking", "Support", "Training"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "menu-card",
    title: "Menu Card",
    tagline: "Real-time digital menus for restaurants",
    description:
      "A full-stack restaurant menu platform with real-time updates, intuitive navigation and a mobile-first ordering experience — built from reusable responsive components on top of Zustand and REST APIs.",
    category: "Full-stack · Product",
    techStack: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Node.js"],
    image: "/images/menuswift.png",
    demo: "https://usemenucard.com",
    featured: true,
  },
  {
    slug: "dyen",
    title: "Dyen Academy",
    tagline: "Enrollment platform for tech training",
    description:
      "Registration and onboarding web app for a training academy — a clean, animated experience that walks new students from discovery to sign-up.",
    category: "Web platform",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/dyenproject.png",
    demo: "https://dyen.org",
    featured: true,
  },
  {
    slug: "mini-commerce",
    title: "Mini-Commerce",
    tagline: "Lean storefront with persistent cart",
    description:
      "An e-commerce experience with product filtering, a fully featured cart and local-storage persistence managed through Zustand.",
    category: "E-commerce",
    techStack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    image: "/images/minicommerce.png",
    github: "https://github.com/Jeffreyai7/Mini-Commerce",
    demo: "https://mini-commerce-seven-eta.vercel.app/",
    featured: true,
  },
  {
    slug: "kanban",
    title: "Kanban Task Manager",
    tagline: "Drag-and-drop workflow board",
    description:
      "A modern Kanban board with drag-and-drop, task management and a focused UI for organising work.",
    category: "Productivity",
    techStack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    image: "/images/kanban.png",
    github: "https://github.com/Jeffreyai7/kanban-board-Manager",
    demo: "https://kanban-board-manager.vercel.app/",
    featured: true,
  },
  {
    slug: "wave-insight",
    title: "The Wave Insight",
    tagline: "Content-driven WordPress site",
    description:
      "A responsive, editorially-led WordPress build using Elementor and custom PHP, designed to be easy for the client team to manage.",
    category: "WordPress",
    techStack: ["WordPress", "Elementor", "PHP"],
    image: "/images/waveinsight.png",
    demo: "https://thewaveinsight.com/",
  },
  {
    slug: "ticketing",
    title: "Conference Ticketing",
    tagline: "Event ticket generator",
    description:
      "A multi-step ticket selection and generation flow for events, with form validation, persistence and animated transitions.",
    category: "Events",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/ticketingplatform.png",
    github: "https://github.com/Jeffreyai7/hngx-stage2-conference-ticket",
    demo: "https://hngx-stage2-conference-ticket.vercel.app/",
  },
  {
    slug: "gamehub",
    title: "Game Hub",
    tagline: "Video game discovery",
    description:
      "A game discovery app with search, genre and platform filtering, and sorting — powered by the RAWG games API.",
    category: "Discovery",
    techStack: ["React", "TypeScript", "Chakra UI"],
    image: "/images/gamehub.png",
    github: "https://github.com/Jeffreyai7/gamehub",
    demo: "https://gamehub-alpha-jet.vercel.app/",
  },
  {
    slug: "quardmarket",
    title: "Quardmarket",
    tagline: "Decentralised marketplace DApp",
    description:
      "Frontend for a decentralised application — built the components and wired them to smart contracts with ethers.js alongside the contract developers.",
    category: "Web3 · DApp",
    techStack: ["React", "ethers.js", "Smart Contracts"],
  },
  {
    slug: "news-digest",
    title: "AI News Digest",
    tagline: "AI-curated daily briefings",
    description:
      "Dashboard for an AI-powered news digest that curates summaries and delivers them to subscribers automatically — no manual email sends.",
    category: "AI · Dashboard",
    techStack: ["React", "Dashboard", "Automation"],
  },
];

export const skillGroups = [
  {
    title: "Interface",
    blurb: "Accessible, responsive UIs with motion that earns its place.",
    icon: "layout" as const,
    items: [
      "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Tailwind CSS", "Sass", "Framer Motion", "Radix UI", "Bootstrap",
    ],
  },
  {
    title: "State & Data",
    blurb: "Predictable state and data flows that keep UIs honest.",
    icon: "workflow" as const,
    items: ["Zustand", "Redux", "React Query", "REST APIs", "GraphQL", "SOAP"],
  },
  {
    title: "Backend",
    blurb: "Enough of the server to own a feature end-to-end.",
    icon: "database" as const,
    items: ["Node.js", "Express.js", "NestJS", "SQL", "Firebase", "Appwrite", "Auth0"],
  },
  {
    title: "Web3",
    blurb: "Connecting interfaces to chains, contracts and RPC nodes.",
    icon: "box" as const,
    items: ["ethers.js", "Smart-contract integration", "Web3 RPC", "DApps"],
  },
  {
    title: "Quality & Delivery",
    blurb: "Tested, documented, shipped — and coordinated.",
    icon: "rocket" as const,
    items: [
      "Jest", "Vitest", "Git & GitHub", "Figma", "Vercel", "Netlify",
      "WordPress", "Jira", "Trello",
    ],
  },
];

export const marqueeTech = [
  { name: "React", icon: "simple-icons:react" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "Framer Motion", icon: "simple-icons:framer" },
  { name: "Ethereum", icon: "simple-icons:ethereum" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
  { name: "NestJS", icon: "simple-icons:nestjs" },
  { name: "GraphQL", icon: "simple-icons:graphql" },
  { name: "React Query", icon: "simple-icons:reactquery" },
  { name: "Redux", icon: "simple-icons:redux" },
  { name: "Firebase", icon: "simple-icons:firebase" },
  { name: "Vitest", icon: "simple-icons:vitest" },
  { name: "Figma", icon: "simple-icons:figma" },
  { name: "WordPress", icon: "simple-icons:wordpress" },
];

export const education = {
  school: "University of Benin (UNIBEN)",
  degree: "B.Sc. Biochemistry — Second Class Honours (Upper Division)",
  period: "2013 — 2017",
  location: "Edo State, Nigeria",
};

export const certifications = [
  { title: "Ethereum Bootcamp", issuer: "Alchemy University", date: "Oct 2026" },
  { title: "Backend API Certification", issuer: "freeCodeCamp", date: "Oct 2025" },
  { title: "Cybersecurity Fundamentals", issuer: "Cisco Networking Academy", date: "Aug 2025" },
  { title: "HNG Internship", issuer: "HNG Tech", date: "Mar 2025" },
  { title: "Web Development", issuer: "DYEN Academy", date: "Mar 2024" },
  { title: "Frontend Certification", issuer: "freeCodeCamp", date: "Mar 2024" },
  { title: "Soft Skills Training", issuer: "Jobberman Nigeria", date: "Sep 2022" },
  { title: "Web Development Bootcamp", issuer: "Angela Yu · Udemy", date: "Sep 2022" },
];
