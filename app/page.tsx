import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { ProductCarousel } from "@/components/product-carousel"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { SideNavigation } from "@/components/side-navigation"
import { LogoHeader } from "@/components/logo-header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#faf7f5]">
      {/* Left Side Navigation */}
      <SideNavigation />

      {/* Main Content */}
      <main className="flex-1 pb-16">
        {/* Sliding Hero Banner */}
        <SlidingHeroBanner />

        {/* Logo Header with more space */}
        <div className="mb-4">
          <LogoHeader />
        </div>

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

        {/* Full-width Product Banner */}
        <section className="mt-8 px-4 md:px-8">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <Image src="/images/product-banner-1.jpg" alt="Luxurious Collection" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <h2 className="text-white text-3xl md:text-4xl font-light mb-4">New Collection</h2>
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
        <section id="bags" className="mt-16 px-4 md:px-8">
          <h2 className="text-2xl font-light text-[#8a5a5e] mb-6">Bags & Accessories</h2>
          <ProductCarousel category="bags" />
        </section>

        <section id="tech" className="mt-16 px-4 md:px-8">
          <h2 className="text-2xl font-light text-[#8a5a5e] mb-6">Tech & Accessories</h2>
          <ProductCarousel category="tech" />
        </section>

        <section id="jewelry" className="mt-16 px-4 md:px-8">
          <h2 className="text-2xl font-light text-[#8a5a5e] mb-6">Jewelry</h2>
          <ProductCarousel category="jewelry" />
        </section>

        {/* Second Banner */}
        <section className="mt-16 px-4 md:px-8">
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <Image src="/images/product-banner-2.jpg" alt="Luxury Accessories" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <h2 className="text-white text-3xl md:text-4xl font-light mb-4">Luxury Accessories</h2>
              <Link
                href="/shop/accessories"
                className="bg-white/90 text-[#8a5a5e] px-6 py-2 rounded-sm hover:bg-white transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 px-4 md:px-8 py-8 bg-[#f8e1e3]/30">
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
                  <Link href="/orders-returns" className="hover:text-[#8a5a5e] transition-colors">
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

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f8e1e3] py-3 text-center text-sm text-[#8a5a5e] z-40">
        📦 FREE STANDARD SHIPPING ON U.S. ORDERS $50+ | FREE EXPRESS SHIPPING ON U.S. ORDERS $100+
      </div>
    </div>
  )
}
