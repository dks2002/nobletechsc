"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '../ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message should be at least 10 characters')
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');

  const onSubmit = async (values: FormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" {...register('name')} placeholder="Your name" />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" {...register('email')} placeholder="you@example.com" />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>
        <div className="field sm:col-span-2">
          <label htmlFor="phone">Phone</label>
          <input id="phone" {...register('phone')} placeholder="Optional" />
          {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
        </div>
        <div className="field sm:col-span-2">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} {...register('message')} placeholder="How can we help?" />
          {errors.message && <p className="error-msg">{errors.message.message}</p>}
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send Message'}</Button>
        {status === 'success' && <span className="text-sm text-green-600">Message sent!</span>}
        {status === 'error' && <span className="text-sm text-red-600">Something went wrong.</span>}
      </div>
    </form>
  );
}
