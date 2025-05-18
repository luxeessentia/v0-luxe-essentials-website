export function PaymentMethods() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-blue-700 font-bold text-sm">VISA</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Visa</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-red-600 font-bold text-sm">MC</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Mastercard</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-blue-500 font-bold text-sm">AMEX</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Amex</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-orange-500 font-bold text-sm">DISC</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Discover</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-pink-500 font-bold text-sm">KLR</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Klarna</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-purple-600 font-bold text-sm">AFM</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Affirm</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-black font-bold text-sm">AP</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Apple Pay</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm h-[40px] w-[60px] flex items-center justify-center">
          <span className="text-blue-600 font-bold text-sm">GP</span>
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Google Pay</span>
      </div>
    </div>
  )
}
