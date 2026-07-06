import { describe, expect, it } from 'vitest';
import { aggregateLanguages } from './github';

describe('aggregateLanguages', () => {
  it('sums bytes per language across repos and computes percentages', () => {
    const result = aggregateLanguages([
      { JavaScript: 300, CSS: 100 },
      { JavaScript: 100, TypeScript: 500 },
    ]);

    expect(result).toEqual([
      { name: 'TypeScript', bytes: 500, percent: 50 },
      { name: 'JavaScript', bytes: 400, percent: 40 },
      { name: 'CSS', bytes: 100, percent: 10 },
    ]);
  });

  it('returns an empty array when there are no repos or all are empty', () => {
    expect(aggregateLanguages([])).toEqual([]);
    expect(aggregateLanguages([{}, {}])).toEqual([]);
  });

  it('sorts languages from most to least bytes', () => {
    const result = aggregateLanguages([{ A: 1, B: 3, C: 2 }]);
    expect(result.map((r) => r.name)).toEqual(['B', 'C', 'A']);
  });
});
