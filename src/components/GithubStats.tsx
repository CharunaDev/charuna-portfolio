import { fetchLanguageBreakdown, GITHUB_USERNAME } from '@/lib/github';
import { LanguageBars } from '@/components/LanguageBars';

const MAX_LANGUAGES = 8;

export async function GithubStats() {
  let languages: Awaited<ReturnType<typeof fetchLanguageBreakdown>> = [];
  let failed = false;

  try {
    languages = await fetchLanguageBreakdown();
  } catch (error) {
    console.error('GithubStats: failed to load language breakdown', error);
    failed = true;
  }

  const topLanguages = languages.slice(0, MAX_LANGUAGES);

  return (
    <section id="github-stats" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Github activity</h2>
      <p className="text-muted mb-10 max-w-xl">
        Live language breakdown across my public repositories, refreshed hourly from the{' '}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub API
        </a>
        .
      </p>

      <div className="border-border bg-surface rounded-2xl border p-6">
        {failed || topLanguages.length === 0 ? (
          <p className="text-muted text-sm">
            Couldn&apos;t load GitHub stats right now — check back shortly.
          </p>
        ) : (
          <LanguageBars languages={topLanguages} />
        )}
      </div>
    </section>
  );
}
