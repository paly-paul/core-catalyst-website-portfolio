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
    <div className="flex items-center justify-between gap-10 bg-gradient-to-br from-[#eef2ff] to-[#ede9fe] border-[1.5px] border-[#c7d2fe] rounded-[20px] p-[44px_48px] mt-[60px]">
      <div>
        <h2 className="font-sora text-lg sm:text-[22px] font-extrabold mb-1.5 text-text">The skills data brief</h2>
        <p className="text-sm text-muted">
          Monthly. Practical. No generic thought leadership - just what&apos;s actually working in enterprise skills programs.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2.5 flex-shrink-0">
        <input
          type="email"
          required
          disabled={subscribed}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="w-60 px-4 py-2.5 rounded-[9px] border-[1.5px] border-[#c7d2fe] bg-white text-sm outline-none focus:border-blue transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={subscribed}
          className={`px-[22px] py-2.5 rounded-[9px] font-semibold text-sm text-white transition-opacity whitespace-nowrap ${
            subscribed ? 'bg-green' : 'bg-grad-primary hover:opacity-90'
          }`}
        >
          {subscribed ? 'Subscribed ✓' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}
