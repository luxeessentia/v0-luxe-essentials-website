import Image from "next/image"
import { SlidingHeroBanner } from "@/components/sliding-hero-banner"
import { LogoHeader } from "@/components/logo-header"
import { PaymentMethods } from "@/components/payment-methods"

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

export default function CheckoutPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Sliding Hero Banner */}
      <SlidingHeroBanner />

      {/* Logo Header */}
      <div className="mb-4">
        <LogoHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-[#8a5a5e] mb-4">Billing & Shipping</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  >
                    <option value="US">United States</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#8a5a5e] mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
                  />
                </div>
              </form>

              <div className="mt-8">
                <h2 className="text-lg font-medium text-[#8a5a5e] mb-4">Payment Method</h2>
                <PaymentMethods />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-[#8a5a5e] mb-4">Order Summary</h2>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-[#e5c1c4]">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-[#8a5a5e]">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-[#8a5a5e]/70">Qty: {item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#e5c1c4] mt-6 pt-6">
                <div className="flex justify-between text-base text-[#8a5a5e]">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base text-[#8a5a5e] mt-2">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-[#8a5a5e] mt-4">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-[#D9A5B3] hover:bg-[#c99aaa]"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
