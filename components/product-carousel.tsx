"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Product = {
  id: string
  name: string
  price: string
  image: string
}

// Mock data for different categories
const mockProducts: Record<string, Product[]> = {
  bags: [
    { id: "bag-1", name: "Elegant Tote", price: "$129.00", image: "/images/bag-1.jpg" },
    { id: "bag-2", name: "Mini Crossbody", price: "$89.00", image: "/images/bag-2.jpg" },
    { id: "bag-3", name: "Leather Clutch", price: "$79.00", image: "/images/bag-3.jpg" },
    { id: "bag-4", name: "Shoulder Bag", price: "$149.00", image: "/images/bag-4.jpg" },
    { id: "bag-5", name: "Bucket Bag", price: "$119.00", image: "/images/bag-5.jpg" },
  ],
  tech: [
    { id: "tech-1", name: "Phone Case", price: "$39.00", image: "/images/tech-1.jpg" },
    { id: "tech-2", name: "Wireless Earbuds", price: "$129.00", image: "/images/tech-2.jpg" },
    { id: "tech-3", name: "Smart Watch Band", price: "$49.00", image: "/images/tech-3.jpg" },
    { id: "tech-4", name: "Laptop Sleeve", price: "$59.00", image: "/images/tech-4.jpg" },
    { id: "tech-5", name: "Portable Charger", price: "$69.00", image: "/images/tech-5.jpg" },
  ],
  beauty: [
    { id: "beauty-1", name: "Facial Serum", price: "$49.00", image: "/images/beauty-1.jpg" },
    { id: "beauty-2", name: "Lip Collection", price: "$35.00", image: "/images/beauty-2.jpg" },
    { id: "beauty-3", name: "Eye Palette", price: "$45.00", image: "/images/beauty-3.jpg" },
    { id: "beauty-4", name: "Face Mask Set", price: "$29.00", image: "/images/beauty-4.jpg" },
    { id: "beauty-5", name: "Makeup Brush Set", price: "$65.00", image: "/images/beauty-5.jpg" },
  ],
}

export function ProductCarousel({ category }: { category: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const products = mockProducts[category] || []
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2

      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  // Simplified version for initial render
  if (!mounted) {
    return (
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="flex-none w-[250px]">
              <div className="relative h-[250px] w-[250px] bg-[#f8f5f2] rounded-md overflow-hidden"></div>
              <div className="mt-3">
                <h3 className="text-[#8a5a5e] font-light">{product.name}</h3>
                <p className="text-[#8a5a5e]/80">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-[#8a5a5e]" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[250px]">
            <Link href={`/product/${product.id}`} className="block group">
              <div className="relative h-[250px] w-[250px] bg-[#f8f5f2] rounded-md overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[#8a5a5e] font-light">{product.name}</h3>
                <p className="text-[#8a5a5e]/80">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-[#8a5a5e]" />
        </button>
      </div>
    </div>
  )
}
