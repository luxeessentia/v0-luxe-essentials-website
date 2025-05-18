import Image from "next/image"

export function PaymentMethods() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/visa.png" alt="Visa" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Visa</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/mastercard.png" alt="Mastercard" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Mastercard</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/amex.png" alt="American Express" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Amex</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/discover.png" alt="Discover" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Discover</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/klarna.png" alt="Klarna" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Klarna</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/affirm.png" alt="Affirm" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Affirm</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/apple-pay.png" alt="Apple Pay" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Apple Pay</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <Image src="/images/google-pay.png" alt="Google Pay" width={60} height={40} className="object-contain" />
        </div>
        <span className="text-xs text-[#8a5a5e]/70 mt-1">Google Pay</span>
      </div>
    </div>
  )
}
