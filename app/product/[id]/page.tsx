"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { getProductById } from "../../data/products"
import { useCart } from "../../../context/cart-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <main className="pb-16">
      {/* Product Detail */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-[350px] md:h-[500px] bg-[#f8f5f2] rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Additional Images */}
            {product.additionalImages && product.additionalImages.length > 0 && (
              <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
                {product.additionalImages.map((img, index) => (
                  <div key={index} className="relative h-20 w-20 flex-shrink-0 bg-[#f8f5f2] rounded-md overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-light text-[#8a5a5e] mb-2">{product.name}</h1>
            <p className="text-xl text-[#8a5a5e] font-medium mb-4">{product.price}</p>

            {product.originalPrice && (
              <p className="text-sm text-[#8a5a5e]/70 line-through mb-4">Original price: {product.originalPrice}</p>
            )}

            <div className="mb-6">
              <p className="text-[#8a5a5e]/80">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-6">
                <h2 className="text-lg font-medium text-[#8a5a5e] mb-2">Specifications</h2>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 border-b border-[#f8e1e3] py-2">
                      <span className="text-[#8a5a5e]/70">{key}</span>
                      <span className="text-[#8a5a5e]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stock */}
            <div className="mb-6">
              <p className="text-sm text-[#8a5a5e]/80">
                {product.stock && product.stock > 0 ? `In Stock: ${product.stock} available` : "Out of Stock"}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-[#8a5a5e] text-white py-3 rounded-sm hover:bg-[#7a4a4e] transition-colors mb-4"
              disabled={!product.stock || product.stock <= 0}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>

            {/* Back to Category */}
            <Link href={`/#${product.category}`} className="inline-block text-[#8a5a5e] hover:underline">
              ← Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
