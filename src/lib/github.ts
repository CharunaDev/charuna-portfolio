export const GITHUB_USERNAME = 'CharunaDev';

const GITHUB_API = 'https://api.github.com';
const REVALIDATE_SECONDS = 60 * 60;

export interface LanguageStat {
  name: string;
  bytes: number;
  percent: number;
}

interface GithubRepo {
  name: string;
  fork: boolean;
}

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export function aggregateLanguages(repoLanguages: Record<string, number>[]): LanguageStat[] {
  const totals = new Map<string, number>();

  for (const languages of repoLanguages) {
    for (const [name, bytes] of Object.entries(languages)) {
      totals.set(name, (totals.get(name) ?? 0) + bytes);
    }
  }

  const grandTotal = [...totals.values()].reduce((sum, bytes) => sum + bytes, 0);
  if (grandTotal === 0) return [];

  return [...totals.entries()]
    .map(([name, bytes]) => ({ name, bytes, percent: (bytes / grandTotal) * 100 }))
    .sort((a, b) => b.bytes - a.bytes);
}

export async function fetchLanguageBreakdown(): Promise<LanguageStat[]> {
  const reposRes = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
    { headers: githubHeaders(), next: { revalidate: REVALIDATE_SECONDS } },
  );

  if (!reposRes.ok) {
    throw new Error(`Failed to list repos for ${GITHUB_USERNAME}: ${reposRes.status}`);
  }

  const repos: GithubRepo[] = await reposRes.json();
  const ownRepos = repos.filter((repo) => !repo.fork);

  const perRepoLanguages = await Promise.all(
    ownRepos.map(async (repo) => {
      const res = await fetch(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repo.name}/languages`, {
        headers: githubHeaders(),
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!res.ok) return {};
      return (await res.json()) as Record<string, number>;
    }),
  );

  return aggregateLanguages(perRepoLanguages);
}
