export default function FAQPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl font-bold text-black text-center mb-6">Frequently Asked Questions</h1>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="space-y-6">
          {/* Ordering */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Ordering</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">How do I place an order?</h3>
                <p className="text-black">
                  You can place an order by browsing our products, selecting the items you want, adding them to your
                  cart, and proceeding to checkout. Follow the steps to enter your shipping and payment information to
                  complete your purchase.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">Can I modify or cancel my order?</h3>
                <p className="text-black">
                  You can modify or cancel your order within 1 hour of placing it by contacting our customer service
                  team. After this window, we begin processing orders and may not be able to make changes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do you offer gift wrapping?</h3>
                <p className="text-black">
                  Yes, we offer gift wrapping services for an additional $5 per item. You can select this option during
                  checkout and include a personalized message for the recipient.
                </p>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Shipping & Delivery</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">What are your shipping options?</h3>
                <p className="text-black">
                  We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Standard
                  shipping is free for orders over $50, and express shipping is free for orders over $100.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do you ship internationally?</h3>
                <p className="text-black">
                  Currently, we only ship within the United States. We plan to expand our shipping options to
                  international destinations in the future.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">How can I track my order?</h3>
                <p className="text-black">
                  Once your order ships, you'll receive a confirmation email with a tracking number. You can also track
                  your order on our website by going to the Orders & Returns page and entering your order ID.
                </p>
              </div>
            </div>
          </div>

          {/* Returns & Refunds */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Returns & Refunds</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">What is your return policy?</h3>
                <p className="text-black">
                  We accept returns within 48 hours of delivery. Items must be in their original condition with tags
                  attached. Please note that shipping costs are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">How do I initiate a return?</h3>
                <p className="text-black">
                  To initiate a return, go to the Orders & Returns page on our website, enter your order information,
                  and follow the prompts to complete the return request form.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">When will I receive my refund?</h3>
                <p className="text-black">
                  Once we receive and inspect your return, we'll process your refund within 3-5 business days. The time
                  it takes for the refund to appear in your account depends on your payment method and financial
                  institution.
                </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Products</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Are your handmade bags really handmade?</h3>
                <p className="text-black">
                  Yes, all of our handmade bags are crafted by skilled artisans. Each piece is unique and may have
                  slight variations, which is part of the charm of handmade items.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">How do I care for my products?</h3>
                <p className="text-black">
                  Care instructions vary by product. You can find specific care information on each product page or on
                  the tag that comes with your item. Generally, we recommend storing items in a cool, dry place away
                  from direct sunlight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do you offer warranties on tech accessories?</h3>
                <p className="text-black">
                  Yes, all of our tech accessories come with a 6-month warranty against manufacturing defects. Please
                  keep your order confirmation as proof of purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Account & Payment */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Account & Payment</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do I need to create an account to shop?</h3>
                <p className="text-black">
                  No, you can check out as a guest. However, creating an account allows you to track orders, save
                  favorites, and enjoy a faster checkout experience for future purchases.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">What payment methods do you accept?</h3>
                <p className="text-black">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay,
                  and Google Pay. We also offer Buy Now Pay Later options through Klarna, Affirm, and Zip.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">Is my payment information secure?</h3>
                <p className="text-black">
                  Yes, we use industry-standard encryption and security measures to protect your payment information. We
                  never store your full credit card details on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
