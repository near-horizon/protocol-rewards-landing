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
  },
  {
    link: "https://x.com/jcarbonnell/status/1889707477886816498",
    authorName: "Julien Carbonnell",
    authorHandle: "jcarbonnell",
    authorImage: "/placeholder-user.jpg",
    content: [
      "Excited to share that @partagexyz received support from the @NEARProtocol Rewards Program! 🚀",
      "This initiative helps developers like me grow, and brings projects like 1000fans to life.",
      "Don't miss your chance to join the next round:",
    ],
    isVerified: true,
    timestamp: "3:45 PM · Feb 12, 2025",
  },
  {
    link: "https://x.com/derek2403/status/1889959383360245977",
    authorName: "Derekkkk",
    authorHandle: "derek2403",
    authorImage: "/placeholder-user.jpg",
    content: [
      "— Thread 🧵—",
      "Here to share some really good stuff! Recently me and @ilovedahmo received support from the @NEARProtocol rewards program! This initiative helped us (as developers) grow and bring our project Nearer (an AI powered secure wallet that is not drainable) to life. 🔥🔥",
    ],
    isVerified: false,
    timestamp: "8:15 AM · Feb 13, 2025",
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/10 bg-black/50 dark">
      <div className="container px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join successful developers who are building the future of decentralized AI on NEAR.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <XCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

