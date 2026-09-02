import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import '../styles/globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'CoreCatalyst - The Skills Operating System',
    template: '%s | CoreCatalyst',
  },
  description:
    'Turn fragmented HR data into a verified, board-ready picture of workforce readiness.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-dm text-text">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
