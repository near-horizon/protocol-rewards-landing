"use client"

import { motion } from "framer-motion"
import { Award, Users, GitBranch, Package } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingStats() {
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const footerOffset = 200 // Distância em pixels do footer onde começamos a ajustar

      // Detecta se está próximo do final da página
      const nearFooter = scrollPosition >= documentHeight - footerOffset
      setIsNearFooter(nearFooter)
    }

    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll)
    
    // Executa uma vez no mount para verificar posição inicial
    handleScroll()

    // Remove o event listener na desmontagem
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed right-8 z-50 transition-all duration-300 ${
      isNearFooter ? 'bottom-32' : 'bottom-8'
    }`}>
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
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-[#9797ff]" />
            <div>
              <div className="text-sm text-white/60">Weekly Downloads</div>
              <div className="text-white font-semibold">1,000+</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

