import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LanguageBars } from './LanguageBars';

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];
  private callback: IntersectionObserverCallback;
  private target: Element | null = null;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe = vi.fn((target: Element) => {
    this.target = target;
  });
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting, target: this.target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
}

describe('LanguageBars', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('animates the bar and percentage up when scrolled into view, and back down when scrolled out', async () => {
    render(<LanguageBars languages={[{ name: 'JavaScript', bytes: 100, percent: 70 }]} />);

    expect(screen.getByText('0.0%')).toBeInTheDocument();

    const observer = MockIntersectionObserver.instances[0];
    observer.trigger(true);

    await waitFor(() => expect(screen.queryByText('0.0%')).not.toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('70.0%')).toBeInTheDocument());

    observer.trigger(false);

    await waitFor(() => expect(screen.getByText('0.0%')).toBeInTheDocument());
  });
});
