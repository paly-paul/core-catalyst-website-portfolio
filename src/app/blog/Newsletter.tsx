'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="grid grid-cols-2 gap-10 items-center bg-white rounded-2xl border border-border p-10">
      <div>
        <h2 className="font-sora text-2xl font-bold mb-2 text-text">The skills data brief</h2>
        <p className="text-muted">
          Monthly. Practical. No generic thought leadership - just what&apos;s actually working in enterprise skills programs.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          required
          disabled={subscribed}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={subscribed}
          className={`px-6 py-3 rounded-btn font-semibold text-sm text-white transition-opacity whitespace-nowrap ${
            subscribed ? 'bg-green' : 'bg-grad-primary hover:opacity-90'
          }`}
        >
          {subscribed ? 'Subscribed ✓' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}
