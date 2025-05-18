"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getProductsByCategory } from "../app/data/products"

type CategoryShowcaseProps = {
  title: string
  category: string
  linkPath: string
}

export function CategoryShowcase({ title, category, linkPath }: CategoryShowcaseProps) {
  const products = getProductsByCategory(category)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalProducts = products.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts)
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
      }, 5000)
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, totalProducts])

  if (products.length === 0) {
    return null
  }

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-light text-black">{title}</h2>
        <Link href={linkPath} className="text-sm text-black hover:underline">
          View All
        </Link>
      </div>

      <div className="relative">
        <div className="relative h-[300px] md:h-[400px] bg-[#f8f5f2] rounded-lg overflow-hidden">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative h-full w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <h3 className="text-white text-lg font-light">{product.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalProducts > 1 && (
          <>
            <button
              onClick={() => handleManualNavigation(prevSlide)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={() => handleManualNavigation(nextSlide)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalProducts > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
