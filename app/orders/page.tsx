"use client"

import { useState } from "react"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("track")

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl font-bold text-black text-center mb-6">Orders & Returns</h1>

      {/* Tabs */}
      <div className="flex border-b border-[#e5c1c4] mb-6">
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === "track" ? "text-black border-b-2 border-black" : "text-black/70 hover:text-black"
          }`}
          onClick={() => setActiveTab("track")}
        >
          Track Order
        </button>
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === "returns" ? "text-black border-b-2 border-black" : "text-black/70 hover:text-black"
          }`}
          onClick={() => setActiveTab("returns")}
        >
          Returns & Refunds
        </button>
      </div>

      {/* Track Order Tab */}
      {activeTab === "track" && (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-black mb-4">Track Your Order</h2>
          <form className="space-y-4 max-w-md">
            <div>
              <label htmlFor="order-id" className="block text-sm font-medium text-black mb-1">
                Order ID
              </label>
              <input
                type="text"
                id="order-id"
                name="order-id"
                className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="e.g., ORD-12345"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-sm hover:bg-black/80 transition-colors"
              >
                Track
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 border border-[#e5c1c4] rounded-sm">
            <p className="text-black font-medium mb-2">Order Status: In Process</p>
            <div className="w-full bg-[#e5c1c4]/30 h-2 rounded-full">
              <div className="bg-black h-2 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-black/70">
              <span>Order Placed</span>
              <span>Processing</span>
              <span>Shipped</span>
              <span>Delivered</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-black mb-4">Order History</h3>
            <div className="border border-[#e5c1c4] rounded-sm divide-y divide-[#e5c1c4]">
              <div className="p-4 hover:bg-[#f8e1e3]/20">
                <p className="text-black">Order #1234 – Delivered March 10, 2025</p>
                <p className="text-sm text-black/70">2 items - $78.99</p>
              </div>
              <div className="p-4 hover:bg-[#f8e1e3]/20">
                <p className="text-black">Order #1156 – Delivered February 22, 2025</p>
                <p className="text-sm text-black/70">1 item - $34.99</p>
              </div>
              <div className="p-4 hover:bg-[#f8e1e3]/20">
                <p className="text-black">Order #1089 – Delivered January 15, 2025</p>
                <p className="text-sm text-black/70">3 items - $129.97</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Returns Tab */}
      {activeTab === "returns" && (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-black mb-4">Returns & Refunds</h2>
          <div className="mb-6">
            <p className="text-black mb-4">
              Return requests must be submitted within 48 hours of receiving your order. All items must be in their
              original packaging and unworn/unused condition. Please note that shipping costs are non-refundable.
            </p>
            <button className="bg-[#D9A5B3] text-white py-2 px-4 rounded-sm hover:bg-[#c99aaa] transition-colors">
              Start New Return
            </button>
          </div>

          <div className="mt-8 border-t border-[#e5c1c4] pt-6">
            <h3 className="text-lg font-bold text-black mb-4">Return Form</h3>
            <form className="space-y-4 max-w-md">
              <div>
                <label htmlFor="order-id" className="block text-sm font-medium text-black mb-1">
                  Order ID
                </label>
                <input
                  type="text"
                  id="order-id"
                  name="order-id"
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="e.g., ORD-12345"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-black mb-1">
                  Product
                </label>
                <select
                  id="product"
                  name="product"
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option value="">Select a product</option>
                  <option value="SKU001">Elegant Tote - SKU001</option>
                  <option value="SKU002">Mini Crossbody - SKU002</option>
                  <option value="SKU003">Leather Clutch - SKU003</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-black mb-1">
                  Reason for Return
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option value="">Select a reason</option>
                  <option value="wrong-item">Received wrong item</option>
                  <option value="damaged">Item arrived damaged</option>
                  <option value="not-as-described">Item not as described</option>
                  <option value="changed-mind">Changed my mind</option>
                </select>
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-black mb-1">
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Please provide any additional details about your return..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-4 rounded-sm hover:bg-black/80 transition-colors"
                >
                  Submit Return Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
