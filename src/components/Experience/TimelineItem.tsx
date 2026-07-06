'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ExperienceEntry } from '@/types';

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { margin: '-35% 0px -35% 0px' });
  const isRight = index % 2 === 1;

  return (
    <li ref={ref} className="relative pl-16 md:pl-0">
      <span
        className={`absolute top-1.5 left-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-all duration-300 md:left-1/2 ${
          isInView
            ? 'bg-accent border-accent-strong shadow-[0_0_14px_4px_rgba(167,139,250,0.65)]'
            : 'bg-surface border-border'
        }`}
      />
      <div className="md:grid md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: isRight ? 24 : -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`border-border bg-surface rounded-2xl border p-6 ${
            isRight ? 'md:col-start-2' : 'md:col-start-1 md:text-right'
          }`}
        >
          <p className="text-accent text-xs font-medium tracking-wide uppercase">{entry.period}</p>
          <h3 className="text-foreground mt-1 text-lg font-semibold">{entry.role}</h3>
          <p className="text-muted text-sm">{entry.company}</p>
          <ul className="text-muted mt-3 flex flex-col gap-3 text-sm leading-relaxed">
            {entry.highlights.map((point) => (
              <li key={point.text}>
                <p>{point.text}</p>
                {point.tags.length > 0 && (
                  <ul
                    className={`mt-2 flex flex-wrap gap-1.5 ${
                      isRight ? '' : 'md:justify-end'
                    }`}
                  >
                    {point.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-surface-elevated text-muted border-accent/30 rounded-full border px-2.5 py-0.5 text-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </li>
  );
}
