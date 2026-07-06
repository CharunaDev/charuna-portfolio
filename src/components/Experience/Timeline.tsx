'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '@/data/experience';
import { TimelineItem } from './TimelineItem';

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setLineHeight(entries[0].contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 55%'],
  });

  const glowHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Work experience</h2>
      <p className="text-muted mb-14 max-w-xl">
        4 years building software across fintech, ERP and healthcare.
      </p>

      <div ref={containerRef} className="relative">
        <div
          style={{ height: lineHeight }}
          className="bg-border absolute top-0 left-6 w-px md:left-1/2 md:-translate-x-1/2"
        />
        <motion.div
          style={{ height: glowHeight, opacity: glowOpacity }}
          className="from-accent to-accent-strong absolute top-0 left-6 w-px bg-gradient-to-b shadow-[0_0_16px_3px_rgba(167,139,250,0.7)] md:left-1/2 md:-translate-x-1/2"
        />

        <ul className="flex flex-col gap-16">
          {experience.map((entry, index) => (
            <TimelineItem key={entry.company} entry={entry} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
