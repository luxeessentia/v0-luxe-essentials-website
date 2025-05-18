"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "../context/cart-context"

export function CartIcon() {
  const { itemCount } = useCart()

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        href="/cart"
        className="flex items-center justify-center w-10 h-10 bg-[#f8e1e3] rounded-full shadow-sm hover:bg-[#f5d1d4] transition-colors relative"
      >
        <ShoppingBag className="h-5 w-5 text-[#8a5a5e]" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#8a5a5e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Cart ({itemCount} items)</span>
      </Link>
    </div>
  )
}
