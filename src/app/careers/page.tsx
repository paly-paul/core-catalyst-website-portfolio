import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at CoreCatalyst',
  description: 'Join the team building the skills operating system for the future of work.',
}

export default function Careers() {
  const roles = [
    { title: 'Senior Backend Engineer', dept: 'Engineering', level: 'Senior' },
    { title: 'Product Manager - Skills Graph', dept: 'Product', level: 'Mid' },
    { title: 'Enterprise Sales Executive', dept: 'GTM', level: 'Senior' },
    { title: 'Customer Success Manager', dept: 'Customer', level: 'Mid' },
  ]

  return (
    <div className="w-full">
      <section className="py-24 bg-grad-hero">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold mb-6 text-text">We're hiring</h1>
          <p className="text-lg text-muted">Help us build the skills operating system for enterprise HR.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-sora text-4xl font-bold mb-12 text-text">Open roles</h2>
          <div className="space-y-4">
            {roles.map((role, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 hover:bg-bg transition-colors cursor-pointer">
                <h3 className="font-sora font-bold text-xl text-text mb-2">{role.title}</h3>
                <div className="flex gap-4 text-sm text-muted">
                  <span>{role.dept}</span>
                  <span>•</span>
                  <span>{role.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-site mx-auto px-6 text-center">
          <h2 className="font-sora text-3xl font-bold mb-4 text-text">Don't see a role?</h2>
          <p className="text-muted mb-6">Send us your background and we'll keep you in mind.</p>
          <button className="px-6 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90">
            Send application
          </button>
        </div>
      </section>
    </div>
  )
}
