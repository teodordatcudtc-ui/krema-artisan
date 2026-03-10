'use client';

import { useState, FormEvent } from 'react';

const occasions = [
  'Nuntă',
  'Botez',
  'Aniversare',
  'Eveniment corporativ',
  'Comanda personalizată',
  'Altele',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async (replace with actual API call)
    await new Promise((res) => setTimeout(res, 1200));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-playfair text-3xl text-chocolate mb-3">Mulțumim!</h3>
        <p className="font-raleway text-chocolate/60 text-sm max-w-xs leading-relaxed">
          Mesajul vostru a fost primit. Vă vom contacta în cel mai scurt timp posibil.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formular de contact">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="form-label">Nume *</label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Numele dumneavoastră"
            className="form-input"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="form-label">Email *</label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="email@exemplu.ro"
            className="form-input"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="form-label">Telefon</label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="07xx xxx xxx"
            className="form-input"
          />
        </div>

        {/* Occasion */}
        <div>
          <label htmlFor="cf-occasion" className="form-label">Ocazie</label>
          <select
            id="cf-occasion"
            value={form.occasion}
            onChange={(e) => update('occasion', e.target.value)}
            className="form-input appearance-none cursor-pointer"
          >
            <option value="">Selectați ocazia</option>
            {occasions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="sm:col-span-2">
          <label htmlFor="cf-date" className="form-label">Data evenimentului</label>
          <input
            id="cf-date"
            type="date"
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor="cf-message" className="form-label">Mesaj *</label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Descrieți dorințele dumneavoastră…"
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold w-full sm:w-auto flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <span className="block w-4 h-4 border-2 border-chocolate/30 border-t-chocolate rounded-full animate-spin" />
            Se trimite…
          </>
        ) : (
          'Trimite mesajul'
        )}
      </button>
    </form>
  );
}
