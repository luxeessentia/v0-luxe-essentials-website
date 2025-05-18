"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function LogoHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Only render the image after component has mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 bg-[#faf7f5] py-4">
        <div className="flex justify-center items-center px-4">
          <div className="h-16 w-240 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-light tracking-widest">LUXE ESSENTIALS</h1>
              <p className="text-xs text-[#8a5a5e]/70">ELEVATE YOUR STYLE</p>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`sticky top-0 z-40 bg-[#faf7f5] transition-all duration-300 ${scrolled ? "py-2 shadow-sm" : "py-4"}`}
    >
      <div className="flex justify-center items-center px-4">
        <Link href="/" className="block">
          <div className={`relative transition-all duration-300 ${scrolled ? "h-12 w-auto" : "h-16 w-auto"}`}>
            <div className="text-center">
              <h1
                className={`font-light tracking-widest transition-all duration-300 ${
                  scrolled ? "text-xl" : "text-2xl"
                }`}
              >
                LUXE ESSENTIALS
              </h1>
              <p className={`text-[#8a5a5e]/70 transition-all duration-300 ${scrolled ? "text-[10px]" : "text-xs"}`}>
                ELEVATE YOUR STYLE
              </p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
