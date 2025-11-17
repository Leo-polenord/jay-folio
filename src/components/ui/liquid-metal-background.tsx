"use client"

import { useEffect, useState } from "react"
import { LiquidMetal } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0620] via-[#1a0f3a] to-[#0d0722]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0620] via-[#1a1a3a] to-[#0d0722]" />
      <LiquidMetal
        width="100%"
        height="100%"
        colorBack="#0a0620"
        colorTint="#6b5dc9"
        repetition={3}
        softness={0.5}
        shiftRed={-0.3}
        shiftBlue={-0.8}
        shiftGreen={-0.2}
        distortion={0.12}
        contour={0.8}
        shape="none"
        speed={0.35}
        scale={2.5}
      />
    </div>
  )
}
