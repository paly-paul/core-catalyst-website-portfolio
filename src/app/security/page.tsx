import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'
import SecuritySidenav from './SecuritySidenav'

export const metadata: Metadata = {
  title: 'Security',
  description:
    "Enterprise-grade security, built in from day one. Your employees' skill data is some of the most sensitive information in your organization. We treat it that way.",
}

const certs = [
  { icon: '🔒', bg: '#dcfce7', title: 'SOC 2 Type II', sub: 'Audited annually' },
  { icon: '🇪🇺', bg: '#dbeafe', title: 'GDPR Compliant', sub: 'EU data residency available' },
  { icon: '🌐', bg: '#ede9fe', title: 'CCPA Compliant', sub: 'California consumer rights' },
  { icon: '🛡', bg: '#fff7ed', title: 'ISO 27001', sub: 'In progress - 2026' },
]

const navItems = [
  { id: 'data-isolation', label: 'Data isolation' },
  { id: 'encryption', label: 'Encryption' },
  { id: 'access-control', label: 'Access control' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'data-ownership', label: 'Data ownership' },
  { id: 'incident', label: 'Incident response' },
  { id: 'disclosure', label: 'Vulnerability disclosure' },
]

const dataFlows = [
  { from: 'Your HRIS (Workday / SAP / Oracle)', to: 'CoreCatalyst Connector', badge: 'TLS 1.3' },
  { from: 'Reconciliation Engine', to: 'Tenant Database', badge: 'AES-256 at rest' },
  { from: 'CoreCatalyst API', to: 'Your Browser / Integration', badge: 'TLS 1.3 + HSTS' },
  { from: 'HRIS Write-back', to: 'Your HRIS (Workday / SAP / Oracle)', badge: 'TLS 1.3 + OAuth 2.0' },
]

const complianceRows = [
  { framework: 'SOC 2 Type II', status: 'Certified', ok: true, scope: 'Security, Availability, Confidentiality trust service criteria' },
  { framework: 'GDPR', status: 'Compliant', ok: true, scope: 'Data processing agreements, DPO appointed, EU data residency available' },
  { framework: 'CCPA', status: 'Compliant', ok: true, scope: 'Consumer rights requests, deletion workflows, data inventory maintained' },
  { framework: 'ISO 27001', status: 'In progress', ok: false, scope: 'Audit scheduled Q2 2026' },
  { framework: 'HIPAA', status: 'On roadmap', ok: false, scope: 'Available as Enterprise add-on for healthcare customers' },
]

