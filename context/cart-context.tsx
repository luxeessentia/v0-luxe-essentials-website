"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: string
  name: string
  price: string
  quantity: number
  image: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
        localStorage.removeItem("cart")
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1
        return updatedItems
      } else {
        // Item doesn't exist, add it with quantity 1
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const subtotal = items.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace(/[^0-9.]/g, ""))
    return total + price * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
