import Image from "next/image"
import Link from "next/link"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { LogoHeader } from "@/components/logo-header"
import { Minus, Plus, X } from "lucide-react"

// Mock cart data
const cartItems = [
  {
    id: "1",
    name: "Elegant Tote",
    price: 129.0,
    quantity: 1,
    image: "/images/bag-1.jpg",
  },
  {
    id: "2",
    name: "Portable Bluetooth Speaker",
    price: 34.99,
    quantity: 1,
    image: "/images/products/bluetooth-speaker.jpg",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Sliding Hero Banner */}
      <SlidingHeroBanner />

      {/* Logo Header */}
      <div className="mb-4">
        <LogoHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-[#e5c1c4]">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-[#8a5a5e]">
                                <h3>{item.name}</h3>
                                <p className="ml-4">${item.price.toFixed(2)}</p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center border border-[#e5c1c4] rounded-sm">
                                <button className="p-2 text-[#8a5a5e] hover:bg-[#f8e1e3]/30">
                                  <Minus className="h-4 w-4" />
                                  <span className="sr-only">Decrease quantity</span>
                                </button>
                                <span className="px-4 py-2 text-[#8a5a5e]">{item.quantity}</span>
                                <button className="p-2 text-[#8a5a5e] hover:bg-[#f8e1e3]/30">
                                  <Plus className="h-4 w-4" />
                                  <span className="sr-only">Increase quantity</span>
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-[#8a5a5e] hover:text-[#D9A5B3] flex items-center"
                                >
                                  <X className="h-4 w-4 mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-[#8a5a5e] mb-4">Your cart is empty.</p>
                <Link
                  href="/"
                  className="inline-block bg-[#8a5a5e] text-white py-2 px-4 rounded-sm hover:bg-[#7a4a4e] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-[#8a5a5e] mb-4">Order Summary</h2>
              <div className="flow-root">
                <div className="border-t border-b border-[#e5c1c4] py-4">
                  <div className="flex justify-between text-base text-[#8a5a5e]">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-base text-[#8a5a5e] mt-2">
                    <p>Shipping</p>
                    <p>Calculated at checkout</p>
                  </div>
                </div>
                <div className="flex justify-between text-base font-medium text-[#8a5a5e] mt-4">
                  <p>Total</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/checkout"
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-[#8a5a5e] hover:bg-[#7a4a4e]"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/" className="text-sm text-[#8a5a5e] hover:text-[#D9A5B3]">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
