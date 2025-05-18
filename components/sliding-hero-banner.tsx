"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const bannerTexts = [
  {
    text: "ENJOY $5 OFF YOUR FIRST ORDER WHEN YOU",
    link: {
      text: "SIGN UP",
      href: "/login",
    },
  },
  "HANDMADE BAGS",
  "CLOTHING",
  "TECH & ACCESSORIES",
  "BEAUTY/MAKEUP",
  "JEWELRY & ACCESSORIES",
  "FOOTWEAR",
]

export function SlidingHeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#f8e1e3] py-2 overflow-hidden">
      <div className="relative h-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center text-sm text-[#8a5a5e] font-light"
          >
            {typeof bannerTexts[currentIndex] === "string" ? (
              bannerTexts[currentIndex]
            ) : (
              <div className="flex items-center space-x-1">
                <span>{bannerTexts[currentIndex].text}</span>
                <Link href={bannerTexts[currentIndex].link.href} className="underline font-medium hover:text-[#D9A5B3]">
                  {bannerTexts[currentIndex].link.text}
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
