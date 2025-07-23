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
      <div className="relative w-full h-screen  overflow-hidden bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-black ">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-radial from-sky-100 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-conic from-yellow-100 via-transparent to-sky-100" />
  
        {/* Flowing light streams */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-pulse" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-pulse delay-1000" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-sky-200 to-transparent animate-pulse delay-500" />
          <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent animate-pulse delay-1500" />
        </div>
  
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          {/* Halos */}
          <div className="absolute top-1/6 right-1/4 w-32 h-32 rounded-full border border-sky-200 animate-spin-slow" />
          <div className="absolute top-1/6 right-1/4 w-24 h-24 rounded-full border border-yellow-200 animate-spin-slow-reverse" />
          <div className="absolute bottom-1/3 left-1/5 w-40 h-40 rounded-full border border-sky-100 animate-spin-slow" />
  
          {/* Circuit patterns */}
          <div className="absolute top-1/2 left-1/6 w-16 h-16">
            <div className="absolute inset-0 border-l border-t border-slate-200" />
            <div className="absolute top-4 left-4 w-8 h-8 border-r border-b border-slate-200" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-sky-300/10 rounded-full animate-pulse" />
          </div>
  
          <div className="absolute bottom-1/4 right-1/6 w-20 h-20">
            <div className="absolute inset-0 border-r border-b border-slate-200" />
            <div className="absolute bottom-5 right-5 w-10 h-10 border-l border-t border-slate-200" />
            <div className="absolute bottom-3 right-3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-700" />
          </div>
        </div>
  
        {/* Subtle cross pattern */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-black to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent" />
        </div>
  
        {/* Dove silhouette */}
        <div className="absolute top-1/5 left-1/3 opacity-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sky-400">
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.59 10.75C10.21 10.37 9.7 10.17 9.17 10.17C8.64 10.17 8.13 10.37 7.75 10.75L2.17 16.33L3.58 17.75L9.17 12.17C9.32 12.02 9.53 11.94 9.75 11.94C9.97 11.94 10.18 12.02 10.33 12.17L15.83 17.67C16.21 18.05 16.72 18.25 17.25 18.25C17.78 18.25 18.29 18.05 18.67 17.67L21 15.34V13.34L18.67 15.67C18.48 15.86 18.23 15.97 17.96 15.97C17.69 15.97 17.44 15.86 17.25 15.67L12.75 11.17C12.37 10.79 11.86 10.59 11.33 10.59C10.8 10.59 10.29 10.79 9.91 11.17L5.41 15.67L4 14.26L8.5 9.76C8.88 9.38 9.39 9.18 9.92 9.18C10.45 9.18 10.96 9.38 11.34 9.76L15.84 14.26L17.25 12.85L12.75 8.35C12.37 7.97 11.86 7.77 11.33 7.77C10.8 7.77 10.29 7.97 9.91 8.35L5.41 12.85L4 11.44L8.5 6.94C8.88 6.56 9.39 6.36 9.92 6.36C10.45 6.36 10.96 6.56 11.34 6.94L15.84 11.44L17.25 10.03L12.75 5.53C12.37 5.15 11.86 4.95 11.33 4.95C10.8 4.95 10.29 5.15 9.91 5.53L5.41 10.03L4 8.62L8.5 4.12C8.88 3.74 9.39 3.54 9.92 3.54C10.45 3.54 10.96 3.74 11.34 4.12L15.84 8.62L17.25 7.21L12.75 2.71C12.37 2.33 11.86 2.13 11.33 2.13C10.8 2.13 10.29 2.33 9.91 2.71L5.41 7.21L4 5.8L8.5 1.3C8.88 0.92 9.39 0.72 9.92 0.72C10.45 0.72 10.96 0.92 11.34 1.3L21 11V9Z"
              fill="currentColor"
            />
          </svg>
        </div>
  
        {/* Data stream visualization */}
        <div className="absolute bottom-1/6 left-1/4">
          <div className="flex space-x-1">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-sky-200 to-transparent animate-pulse"
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 200}ms`,
                }}
              >                
              </div>
            ))}
          </div>
        </div>
  
        {/* Interactive glow following mouse */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-radial from-sky-200/10 via-yellow-100/5 to-transparent pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
  
        {/* Subtle black accents for depth */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent" />
        </div>
  
        {/* Content overlay area */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-4xl md:text-6xl font-light text-slate-700 dark:text-amber-100 tracking-wide">Grace & Tech</h1>
            <p className="text-lg text-slate-500 max-w-md dark:text-blue-100 mx-auto leading-relaxed">
            Blog de Jorge Luiz. Onde tecnológica e teologia andam juntas.
            </p>
          </div>
        </div>
      </div>
    )

}