import type { ContentImage, ExperienceItem } from "./types";
import heroImage from "./images/placeholder/hero.png";

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
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
] as const;

export const hero: {
  eyebrow: string;
  title: string;
  intro: string;
  image: ContentImage | null;
} = {
  eyebrow: "Frontend developer",
  title: "Frontend developer building clean, usable web products.",
  intro:
    "I build web applications with React, Next.js, TypeScript and Django, with a focus on clear interfaces and real-world products.",
  // TODO: replace with a real photo (you, your desk, A Coruña…) or set to null to hide it.
  image: { src: heroImage, alt: "" },
};

export const principles = [
  {
    icon: "understand",
    title: "Understand the problem",
    text: "Before building anything, I try to understand what the product needs: who uses it, what they are trying to do and what the constraints are.",
  },
  {
    icon: "build",
    title: "Build clean solutions",
    text: "Simple interfaces and simple code. Easy to use, easy to maintain and able to grow with the product.",
  },
  {
    icon: "endToEnd",
    title: "Work end to end",
    text: "Most of my work is frontend, but I am comfortable integrating APIs and working on the Django backend when needed.",
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
    label: "Other",
    items: ["PostgreSQL", "MariaDB", "Redis", "Celery", "Docker", "Git", "GitHub", "Figma"],
  },
] as const;

/** Most recent first. */
export const experience: ExperienceItem[] = [
  {
    role: "Product Developer · Frontend & UX/UI",
    company: "Nubico Tech",
    location: "Remote · A Coruña",
    start: "2025-01",
    description:
      "Web product development, mainly on the frontend, interfaces and UX/UI, plus integration with the backend.",
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
