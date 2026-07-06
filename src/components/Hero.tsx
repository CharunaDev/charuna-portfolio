import Image from 'next/image';

export function Hero() {
  return (
    <section id="top" className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pt-20 pb-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-accent glow-text">Charuna</span>
          </h1>
          <p className="text-muted max-w-xl text-base leading-relaxed sm:text-lg">
            Software Engineer with <span className="text-foreground font-medium">4+ years</span>{' '}
            of experience across{' '}
            <span className="text-foreground font-medium">C#, .NET, React and Angular</span>.
            Genuinely tech-enthusiastic — I enjoy picking up new languages, frameworks and tools
            and putting them to work on real problems.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="text-muted hover:text-accent text-sm font-medium transition-colors"
            >
              See experience →
            </a>
          </div>
        </div>
        <div className="border-border bg-surface relative mx-auto aspect-square w-56 overflow-hidden rounded-full border shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)] sm:w-72">
          <Image
            src="/profile.jpg"
            alt="Charuna Amarasinghe"
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="border-border bg-surface flex flex-wrap items-center gap-x-10 gap-y-4 rounded-2xl border px-8 py-6">
        <div>
          <p className="text-accent text-3xl font-semibold">4+</p>
          <p className="text-muted text-sm">years of experience</p>
        </div>
        <div className="bg-border hidden h-10 w-px sm:block" />
        <div>
          <p className="text-accent text-3xl font-semibold">4</p>
          <p className="text-muted text-sm">companies</p>
        </div>
        <div className="bg-border hidden h-10 w-px sm:block" />
        <div>
          <p className="text-accent text-3xl font-semibold">4</p>
          <p className="text-muted text-sm">hackathons</p>
        </div>
      </div>
    </section>
  );
}
