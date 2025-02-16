"use client"

import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/ui/glow-effect"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface GlowButtonProps extends ButtonProps {
  glowColors?: string[]
  glowMode?: "rotate" | "pulse" | "breathe" | "colorShift" | "flowHorizontal" | "static"
  glowBlur?: "softest" | "soft" | "medium" | "strong" | "stronger" | "strongest" | "none"
  glowScale?: number
  glowDuration?: number
}

export function GlowButton({
  className,
  glowColors = ["#9797ff", "#7070ff", "#4747ff", "#2424ff"],
  glowMode = "colorShift",
  glowBlur = "soft",
  glowScale = 1.1,
  glowDuration = 3,
  ...props
}: GlowButtonProps) {
  return (
    <div className="relative group">
      <GlowEffect colors={glowColors} mode={glowMode} blur={glowBlur} scale={glowScale} duration={glowDuration} />
      <Button
        className={cn("relative bg-black text-white hover:bg-black/90", "border border-white/10", className)}
        {...props}
      />
    </div>
  )
}

