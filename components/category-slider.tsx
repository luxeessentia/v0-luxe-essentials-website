"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Category = {
  id: string
  name: string
  image: string
  link: string
}

const categories: Category[] = [
  {
    id: "bags",
    name: "Bags & Accessories",
    image: "/placeholder.svg?height=600&width=600&text=Bags",
    link: "/shop/bags",
  },
  {
    id: "tech",
    name: "Tech & Accessories",
    image: "/placeholder.svg?height=600&width=600&text=Tech",
    link: "/shop/tech",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    image: "/placeholder.svg?height=600&width=600&text=Jewelry",
    link: "/shop/jewelry",
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "/placeholder.svg?height=600&width=600&text=Clothing",
    link: "/shop/clothing",
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "/placeholder.svg?height=600&width=600&text=Beauty",
    link: "/shop/beauty",
  },
]

export function CategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalCategories = categories.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCategories)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCategories) % totalCategories)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Reset autoplay timer when manually changing slides
  const handleManualNavigation = (callback: () => void) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    setIsAutoPlaying(false)
    callback()

    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-6">{category.name}</h2>
                <Link
                  href={category.link}
                  className="bg-white/90 text-[#6b46c1] px-6 py-2 rounded-sm hover:bg-white transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleManualNavigation(prevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
        aria-label="Previous category"
      >
        <ChevronLeft className="h-6 w-6 text-[#6b46c1]" />
      </button>
      <button
        onClick={() => handleManualNavigation(nextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
        aria-label="Next category"
      >
        <ChevronRight className="h-6 w-6 text-[#6b46c1]" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => goToSlide(index))}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
