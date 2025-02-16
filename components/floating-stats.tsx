"use client"

import { motion } from "framer-motion"
import { Award, Users, GitBranch } from "lucide-react"

export function FloatingStats() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-lg"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-[#9797ff]" />
            <div>
              <div className="text-sm text-white/60">Total Rewards</div>
              <div className="text-white font-semibold">$118,000+</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-[#9797ff]" />
            <div>
              <div className="text-sm text-white/60">Active Projects</div>
              <div className="text-white font-semibold">26</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GitBranch className="h-5 w-5 text-[#9797ff]" />
            <div>
              <div className="text-sm text-white/60">Contributions</div>
              <div className="text-white font-semibold">622</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

