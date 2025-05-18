"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getProductsByCategory } from "@/data/products"

export function ProductCarousel({ category }: { category: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const products = getProductsByCategory(category)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2

      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
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
