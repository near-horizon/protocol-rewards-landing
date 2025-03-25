"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, FileText, ArrowRight } from "lucide-react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { motion, useScroll, useTransform } from "framer-motion"

export default function TerminalHero() {
  const [text, setText] = useState("")
  const [showStats, setShowStats] = useState(false)
  const fullCommand = "npx near-protocol-rewards init"
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullCommand.slice(0, index))
      index++
      if (index > fullCommand.length) {
        clearInterval(timer)
        setTimeout(() => setShowStats(true), 500)
        // Play typing sound
        const audio = new Audio("/typing.mp3") // You'll need to add this sound file
        audio.volume = 0.2
        audio.play().catch(() => {}) // Ignore errors if audio can't play
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <motion.div style={{ opacity }} className="absolute inset-0">
        <AnimatedGridPattern
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] fill-white/[0.07] stroke-white/[0.07]"
          numSquares={60}
          maxOpacity={0.15}
          duration={6}
          repeatDelay={0}
          width={50}
          height={50}
        />
      </motion.div>
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_rev-ijiapxMdSrNjmlvED9UmTm7pLNZ1Qd.png"
            alt="NEAR Protocol"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </motion.div>
        <motion.div style={{ y }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Protocol Rewards Program
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A transparent, metric-based rewards system for NEAR projects that directly ties incentives to development
              activity and user adoption.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl border border-[#9797ff]/20 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(151,151,255,0.25)]"
              role="region"
              aria-label="NEAR Protocol Rewards Terminal"
            >
              {/* Terminal Header */}
              <div className="bg-[#2D2D2D] px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center text-sm text-white/60 font-mono">near-protocol-rewards</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm md:text-base">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-[#9797ff]">➜</span>
                  <span className="text-[#9797ff]">~/near-protocol</span>
                  <span>{text}</span>
                  <span
                    className={`w-2 h-5 bg-white/80 ${showStats ? "animate-pulse" : "animate-blink"}`}
                    aria-hidden="true"
                  />
                </div>

                {showStats && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 space-y-2 text-white/80"
                  >
                    <div className="text-[#9797ff]">→ Initializing NEAR Protocol Rewards environment...</div>
                    <div className="text-[#9797ff]">→ Checking repository compatibility...</div>
                    <div className="text-[#9797ff]">→ Setting up metrics tracking... ✓</div>
                    <div className="mt-6">$ near-protocol-rewards stats</div>
                    <div className="text-[#9797ff]">→ Program Duration: 12w</div>
                    <div className="text-[#9797ff]">→ Max Monthly Reward: $10,000</div>
                    <div className="text-[#9797ff]">→ Weekly Commitment: 10-15h</div>
                    <div className="text-[#9797ff]">→ Open for Applications: true</div>
                    <div className="text-[#9797ff]">→ █</div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#9797ff] hover:bg-[#9797ff]/90 text-black font-medium gap-2 h-12 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(151,151,255,0.5)] focus:ring-2 focus:ring-[#9797ff] focus:ring-offset-2 focus:ring-offset-black"
              >
                <Link href="https://airtable.com/appFoIqAoY0ikoVIb/shr3vrZ3sGWzSdXgX">
                  Apply for Next Cohort
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-medium gap-2 h-12 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <Link href="https://near-protocol-rewards-dashboard.vercel.app">
                  <BarChart3 className="h-4 w-4" />
                  View Performance
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#9797ff] text-[#9797ff] hover:bg-[#9797ff]/10 font-medium gap-2 h-12 px-6 rounded-xl transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#9797ff] focus:ring-offset-2 focus:ring-offset-black"
              >
                <Link href="https://github.com/jbarnes850/near-protocol-rewards">
                  <FileText className="h-4 w-4" />
                  Documentation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

