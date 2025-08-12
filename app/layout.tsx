import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rewards.near.org'),
  title: {
    default: 'NEAR Protocol Rewards | Merit-Based Developer Incentives',
    template: '%s | NEAR Protocol Rewards'
  },
  description: 'A transparent, on-chain rewards program for NEAR builders. Where activity and impact earn you real incentives. Transform one-time grants into sustainable funding.',
  keywords: [
    'NEAR Protocol',
    'blockchain rewards',
    'developer incentives',
    'web3 funding',
    'crypto grants',
    'NEAR ecosystem',
    'blockchain development',
    'developer metrics',
    'automated rewards',
    'sustainable funding'
  ],
  authors: [{ name: 'NEAR Protocol' }],
  creator: 'NEAR Protocol',
  publisher: 'NEAR Protocol',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rewards.near.org',
    title: 'NEAR Protocol Rewards - Automated Developer Incentives',
    description: 'Empowering NEAR developers with automated, merit-based rewards tied directly to development activity and project impact.',
    siteName: 'NEAR Protocol Rewards',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'NEAR Protocol Rewards Dashboard Preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NEARProtocol',
    creator: '@NEARProtocol',
    images: '/og-image.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'