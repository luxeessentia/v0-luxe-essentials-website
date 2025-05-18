"use client"

import { useState } from "react"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { LogoHeader } from "@/components/logo-header"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

// FAQ data
const faqs = [
  {
    question: "How long will shipping take?",
    answer:
      "Standard shipping takes 3-5 business days via USPS. Express shipping options are available at checkout for faster delivery.",
  },
  {
    question: "Do you offer returns?",
    answer:
      "Yes, we accept returns within 48 hours of delivery. Items must be in their original packaging and unworn/unused condition. Please note that shipping costs are non-refundable.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, Discover, Klarna, Affirm, Apple Pay, Google Pay, and Cash App.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. We hope to expand to international shipping in the future.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order on our Orders & Returns page by entering your order number and email address.",
  },
  {
    question: "Are your products handmade?",
    answer:
      "Many of our products are handmade or hand-finished, particularly our bags and accessories. We work with skilled artisans to ensure quality craftsmanship.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer gift wrapping services for an additional $5 per item. You can select this option during checkout.",
  },
  {
    question: "How do I care for my Luxe Essentials products?",
    answer:
      "Care instructions vary by product. Specific care information is included with each item and can also be found on the product page.",
  },
]

export default function FAQPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Sliding Hero Banner */}
      <SlidingHeroBanner />

      {/* Logo Header */}
      <div className="mb-4">
        <LogoHeader />
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">Frequently Asked Questions</h1>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#8a5a5e]/50" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full pl-10 pr-4 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="border border-[#e5c1c4] rounded-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-[#f8e1e3]/20 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[#8a5a5e]">{faq.question}</span>
                {openFAQs.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-[#8a5a5e]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#8a5a5e]" />
                )}
              </button>
              {openFAQs.includes(index) && (
                <div className="p-4 bg-[#f8e1e3]/10 border-t border-[#e5c1c4]">
                  <p className="text-[#8a5a5e]/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-[#8a5a5e]">No FAQs found matching your search.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-light text-[#8a5a5e] mb-4">Still have questions?</h2>
          <p className="text-[#8a5a5e]/80 mb-4">
            If you couldn't find the answer to your question, please feel free to contact us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#8a5a5e] text-white py-2 px-6 rounded-sm hover:bg-[#7a4a4e] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  )
}