export default function Security() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#faf5ff] pt-[72px] pb-16 text-center">
        <div className="max-w-site mx-auto px-6">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[.09em] text-blue bg-[#e0e7ff] rounded-full px-3.5 py-1 mb-5">
            Security
          </span>
          <h1 className="font-sora text-[clamp(30px,4.5vw,50px)] font-extrabold leading-[1.12] mb-4 text-text">
            Enterprise-grade security,<br />
            <span className="bg-grad-primary bg-clip-text text-transparent">built in from day one</span>
          </h1>
          <p className="text-[17px] text-muted max-w-[560px] mx-auto mb-10 leading-[1.65]">
            Your employees&apos; skill data is some of the most sensitive information in your organization. We treat it that way.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {certs.map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white border-[1.5px] border-border rounded-xl px-5 py-3 shadow-[0_2px_12px_rgba(59,91,219,.07)]">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: c.bg }}>
                  {c.icon}
                </div>
                <div className="text-left">
                  <strong className="block text-[13px] font-bold text-text">{c.title}</strong>
                  <span className="text-[11px] text-muted">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
          <SecuritySidenav items={navItems} />

          <div className="space-y-20">
            <RevealWrapper>
              <div id="data-isolation">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Isolation</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Every customer is a separate tenant</h2>
                <p className="text-muted leading-relaxed mb-4">
                  CoreCatalyst uses <strong className="text-text">hard multi-tenancy</strong>: each customer&apos;s data lives in an isolated database schema with a dedicated encryption key. There is no shared data layer between tenants - a query from one customer&apos;s environment can never reach another&apos;s rows.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Tenant identifiers are enforced at the application layer, the database layer, and the API gateway. A misconfigured query that drops a tenant filter returns zero rows rather than another customer&apos;s data.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🔄', title: 'Isolated schemas', body: 'Each tenant has a dedicated PostgreSQL schema. Cross-schema queries are blocked by policy at the database role level.' },
                    { icon: '🔑', title: 'Per-tenant encryption keys', body: 'Unique AES-256 keys per tenant, rotated annually. Master keys stored in AWS KMS with hardware-backed HSMs.' },
                    { icon: '🌐', title: 'Network isolation', body: 'Each tenant environment runs in a dedicated VPC subnet. Lateral movement between tenant networks is blocked at the security group level.' },
                    { icon: '📊', title: 'Separate audit logs', body: 'Audit trails are tenant-scoped and write-only for the customer. CoreCatalyst support staff cannot modify or delete them.' },
                  ].map((f, i) => (
                    <div key={i} className="p-[20px_22px] rounded-xl border-[1.5px] border-border bg-white">
                      <div className="text-[22px] mb-2.5">{f.icon}</div>
                      <h4 className="font-sora font-bold text-sm mb-1.5 text-text">{f.title}</h4>
                      <p className="text-[13px] text-muted leading-[1.6] m-0">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="encryption">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Encryption</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Encrypted everywhere, always</h2>
                <p className="text-muted leading-relaxed mb-8">
                  All data is encrypted at rest using <strong className="text-text">AES-256</strong> and in transit using <strong className="text-text">TLS 1.3</strong>. We do not support TLS 1.1 or 1.2. Internal service-to-service communication is mutually authenticated with short-lived certificates issued by our internal CA.
                </p>
                <div className="rounded-2xl border-[1.5px] border-border bg-white p-7">
                  <div className="text-xs font-bold text-muted uppercase tracking-[.07em] mb-5">Data flow encryption summary</div>
                  <div className="space-y-3.5">
                    {dataFlows.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 flex-wrap text-sm">
                        <span className="flex-1 px-3.5 py-2.5 rounded-[9px] bg-white border-[1.5px] border-border text-[13px] font-semibold text-text min-w-[160px]">{f.from}</span>
                        <span className="text-muted text-base">→</span>
                        <span className="flex-1 px-3.5 py-2.5 rounded-[9px] bg-white border-[1.5px] border-border text-[13px] font-semibold text-text min-w-[160px]">{f.to}</span>
                        <span className="text-[11px] font-bold px-2 py-[3px] rounded-md bg-[#dcfce7] text-[#166534]">{f.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="access-control">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Access control</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Least privilege, everywhere</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Access to CoreCatalyst is governed by <strong className="text-text">role-based access control (RBAC)</strong> with four roles: Viewer, Analyst, HR Admin, and Org Admin. Permissions are additive and explicit - no role inherits access it wasn&apos;t granted.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  CoreCatalyst staff access to customer environments requires a time-limited break-glass authorization, logged to an immutable audit trail, and reviewed weekly. No engineer has standing access to production customer data.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '👥', title: 'RBAC with 4 roles', body: 'Viewer, Analyst, HR Admin, Org Admin. Roles are scoped to org, function, or team level.' },
                    { icon: '🔐', title: 'SSO / SAML 2.0', body: 'Integrate with your IdP (Okta, Azure AD, Google Workspace). MFA enforced for all admin roles.' },
                    { icon: '⏱', title: 'Session management', body: 'Sessions expire after 8 hours of inactivity. All active sessions are visible and revocable from the admin console.' },
                    { icon: '📄', title: 'API key scoping', body: 'API keys are scoped to specific resources and operations. Keys are never logged in plaintext and can be rotated instantly.' },
                  ].map((f, i) => (
                    <div key={i} className="p-[20px_22px] rounded-xl border-[1.5px] border-border bg-white">
                      <div className="text-[22px] mb-2.5">{f.icon}</div>
                      <h4 className="font-sora font-bold text-sm mb-1.5 text-text">{f.title}</h4>
                      <p className="text-[13px] text-muted leading-[1.6] m-0">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="compliance">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Compliance</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Frameworks and certifications</h2>
                <p className="text-muted leading-relaxed mb-6">
                  We maintain certifications and controls that enterprise procurement teams require. Our SOC 2 Type II report is available to customers and prospects under NDA.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-sm font-semibold text-muted">Framework</th>
                        <th className="text-left py-3 text-sm font-semibold text-muted">Status</th>
                        <th className="text-left py-3 text-sm font-semibold text-muted">Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceRows.map((r, i) => (
                        <tr key={i} className="border-b border-border">
                          <td className="py-3 text-sm font-semibold text-text">{r.framework}</td>
                          <td className="py-3">
                            <span
                              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                r.ok ? 'bg-[#dcfce7] text-green' : 'bg-[#dbeafe] text-blue'
                              }`}
                            >
                              {r.ok ? '✓ ' : '▶ '}
                              {r.status}
                            </span>
                          </td>
                          <td className="py-3 text-sm text-muted">{r.scope}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="infrastructure">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Infrastructure</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Built on hardened cloud infrastructure</h2>
                <p className="text-muted leading-relaxed mb-4">
                  CoreCatalyst runs on <strong className="text-text">AWS</strong> in a multi-region active-passive configuration. Primary region is eu-west-1 (Ireland) with a failover region in us-east-1. Enterprise customers can request single-region deployment within a specific geography or private cloud / on-premises deployment.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  We run infrastructure-as-code with immutable deployments. No direct SSH access to production hosts. All changes go through a reviewed CI/CD pipeline with automated security scanning at every step.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🌐', title: 'Multi-region failover', body: 'Automatic failover with RPO < 1 hour and RTO < 4 hours. 99.9% uptime SLA on Enterprise tier.' },
                    { icon: '📦', title: 'Immutable deployments', body: 'Every deployment is a new immutable artifact. Rollback takes under 3 minutes. No in-place mutations to running hosts.' },
                    { icon: '🔍', title: 'Continuous vulnerability scanning', body: 'Container images scanned on every build. SAST and dependency scanning in CI. Critical CVEs patched within 48 hours.' },
                    { icon: '📱', title: 'Penetration testing', body: 'Annual third-party penetration test by a CREST-certified firm. Results reviewed by our security team and tracked to remediation.' },
                  ].map((f, i) => (
                    <div key={i} className="p-[20px_22px] rounded-xl border-[1.5px] border-border bg-white">
                      <div className="text-[22px] mb-2.5">{f.icon}</div>
                      <h4 className="font-sora font-bold text-sm mb-1.5 text-text">{f.title}</h4>
                      <p className="text-[13px] text-muted leading-[1.6] m-0">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="data-ownership">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Data ownership</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">Your data is yours - unconditionally</h2>
                <p className="text-muted leading-relaxed mb-4">
                  CoreCatalyst is a <strong className="text-text">data processor</strong>, not a data controller. Your organization retains full ownership of all employee skill data. We process it on your behalf, under your instructions, and we return or delete it on request.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-text">We never use customer data to train our models.</strong> Reconciliation logic improvements are derived from anonymized, aggregated conflict patterns - never from identifiable employee records. This commitment is contractual, not just a policy.
                </p>
                <p className="text-muted leading-relaxed">
                  On contract termination, your data is exported in full (JSON or CSV) within 5 business days. After export confirmation, all customer data is deleted within 30 days and deletion is certified in writing.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="incident">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Incident response</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">When something goes wrong, we move fast</h2>
                <p className="text-muted leading-relaxed mb-4">
                  We maintain a documented incident response plan with defined severity levels, escalation paths, and notification SLAs. Our security team is on call 24/7.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  In the event of a confirmed data breach affecting your tenant, we will notify your designated security contact within <strong className="text-text">72 hours</strong> of detection - meeting GDPR Article 33 requirements - and provide a full post-incident report within 14 days. Enterprise customers receive a dedicated incident communication channel.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '⚠', title: 'Severity-based response', body: 'P0 (data breach) - 1hr response, immediate exec escalation. P1 (service impact) - 4hr response. P2/P3 - next business day.' },
                    { icon: '🔔', title: 'Customer notification', body: 'Affected customers notified within 72 hours of a confirmed breach. Status page updated in real time for service incidents.' },
                  ].map((f, i) => (
                    <div key={i} className="p-[20px_22px] rounded-xl border-[1.5px] border-border bg-white">
                      <div className="text-[22px] mb-2.5">{f.icon}</div>
                      <h4 className="font-sora font-bold text-sm mb-1.5 text-text">{f.title}</h4>
                      <p className="text-[13px] text-muted leading-[1.6] m-0">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div id="disclosure">
                <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Vulnerability disclosure</div>
                <h2 className="font-sora text-xl sm:text-2xl font-extrabold leading-[1.2] mb-4 text-text">We welcome responsible disclosure</h2>
                <p className="text-muted leading-relaxed mb-6">
                  If you discover a security vulnerability in CoreCatalyst, please report it to us before disclosing it publicly. We commit to acknowledging your report within 2 business days and keeping you informed of progress.
                </p>
                <div className="rounded-[14px] border-[1.5px] border-[#fed7aa] bg-[#fff7ed] p-[24px_28px]">
                  <h4 className="font-sora text-[15px] font-bold text-[#92400e] mb-2">📩 Contact our security team</h4>
                  <p className="text-sm text-[#b45309] leading-[1.65] mb-3">
                    Send vulnerability reports to{' '}
                    <a href="mailto:security@corecatalyst.ai" className="text-[#c2410c] font-semibold underline">
                      security@corecatalyst.ai
                    </a>
                    . Please encrypt sensitive details using our{' '}
                    <a href="#" className="text-[#c2410c] font-semibold underline">
                      PGP public key
                    </a>
                    . We do not operate a paid bug bounty program at this time, but we will publicly acknowledge researchers who report valid issues if they wish.
                  </p>
                  <p className="text-sm text-[#b45309] leading-[1.65]">
                    We ask that you do not access, modify, or delete customer data during testing; do not perform denial-of-service testing; and give us reasonable time to fix confirmed issues before public disclosure.
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-text">
              Questions about our<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">security posture?</span>
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Our security team responds to enterprise security questionnaires and can provide our SOC 2 report under NDA.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Contact Security Team
              </a>
              <a href="/demo" className="px-8 py-4 rounded-btn border border-border text-text font-semibold text-lg hover:border-blue transition-colors">
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
