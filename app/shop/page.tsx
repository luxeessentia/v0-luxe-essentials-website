"use client"

import { useState, useEffect } from "react"
import { products } from "../data/products"
import { FilterProvider, useFilter } from "../../context/filter-context"
import { FilterSidebar } from "../../components/filter-sidebar"
import { SortDropdown } from "../../components/sort-dropdown"
import { SearchBar } from "../../components/search-bar"
import { ProductGrid } from "../../components/product-grid"

function ShopContent() {
  const { filters, applyFilters } = useFilter()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  useEffect(() => {
    setFilteredProducts(applyFilters(products))

    // Count active filters
    let count = 0
    if (filters.selectedColors.length > 0) count++
    if (filters.selectedSizes.length > 0) count++
    if (filters.selectedCategories.length > 0) count++
    if (filters.selectedSubcategories.length > 0) count++
    if (filters.searchQuery) count++
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100) count++
    setActiveFiltersCount(count)
  }, [filters, applyFilters])

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Filter Sidebar */}
      <FilterSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar with Search and Sort */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="text-sm text-black/70 hidden md:block">
                <span>{filteredProducts.length} products</span>
                {activeFiltersCount > 0 && <span className="ml-2">({activeFiltersCount} filters active)</span>}
              </div>
              <SortDropdown />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl font-light text-black text-center mb-6">Shop All Products</h1>

      <FilterProvider>
        <ShopContent />
      </FilterProvider>
    </main>
  )
}
