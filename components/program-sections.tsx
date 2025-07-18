"use client"

import { Card } from "@/components/ui/card"
import { Brain, Users, Target, ArrowRight, Rocket, Code, GitBranch, MessageSquare, Award } from "lucide-react"
import { XCard } from "@/components/ui/x-gradient-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function WhyJoinSection() {
  return (
    <section className="border-t border-white/10 bg-black/50">
      <div className="container px-4 py-24 md:py-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Why Join?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A developer-first funding solution that transforms traditional grants into sustainable, automated rewards
              based on your impact.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "Sustainable Funding",
                description:
                  "Earn up to $10,000/month through automated, merit-based rewards that grow with your project's impact",
                icon: Award,
              },
              {
                title: "Expert Mentorship",
                description:
                  "Get direct guidance from NEAR's Founder Success Team to accelerate your project's growth and impact",
                icon: Users,
              },
              {
                title: "Supportive Community",
                description: "Join a network of innovative developers building and scaling the future of Web3 together",
                icon: MessageSquare,
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="group bg-black/40 backdrop-blur-sm border-white/10 p-8 rounded-xl transition duration-300 hover:border-[#9797ff]/30">
                  <div className="space-y-6">
                    <div className="h-14 w-14 rounded-xl bg-[#9797ff]/10 flex items-center justify-center transition duration-300 group-hover:scale-110">
                      <item.icon className="h-7 w-7 text-[#9797ff]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function FeaturedProjectsSection() {
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
      authorImage: "/profiles/julien-carbonnell.jpg",
      content: [
        "Excited to share that @partagexyz received support from the @NEARProtocol Rewards Program! 🚀",
        "This initiative helps developers like me grow, and brings projects like 1000fans to life.",
        "Don't miss your chance to join the next round:",
      ],
      isVerified: true,
      timestamp: "3:45 PM · Feb 12, 2025",
    },
    {
      link: "https://x.com/openwebeconomy/status/1922623248354750756",
      authorName: "Charles",
      authorHandle: "openwebeconomy",
      authorImage: "https://wuszieebptt7hukv.public.blob.vercel-storage.com/openwebeconomy_profile.jpg",
      content: [
        "🧵 The founder's journey is an erratic yet invigorating rollercoaster, and infinitely better with a supportive community. Dive into our latest experience with the NEAR Protocol Rewards team. 👇 (1/8)",
      ],
      isVerified: true,
      timestamp: "9:01 AM · Mai 14, 2025",
    },
  ]

  return (
    <section className="bg-black/50">
      <div className="w-full py-24 md:py-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join successful developers who are building the future of decentralized AI on NEAR.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 w-full max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex justify-center">
                <div className="w-full max-w-[320px]">
                  <XCard {...testimonial} />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function SelectionProcessSection() {
  return (
    <section className="border-t border-white/10 bg-black/50">
      <div className="container px-4 py-24 md:py-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Selection Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're looking for visionary developers ready to shape the future of decentralized AI.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div variants={stagger} className="space-y-8">
              <motion.h3 variants={fadeInUp} className="text-2xl font-semibold text-white">
                Evaluation Criteria
              </motion.h3>
              {[
                {
                  title: "Project Potential",
                  description: "Share your idea & development stage",
                  icon: Rocket,
                  score: 60,
                  color: "#9797ff",
                },
                {
                  title: "Technical Skills",
                  description: "Provide your GitHub profile and past work",
                  icon: Code,
                  score: 20,
                  color: "#7070ff",
                },
                {
                  title: "Community Engagement",
                  description: "Show your involvement in the NEAR ecosystem",
                  icon: GitBranch,
                  score: 20,
                  color: "#4747ff",
                },
              ].map((item, index) => (
                <motion.div key={item.title} variants={fadeInUp} className="group relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#9797ff]/20 to-transparent blur-sm group-hover:blur transition duration-500" />
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition duration-300 group-hover:border-[#9797ff]/50">
                    <div className="flex items-start gap-6">
                      <div className="h-14 w-14 rounded-xl bg-[#9797ff]/10 flex items-center justify-center shrink-0 transition duration-300 group-hover:scale-110">
                        <item.icon className="h-7 w-7 text-[#9797ff]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-white text-xl">{item.title}</h4>
                          <span className="text-[#9797ff] font-mono font-bold text-lg">{item.score}%</span>
                        </div>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-[#9797ff] to-[#4747ff]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:pl-8">
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9797ff]/10 via-transparent to-transparent" />
                <div className="relative space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">March 2025 Cohort Focus</h3>
                    <p className="text-gray-400">
                      Building towards scaling 1 trillion autonomous agents on NEAR through:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "AI-powered DeFi Solutions",
                        description: "Build secure, intelligent financial protocols",
                        icon: Brain,
                      },
                      {
                        title: "Autonomous Agent Frameworks",
                        description: "Create tools for agent development & deployment",
                        icon: Target,
                      },
                      {
                        title: "AI/ML Infrastructure",
                        description: "Develop core infrastructure for AI on NEAR",
                        icon: Users,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#9797ff]/30 transition duration-300"
                      >
                        <div className="h-12 w-12 rounded-xl bg-[#9797ff]/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-6 w-6 text-[#9797ff]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#9797ff] hover:bg-[#9797ff]/90 text-black font-medium gap-2 h-12 px-6 rounded-xl transition-transform hover:scale-105"
                    >
                      <Link href="https://airtable.com/appFoIqAoY0ikoVIb/shr3vrZ3sGWzSdXgX">
                        Apply for March 2025 Cohort
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="bg-[#9797ff]">
      <div className="container px-4 py-24 md:py-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">
              Ready to Build the Future of AI on NEAR?
            </h2>
            <p className="text-xl text-black/80">
              Join the next cohort of innovative developers shaping the future of decentralized AI.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-black/90 text-white font-medium gap-2 h-12 px-8 rounded-xl transition-transform hover:scale-105"
            >
              <Link href="https://airtable.com/appFoIqAoY0ikoVIb/shr3vrZ3sGWzSdXgX">
                Apply for March 2025 Cohort
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

