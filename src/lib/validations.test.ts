import { describe, expect, it } from 'vitest';
import { contactFormSchema } from './validations';

describe('contactFormSchema', () => {
  it('accepts valid input', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello, I would like to get in touch about a project.',
    });

    expect(result.success).toBe(true);
  });

  it('rejects a name shorter than 2 characters', () => {
    const result = contactFormSchema.safeParse({
      name: 'J',
      email: 'jane@example.com',
      message: 'Hello, I would like to get in touch about a project.',
    });

    expect(result.success).toBe(false);
  });

  it('rejects an invalid email address', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane Doe',
      email: 'not-an-email',
      message: 'Hello, I would like to get in touch about a project.',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a message shorter than 10 characters', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'too short',
    });

    expect(result.success).toBe(false);
  });
});
