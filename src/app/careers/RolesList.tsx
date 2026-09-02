'use client'

import { useState } from 'react'

interface Role {
  dept: 'engineering' | 'product' | 'go-to-market' | 'customer'
  dotColor: string
  title: string
  location: string
  tagBg: string
  tagColor: string
  tagLabel: string
  body: string
  workOn: string[]
  lookingFor: string[]
  mailSubject: string
}

const roles: Role[] = [
  {
    dept: 'engineering',
    dotColor: 'bg-blue',
    title: 'Senior Backend Engineer',
    location: '🌍 Remote (EU/UK)',
    tagBg: '#e0e7ff',
    tagColor: '#3b5bdb',
    tagLabel: 'Engineering',
    body: "We're looking for a senior backend engineer to work on the core reconciliation pipeline and HRIS connector infrastructure. You'll own significant parts of the system end-to-end, from designing the conflict resolution algorithm improvements to shipping the write-back connectors that push resolved skill records into Workday and SAP.",
    workOn: [
      'Reconciliation engine performance at scale',
      'HRIS connector architecture (Workday, SAP, Oracle)',
      'Graph traversal optimizations on the taxonomy',
      'Data pipeline reliability and observability',
    ],
    lookingFor: [
      '5+ years backend engineering experience',
      'Strong Python or Go, PostgreSQL at scale',
      'Experience with graph databases (nice to have)',
      'Comfort with distributed systems',
    ],
    mailSubject: 'Senior Backend Engineer',
  },
  {
    dept: 'product',
    dotColor: 'bg-violet',
    title: 'Product Designer',
    location: '🌍 Remote (global)',
    tagBg: '#ede9fe',
    tagColor: '#7950f2',
    tagLabel: 'Product & Design',
    body: "We have one designer and are ready to bring in a second. You'll work across the full product surface - the reconciliation console, manager adjudication queue, and the CHRO analytics dashboard. Complex B2B data problems that need clear, opinionated UI solutions.",
    workOn: [
      'Manager-facing adjudication and review flows',
      'CHRO analytics and board reporting dashboards',
      'HR Ops reconciliation console',
      'Design system maintenance and expansion',
    ],
    lookingFor: [
      '4+ years product design, ideally B2B SaaS',
      'Strong in Figma, comfortable in code (CSS/HTML)',
      'Experience designing data-dense interfaces',
      'Portfolio showing systems thinking, not just visuals',
    ],
    mailSubject: 'Product Designer',
  },
  {
    dept: 'go-to-market',
    dotColor: 'bg-green',
    title: 'Enterprise Account Executive (EMEA)',
    location: '🏛 London or Remote (EMEA)',
    tagBg: '#dcfce7',
    tagColor: '#166534',
    tagLabel: 'Go-to-market',
    body: "We're adding our first dedicated EMEA AE as we expand beyond our initial UK and DACH customer base. You'll own the full sales cycle - from qualification through to contract - working with CHROs, VP People, and HR Ops leaders at 500-10,000 person enterprises.",
    workOn: [
      'Owning the EMEA pipeline and quota',
      'Running discovery, demo, and POC cycles',
      'Working with CS on pilot-to-expansion motions',
      'Shaping EMEA go-to-market strategy',
    ],
    lookingFor: [
      '5+ years enterprise SaaS sales, HR tech preferred',
      'Track record closing £150K+ ACV deals',
      'Experience selling to CHRO / VP People buyers',
      'Comfortable with complex multi-stakeholder deals',
    ],
    mailSubject: 'Enterprise AE EMEA',
  },
  {
    dept: 'engineering',
    dotColor: 'bg-blue',
    title: 'ML Engineer - Taxonomy & NLP',
    location: '🌍 Remote (EU/UK/US)',
    tagBg: '#e0e7ff',
    tagColor: '#3b5bdb',
    tagLabel: 'Engineering',
    body: "Our 45K-node taxonomy is the backbone of everything CoreCatalyst does. We need an ML engineer to own the taxonomy expansion, improve skill entity extraction from unstructured sources, and build the models that power conflict resolution scoring.",
    workOn: [
      'Skill entity recognition and normalization models',
      'Taxonomy expansion and curation pipelines',
      'Conflict resolution confidence scoring',
      'Embedding models for skill similarity',
    ],
    lookingFor: [
      '3+ years ML/NLP engineering in production',
      'Experience with knowledge graphs or ontologies',
      'Python, PyTorch or similar, familiarity with LLMs',
      'Comfort shipping models, not just training them',
    ],
    mailSubject: 'ML Engineer - Taxonomy',
  },
  {
    dept: 'customer',
    dotColor: 'bg-cyan',
    title: 'Implementation Consultant',
    location: '🌍 Remote (EU/UK)',
    tagBg: '#cffafe',
    tagColor: '#0e7490',
    tagLabel: 'Customer',
    body: "You'll run pilot implementations from kickoff to first live report - typically a 2-4 week sprint. This means getting into the detail of a customer's HRIS configuration, understanding their skill data landscape, and making the product work in their environment.",
    workOn: [
      'Running pilot implementations end-to-end',
      'HRIS connector configuration and testing',
      'Customer data mapping and taxonomy alignment',
      'Handoff to CSM post-go-live',
    ],
    lookingFor: [
      '3+ years in HR tech implementation or consulting',
      'Hands-on Workday, SAP, or Oracle HCM experience',
      'Comfortable with JSON, REST APIs, basic scripting',
      'Structured project management in fast timelines',
    ],
    mailSubject: 'Implementation Consultant',
  },
  {
    dept: 'customer',
    dotColor: 'bg-cyan',
    title: 'Customer Success Manager',
    location: '🌍 Remote (global)',
    tagBg: '#cffafe',
    tagColor: '#0e7490',
    tagLabel: 'Customer',
    body: "You'll own a book of Scale and Enterprise accounts post-implementation. That means driving adoption, running quarterly business reviews, spotting expansion opportunities, and being the voice of the customer back into the product team.",
    workOn: [
      'Owning retention and expansion for your accounts',
      'Quarterly business reviews with HR leaders',
      'Driving feature adoption and change management',
      'Capturing product feedback and escalating issues',
    ],
    lookingFor: [
      '3+ years CSM in B2B SaaS, HR tech preferred',
      'Comfortable working with CHRO-level stakeholders',
      'Data-driven: uses product analytics to guide conversations',
      'Strong written communicator (async team)',
    ],
    mailSubject: 'Customer Success Manager',
  },
]

