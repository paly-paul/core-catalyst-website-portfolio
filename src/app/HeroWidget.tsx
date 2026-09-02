'use client'

import { useState } from 'react'

export default function HeroWidget() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
      {/* Widget Header */}
      <div className="px-5 py-4 bg-gray-50 border-b border-border flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-semibold text-muted uppercase tracking-wider ml-1">Skills Reconciliation Engine</span>
      </div>

      {/* Widget Body */}
      <div className="p-5">
        {/* Conflicts */}
        <div className="mb-4">
          <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Conflicts detected - 3 skills</div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-text">Python</span>
              <div className="flex gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue">CV: Expert</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-violet-50 text-violet">LMS: Intermediate</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr: Advanced</span>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="inline-block text-xs font-bold px-2 py-1 bg-yellow-100 text-amber-700 rounded-full">Conflict</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-text">Data Analysis</span>
              <div className="flex gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue">CV: Advanced</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr: Intermediate</span>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="inline-block text-xs font-bold px-2 py-1 bg-yellow-100 text-amber-700 rounded-full">Conflict</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-text">Leadership</span>
              <div className="flex gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-violet-50 text-violet">LMS: Certified</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr: Developing</span>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="inline-block text-xs font-bold px-2 py-1 bg-yellow-100 text-amber-700 rounded-full">Conflict</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-border my-4" />

        {/* Resolved Section */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue uppercase tracking-wider mb-3">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            AI reconciled - suggested levels
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-text">Python</span>
              <span className="text-xs font-semibold text-green flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Advanced (confirmed by 2 of 3 sources)
              </span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-text">Data Analysis</span>
              <span className="text-xs font-semibold text-green flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Advanced (recency-weighted)
              </span>
            </div>
          </div>

          <div className={`rounded-lg p-3 transition-colors ${accepted ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-text">Leadership</span>
              {accepted ? (
                <span className="text-xs font-semibold text-green flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Developing (accepted)
                </span>
              ) : (
                <span className="text-xs font-semibold text-amber-700 flex items-center gap-1">⚠ Escalated for manager review</span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setAccepted(true)}
            disabled={accepted}
            className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-opacity ${
              accepted ? 'bg-green text-white' : 'bg-blue text-white hover:opacity-90'
            }`}
          >
            {accepted ? 'All suggestions accepted' : 'Accept all suggestions'}
          </button>
          <button className="flex-1 px-3 py-2 rounded-lg bg-bg border border-border text-text font-semibold text-sm hover:bg-border transition-colors">
            Review conflicts (1)
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-bg rounded-lg p-2 text-center">
            <div className="text-xs text-muted font-semibold">Auto-resolved</div>
            <div className="text-sm font-bold text-text">{accepted ? '100%' : '94%'}</div>
          </div>
          <div className="bg-bg rounded-lg p-2 text-center">
            <div className="text-xs text-muted font-semibold">Avg. process time</div>
            <div className="text-sm font-bold text-text">1.2s</div>
          </div>
          <div className="bg-bg rounded-lg p-2 text-center">
            <div className="text-xs text-muted font-semibold">Human review</div>
            <div className="text-sm font-bold text-text">{accepted ? '0%' : '6%'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
