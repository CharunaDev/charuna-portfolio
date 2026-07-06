'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import type { LanguageStat } from '@/lib/github';

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  'C#': '#a179dc',
  Java: '#ea4335',
  CSS: '#1baf7a',
  HTML: '#e34c26',
  PHP: '#777bb4',
  'ASP.NET': '#512bd4',
};

const FALLBACK_COLOR = '#a78bfa';
const STAGGER_SECONDS = 0.12;
const DURATION_SECONDS = 1;

interface LanguageBarProps {
  language: LanguageStat;
  index: number;
  isInView: boolean;
}

function LanguageBar({ language, index, isInView }: LanguageBarProps) {
  const [displayPercent, setDisplayPercent] = useState(0);
  const displayPercentRef = useRef(0);
  const color = LANGUAGE_COLORS[language.name] ?? FALLBACK_COLOR;
  const delay = index * STAGGER_SECONDS;

  useEffect(() => {
    const target = isInView ? language.percent : 0;
    const controls = animate(displayPercentRef.current, target, {
      duration: DURATION_SECONDS,
      delay: isInView ? delay : 0,
      ease: 'easeOut',
      onUpdate: (value) => {
        displayPercentRef.current = value;
        setDisplayPercent(value);
      },
    });
    return () => controls.stop();
  }, [isInView, language.percent, delay]);

  return (
    <li>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-foreground font-medium">{language.name}</span>
        <span className="text-muted tabular-nums">{displayPercent.toFixed(1)}%</span>
      </div>
      <div className="bg-surface-elevated h-2 w-full overflow-hidden rounded-full">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${language.percent}%` : 0 }}
          transition={{ duration: DURATION_SECONDS, delay: isInView ? delay : 0, ease: 'easeOut' }}
        />
      </div>
    </li>
  );
}

export function LanguageBars({ languages }: { languages: LanguageStat[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { margin: '-10% 0px' });

  return (
    <ul ref={ref} className="flex flex-col gap-4">
      {languages.map((language, index) => (
        <LanguageBar key={language.name} language={language} index={index} isInView={isInView} />
      ))}
    </ul>
  );
}
