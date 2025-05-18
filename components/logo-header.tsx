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
      className={`sticky top-0 z-40 bg-[#faf7f5] transition-all duration-300 ${scrolled ? "py-2 shadow-sm" : "py-4"}`}
    >
      <div className="flex justify-center items-center px-4">
        <Link href="/" className="block">
          <div className={`relative transition-all duration-300 ${scrolled ? "h-10 w-48" : "h-14 w-64"}`}>
            <div className="text-center">
              <Image
                src="/images/logo.png"
                alt="Luxe Essentials"
                width={scrolled ? 120 : 160}
                height={scrolled ? 40 : 60}
                className="transition-all duration-300"
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
