import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingBag } from "lucide-react"

import { getProductById } from "@/data/products"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { LogoHeader } from "@/components/logo-header"
import { SideNavigation } from "@/components/side-navigation"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen bg-[#faf7f5]">
      {/* Left Side Navigation */}
      <SideNavigation />

      {/* Main Content */}
      <main className="flex-1 pb-16">
        {/* Sliding Hero Banner */}
        <SlidingHeroBanner />

        {/* Logo Header */}
        <LogoHeader />

        {/* Cart Icon - Top Right */}
        <div className="fixed top-4 right-4 z-50">
          <Link
            href="/cart"
            className="flex items-center justify-center w-10 h-10 bg-[#f8e1e3] rounded-full shadow-sm hover:bg-[#f5d1d4] transition-colors"
          >
            <ShoppingBag className="h-5 w-5 text-[#8a5a5e]" />
            <span className="sr-only">Cart</span>
          </Link>
        </div>

        {/* Product Detail */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] bg-[#f8f5f2] rounded-lg overflow-hidden">
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
                    <div
                      key={index}
                      className="relative h-20 w-20 flex-shrink-0 bg-[#f8f5f2] rounded-md overflow-hidden"
                    >
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
                className="w-full bg-[#8a5a5e] text-white py-3 rounded-sm hover:bg-[#7a4a4e] transition-colors mb-4"
                disabled={!product.stock || product.stock <= 0}
              >
                Add to Cart
              </button>

              {/* Back to Category */}
              <Link href={`/#${product.category}`} className="inline-block text-[#8a5a5e] hover:underline">
                ← Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#f8e1e3] py-3 text-center text-sm text-[#8a5a5e] z-40">
          📦 FREE STANDARD SHIPPING ON U.S. ORDERS $50+ | FREE EXPRESS SHIPPING ON U.S. ORDERS $100+
        </div>
      </main>
    </div>
  )
}
