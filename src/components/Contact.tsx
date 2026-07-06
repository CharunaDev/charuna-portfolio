'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';

type SubmitState = 'idle' | 'success' | 'error';

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-2xl px-6 py-16">
      <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Get in touch</h2>
      <p className="text-muted mb-10 max-w-xl">
        Have a role, project or question in mind? Send me a message.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-foreground text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register('name')}
            className="border-border bg-surface focus:border-accent rounded-xl border px-4 py-2.5 text-sm outline-none"
          />
          {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-foreground text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            className="border-border bg-surface focus:border-accent rounded-xl border px-4 py-2.5 text-sm outline-none"
          />
          {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-foreground text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="border-border bg-surface focus:border-accent resize-none rounded-xl border px-4 py-2.5 text-sm outline-none"
          />
          {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-foreground text-background self-start rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>

        {submitState === 'success' && (
          <p className="text-sm text-emerald-400">Thanks! Your message has been sent.</p>
        )}
        {submitState === 'error' && (
          <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
