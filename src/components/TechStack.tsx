import { skillGroups } from '@/data/skills';

export function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Technology I work with</h2>
      <p className="text-muted mb-10 max-w-xl">
        A snapshot of the languages, frameworks and tools from my day-to-day work.
      </p>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-muted mb-4 text-sm font-semibold tracking-wide uppercase">
              {group.category}
            </h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className="border-border bg-surface hover:border-accent/40 flex items-center gap-3 rounded-2xl border px-4 py-4 transition-colors"
                  >
                    {Icon ? (
                      <Icon size={22} color={skill.color} aria-hidden />
                    ) : (
                      <span
                        className="flex h-[22px] w-[22px] items-center justify-center rounded-md text-[10px] font-semibold"
                        style={{ backgroundColor: `${skill.color}33`, color: skill.color }}
                        aria-hidden
                      >
                        {skill.name.slice(0, 1)}
                      </span>
                    )}
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
