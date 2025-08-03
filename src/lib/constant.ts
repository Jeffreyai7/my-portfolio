export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' },
];

export type Project =
  | {
      title: string;
      description: string;
      techStack: string[];
      image: string;
      location: "github";
      github: string;
      demo?: string;
    }
  | {
      title: string;
      description: string;
      techStack: string[];
      image: string;
      location: "private";
      demo?: string;
    };
export const projects: Project[] = [
  {
    title: "Menu Swift",
    description:
      "A Full-Stack restaurant menu app with real-time updates and a user-friendly interface.",
    techStack: ["React.js", "Zustand", "Tailwind CSS", "TypeScript", "Node.js"],
    image: "/images/menuswift.png",
    location: "private",
    demo: "https://visit.menu",
  },
  {
    title: "Dyen",
    description:
      "A web Application for registering new users for a training programs, with a user-friendly interface and real-time updates.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: "/images/dyenproject.png",
    location: "private",
    demo: "https://dyen.org",
  },
  {
    title: "Jacinthforge",
    description:
      "JacinthForge is an LMS that delivers accessible, certified vocational training in plumbing, electrical, carpentry, and more.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/jacinthforge.png",
    location: "private",
    demo: "https://jacinthforge.com",
  },
  {
    title: "Mini-Commerce",
    description:
      "A mini e-commerce app with cart, product filtering, and local storage persistence using Zustand.",
    techStack: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
    image: "/images/minicommerce.png",
    location: "github",
    github: "https://github.com/Jeffreyai7/Mini-Commerce",
    demo: "https://mini-commerce-seven-eta.vercel.app/",
  },
  {
    title: "Kanban Task Manager",
    description:
      " A modern Kanban board built with React, TypeScript, and Tailwind CSS. Features drag-and-drop, task management, and a clean UI for organizing your workflow.",
    techStack: ["React.js", "Zustand", "Tailwind CSS", "TypeScript"],
    image: "/images/kanban.png",
    location: "github",
    github: "https://github.com/Jeffreyai7/kanban-board-Manager",
    demo: "https://kanban-board-manager.vercel.app/",
  },
  {
    title: "Ticketing Platform",
    description:
      "A platform for managing and selling tickets for events, featuring real-time updates and a user-friendly interface.",
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: "/images/ticketingplatform.png",
    location: "github",
    github: "https://github.com/Jeffreyai7/hngx-stage2-conference-ticket",
    demo: "https://hngx-stage2-conference-ticket.vercel.app/",
  },
  {
    title: "Game Hub",
    description:
      "A gameShop App for showing games with search and sort functionality using the game API.",
    techStack: ["React.js", "Chakra UI", "TypeScript"],
    image: "/images/gamehub.png",
    location: "github",
    github: "https://github.com/Jeffreyai7/gamehub",
    demo: "https://gamehub-alpha-jet.vercel.app/",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website showcasing my skills, projects, and experience with a modern design.",
  //   techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  //   image: "/images/portfolio.png",
  //   location: "github",
  //   github: "https://github.com/Jeffreyai7/portfolio",
  // },

  ];
