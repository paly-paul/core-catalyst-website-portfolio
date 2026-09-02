'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const challenges = [
  'Skill data conflicts',
  'HRIS write-back',
  'Board / CHRO reporting',
  'Internal mobility',
  'Manager time on reconciliation',
  'Skills taxonomy gaps',
]

const blockedDomains = ['@gmail.com', '@yahoo.com', '@hotmail.com']

function isWorkEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && !blockedDomains.some((d) => v.endsWith(d))
}

interface FormState {
  firstname: string
  lastname: string
  email: string
  company: string
  size: string
  role: string
  hris: string
  context: string
}

const initialForm: FormState = {
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  size: '',
  role: '',
  hris: '',
  context: '',
}

export default function DemoForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'booking' | 'booked'>('idle')

  const requiredFields: (keyof FormState)[] = ['firstname', 'lastname', 'email', 'company', 'size', 'role']
  const filledCount = requiredFields.filter((f) => form[f].trim()).length
  const progress = Math.round((filledCount / requiredFields.length) * 100)

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: false }))
  }

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = {
      firstname: !form.firstname.trim(),
      lastname: !form.lastname.trim(),
      email: !isWorkEmail(form.email.trim()),
      company: !form.company.trim(),
      size: !form.size,
      role: !form.role,
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus('booking')
    setTimeout(() => setStatus('booked'), 900)
  }

  if (status === 'booked') {
    return (
      <div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-3xl text-blue mb-5"
        >
          ✓
        </motion.div>
        <h2 className="font-sora text-3xl font-bold mb-4 text-text">
          You&apos;re booked,<br />
          <span className="bg-grad-primary bg-clip-text text-transparent">{form.firstname}</span>.
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          We&apos;ve received your request and will send a calendar invite to <strong className="text-text">{form.email}</strong> within one business day.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <div className="text-xl flex-shrink-0">📅</div>
            <div>
              <strong className="block text-text text-sm mb-0.5">Check your inbox</strong>
              <span className="text-sm text-muted">A confirmation email is on its way. Add demo@corecatalyst.ai to your contacts so it doesn&apos;t land in spam.</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-xl flex-shrink-0">📄</div>
            <div>
              <strong className="block text-text text-sm mb-0.5">Read ahead (optional)</strong>
              <span className="text-sm text-muted">Our 5-min guide to skills reconciliation will make the demo 10x more useful. We&apos;ll include it in your confirmation email.</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-xl flex-shrink-0">👥</div>
            <div>
              <strong className="block text-text text-sm mb-0.5">Bring a colleague</strong>
              <span className="text-sm text-muted">The demo works best with your HR Ops lead or a key HRBP. Forward the invite when it arrives.</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/how-it-works" className="px-5 py-3 rounded-btn bg-grad-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity">
            Explore How It Works
          </Link>
          <Link href="/pricing" className="px-5 py-3 rounded-btn border border-border text-text font-semibold text-sm hover:border-blue transition-colors">
            View Pricing
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="font-sora text-2xl font-bold mb-2 text-text">Book your 30-minute session</div>
      <div className="text-muted mb-5">We&apos;ll confirm within one business day with a calendar invite.</div>

      <div className="h-1.5 bg-bg rounded-full overflow-hidden mb-6">
        <div className="h-full bg-grad-primary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              First name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              value={form.firstname}
              onChange={(e) => update('firstname', e.target.value)}
              placeholder="Sarah"
              autoComplete="given-name"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.firstname ? 'border-red' : 'border-border'}`}
            />
            {errors.firstname && <span className="text-xs text-red mt-1 block">Please enter your first name</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              Last name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              value={form.lastname}
              onChange={(e) => update('lastname', e.target.value)}
              placeholder="Chen"
              autoComplete="family-name"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.lastname ? 'border-red' : 'border-border'}`}
            />
            {errors.lastname && <span className="text-xs text-red mt-1 block">Please enter your last name</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Work email <span className="text-red">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="sarah.chen@company.com"
            autoComplete="email"
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.email ? 'border-red' : 'border-border'}`}
          />
          {errors.email && (
            <span className="text-xs text-red mt-1 block">
              {form.email ? 'Please use a work email address' : 'Please enter your work email'}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              Company <span className="text-red">*</span>
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
              placeholder="Acme Corp"
              autoComplete="organization"
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.company ? 'border-red' : 'border-border'}`}
            />
            {errors.company && <span className="text-xs text-red mt-1 block">Please enter your company</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1.5">
              Company size <span className="text-red">*</span>
            </label>
            <select
              value={form.size}
              onChange={(e) => update('size', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.size ? 'border-red' : 'border-border'}`}
            >
              <option value="" disabled>Select range</option>
              <option value="100-500">100 - 500 employees</option>
              <option value="500-2000">500 - 2,000 employees</option>
              <option value="2000-10000">2,000 - 10,000 employees</option>
              <option value="10000+">10,000+ employees</option>
            </select>
            {errors.size && <span className="text-xs text-red mt-1 block">Please select company size</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Your role <span className="text-red">*</span>
          </label>
          <select
            value={form.role}
            onChange={(e) => update('role', e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 ${errors.role ? 'border-red' : 'border-border'}`}
          >
            <option value="" disabled>Select your role</option>
            <option value="chro">CHRO / Chief People Officer</option>
            <option value="vp-people">VP / Director of People</option>
            <option value="hr-ops">HR Operations Lead</option>
            <option value="hrbp">HR Business Partner</option>
            <option value="manager">People Manager</option>
            <option value="it-systems">HR Systems / IT</option>
            <option value="other">Other</option>
          </select>
          {errors.role && <span className="text-xs text-red mt-1 block">Please select your role</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">Primary HRIS</label>
          <select
            value={form.hris}
            onChange={(e) => update('hris', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20"
          >
            <option value="" disabled>Which system do you use?</option>
            <option value="workday">Workday</option>
            <option value="sap">SAP SuccessFactors</option>
            <option value="oracle">Oracle HCM</option>
            <option value="bamboo">BambooHR</option>
            <option value="rippling">Rippling</option>
            <option value="personio">Personio</option>
            <option value="adp">ADP</option>
            <option value="other">Other / multiple systems</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">What&apos;s your biggest challenge right now?</label>
          <div className="flex flex-wrap gap-2">
            {challenges.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleChip(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  selectedChips.includes(c) ? 'bg-blue text-white border-blue' : 'bg-white text-muted border-border hover:border-blue'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">Anything else we should know?</label>
          <textarea
            value={form.context}
            onChange={(e) => update('context', e.target.value)}
            placeholder="e.g. We are mid-Workday migration and have skill data across 3 systems..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'booking'}
          className="w-full px-7 py-3.5 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md disabled:opacity-60"
        >
          {status === 'booking' ? 'Booking...' : 'Book My Demo →'}
        </button>
        <p className="text-xs text-muted text-center">
          No spam. We&apos;ll only contact you about your demo request. <br />
          By submitting you agree to our Privacy Policy.
        </p>
      </form>
    </div>
  )
}
