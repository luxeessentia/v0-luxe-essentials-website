"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function LogoHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
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

  return (
    <header
      className={`sticky top-0 z-40 bg-[#faf7f5] transition-all duration-300 w-full ${
        scrolled ? "py-2 shadow-sm" : "py-4"
      }`}
    >
      <div className="flex justify-center items-center px-4 w-full">
        <Link href="/" className="block w-full">
          <div className="relative w-full flex justify-center">
            <Image
              src="/images/luxe-logo.png"
              alt="Luxe Essentials - Elevate Your Style"
              width={scrolled ? 400 : 600}
              height={scrolled ? 80 : 120}
              className="transition-all duration-300 max-w-full h-auto"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  )
}
