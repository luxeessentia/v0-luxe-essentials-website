"use client"

import { createContext, useContext, useState, type ReactNode, useCallback } from "react"
import { type Product, type ProductColor, type ProductSize, getPriceRange } from "../app/data/products"

type SortOption = "featured" | "price-low-high" | "price-high-low" | "newest" | "name-a-z" | "name-z-a"

type FilterState = {
  priceRange: [number, number]
  selectedColors: ProductColor[]
  selectedSizes: ProductSize[]
  selectedCategories: string[]
  selectedSubcategories: string[]
  searchQuery: string
  sortBy: SortOption
}

type FilterContextType = {
  filters: FilterState
  setFilters: (filters: Partial<FilterState>) => void
  resetFilters: () => void
  applyFilters: (products: Product[]) => Product[]
  toggleColor: (color: ProductColor) => void
  toggleSize: (size: ProductSize) => void
  toggleCategory: (category: string) => void
  toggleSubcategory: (subcategory: string) => void
  setPriceRange: (range: [number, number]) => void
  setSearchQuery: (query: string) => void
  setSortBy: (option: SortOption) => void
}

const priceRange = getPriceRange()

const initialFilterState: FilterState = {
  priceRange: [priceRange.min, priceRange.max],
  selectedColors: [],
  selectedSizes: [],
  selectedCategories: [],
  selectedSubcategories: [],
  searchQuery: "",
  sortBy: "featured",
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<FilterState>(initialFilterState)

  const setFilters = useCallback((newFilters: Partial<FilterState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const resetFilters = useCallback(() => {
    setFiltersState(initialFilterState)
  }, [])

  const toggleColor = useCallback((color: ProductColor) => {
    setFiltersState((prev) => {
      const isSelected = prev.selectedColors.includes(color)
      return {
        ...prev,
        selectedColors: isSelected ? prev.selectedColors.filter((c) => c !== color) : [...prev.selectedColors, color],
      }
    })
  }, [])

  const toggleSize = useCallback((size: ProductSize) => {
    setFiltersState((prev) => {
      const isSelected = prev.selectedSizes.includes(size)
      return {
        ...prev,
        selectedSizes: isSelected ? prev.selectedSizes.filter((s) => s !== size) : [...prev.selectedSizes, size],
      }
    })
  }, [])

  const toggleCategory = useCallback((category: string) => {
    setFiltersState((prev) => {
      const isSelected = prev.selectedCategories.includes(category)
      return {
        ...prev,
        selectedCategories: isSelected
          ? prev.selectedCategories.filter((c) => c !== category)
          : [...prev.selectedCategories, category],
      }
    })
  }, [])

  const toggleSubcategory = useCallback((subcategory: string) => {
    setFiltersState((prev) => {
      const isSelected = prev.selectedSubcategories.includes(subcategory)
      return {
        ...prev,
        selectedSubcategories: isSelected
          ? prev.selectedSubcategories.filter((s) => s !== subcategory)
          : [...prev.selectedSubcategories, subcategory],
      }
    })
  }, [])

  const setPriceRange = useCallback((range: [number, number]) => {
    setFiltersState((prev) => ({
      ...prev,
      priceRange: range,
    }))
  }, [])

  const setSearchQuery = useCallback((query: string) => {
    setFiltersState((prev) => ({
      ...prev,
      searchQuery: query,
    }))
  }, [])

  const setSortBy = useCallback((option: SortOption) => {
    setFiltersState((prev) => ({
      ...prev,
      sortBy: option,
    }))
  }, [])

  const applyFilters = useCallback(
    (products: Product[]): Product[] => {
      let filteredProducts = [...products]

      // Filter by price range
      filteredProducts = filteredProducts.filter(
        (product) => product.numericPrice >= filters.priceRange[0] && product.numericPrice <= filters.priceRange[1],
      )

      // Filter by colors
      if (filters.selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors?.some((color) => filters.selectedColors.includes(color)),
        )
      }

      // Filter by sizes
      if (filters.selectedSizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.sizes?.some((size) => filters.selectedSizes.includes(size)),
        )
      }

      // Filter by categories
      if (filters.selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter((product) => filters.selectedCategories.includes(product.category))
      }

      // Filter by subcategories
      if (filters.selectedSubcategories.length > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.subcategory && filters.selectedSubcategories.includes(product.subcategory),
        )
      }

      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.tags?.some((tag) => tag.toLowerCase().includes(query)),
        )
      }

      // Sort products
      switch (filters.sortBy) {
        case "price-low-high":
          filteredProducts.sort((a, b) => a.numericPrice - b.numericPrice)
          break
        case "price-high-low":
          filteredProducts.sort((a, b) => b.numericPrice - a.numericPrice)
          break
        case "newest":
          filteredProducts.sort((a, b) => {
            if (!a.dateAdded || !b.dateAdded) return 0
            return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          })
          break
        case "name-a-z":
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-z-a":
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "featured":
        default:
          filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          break
      }

      return filteredProducts
    },
    [filters],
  )

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        resetFilters,
        applyFilters,
        toggleColor,
        toggleSize,
        toggleCategory,
        toggleSubcategory,
        setPriceRange,
        setSearchQuery,
        setSortBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider")
  }
  return context
}
