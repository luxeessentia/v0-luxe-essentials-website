export default function FAQPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl font-bold text-black text-center mb-6">Frequently Asked Questions</h1>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="space-y-6">
          <div className="border-b border-[#e5c1c4] pb-6">
            <h2 className="text-xl font-bold text-black mb-3">Shipping & Delivery</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">How long will it take to receive my order?</h3>
                <p className="text-black">
                  Standard shipping typically takes 3-5 business days within the continental US. Express shipping is 1-2
                  business days. International shipping may take 7-14 business days depending on the destination.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Do you offer free shipping?</h3>
                <p className="text-black">
                  Yes! We offer free standard shipping on all US orders over $50 and free express shipping on US orders
                  over $100.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Do you ship internationally?</h3>
                <p className="text-black">
                  Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout
                  based on destination and package weight.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-[#e5c1c4] pb-6">
            <h2 className="text-xl font-bold text-black mb-3">Returns & Exchanges</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">What is your return policy?</h3>
                <p className="text-black">
                  We accept returns within 48 hours of delivery. Items must be in their original condition with tags
                  attached. Please note that shipping costs are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">How do I start a return?</h3>
                <p className="text-black">
                  To initiate a return, please visit our Orders & Returns page and fill out the return form with your
                  order details.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Can I exchange an item?</h3>
                <p className="text-black">
                  Yes, exchanges are available for items of equal value. Please contact our customer service team to
                  arrange an exchange.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-[#e5c1c4] pb-6">
            <h2 className="text-xl font-bold text-black mb-3">Products & Care</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">Are your handmade bags really handmade?</h3>
                <p className="text-black">
                  Yes, all of our handmade bags are crafted by skilled artisans using traditional techniques. Each piece
                  is unique and may have slight variations that add to its character.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">How should I care for my leather products?</h3>
                <p className="text-black">
                  We recommend keeping leather items away from direct sunlight and moisture. Clean with a soft, dry
                  cloth and use a leather conditioner occasionally to maintain suppleness.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Are your beauty products tested on animals?</h3>
                <p className="text-black">
                  No, all of our beauty products are cruelty-free and have not been tested on animals.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Payment & Security</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">What payment methods do you accept?</h3>
                <p className="text-black">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay,
                  and Google Pay. We also offer buy-now-pay-later options through Klarna, Affirm, and Zip.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Is my payment information secure?</h3>
                <p className="text-black">
                  Yes, all payment information is encrypted and processed securely. We do not store your full credit
                  card details on our servers.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Can I cancel my order?</h3>
                <p className="text-black">
                  Orders can be canceled within 1 hour of placement. After that, we begin processing orders quickly and
                  may not be able to cancel. Please contact customer service immediately if you need to cancel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
