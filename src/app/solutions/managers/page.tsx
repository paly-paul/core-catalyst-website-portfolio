import { Metadata } from 'next'
import { RevealWrapper } from '../../../components/ui/RevealWrapper'
import ManagerCapabilityTabs from './ManagerCapabilityTabs'

export const metadata: Metadata = {
  title: 'CoreCatalyst for People Managers - Know What Your Team Can Really Do',
  description:
    "Stop guessing which team member is ready for the next project. CoreCatalyst gives every manager a verified, real-time picture of their team's skills.",
}

const team = [
  { initials: 'AK', avatar: 'from-blue to-violet', name: 'Aisha K.', role: 'Senior Analyst', pct: 91, color: 'bg-green' },
  { initials: 'MP', avatar: 'from-green to-cyan', name: 'Marcus P.', role: 'Data Engineer', pct: 78, color: 'bg-blue' },
  { initials: 'JL', avatar: 'from-yellow to-red', name: 'Jamie L.', role: 'Associate Analyst', pct: 54, color: 'bg-yellow' },
  { initials: 'RN', avatar: 'from-violet to-cyan', name: 'Riya N.', role: 'Product Analyst', pct: 83, color: 'bg-blue' },
]

const pains = [
  {
    icon: '📋',
    title: "Skills data is stuck in HR systems you can't access",
    body: "The LMS knows what your team completed. The HRIS has their job history. But you can't see any of it without raising a ticket and waiting a week.",
    stat: 'Avg wait for team skills report: 8 business days',
  },
  {
    icon: '🤔',
    title: "You don't know who's ready for the next challenge",
    body: "Is Marcus actually strong in Python or did he just say so on his CV? Is Aisha ready to lead the Q4 data migration? You're assigning work on instinct, not evidence.",
    stat: '68% of managers say they lack visibility into team skill depth',
  },
  {
    icon: '💰',
    title: 'Career conversations feel vague without data',
    body: '“What do I need to get to the next level?” The honest answer is often “I’ll need to check with HR.” That’s not the conversation either of you wants to have.',
    stat: '42% of employees leave because of limited development clarity',
  },
]

const outcomes = [
  { num: 'Real-time', title: 'Team skills visibility', body: "See every team member's verified skills profile - reconciled from CV, LMS, assessments, and performance data - updated continuously, not quarterly.", featured: true },
  { num: '8x', title: 'Faster team insights', body: 'What used to take an 8-day HR ticket is now a dashboard you open on Monday morning with everything you need for the week.', featured: false },
  { num: '94%', title: 'Skill conflicts resolved', body: 'When CV says "Advanced Python" and LMS shows only one beginner course, CoreCatalyst surfaces the conflict for your one-click review.', featured: false },
  { num: '1-click', title: 'Gap-closure plans', body: 'For any skills gap, instantly generate a targeted development plan with specific courses, project rotations, and mentoring recommendations.', featured: false },
  { num: '3x', title: 'Better project assignments', body: 'Managers using CoreCatalyst assign work to the right person first time, 3x more often - reducing rework and building team confidence.', featured: false },
  { num: 'Weekly', title: 'Digest to your inbox', body: 'Every Monday, an automatically generated team brief - who grew, who has a new gap, which conflicts need your 30-second review.', featured: false },
]

const workflow = [
  { num: '1', title: 'Monday digest arrives in your inbox', body: 'Auto-generated summary: new skills verified, conflicts to review, anyone who completed development milestones, and any new gaps flagged by project assignments.', time: '2 min read' },
  { num: '2', title: 'Click to confirm or dispute skill conflicts', body: 'Typically 1-3 cards per week. Each takes 30 seconds. Your confirmation is the highest-weight signal in the system - it matters more than any automated source.', time: '1-2 min' },
  { num: '3', title: 'Use the team dashboard for project planning', body: "When a new project or opportunity comes in, open the team coverage view and immediately see who's ready - no instinct required.", time: 'As needed' },
  { num: '4', title: 'Run development conversations with actual data', body: 'Pull up the gap-closure plan before your 1:1. Show the person exactly where they are, what’s missing, and a concrete path to where they want to go.', time: 'In your 1:1' },
]

