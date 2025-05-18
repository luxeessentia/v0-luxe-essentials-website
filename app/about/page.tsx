import Image from "next/image"
import Link from "next/link"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { LogoHeader } from "@/components/logo-header"
import { Instagram, MessageCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Sliding Hero Banner */}
      <SlidingHeroBanner />

      {/* Logo Header */}
      <div className="mb-4">
        <LogoHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">About Us</h1>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Luxe Essentials Workspace"
            fill
            className="object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8a5a5e] mb-6 text-lg">
            At Luxe Essentials, we believe style and comfort go hand in hand. Our mission is to provide high-quality,
            elegant products that enhance your everyday life while maintaining affordability and sustainability.
          </p>
          <p className="text-[#8a5a5e] mb-6">
            Founded in 2023, Luxe Essentials began with a simple idea: to create beautiful, functional items that bring
            joy to our customers. We carefully curate each product in our collection, ensuring it meets our standards
            for quality, design, and value.
          </p>
          <p className="text-[#8a5a5e] mb-8">
            Our team is passionate about discovering unique products and bringing them to you. We believe in transparent
            business practices, exceptional customer service, and building lasting relationships with our community.
          </p>

          {/* Team Section */}
          <h2 className="text-xl font-light text-[#8a5a5e] text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sandra - Founder & Designer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#8a5a5e] font-medium">Sandra</h3>
              <p className="text-[#8a5a5e]/70 text-sm">Founder & Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#8a5a5e] font-medium">Michael</h3>
              <p className="text-[#8a5a5e]/70 text-sm">Operations Manager</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Emma - Customer Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#8a5a5e] font-medium">Emma</h3>
              <p className="text-[#8a5a5e]/70 text-sm">Customer Experience</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://instagram.com/luxe.essentials.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a5a5e] hover:text-[#D9A5B3]"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://tiktok.com/@luxe.essentials.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a5a5e] hover:text-[#D9A5B3]"
            >
              <span className="text-xl">TikTok</span>
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://threads.net/@luxe.essentials.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a5a5e] hover:text-[#D9A5B3]"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Threads</span>
            </Link>
          </div>

          {/* Newsletter */}
          <div className="bg-[#f8e1e3]/30 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-[#8a5a5e] mb-2 text-center">Join Our Newsletter</h3>
            <p className="text-[#8a5a5e]/80 text-center mb-4">
              Stay updated with our latest products, promotions, and news.
            </p>
            <div className="flex max-w-md mx-auto">
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
      </main>
    </div>
  )
}
