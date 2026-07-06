import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the name heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /hi, i'm charuna/i })).toBeInTheDocument();
  });

  it('renders a working Download CV link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /download cv/i });
    expect(link).toHaveAttribute('href', '/resume.pdf');
    expect(link).toHaveAttribute('download');
  });
});
