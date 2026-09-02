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
  { num: 'Real-time', suffix: '', color: 'text-green', title: 'Team skills visibility', body: "See every team member's verified skills profile - reconciled from CV, LMS, assessments, and performance data - updated continuously, not quarterly.", featured: true },
  { num: '8x', suffix: '', color: 'text-blue', title: 'Faster team insights', body: 'What used to take an 8-day HR ticket is now a dashboard you open on Monday morning with everything you need for the week.', featured: false },
  { num: '94', suffix: '%', color: 'text-green', title: 'Skill conflicts resolved', body: 'When CV says "Advanced Python" and LMS shows only one beginner course, CoreCatalyst surfaces the conflict for your one-click review.', featured: false },
  { num: '1-click', suffix: '', color: 'text-green', title: 'Gap-closure plans', body: 'For any skills gap, instantly generate a targeted development plan with specific courses, project rotations, and mentoring recommendations.', featured: false },
  { num: '3x', suffix: '', color: 'text-blue', title: 'Better project assignments', body: 'Managers using CoreCatalyst assign work to the right person first time, 3x more often - reducing rework and building team confidence.', featured: false },
  { num: 'Weekly', suffix: '', color: 'text-green', title: 'Digest to your inbox', body: 'Every Monday, an automatically generated team brief - who grew, who has a new gap, which conflicts need your 30-second review.', featured: false },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#f5f3ff] to-[#faf5ff] py-20">
        <div className="absolute -top-24 -right-16 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(64,192,87,.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#e3f9e5] to-[#f0fdf4] border border-[#b2f2bb] rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              <span className="text-xs font-semibold text-[#2b7a3d] uppercase tracking-[.06em]">For People Managers</span>
            </div>
            <div className="text-xs font-semibold text-green uppercase tracking-[.12em] mb-3.5">Team Intelligence</div>
            <h1 className="font-sora text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.1] tracking-[-.03em] mb-5 text-text">
              Know what your team can <em className="not-italic bg-gradient-to-br from-green to-blue bg-clip-text text-transparent">actually do</em>
            </h1>
            <p className="text-[17px] text-[#4a5180] mb-9 max-w-[480px] leading-[1.65]">
              Stop guessing which team member is ready for the next project. CoreCatalyst gives every manager a verified, real-time picture of their team&apos;s skills - so you can assign work smarter, develop people deliberately, and have honest career conversations.
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <a href="/demo" className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-btn bg-grad-primary text-white font-semibold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all">
                See the Manager View →
              </a>
              <a href="/how-it-works" className="inline-flex items-center gap-1.5 py-[13px] px-1 text-blue font-semibold text-sm hover:gap-2.5 transition-all">
                Watch 2-min demo →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-border shadow-[0_4px_40px_rgba(59,91,219,.11),0_1px_4px_rgba(59,91,219,.06)] overflow-hidden">
            <div className="px-[18px] py-[13px] bg-gradient-to-br from-[#f0fdf4] to-[#f3f0ff] border-b border-border flex items-center gap-2.5">
              <div className="flex gap-[5px]">
                <div className="w-[9px] h-[9px] rounded-full bg-red" />
                <div className="w-[9px] h-[9px] rounded-full bg-yellow" />
                <div className="w-[9px] h-[9px] rounded-full bg-green" />
              </div>
              <span className="text-xs font-semibold text-muted tracking-[.03em] ml-1">My Team - Skills Overview</span>
              <div className="flex gap-1 ml-auto">
                {['Q3', 'Skills', 'Gaps'].map((t, i) => (
                  <span key={i} className={`text-[10px] font-semibold px-2 py-[3px] rounded-md ${i === 0 ? 'bg-blue text-white' : 'text-muted'}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="p-[18px]">
              <div className="flex flex-col gap-2.5 mb-4">
                {team.map((m, i) => (
                  <div key={i} className={`grid grid-cols-[28px_1fr_auto_auto] items-center gap-2.5 p-[10px_12px] rounded-[10px] border ${i === 0 ? 'bg-white border-[#c5d0fa]' : 'bg-bg border-transparent'}`}>
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.avatar} text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0`}>
                      {m.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-text">{m.name}</div>
                      <div className="text-[10px] text-muted">{m.role}</div>
                    </div>
                    <div className="w-20 h-[5px] bg-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                    </div>
                    <span className="text-[11px] font-bold text-text w-[30px] text-right">{m.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#fff5f5] to-[#fff8f8] border border-[#ffc9c9] rounded-[10px] p-[12px_14px] flex items-start gap-2.5">
                <span className="text-base flex-shrink-0 mt-px">⚠️</span>
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#c92a2a] mb-0.5">Gap detected: Jamie L.</div>
                  <div className="text-[11px] text-[#862e2e] leading-[1.5]">Python - Advanced needed for Q4 project. Currently Intermediate. 8-week gap closure plan available.</div>
                </div>
                <span className="text-[11px] font-bold text-blue whitespace-nowrap self-center flex-shrink-0">View plan →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-5 bg-[#f8f9fe] border-b border-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 flex items-center justify-center gap-8 flex-wrap">
          {['Verified from CV, LMS, assessments', 'Weekly team digest in your inbox', 'One-click gap-closure plans', 'No HR ticket needed', 'Works with Workday, SAP, Oracle'].map((t, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-muted font-medium">
              <span className="text-green text-sm">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] font-bold text-green uppercase tracking-[.12em] mb-3">The manager challenge</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">You manage people. Not job titles. Not spreadsheets.</h2>
              <p className="text-base text-[#4a5180] mb-[52px] max-w-[560px] leading-[1.65]">
                When a new project lands, you need to know who&apos;s actually ready - not who has the right title. Right now, you&apos;re working from memory, hunches, and outdated data that HR has to pull for you.
              </p>
              <div className="flex flex-col gap-4">
                {pains.map((p, i) => (
                  <div key={i} className="grid grid-cols-[40px_1fr] gap-3.5 p-[18px] bg-bg rounded-[14px] border border-border hover:border-[#c5d0fa] hover:shadow-card transition-all">
                    <div className="text-xl">{p.icon}</div>
                    <div>
                      <h3 className="font-sora font-bold text-sm text-text mb-1">{p.title}</h3>
                      <p className="text-[13px] text-muted leading-[1.55]">{p.body}</p>
                      <div className="text-[11px] font-bold text-red mt-1.5">{p.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg rounded-[20px] border border-border p-6">
              <div className="font-sora font-bold text-[13px] text-text mb-1">Before CoreCatalyst</div>
              <div className="text-xs text-muted mb-5">A typical Monday morning for a people manager</div>
              <div className="flex flex-col gap-2.5 mb-5">
                <div>
                  <div className="text-[10px] font-semibold text-muted mb-[3px]">Manager (you)</div>
                  <div className="max-w-[85%] bg-white border border-border rounded-2xl rounded-bl-[4px] p-[10px_14px] text-xs text-text leading-[1.5]">
                    Hey, can someone pull the skills profile for my Analytics team? I need to know who&apos;s ready for the Tableau migration project.
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[10px] font-semibold text-muted mb-[3px]">HR Ops</div>
                  <div className="max-w-[85%] bg-gradient-to-br from-[#eef2ff] to-[#f0f4ff] border border-[#c5d0fa] rounded-2xl rounded-br-[4px] p-[10px_14px] text-xs font-medium text-blue leading-[1.5]">
                    Hi! I&apos;ll need to pull from three systems. Can you raise a ticket? Turnaround is usually 5-7 days.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-muted mb-[3px]">Manager (you)</div>
                  <div className="max-w-[85%] bg-white border border-border rounded-2xl rounded-bl-[4px] p-[10px_14px] text-xs text-text leading-[1.5]">
                    Project kicks off Thursday... I&apos;ll just ask the team directly I guess.
                  </div>
                </div>
              </div>
              <div className="h-px bg-border my-4" />
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center bg-white border border-border rounded-[10px] p-3">
                  <div className="font-sora font-extrabold text-2xl leading-none text-blue mb-[3px]">8d</div>
                  <div className="text-[10px] text-muted leading-[1.4]">avg wait for a team skills report</div>
                </div>
                <div className="text-center bg-white border border-border rounded-[10px] p-3">
                  <div className="font-sora font-extrabold text-2xl leading-none text-blue mb-[3px]">0</div>
                  <div className="text-[10px] text-muted leading-[1.4]">managers said they feel confident in team data</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OUTCOMES */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-green uppercase tracking-[.12em] mb-3">What managers get</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">From guesswork to ground truth - in your inbox every Monday</h2>
            <p className="text-base text-[#4a5180] mb-[52px] max-w-[560px] leading-[1.65]">
              CoreCatalyst gives managers direct access to verified team skills data - without raising a ticket, without waiting for HR, and without second-guessing if the data is current.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`p-[26px_22px] rounded-card border transition-all hover:-translate-y-1 hover:shadow-hover ${
                    o.featured ? 'bg-gradient-to-br from-[#f0fdf4] to-[#f0f4ff] border-[#b2f2bb]' : 'bg-white border-border'
                  }`}
                >
                  <div className={`font-sora font-extrabold text-[38px] leading-none mb-1 ${o.color}`}>
                    {o.num}
                    {o.suffix && <span className="text-[22px] text-muted">{o.suffix}</span>}
                  </div>
                  <h3 className="font-sora font-bold text-sm text-text mt-2.5 mb-2">{o.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.55]">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CAPABILITY TABS */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-green uppercase tracking-[.12em] mb-3">How it works for managers</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Pick the moment that matters to you</h2>
            <p className="text-base text-[#4a5180] mb-11 max-w-[560px] leading-[1.65]">CoreCatalyst fits into how you already work - no new workflows, no training sessions.</p>
            <ManagerCapabilityTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* WORKFLOW */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-gradient-to-br from-[#f8f9ff] to-[#f5f3ff]">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-center">
            <div>
              <div className="text-[11px] font-bold text-green uppercase tracking-[.12em] mb-3">Your weekly rhythm</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Five minutes on Monday. That&apos;s the whole commitment.</h2>
              <p className="text-base text-[#4a5180] mb-10 leading-[1.65]">CoreCatalyst is designed to fit your schedule, not add to it. Here&apos;s exactly what using it looks like.</p>
              <div className="flex flex-col">
                {workflow.map((w, i) => (
                  <div key={w.num} className={`flex gap-[18px] relative ${i === workflow.length - 1 ? '' : 'pb-7'}`}>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-extrabold text-sm flex-shrink-0">
                        {w.num}
                      </div>
                      {i !== workflow.length - 1 && (
                        <div className="flex-1 w-0.5 mt-1.5 bg-gradient-to-b from-[#c5d0fa] to-transparent" />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-sora font-bold text-[15px] text-text mb-1">{w.title}</div>
                      <p className="text-[13px] text-muted leading-[1.55]">{w.body}</p>
                      <span className="inline-block mt-1.5 text-[11px] font-semibold text-blue bg-[#eef2ff] px-2 py-0.5 rounded-full">{w.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
              <div className="bg-gradient-to-br from-[#f8f9ff] to-[#f3f0ff] border-b border-border p-[14px_20px]">
                <div className="text-[11px] text-muted mb-1">From: CoreCatalyst · Monday 08:00 · To: you</div>
                <div className="font-sora font-bold text-sm text-text">📩 Your team brief - week of Sep 1</div>
              </div>
              <div className="p-5 text-[12px] text-[#4a5180] leading-[1.65]">
                <p>Hi! Here&apos;s your Analytics Pod weekly update.</p>

                <div className="font-sora font-bold text-xs text-text mt-3.5 mb-2">🎉 Milestones this week</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                    <span><strong className="text-text">Marcus P.</strong> completed Advanced SQL - now verified at Advanced level.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                    <span><strong className="text-text">Riya N.</strong> stakeholder management confirmed by 2 peers - updated to Advanced.</span>
                  </div>
                </div>

                <div className="font-sora font-bold text-xs text-text mt-3.5 mb-2">⚠️ Needs your review (2 items)</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-1.5 flex-shrink-0" />
                    <span><strong className="text-text">Marcus P.</strong> - Python level conflict: CV says Advanced, LMS says Intermediate.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-1.5 flex-shrink-0" />
                    <span><strong className="text-text">Jamie L.</strong> - Data Viz conflict: assessment vs. perf review disagree.</span>
                  </div>
                </div>

                <div className="font-sora font-bold text-xs text-text mt-3.5 mb-2">🚫 New gap flagged</div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-red mt-1.5 flex-shrink-0" />
                  <span><strong className="text-text">Jamie L.</strong> - dbt pipelines skill required for Q4 project. Gap closure plan generated.</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 p-2 rounded-lg bg-grad-primary text-white text-[11px] font-bold">Review 2 conflicts →</button>
                  <button className="flex-1 p-2 rounded-lg bg-bg border border-border text-text text-[11px] font-bold">Open team dashboard</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="max-w-[760px] mx-auto bg-white border border-border rounded-[24px] shadow-card p-[44px_48px] text-center">
              <div className="font-sora text-[60px] leading-none text-subtle mb-1.5" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p className="font-sora text-[19px] font-semibold text-text leading-[1.5] mb-7">
                I used to dread development conversations because I never had solid data. Now I open CoreCatalyst five minutes before the 1:1 and I know exactly what to talk about. My team actually trusts the conversations more because they can see the same data I&apos;m looking at.
              </p>
              <div className="flex items-center justify-center gap-3.5">
                <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-green to-blue text-white font-sora text-sm font-bold flex items-center justify-center flex-shrink-0">
                  DM
                </div>
                <div className="text-left">
                  <div className="font-bold text-text text-sm mb-0.5">Daniel Mwangi</div>
                  <div className="text-[13px] text-muted">Engineering Manager, Fintech Scale-up - team of 9</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-gradient-to-br from-[#f0fdf4] via-[#f5f3ff] to-[#faf5ff] text-center">
          <div className="max-w-[600px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#e3f9e5] to-[#f0fdf4] border border-[#b2f2bb] rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              <span className="text-xs font-semibold text-[#2b7a3d] uppercase tracking-[.06em]">Ready to actually know your team?</span>
            </div>
            <h2 className="font-sora text-[clamp(26px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Your next 1:1 could be your best one yet</h2>
            <p className="text-base text-[#4a5180] mb-9">
              Book a 20-minute manager demo and we&apos;ll show you what your team&apos;s skills look like right now - live, using your own org&apos;s data.
            </p>
            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <a href="/demo" className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-btn bg-grad-primary text-white font-semibold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all">
                Book a Manager Demo →
              </a>
              <a href="/how-it-works" className="px-[26px] py-[13px] rounded-btn border-[1.5px] border-border text-blue font-semibold text-[15px] bg-white hover:border-blue hover:shadow-[0_0_0_3px_rgba(59,91,219,.1)] transition-all">
                See a sample team brief
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
