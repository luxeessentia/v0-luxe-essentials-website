"use client"

import type React from "react"

import { useState } from "react"
import { X, ChevronDown, ChevronUp, Filter } from "lucide-react"
import { useFilter } from "../context/filter-context"
import { getAllColors, getAllSizes, getAllCategories, getAllSubcategories, getPriceRange } from "../app/data/products"

export function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(["price", "color", "category"])

  const { filters, toggleColor, toggleSize, toggleCategory, toggleSubcategory, setPriceRange, resetFilters } =
    useFilter()

  const colors = getAllColors()
  const sizes = getAllSizes()
  const categories = getAllCategories()
  const subcategories = getAllSubcategories()
  const priceRange = getPriceRange()

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const isSectionExpanded = (section: string) => expandedSections.includes(section)

  // Color display mapping
  const colorDisplay: Record<string, { bg: string; text: string }> = {
    red: { bg: "bg-red-500", text: "Red" },
    orange: { bg: "bg-orange-500", text: "Orange" },
    yellow: { bg: "bg-yellow-400", text: "Yellow" },
    green: { bg: "bg-green-500", text: "Green" },
    blue: { bg: "bg-blue-500", text: "Blue" },
    purple: { bg: "bg-purple-500", text: "Purple" },
    pink: { bg: "bg-pink-400", text: "Pink" },
    brown: { bg: "bg-amber-700", text: "Brown" },
    black: { bg: "bg-black", text: "Black" },
    white: { bg: "bg-white border border-gray-300", text: "White" },
    gray: { bg: "bg-gray-500", text: "Gray" },
    gold: { bg: "bg-amber-400", text: "Gold" },
    silver: { bg: "bg-gray-300", text: "Silver" },
    multicolor: { bg: "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500", text: "Multicolor" },
    tan: { bg: "bg-amber-200", text: "Tan" },
    mint: { bg: "bg-green-200", text: "Mint" },
  }

  // Handle price range change
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value)) {
      setPriceRange([value, filters.priceRange[1]])
    }
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value)) {
      setPriceRange([filters.priceRange[0], value])
    }
  }

  // Mobile filter toggle
  const toggleMobileFilter = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-16 right-4 z-40">
        <button
          onClick={toggleMobileFilter}
          className="flex items-center justify-center gap-2 bg-black text-white p-3 rounded-full shadow-lg"
          aria-label="Toggle filters"
        >
          <Filter className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white rounded-lg shadow-md p-4 sticky top-24 self-start">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Filters</h2>
          <button onClick={resetFilters} className="text-sm text-black hover:text-black">
            Reset All
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-4 border-b border-[#e9d8fd] pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
            onClick={() => toggleSection("price")}
          >
            <span>Price Range</span>
            {isSectionExpanded("price") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isSectionExpanded("price") && (
            <div className="mt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1">
                  <label htmlFor="min-price" className="block text-xs text-black mb-1">
                    Min
                  </label>
                  <input
                    type="number"
                    id="min-price"
                    min={priceRange.min}
                    max={filters.priceRange[1]}
                    value={filters.priceRange[0]}
                    onChange={handleMinPriceChange}
                    className="w-full p-1 border border-[#e9d8fd] rounded text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="max-price" className="block text-xs text-black mb-1">
                    Max
                  </label>
                  <input
                    type="number"
                    id="max-price"
                    min={filters.priceRange[0]}
                    max={priceRange.max}
                    value={filters.priceRange[1]}
                    onChange={handleMaxPriceChange}
                    className="w-full p-1 border border-[#e9d8fd] rounded text-sm"
                  />
                </div>
              </div>
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={filters.priceRange[1]}
                onChange={handleMaxPriceChange}
                className="w-full accent-black"
              />
            </div>
          )}
        </div>

        {/* Colors */}
        <div className="mb-4 border-b border-[#e9d8fd] pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
            onClick={() => toggleSection("color")}
          >
            <span>Colors</span>
            {isSectionExpanded("color") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isSectionExpanded("color") && (
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`flex flex-col items-center ${filters.selectedColors.includes(color) ? "ring-2 ring-black ring-offset-1" : ""}`}
                  title={colorDisplay[color]?.text || color}
                >
                  <span className={`block w-6 h-6 rounded-full ${colorDisplay[color]?.bg || "bg-gray-200"}`}></span>
                  <span className="text-xs mt-1 text-black">{colorDisplay[color]?.text || color}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mb-4 border-b border-[#e9d8fd] pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
            onClick={() => toggleSection("category")}
          >
            <span>Categories</span>
            {isSectionExpanded("category") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isSectionExpanded("category") && (
            <div className="space-y-1 mt-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="mr-2 accent-black"
                  />
                  <span className="text-sm capitalize text-black">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Subcategories */}
        <div className="mb-4 border-b border-[#e9d8fd] pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
            onClick={() => toggleSection("subcategory")}
          >
            <span>Product Types</span>
            {isSectionExpanded("subcategory") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isSectionExpanded("subcategory") && (
            <div className="space-y-1 mt-2">
              {subcategories.map((subcategory) => (
                <label key={subcategory} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.selectedSubcategories.includes(subcategory)}
                    onChange={() => toggleSubcategory(subcategory)}
                    className="mr-2 accent-black"
                  />
                  <span className="text-sm capitalize text-black">{subcategory}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <button
            className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
            onClick={() => toggleSection("size")}
          >
            <span>Sizes</span>
            {isSectionExpanded("size") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isSectionExpanded("size") && (
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`px-2 py-1 border ${
                    filters.selectedSizes.includes(size)
                      ? "bg-black text-white border-black"
                      : "border-[#e9d8fd] text-black hover:bg-[#e9d8fd]/50"
                  } rounded text-sm`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-black">Filters</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5 text-black" />
              </button>
            </div>

            <button onClick={resetFilters} className="w-full bg-[#e9d8fd] text-black py-2 rounded-sm mb-4">
              Reset All Filters
            </button>

            {/* Mobile Price Range */}
            <div className="mb-4 border-b border-[#e9d8fd] pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
                onClick={() => toggleSection("price-mobile")}
              >
                <span>Price Range</span>
                {isSectionExpanded("price-mobile") ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {isSectionExpanded("price-mobile") && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1">
                      <label htmlFor="min-price-mobile" className="block text-xs text-black mb-1">
                        Min
                      </label>
                      <input
                        type="number"
                        id="min-price-mobile"
                        min={priceRange.min}
                        max={filters.priceRange[1]}
                        value={filters.priceRange[0]}
                        onChange={handleMinPriceChange}
                        className="w-full p-1 border border-[#e9d8fd] rounded text-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="max-price-mobile" className="block text-xs text-black mb-1">
                        Max
                      </label>
                      <input
                        type="number"
                        id="max-price-mobile"
                        min={filters.priceRange[0]}
                        max={priceRange.max}
                        value={filters.priceRange[1]}
                        onChange={handleMaxPriceChange}
                        className="w-full p-1 border border-[#e9d8fd] rounded text-sm"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={filters.priceRange[1]}
                    onChange={handleMaxPriceChange}
                    className="w-full accent-black"
                  />
                </div>
              )}
            </div>

            {/* Mobile Colors */}
            <div className="mb-4 border-b border-[#e9d8fd] pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
                onClick={() => toggleSection("color-mobile")}
              >
                <span>Colors</span>
                {isSectionExpanded("color-mobile") ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {isSectionExpanded("color-mobile") && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`flex flex-col items-center ${filters.selectedColors.includes(color) ? "ring-2 ring-black ring-offset-1" : ""}`}
                      title={colorDisplay[color]?.text || color}
                    >
                      <span className={`block w-6 h-6 rounded-full ${colorDisplay[color]?.bg || "bg-gray-200"}`}></span>
                      <span className="text-xs mt-1 text-black">{colorDisplay[color]?.text || color}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Categories */}
            <div className="mb-4 border-b border-[#e9d8fd] pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
                onClick={() => toggleSection("category-mobile")}
              >
                <span>Categories</span>
                {isSectionExpanded("category-mobile") ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {isSectionExpanded("category-mobile") && (
                <div className="space-y-1 mt-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2 accent-black"
                      />
                      <span className="text-sm capitalize text-black">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Subcategories */}
            <div className="mb-4 border-b border-[#e9d8fd] pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
                onClick={() => toggleSection("subcategory-mobile")}
              >
                <span>Product Types</span>
                {isSectionExpanded("subcategory-mobile") ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {isSectionExpanded("subcategory-mobile") && (
                <div className="space-y-1 mt-2">
                  {subcategories.map((subcategory) => (
                    <label key={subcategory} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.selectedSubcategories.includes(subcategory)}
                        onChange={() => toggleSubcategory(subcategory)}
                        className="mr-2 accent-black"
                      />
                      <span className="text-sm capitalize text-black">{subcategory}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Sizes */}
            <div className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-black mb-2"
                onClick={() => toggleSection("size-mobile")}
              >
                <span>Sizes</span>
                {isSectionExpanded("size-mobile") ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {isSectionExpanded("size-mobile") && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-2 py-1 border ${
                        filters.selectedSizes.includes(size)
                          ? "bg-black text-white border-black"
                          : "border-[#e9d8fd] text-black hover:bg-[#e9d8fd]/50"
                      } rounded text-sm`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setIsOpen(false)} className="w-full bg-black text-white py-2 rounded-sm mt-4">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  )
}
