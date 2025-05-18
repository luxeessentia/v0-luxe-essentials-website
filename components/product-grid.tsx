"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import type { Product } from "../app/data/products"
import { useCart } from "../context/cart-context"

export function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-black text-lg font-bold">No products found matching your criteria.</p>
        <p className="text-black/70 mt-2">Try adjusting your filters or search query.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <Link href={`/product/${product.id}`} className="block">
            <div className="relative h-[160px] md:h-[250px] bg-[#f8f5f2] rounded-md overflow-hidden">
              {product.sale && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-sm z-10">
                  SALE
                </span>
              )}
              {product.new && (
                <span className="absolute top-2 right-2 bg-[#9f7aea] text-white text-xs px-2 py-1 rounded-sm z-10">
                  NEW
                </span>
              )}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm md:text-base text-black font-bold">{product.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm text-black/80">{product.price}</p>
                {product.originalPrice && <p className="text-xs text-black/60 line-through">{product.originalPrice}</p>}
              </div>
              {product.colors && product.colors.length > 0 && (
                <div className="flex mt-2 space-x-1">
                  {product.colors.map((color) => {
                    const colorMap: Record<string, string> = {
                      red: "bg-red-500",
                      orange: "bg-orange-500",
                      yellow: "bg-yellow-400",
                      green: "bg-green-500",
                      blue: "bg-blue-500",
                      purple: "bg-purple-500",
                      pink: "bg-pink-400",
                      brown: "bg-amber-700",
                      black: "bg-black",
                      white: "bg-white border border-gray-300",
                      gray: "bg-gray-500",
                      gold: "bg-amber-400",
                      silver: "bg-gray-300",
                      multicolor: "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500",
                      tan: "bg-amber-200",
                      mint: "bg-green-200",
                    }

                    return (
                      <span
                        key={color}
                        className={`inline-block w-3 h-3 rounded-full ${colorMap[color] || "bg-gray-200"}`}
                        title={color}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          </Link>
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-black text-white py-1 px-2 rounded-sm hover:bg-black/80 transition-colors text-sm"
            disabled={!product.stock || product.stock <= 0}
          >
            <ShoppingCart className="h-3 w-3" />
            <span>Add to Cart</span>
          </button>
        </div>
      ))}
    </div>
  )
}
