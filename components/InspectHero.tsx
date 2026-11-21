"use client";

import { useEffect, useRef, useState } from "react";

type Metrics = { w: number; h: number; fs: number };

/**
 * The name, shown as if selected in a design tool's inspect mode.
 * The measurements are the heading's real rendered size and update on resize.
 */
export function InspectHero({ firstName, lastName }: { firstName: string; lastName: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [m, setM] = useState<Metrics | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setM({
        w: Math.round(r.width),
        h: Math.round(r.height),
        fs: Math.round(parseFloat(getComputedStyle(el).fontSize)),
      });
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="inspect" data-ready={m ? "" : undefined}>
      <div className="dim dim-x" aria-hidden="true">
        <span>{m ? m.w : "—"}</span>
      </div>
      <h1 ref={ref} className="name">
        {firstName}
        <br />
        {lastName}
      </h1>
      <div className="dim dim-y" aria-hidden="true">
        <span>{m ? m.h : "—"}</span>
      </div>
      <i className="handle tl" aria-hidden="true" />
      <i className="handle tr" aria-hidden="true" />
      <i className="handle bl" aria-hidden="true" />
      <i className="handle br" aria-hidden="true" />
      <span className="layer-tag" aria-hidden="true">
        Heading 1, {m ? `${m.fs}px` : "…"}, weight 800
      </span>
    </div>
  );
}
