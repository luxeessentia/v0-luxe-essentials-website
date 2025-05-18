import Image from "next/image"
import Link from "next/link"
import { ProductCarousel } from "@/components/product-carousel"

export default function HomePage() {
  return (
    <main className="pb-16 w-full">
      {/* Full-width Product Banner */}
      <section className="mt-4 px-4">
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=New+Collection"
            alt="Luxurious Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
            <h2 className="text-white text-2xl md:text-4xl font-light mb-4">New Collection</h2>
            <Link
              href="/shop"
              className="bg-white/90 text-[#8a5a5e] px-6 py-2 rounded-sm hover:bg-white transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product Carousels */}
      <section id="bags" className="mt-12 px-4">
        <h2 className="text-xl md:text-2xl font-light text-[#8a5a5e] mb-6">Bags & Accessories</h2>
        <ProductCarousel category="bags" />
      </section>

      <section id="tech" className="mt-12 px-4">
        <h2 className="text-xl md:text-2xl font-light text-[#8a5a5e] mb-6">Tech & Accessories</h2>
        <ProductCarousel category="tech" />
      </section>

      <section id="jewelry" className="mt-12 px-4">
        <h2 className="text-xl md:text-2xl font-light text-[#8a5a5e] mb-6">Jewelry</h2>
        <ProductCarousel category="jewelry" />
      </section>

      {/* Footer */}
      <footer className="mt-16 px-4 py-8 bg-[#f8e1e3]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-[#8a5a5e] mb-4">About Luxe Essentials</h3>
            <p className="text-sm text-[#8a5a5e]/80">
              Luxe Essentials offers premium quality products with elegant design and exceptional craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#8a5a5e] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#8a5a5e]/80">
              <li>
                <Link href="/about" className="hover:text-[#8a5a5e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8a5a5e] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#8a5a5e] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#8a5a5e] transition-colors">
                  Orders & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#8a5a5e] mb-4">Newsletter</h3>
            <p className="text-sm text-[#8a5a5e]/80 mb-2">
              Sign up to receive updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-[#e5c1c4] rounded-l-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
              />
              <button className="bg-[#8a5a5e] text-white px-4 py-2 rounded-r-sm hover:bg-[#7a4a4e] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-[#8a5a5e]/70">
          &copy; {new Date().getFullYear()} Luxe Essentials. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
