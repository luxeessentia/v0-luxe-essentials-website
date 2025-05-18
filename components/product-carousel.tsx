"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getProductsByCategory } from "../app/data/products"

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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-[#6b46c1]" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[160px] md:w-[250px]">
            <Link href={`/product/${product.id}`} className="block group">
              <div className="relative h-[160px] w-[160px] md:h-[250px] md:w-[250px] bg-[#f8f5f2] rounded-md overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-sm md:text-base text-[#6b46c1] font-light">{product.name}</h3>
                <p className="text-sm text-[#6b46c1]/80">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-[#6b46c1]" />
        </button>
      </div>
    </div>
  )
}
