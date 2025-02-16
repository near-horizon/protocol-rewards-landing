import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NEAR Protocol Rewards Program",
  description:
    "A transparent, metric-based rewards system for NEAR projects that directly ties incentives to development activity and user adoption.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@near-protocol/brand-assets@1.0.0/fonts/FKGrotesk/style.css"
        />
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}



import './globals.css'