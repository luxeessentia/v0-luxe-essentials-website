"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { useFilter } from "../context/filter-context"

export function SearchBar() {
  const [inputValue, setInputValue] = useState("")
  const { setSearchQuery } = useFilter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(inputValue)
  }

  const clearSearch = () => {
    setInputValue("")
    setSearchQuery("")
  }

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md w-full">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-2 border border-[#e9d8fd] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/70" />

        {inputValue && (
          <button type="button" onClick={clearSearch} className="absolute right-10 top-1/2 transform -translate-y-1/2">
            <X className="h-4 w-4 text-black/70" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
      <button type="submit" className="absolute right-0 top-0 h-full px-3 bg-black text-white rounded-r-sm">
        Search
      </button>
    </form>
  )
}
