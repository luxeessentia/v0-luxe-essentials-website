"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useFilter } from "../context/filter-context"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "name-a-z", label: "Name: A to Z" },
  { value: "name-z-a", label: "Name: Z to A" },
]

export function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { filters, setSortBy } = useFilter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentSortOption = sortOptions.find((option) => option.value === filters.sortBy) || sortOptions[0]

  const handleSortChange = (value: string) => {
    setSortBy(value as any)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full md:w-48" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 bg-white border border-[#e9d8fd] rounded-sm text-black font-bold"
      >
        <span>{currentSortOption.label}</span>
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#e9d8fd] rounded-sm shadow-lg">
          <ul>
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => handleSortChange(option.value)}
                  className={`w-full text-left px-3 py-2 hover:bg-[#e9d8fd]/30 ${
                    option.value === filters.sortBy ? "bg-[#e9d8fd]/50 font-bold" : ""
                  } text-black`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
