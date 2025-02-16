import TerminalHero from "@/components/terminal-hero"
import {
  WhyJoinSection,
  FeaturedProjectsSection,
  SelectionProcessSection,
  FinalCTASection,
} from "@/components/program-sections"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { FloatingStats } from "@/components/floating-stats"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative dark">
      <AnimatedGridPattern
        className="fixed inset-0 h-full w-full [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] fill-white/[0.04] stroke-white/[0.04]"
        numSquares={60}
        maxOpacity={0.08}
        duration={6}
        repeatDelay={0}
        width={50}
        height={50}
      />
      <TerminalHero />
      <WhyJoinSection />
      <FeaturedProjectsSection />
      <SelectionProcessSection />
      <FinalCTASection />
      <FloatingStats />
      <Footer />
    </div>
  )
}

