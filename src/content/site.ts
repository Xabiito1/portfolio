import type { ContentImage, ExperienceItem } from "./types";

export const site = {
  // TODO: add full name if you want it in titles and structured data.
  name: "Xabier",
  logo: "XB.",
  role: "Frontend Developer",
  location: "A Coruña, Spain",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  description:
    "Frontend developer building web applications with React, Next.js, TypeScript and Django, with a focus on clear interfaces and real-world products.",
} as const;

export const contactSection = {
  title: "Open to new opportunities.",
  text: "If you'd like to work together, feel free to get in touch.",
};

export const contact: {
  email: string;
  linkedin: string | null;
  github: string | null;
  cv: string | null;
} = {
  email: "xpineiroperez@gmail.com",
  linkedin: "https://linkedin.com/in/xabierp",
  // TODO: add GitHub profile URL. Hidden while null.
  github: null,
  // TODO: add the PDF to /public (e.g. /public/cv.pdf) and set "/cv.pdf". Hidden while null.
  cv: null,
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const hero: {
  title: string;
  intro: string;
  facts: { label: string; value: string }[];
  /** Optional photo next to the text. Leave null until there is a real one. */
  image: ContentImage | null;
} = {
  title: "Frontend developer building clean, usable web products.",
  intro:
    "I build web applications with React, Next.js, TypeScript and Django, focusing on clear interfaces and products that are easy to use.",
  facts: [
    { label: "Currently", value: "Product Developer at Nubico Tech" },
    { label: "Based in", value: "A Coruña, Spain · Remote" },
    { label: "Experience", value: "2+ years" },
  ],
  image: null,
};

export const principles = [
  {
    title: "Understand the problem",
    text: "Understand the user, requirements and constraints before building.",
  },
  {
    title: "Build clean solutions",
    text: "Simple interfaces and maintainable code without unnecessary complexity.",
  },
  {
    title: "Work end to end",
    text: "Comfortable working from frontend to APIs and Django when needed.",
  },
] as const;

export const stack = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS"],
  },
  {
    label: "Backend",
    items: ["Django", "Django REST Framework", "Python"],
  },
  {
    label: "Tools & Data",
    items: ["PostgreSQL", "MariaDB", "Redis", "Docker", "Celery", "Git", "GitHub", "Figma"],
  },
] as const;

/** Most recent first. */
export const experience: ExperienceItem[] = [
  {
    role: "Product Developer",
    company: "Nubico Tech",
    location: "Remote · A Coruña",
    start: "2025-01",
    description:
      "Web product development, mainly frontend: interfaces, UX/UI and integration with the backend.",
  },
  {
    role: "UX/UI Designer",
    company: "Freelance",
    location: "Remote",
    start: "2024-12",
    end: "2025-04",
    description:
      "Interface design, wireframes, prototypes and responsive solutions for digital products.",
  },
  {
    role: "Frontend Developer",
    company: "Nubico Tech",
    location: "Remote",
    start: "2024-06",
    end: "2024-12",
    description:
      "Built and maintained web interfaces, implemented new features and integrated APIs.",
  },
];
