import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact CoreCatalyst',
  description: 'Talk to sales, book a demo, or get support.',
}

export default function Contact() {
  return (
    <div className="w-full">
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold mb-12 text-text">Get in touch</h1>
          
          <div className="grid grid-cols-2 gap-12">
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full px-4 py-2 rounded-lg border border-border" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-border" />
              <textarea placeholder="Message" rows={6} className="w-full px-4 py-2 rounded-lg border border-border"></textarea>
              <button className="w-full px-4 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90">Send</button>
            </form>
            <div className="space-y-8">
              <div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">Response times</h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li>Sales inquiry: Same day</li>
                  <li>Support: 4 hours</li>
                  <li>Security: 24 hours</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">Office locations</h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li>London (HQ)</li>
                  <li>San Francisco</li>
                  <li>Berlin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
