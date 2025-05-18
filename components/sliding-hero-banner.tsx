"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bannerTexts = [
  "📦 GET $5 OFF YOUR FIRST ORDER WHEN YOU SIGN UP",
  "Handmade Bags",
  "Clothing",
  "Tech & Accessories",
  "Beauty/Makeup",
  "Jewelry & Accessories",
  "Footwear",
]

export function SlidingHeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length)
    }, 5000) // Changed from 3000 to 5000 ms (5 seconds)

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
            transition={{ duration: 1.2, ease: "easeInOut" }} // Slowed down from 0.8 to 1.2
            className="absolute inset-0 flex items-center justify-center text-sm text-[#8a5a5e] font-light"
          >
            {bannerTexts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
