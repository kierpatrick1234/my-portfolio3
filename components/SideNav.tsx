"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function SideNav({ name }: { name: string }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    // Expand every case study so the printed résumé is complete.
    const openAll = () =>
      document.querySelectorAll<HTMLDetailsElement>("details.project").forEach((d) => (d.open = true));
    window.addEventListener("beforeprint", openAll);

    return () => {
      io.disconnect();
      window.removeEventListener("beforeprint", openAll);
    };
  }, []);

  return (
    <header className="side">
      <a href="#about" className="side-name">
        {name}
      </a>
      <nav aria-label="Sections">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="print-btn" onClick={() => window.print()}>
        Save résumé as PDF
      </button>
    </header>
  );
}
