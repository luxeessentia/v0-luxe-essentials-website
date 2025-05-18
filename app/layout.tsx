import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SlidingHeroBanner } from "../components/sliding-hero-banner"
import { LogoHeader } from "../components/logo-header"
import { SideNavigation } from "../components/side-navigation"
import { CartIcon } from "../components/cart-icon"
import { CartProvider } from "../context/cart-context"
import { FilterProvider } from "../context/filter-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxe Essentials",
  description: "Elevate Your Style with Luxe Essentials",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <FilterProvider>
            <div className="flex min-h-screen bg-[#faf7f5] relative">
              {/* Side Navigation (always present) */}
              <SideNavigation />

              {/* Main Content */}
              <div className="flex-1 w-full overflow-x-hidden">
                {/* Sliding Hero Banner */}
                <SlidingHeroBanner />

                {/* Logo Header */}
                <div className="mb-4">
                  <LogoHeader />
                </div>

                {/* Cart Icon - Fixed Top Right */}
                <CartIcon />

                {/* Page Content */}
                {children}

                {/* Sticky Bottom Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-[#e9d8fd] py-3 text-center text-sm text-black z-40">
                  📦 FREE STANDARD SHIPPING ON U.S. ORDERS $50+ | FREE EXPRESS SHIPPING ON U.S. ORDERS $100+
                </div>
              </div>
            </div>
          </FilterProvider>
        </CartProvider>
      </body>
    </html>
  )
}
