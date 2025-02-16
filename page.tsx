import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Diamond, Trophy, Award, Medal, ArrowRight, Github, Users, BarChart3, Zap, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">NEAR Protocol</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#rewards" className="text-sm hover:text-purple-400 transition-colors">
              Rewards
            </Link>
            <Link href="#apply" className="text-sm hover:text-purple-400 transition-colors">
              Apply
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/near"
              className="hidden sm:flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Empowering Developers.
                <span className="text-purple-500"> Driving Innovation.</span>
              </h1>
              <p className="mt-4 text-xl text-gray-400 max-w-[600px]">
                Join the NEAR Protocol Rewards Program and earn up to $10,000 per month building impactful projects that
                shape the future of decentralized AI.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="#apply">Apply for Next Cohort</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%202.51.59%E2%80%AFPM-eYNTpQa136uJFsvICcIdKTO3yOJt2h.png"
              alt="NEAR Protocol AI Illustration"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-black/50">
        <div className="container px-4 py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-purple-500">26</h3>
                <p className="text-gray-400">Active Repositories</p>
              </div>
            </Card>
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-purple-500">$118K</h3>
                <p className="text-gray-400">Total Rewards</p>
              </div>
            </Card>
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-purple-500">622</h3>
                <p className="text-gray-400">Developer Actions</p>
              </div>
            </Card>
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-purple-500">130.1</h3>
                <p className="text-gray-400">Average Score</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="container px-4 py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reward Levels</h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            Earn rewards based on your contribution level and impact on the NEAR ecosystem
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Diamond",
              icon: Diamond,
              amount: "$2,500",
              color: "text-blue-400",
              border: "border-blue-400/20",
            },
            {
              title: "Gold",
              icon: Trophy,
              amount: "$1,500",
              color: "text-yellow-400",
              border: "border-yellow-400/20",
            },
            {
              title: "Silver",
              icon: Award,
              amount: "$1,000",
              color: "text-gray-400",
              border: "border-gray-400/20",
            },
            {
              title: "Bronze",
              icon: Medal,
              amount: "$500",
              color: "text-orange-400",
              border: "border-orange-400/20",
            },
          ].map((level) => (
            <Card
              key={level.title}
              className={cn("bg-black/50 p-6 flex flex-col items-center text-center space-y-4", level.border)}
            >
              <level.icon className={cn("h-12 w-12", level.color)} />
              <h3 className="text-2xl font-bold">{level.title}</h3>
              <p className={cn("text-3xl font-bold", level.color)}>
                {level.amount}
                <span className="text-sm text-gray-400">/week</span>
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-white/10 bg-black/50">
        <div className="container px-4 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Join the NEAR Protocol Rewards Program?
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Quick Start",
                    description:
                      "Get started in minutes with our streamlined onboarding process and comprehensive documentation.",
                  },
                  {
                    icon: Users,
                    title: "Community Support",
                    description: "Join weekly standups, connect with other developers, and get help when you need it.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Tracking",
                    description: "Track your progress with detailed metrics and analytics on your contributions.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%202.31.10%E2%80%AFPM-zDHE6UHZofqp312z5n5YrehXZQTGMH.png"
                alt="NEAR Protocol Dashboard"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="container px-4 py-24">
        <Card className="bg-purple-600 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Build the Future of AI on NEAR?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-[600px] mx-auto">
            Join the next cohort of innovative developers shaping the future of decentralized AI.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link href="https://airtable.com/appFoIqAoY0ikoVIb/shr3vrZ3sGWzSdXgX">
              Apply for the Next Cohort
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="font-semibold">NEAR Protocol</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

