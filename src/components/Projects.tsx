import { projects } from '@/data/projects';
import { Achievements } from './Achievements';

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Projects & achievements</h2>
      <p className="text-muted mb-10 max-w-xl">
        A few things I&apos;ve built outside of client work, plus hackathon results.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-border bg-surface hover:border-accent/40 flex flex-col gap-3 rounded-2xl border p-6 transition-colors"
          >
            <p className="text-accent text-xs font-medium tracking-wide uppercase">
              {project.period}
            </p>
            <h3 className="text-foreground text-lg font-semibold">{project.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-surface-elevated text-muted rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <Achievements />
    </section>
  );
}
