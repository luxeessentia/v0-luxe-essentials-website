import { CategoryShowcase } from "@/components/category-showcase"

export default function HomePage() {
  return (
    <main className="pb-16 w-full">
      {/* Featured Category Showcases */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <CategoryShowcase title="HANDMADE BAGS" category="bags" linkPath="/shop/bags" />
        <CategoryShowcase title="TECH & ACCESSORIES" category="tech" linkPath="/shop/tech" />
        <CategoryShowcase title="BEAUTY/MAKEUP" category="beauty" linkPath="/shop/beauty" />
      </div>

      {/* Footer */}
      <footer className="mt-16 px-4 py-8 bg-[#e9d8fd]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-black mb-4">About Luxe Essentials</h3>
            <p className="text-sm text-black">
              Luxe Essentials offers premium quality products with elegant design and exceptional craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="/about" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-black transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/orders" className="hover:text-black transition-colors">
                  Orders & Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Newsletter</h3>
            <p className="text-sm text-black mb-2">Sign up to receive updates on new arrivals and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-[#e9d8fd] rounded-l-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-sm hover:bg-black/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-black">
          &copy; {new Date().getFullYear()} Luxe Essentials. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
