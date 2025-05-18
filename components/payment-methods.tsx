import Image from "next/image"

export function PaymentMethods() {
  return (
    <div className="space-y-6">
      {/* Credit/Debit Cards */}
      <div>
        <h3 className="text-sm font-medium text-[#8a5a5e] mb-3">Credit/Debit Cards</h3>
        <div className="flex flex-wrap gap-3">
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Visa"
              alt="Visa"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Mastercard"
              alt="Mastercard"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Amex"
              alt="American Express"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Discover"
              alt="Discover"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Buy Now Pay Later */}
      <div>
        <h3 className="text-sm font-medium text-[#8a5a5e] mb-3">Buy Now Pay Later</h3>
        <div className="flex flex-wrap gap-3">
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Klarna"
              alt="Klarna"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Affirm"
              alt="Affirm"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Zip"
              alt="Zip"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Digital Wallets */}
      <div>
        <h3 className="text-sm font-medium text-[#8a5a5e] mb-3">Digital Wallets</h3>
        <div className="flex flex-wrap gap-3">
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Apple+Pay"
              alt="Apple Pay"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Google+Pay"
              alt="Google Pay"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-md shadow-sm">
            <Image
              src="/placeholder.svg?height=40&width=60&text=Cash+App"
              alt="Cash App Pay"
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
