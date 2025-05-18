export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#8a5a5e]">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 bg-[#faf7f5] py-4 shadow-sm">
        <div className="flex justify-center items-center px-4 relative">
          <div className="absolute left-4">
            <div className="w-10 h-10 bg-[#f8e1e3] rounded-full shadow-sm flex items-center justify-center">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className="block w-5 h-0.5 bg-[#8a5a5e]"></span>
                <span className="block w-5 h-0.5 bg-[#8a5a5e]"></span>
                <span className="block w-5 h-0.5 bg-[#8a5a5e]"></span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-light tracking-widest">LUXE ESSENTIALS</h1>
            <p className="text-[10px] text-[#8a5a5e]/70">ELEVATE YOUR STYLE</p>
          </div>
          <div className="absolute right-4">
            <div className="w-10 h-10 bg-[#f8e1e3] rounded-full shadow-sm flex items-center justify-center">
              <div className="w-5 h-5">
                <div className="w-4 h-4 border-2 border-[#8a5a5e] rounded-sm relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 border-2 border-[#8a5a5e] border-b-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-[#f8e1e3] py-2 overflow-hidden">
        <div className="relative h-6">
          <div className="absolute inset-0 flex items-center justify-center text-xs text-[#8a5a5e] font-light px-4 text-center">
            📦 GET $5 OFF YOUR FIRST ORDER WHEN YOU SIGN UP
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-16">
        {/* Banner */}
        <section className="mt-4 px-4">
          <div className="w-full h-[200px] rounded-lg bg-[#f8e1e3]/30 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-light mb-4">New Collection</h2>
              <div className="bg-white text-[#8a5a5e] px-6 py-2 rounded-sm inline-block">Shop Now</div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mt-10 px-4">
          <h2 className="text-xl font-light mb-4">Handmade Bags</h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={`bag-${item}`}>
                <div className="h-[150px] bg-[#f8f5f2] rounded-md mb-2"></div>
                <h3 className="text-sm font-light truncate">Elegant Bag {item}</h3>
                <p className="text-sm">${Math.floor(Math.random() * 100) + 50}.00</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 px-4">
          <h2 className="text-xl font-light mb-4">Tech & Accessories</h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={`tech-${item}`}>
                <div className="h-[150px] bg-[#f8f5f2] rounded-md mb-2"></div>
                <h3 className="text-sm font-light truncate">Tech Accessory {item}</h3>
                <p className="text-sm">${Math.floor(Math.random() * 50) + 30}.00</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 px-4 py-6 bg-[#f8e1e3]/30">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-base font-medium mb-2">About Luxe Essentials</h3>
              <p className="text-xs text-[#8a5a5e]/80">
                Luxe Essentials offers premium quality products with elegant design and exceptional craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Quick Links</h3>
              <div className="grid grid-cols-2 gap-1 text-xs text-[#8a5a5e]/80">
                <div>About Us</div>
                <div>Contact</div>
                <div>FAQ</div>
                <div>Orders & Returns</div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Newsletter</h3>
              <p className="text-xs text-[#8a5a5e]/80 mb-2">
                Sign up to receive updates on new arrivals and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs border border-[#e5c1c4] rounded-l-sm"
                />
                <div className="bg-[#8a5a5e] text-white px-3 py-2 rounded-r-sm text-xs">Subscribe</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-[#8a5a5e]/70">
            &copy; 2024 Luxe Essentials. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f8e1e3] py-2 text-center text-[10px] text-[#8a5a5e] z-40 px-2">
        📦 FREE SHIPPING ON ORDERS $50+
      </div>
    </div>
  )
}
