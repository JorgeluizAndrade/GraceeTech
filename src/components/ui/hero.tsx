"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden bg-[#F2E6D8] dark:bg-[#2A241F]">
      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D9C7B8]/20 to-[#F2E6D8] dark:via-[#40362E]/20 dark:to-[#2A241F]" />
      
      {/* Subtle geometric accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8C7B65]/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A69580]/20 to-transparent" />
      </div>

      {/* Elegant circle accents */}
      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border border-[#D9C7B8]/30 dark:border-[#8C7B65]/20" />
      <div className="absolute top-28 right-[17%] w-48 h-48 rounded-full border border-[#A69580]/20 dark:border-[#A69580]/10" />
      <div className="absolute bottom-20 left-[10%] w-32 h-32 rounded-full bg-[#D9C7B8]/10 dark:bg-[#8C7B65]/10" />
      
      {/* Interactive glow following mouse */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-radial from-[#D9C7B8]/15 via-[#A69580]/5 to-transparent pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[70vh]">
        <div className="text-center space-y-6 p-8 max-w-3xl mx-auto">
          {/* Decorative line above title */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-px bg-[#8C7B65]" />
            <div className="w-2 h-2 rounded-full bg-[#8C7B65]" />
            <div className="w-12 h-px bg-[#8C7B65]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#40362E] dark:text-[#F2E6D8] tracking-wide">
            Grace & Tech
          </h1>
          
          <p className="text-lg md:text-xl text-[#8C7B65] dark:text-[#A69580] max-w-lg mx-auto leading-relaxed font-light">
            Blog de Jorge Luiz. Onde tecnologia e teologia caminham juntas.
          </p>

          {/* Decorative line below text */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A69580] to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F2E6D8] dark:from-[#2A241F] to-transparent" />
    </div>
  )
}