const depts = [
  { key: 'all', label: 'All' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'product', label: 'Product & Design' },
  { key: 'go-to-market', label: 'Go-to-market' },
  { key: 'customer', label: 'Customer' },
]

export default function RolesList() {
  const [dept, setDept] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const visible = roles.filter((r) => dept === 'all' || r.dept === dept)

  return (
    <div>
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Open roles</div>
          <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold text-text">6 positions open right now</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {depts.map((d) => (
            <button
              key={d.key}
              onClick={() => setDept(d.key)}
              className={`px-3.5 py-[7px] rounded-[20px] text-[13px] border-[1.5px] transition-all ${
                dept === d.key ? 'bg-[#eef2ff] border-blue text-blue font-semibold' : 'bg-white border-border text-muted font-medium hover:border-blue hover:text-blue'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="text-center py-12 text-muted">
          No open roles in this department right now.{' '}
          <a href="mailto:careers@corecatalyst.ai" className="text-blue font-semibold">
            Send us a speculative application
          </a>
          .
        </div>
      ) : (
        <div className="space-y-3">
          {visible.map((r, i) => {
            const globalIndex = roles.indexOf(r)
            const isOpen = openIndex === globalIndex
            return (
              <div key={r.title} className="bg-white rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.dotColor}`} />
                    <div>
                      <div className="font-sora font-bold text-text">{r.title}</div>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-muted">{r.location}</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-muted">Full-time</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: r.tagBg, color: r.tagColor }}>
                          {r.tagLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-muted flex-shrink-0">{isOpen ? '−' : '+'}</div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 border-t border-border pt-5">
                    <p className="text-muted leading-relaxed mb-5">{r.body}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
                      <div>
                        <h4 className="font-sora font-bold text-sm text-text mb-2">You&apos;ll work on</h4>
                        <ul className="space-y-1.5 text-sm text-muted list-disc list-inside">
                          {r.workOn.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-sora font-bold text-sm text-text mb-2">We&apos;re looking for</h4>
                        <ul className="space-y-1.5 text-sm text-muted list-disc list-inside">
                          {r.lookingFor.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@corecatalyst.ai?subject=${encodeURIComponent(r.mailSubject)}`}
                      className="inline-block px-5 py-2.5 rounded-btn bg-grad-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Apply for this role →
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
