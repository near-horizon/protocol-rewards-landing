"use client"

import { XCard } from "@/components/ui/x-gradient-card"

const testimonials = [
  {
    link: "https://twitter.com/zrealsafi/status/1890047924777693650",
    authorName: "Safi",
    authorHandle: "ZRealSafi",
    authorImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Safi%20Profile%20Picture.jpg-G74ZHugDKwhEsA4MGKx8CXK4YIOOZb.jpeg",
    content: [
      "🔥 Big news! YieldGuard AI just secured support from the @NEARProtocol Rewards Program! 🚀",
      "We're building the ultimate AI-powered security & analytics hub to protect DeFi users on NEAR—think smarter risk assessment, real-time wallet analysis & community-driven trust.",
      "Got a game-changing idea? Apply for the next round of Near Rewards Program Now:",
      "airtable.com/appFoIqAoY0iko...",
    ],
    isVerified: true,
    timestamp: "9:38 AM · Feb 13, 2025",
    views: "276 Views",
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/10 bg-black/50 dark">
      <div className="container px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from developers who are building the future of decentralized AI on NEAR.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <XCard {...testimonial} reply={undefined} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

