import { achievements } from '@/data/achievements';

export function Achievements() {
  return (
    <div className="mt-12">
      <h3 className="text-foreground mb-6 text-lg font-semibold">Hackathons & achievements</h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {achievements.map((item) => (
          <li
            key={item.title}
            className="border-border bg-surface flex items-start justify-between gap-4 rounded-2xl border p-4"
          >
            <div>
              <p className="text-foreground text-sm font-medium">{item.title}</p>
              <p className="text-muted text-xs">{item.result}</p>
            </div>
            <span className="text-accent shrink-0 text-xs font-medium">{item.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
