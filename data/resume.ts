// Edit everything about your résumé here. Components read from this file only.

export const profile = {
  firstName: "Chonadel",
  lastName: "Terrado",
  role: "UI/UX web developer",
  location: "the Philippines",
  availability: "Open to internships and freelance work",
  summary:
    "I design interfaces and then build them myself, so nothing gets lost between the mockup and the browser. I care about clear hierarchy, honest copy, and pages that work for everyone, including people on slow phones and screen readers.",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],
};

export type Project = {
  title: string;
  year: string;
  role: string;
  oneLiner: string;
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "IT110",
    year: "2026",
    role: "UX research, UI design, front-end",
    oneLiner: "Turned a 14-screen enrollment form into a 4-step flow students can finish on a phone.",
    problem:
      "Students dropped out of online enrollment halfway through. The old form asked for the same details several times and broke on mobile screens.",
    approach: [
      "Interviewed 12 students and watched 5 of them try to enroll.",
      "Mapped every field and removed duplicates, cutting 41 fields to 23.",
      "Built a responsive prototype in Next.js with saved progress between steps.",
    ],
    outcome: "In testing, completion went from 3 of 5 students to 5 of 5, and median time dropped from 18 to 7 minutes.",
    stack: ["Figma", "Next.js", "TypeScript", "CSS Modules"],
  },
  {
    title: "Barangay health appointment app",
    year: "2025",
    role: "Product design, front-end",
    oneLiner: "A booking tool for a local health center, designed for first-time smartphone users.",
    problem:
      "Patients lined up before dawn to get a number. Staff had no way to see the day's demand ahead of time.",
    approach: [
      "Designed large tap targets and plain Filipino and English copy.",
      "Added SMS reminders so patients without data plans still get notified.",
      "Built a staff dashboard that shows booked slots per hour.",
    ],
    outcome: "Piloted for one month with 300+ bookings and shorter morning queues.",
    stack: ["React", "Node.js", "PostgreSQL", "Twilio"],
  },
  {
    title: "Design system for a student org",
    year: "2025",
    role: "Design system lead",
    oneLiner: "Shared colors, type, and components so 8 volunteer designers ship pages that match.",
    problem:
      "Every event page looked different, and new volunteers rebuilt the same buttons from scratch.",
    approach: [
      "Audited 30 existing pages and grouped repeated patterns.",
      "Defined tokens for color, spacing, and type, checked for WCAG AA contrast.",
      "Documented 18 components with usage notes and examples.",
    ],
    outcome: "New pages now take about a day instead of a week to design and publish.",
    stack: ["Figma", "Storybook", "React"],
  },
];

export const experience = [
  {
    start: "2026",
    end: "Present",
    title: "Freelance UI/UX developer",
    org: "Self-employed",
    points: [
      "Design and build websites for small local businesses.",
      "Run short usability tests before each launch.",
    ],
  },
  {
    start: "2025",
    end: "2026",
    title: "Front-end intern",
    org: "Sample Digital Studio",
    points: [
      "Built responsive landing pages from Figma designs.",
      "Fixed accessibility issues found in audits, such as missing labels and low contrast.",
    ],
  },
  {
    start: "2023",
    end: "Present",
    title: "BS Information Technology",
    org: "Your University",
    points: ["Focus on web development and human–computer interaction."],
  },
];

export const skills = [
  {
    group: "Design",
    items: ["User research", "Wireframing", "Prototyping", "Design systems", "Usability testing"],
  },
  {
    group: "Build",
    items: ["HTML and CSS", "JavaScript and TypeScript", "React and Next.js", "Responsive layout", "Accessibility (WCAG)"],
  },
  {
    group: "Tools",
    items: ["Figma", "Git and GitHub", "VS Code", "Vercel", "Storybook"],
  },
];
