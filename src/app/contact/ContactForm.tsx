'use client'

import { useState, FormEvent } from 'react'

const reasons = [
  { key: 'general', label: 'General enquiry' },
  { key: 'sales', label: 'Sales / pricing' },
  { key: 'support', label: 'Support' },
  { key: 'press', label: 'Press / analyst' },
  { key: 'partnership', label: 'Partnership' },
]

const blockedDomains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'icloud', 'aol', 'proton']

function isWorkEmail(v: string) {
  const domain = v.split('@')[1] || ''
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && !blockedDomains.some((d) => domain.startsWith(d))
}

export default function ContactForm() {
  const [reason, setReason] = useState('general')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [size, setSize] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; msg?: boolean }>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = {
      name: !name.trim(),
      email: !isWorkEmail(email.trim()),
      msg: !message.trim(),
    }
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.email || nextErrors.msg) return

    setStatus('sending')
    setTimeout(() => setStatus('sent'), 700)
  }

  if (status === 'sent') {
    return (
      <div className="bg-white rounded-2xl border border-border p-10 text-center">
        <div className="text-4xl mb-4">📫</div>
        <h2 className="font-sora text-xl sm:text-2xl font-bold mb-3 text-text">Message sent</h2>
        <p className="text-muted max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll review your message and get back to you at <strong className="text-text">{email}</strong> within one business day.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="font-sora text-lg sm:text-[22px] font-extrabold mb-2 text-text">Send us a message</div>
      <div className="text-sm text-muted mb-7">Not sure which team you need? Fill this in and we&apos;ll route it correctly.</div>

      <div className="flex flex-wrap gap-2 mb-6">
        {reasons.map((r) => (
          <button
            key={r.key}
            type="button"
            onClick={() => setReason(r.key)}
            className={`px-3.5 py-[7px] rounded-[20px] text-[13px] border-[1.5px] transition-all select-none ${
              reason === r.key ? 'bg-[#eef2ff] border-blue text-blue font-semibold' : 'bg-white border-border text-muted font-medium hover:border-blue hover:text-blue'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              Full name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${
                errors.name ? 'border-red' : 'border-border'
              }`}
            />
            {errors.name && <span className="text-xs text-red mt-1 block">Required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              Work email <span className="text-red">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${
                errors.email ? 'border-red' : 'border-border'
              }`}
            />
            {errors.email && <span className="text-xs text-red mt-1 block">Enter a valid work email</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Corp"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">Company size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20"
            >
              <option value="" disabled>Select...</option>
              <option>Under 500</option>
              <option>500 - 2,000</option>
              <option>2,000 - 10,000</option>
              <option>10,000+</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-text mb-1.5">
            Message <span className="text-red">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you're working on or what you need..."
            rows={5}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 resize-none ${
              errors.msg ? 'border-red' : 'border-border'
            }`}
          />
          {errors.msg && <span className="text-xs text-red mt-1 block">Required</span>}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send message →'}
        </button>
        <p className="text-xs text-muted mt-3">We typically respond within one business day.</p>
      </form>
    </div>
  )
}
