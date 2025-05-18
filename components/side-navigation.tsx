"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Shop",
    href: "/shop",
    subItems: [
      { name: "Handmade Bags", href: "/shop/bags" },
      { name: "Clothing", href: "/shop/clothing" },
      {
        name: "Tech & Accessories",
        href: "/shop/tech",
        subItems: [
          { name: "Phone Accessories", href: "/shop/tech/phone" },
          { name: "Audio", href: "/shop/tech/audio" },
          { name: "Wellness Devices", href: "/shop/tech/wellness" },
        ],
      },
      { name: "Beauty/Makeup", href: "/shop/beauty" },
      { name: "Jewelry & Accessories", href: "/shop/jewelry" },
      { name: "Footwear", href: "/shop/footwear" },
    ],
  },
  { name: "Login/Register", href: "/login" },
  { name: "Orders & Returns", href: "/orders" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
]

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const renderNavItems = (items: typeof navigationItems, level = 0) => {
    return items.map((item) => (
      <div key={item.name} className="mb-1">
        <div className="flex items-center">
          {item.subItems ? (
            <button
              onClick={() => toggleExpand(item.name)}
              className={`flex items-center justify-between w-full py-2 px-4 text-[#8a5a5e] hover:bg-[#f8e1e3]/50 rounded-sm transition-colors ${level > 0 ? "text-sm pl-8" : ""}`}
            >
              <span>{item.name}</span>
              {expandedItems.includes(item.name) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              className={`block w-full py-2 px-4 text-[#8a5a5e] hover:bg-[#f8e1e3]/50 rounded-sm transition-colors ${level > 0 ? "text-sm pl-8" : ""}`}
              onClick={() => setIsOpen(false)} // Close mobile menu when clicking a link
            >
              {item.name}
            </Link>
          )}
        </div>

        {item.subItems && expandedItems.includes(item.name) && (
          <div className="ml-2 border-l border-[#e5c1c4] pl-2 mt-1">{renderNavItems(item.subItems, level + 1)}</div>
        )}
      </div>
    ))
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-[#f8e1e3] rounded-full shadow-sm hover:bg-[#f5d1d4] transition-colors"
      >
        <Menu className="h-5 w-5 text-[#8a5a5e]" />
        <span className="sr-only">Open Menu</span>
      </button>

      {/* Sidebar Navigation - Desktop */}
      <div className="hidden md:block w-64 bg-[#faf7f5] border-r border-[#f8e1e3] h-screen overflow-y-auto sticky top-0">
        <div className="p-6">
          <nav className="mt-8">{renderNavItems(navigationItems)}</nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-[#faf7f5] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b border-[#f8e1e3]">
              <h2 className="font-light text-[#8a5a5e]">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5 text-[#8a5a5e]" />
                <span className="sr-only">Close Menu</span>
              </button>
            </div>
            <div className="p-4">
              <nav>{renderNavItems(navigationItems)}</nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