export default function ManagersSolution() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-grad-hero py-20">
        <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">For People Managers</span>
            </div>
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Team Intelligence</div>
            <h1 className="font-sora text-5xl font-bold leading-tight mb-6 text-text">
              Know what your team can <em className="not-italic bg-grad-primary bg-clip-text text-transparent">actually do</em>
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Stop guessing which team member is ready for the next project. CoreCatalyst gives every manager a verified, real-time picture of their team&apos;s skills - so you can assign work smarter, develop people deliberately, and have honest career conversations.
            </p>
            <div className="flex items-center gap-4">
              <a href="/demo" className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
                See the Manager View →
              </a>
              <a href="/how-it-works" className="px-6 py-3 text-blue font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                Watch 2-min demo →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider flex-1">My Team - Skills Overview</span>
              <div className="flex gap-1">
                {['Q3', 'Skills', 'Gaps'].map((t, i) => (
                  <span key={i} className={`text-[10px] font-semibold px-2 py-1 rounded-full ${i === 0 ? 'bg-blue text-white' : 'text-muted'}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3 mb-4">
                {team.map((m, i) => (
                  <div key={i} className={`flex items-center gap-3 rounded-lg p-2 ${i === 0 ? 'bg-blue-50/50' : ''}`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.avatar} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                      {m.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-text">{m.name}</div>
                      <div className="text-xs text-muted">{m.role}</div>
                    </div>
                    <div className="w-20 h-1.5 bg-bg rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-text w-9 text-right">{m.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <div className="flex-1">
                  <div className="text-xs font-bold text-amber-800">Gap detected: Jamie L.</div>
                  <div className="text-xs text-amber-700">Python - Advanced needed for Q4 project. Currently Intermediate. 8-week gap closure plan available.</div>
                </div>
                <span className="text-xs font-semibold text-blue whitespace-nowrap">View plan →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-6 bg-white border-y border-border">
        <div className="max-w-site mx-auto px-6 flex items-center justify-center gap-8 flex-wrap text-sm text-muted font-medium">
          {['Verified from CV, LMS, assessments', 'Weekly team digest in your inbox', 'One-click gap-closure plans', 'No HR ticket needed', 'Works with Workday, SAP, Oracle'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6 grid grid-cols-[1fr_380px] gap-16">
            <div>
              <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">The manager challenge</div>
              <h2 className="font-sora text-4xl font-bold mb-4 text-text">You manage people. Not job titles. Not spreadsheets.</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                When a new project lands, you need to know who&apos;s actually ready - not who has the right title. Right now, you&apos;re working from memory, hunches, and outdated data that HR has to pull for you.
              </p>
              <div className="space-y-6">
                {pains.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{p.icon}</div>
                    <div>
                      <h3 className="font-sora font-bold text-text mb-1.5">{p.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-2">{p.body}</p>
                      <div className="text-xs font-semibold text-blue">{p.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 h-fit">
              <div className="font-sora font-bold text-text mb-1">Before CoreCatalyst</div>
              <div className="text-xs text-muted mb-5">A typical Monday morning for a people manager</div>
              <div className="space-y-3 mb-5">
                <div>
                  <div className="text-[10px] font-semibold text-muted mb-1">Manager (you)</div>
                  <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 text-xs text-text">
                    Hey, can someone pull the skills profile for my Analytics team? I need to know who&apos;s ready for the Tableau migration project.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-muted mb-1 text-right">HR Ops</div>
                  <div className="bg-bg rounded-lg rounded-tr-none p-3 text-xs text-text">
                    Hi! I&apos;ll need to pull from three systems. Can you raise a ticket? Turnaround is usually 5-7 days.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-muted mb-1">Manager (you)</div>
                  <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 text-xs text-text">
                    Project kicks off Thursday... I&apos;ll just ask the team directly I guess.
                  </div>
                </div>
              </div>
              <div className="h-px bg-border mb-5" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-sora font-bold text-2xl text-text">8d</div>
                  <div className="text-xs text-muted">avg wait for a team skills report</div>
                </div>
                <div>
                  <div className="font-sora font-bold text-2xl text-text">0</div>
                  <div className="text-xs text-muted">managers said they feel confident in team data</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OUTCOMES */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">What managers get</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">From guesswork to ground truth - in your inbox every Monday</h2>
            <p className="text-lg text-muted mb-12 max-w-2xl leading-relaxed">
              CoreCatalyst gives managers direct access to verified team skills data - without raising a ticket, without waiting for HR, and without second-guessing if the data is current.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {outcomes.map((o, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-hover ${o.featured ? "border-2 border-blue bg-blue-50/30" : "border-border"}`}>
                  <div className="font-sora font-bold text-3xl text-blue mb-3">{o.num}</div>
                  <h3 className="font-sora font-bold text-base mb-2 text-text">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CAPABILITY TABS */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">How it works for managers</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">Pick the moment that matters to you</h2>
            <p className="text-lg text-muted mb-12">CoreCatalyst fits into how you already work - no new workflows, no training sessions.</p>
            <ManagerCapabilityTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* WORKFLOW */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-16">
            <div>
              <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Your weekly rhythm</div>
              <h2 className="font-sora text-3xl font-bold mb-4 text-text">Five minutes on Monday. That&apos;s the whole commitment.</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">CoreCatalyst is designed to fit your schedule, not add to it. Here&apos;s exactly what using it looks like.</p>
              <div className="space-y-6">
                {workflow.map((w) => (
                  <div key={w.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-bold text-sm">
                      {w.num}
                    </div>
                    <div>
                      <div className="font-sora font-bold text-text mb-1">{w.title}</div>
                      <p className="text-sm text-muted leading-relaxed mb-1.5">{w.body}</p>
                      <span className="text-xs font-semibold text-blue">{w.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg rounded-2xl border border-border overflow-hidden h-fit">
              <div className="p-5 border-b border-border">
                <div className="text-[11px] text-muted mb-1">From: CoreCatalyst · Monday 08:00 · To: you</div>
                <div className="font-sora font-bold text-text">📩 Your team brief - week of Sep 1</div>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm text-muted">Hi! Here&apos;s your Analytics Pod weekly update.</p>

                <div>
                  <div className="text-xs font-bold text-text mb-2">🎉 Milestones this week</div>
                  <div className="space-y-1.5">
                    <div className="flex gap-2 text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-green mt-1 flex-shrink-0" />
                      <span><strong className="text-text">Marcus P.</strong> completed Advanced SQL - now verified at Advanced level.</span>
                    </div>
                    <div className="flex gap-2 text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-green mt-1 flex-shrink-0" />
                      <span><strong className="text-text">Riya N.</strong> stakeholder management confirmed by 2 peers - updated to Advanced.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-text mb-2">⚠️ Needs your review (2 items)</div>
                  <div className="space-y-1.5">
                    <div className="flex gap-2 text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-1 flex-shrink-0" />
                      <span><strong className="text-text">Marcus P.</strong> - Python level conflict: CV says Advanced, LMS says Intermediate.</span>
                    </div>
                    <div className="flex gap-2 text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-1 flex-shrink-0" />
                      <span><strong className="text-text">Jamie L.</strong> - Data Viz conflict: assessment vs. perf review disagree.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-text mb-2">🚫 New gap flagged</div>
                  <div className="flex gap-2 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-red mt-1 flex-shrink-0" />
                    <span><strong className="text-text">Jamie L.</strong> - dbt pipelines skill required for Q4 project. Gap closure plan generated.</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="px-4 py-2 rounded-lg bg-blue text-white text-xs font-semibold">Review 2 conflicts →</span>
                  <span className="px-4 py-2 rounded-lg border border-border text-text text-xs font-semibold">Open team dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6 max-w-2xl text-center">
            <div className="text-5xl text-violet/30 font-sora mb-4">&ldquo;</div>
            <p className="text-xl text-text leading-relaxed mb-8">
              I used to dread development conversations because I never had solid data. Now I open CoreCatalyst five minutes before the 1:1 and I know exactly what to talk about. My team actually trusts the conversations more because they can see the same data I&apos;m looking at.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue to-violet text-white font-bold flex items-center justify-center">
                DM
              </div>
              <div className="text-left">
                <div className="font-semibold text-text">Daniel Mwangi</div>
                <div className="text-sm text-muted">Engineering Manager, Fintech Scale-up - team of 9</div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">Ready to actually know your team?</span>
            </div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">Your next 1:1 could be your best one yet</h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Book a 20-minute manager demo and we&apos;ll show you what your team&apos;s skills look like right now - live, using your own org&apos;s data.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/demo" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Book a Manager Demo →
              </a>
              <a href="/how-it-works" className="px-8 py-4 rounded-btn border border-border text-text font-semibold text-lg hover:border-blue transition-colors">
                See a sample team brief
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
