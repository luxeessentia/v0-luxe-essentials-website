import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">Contact Us</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Contact Luxe Essentials"
              fill
              className="object-cover"
            />
          </div>

          {/* Form Side */}
          <div className="p-6 md:p-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="inquiry-type" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                  Inquiry Type
                </label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Issue</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="custom">Custom Bag Requests</option>
                  <option value="business">Business/Collaboration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-[#D9A5B3] border-[#e5c1c4] rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-[#8a5a5e]">
                  Subscribe to our newsletter for updates and promotions
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#D9A5B3] text-white py-2 px-4 rounded-sm hover:bg-[#c99aaa] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[#e5c1c4]">
              <h3 className="text-lg font-light text-[#8a5a5e] mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/luxe.essentials.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#8a5a5e] hover:text-[#D9A5B3]"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>@luxe.essentials.co</span>
                </Link>
              </div>
              <div className="flex space-x-4 mt-2">
                <Link
                  href="https://tiktok.com/@luxe.essentials.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#8a5a5e] hover:text-[#D9A5B3]"
                >
                  <span className="mr-2 text-xl">TikTok</span>
                  <span>@luxe.essentials.co</span>
                </Link>
              </div>
              <div className="flex space-x-4 mt-2">
                <Link
                  href="https://threads.net/@luxe.essentials.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#8a5a5e] hover:text-[#D9A5B3]"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>@luxe.essentials.co</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
