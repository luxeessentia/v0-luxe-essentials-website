export type Product = {
  id: string
  name: string
  price: string
  originalPrice?: string
  image: string
  additionalImages?: string[]
  description: string
  category: string
  subcategory?: string
  featured?: boolean
  new?: boolean
  sale?: boolean
  stock?: number
  specifications?: Record<string, string>
}

export const products: Product[] = [
  // Tech & Accessories Category
  {
    id: "digital-watch-blue",
    name: "Sports Digital Watch - Blue/Black",
    price: "$24.99",
    image: "/placeholder.svg?height=500&width=500&text=Digital+Watch",
    additionalImages: [
      "/placeholder.svg?height=500&width=500&text=Digital+Watch+View+1",
      "/placeholder.svg?height=500&width=500&text=Digital+Watch+View+2",
    ],
    description:
      "Water-resistant digital sports watch with multiple functions including timer, alarm, and date display. Features a comfortable silicone band and bright blue accents.",
    category: "tech",
    subcategory: "watches",
    specifications: {
      "Water Resistance": "50M (WR50M)",
      Display: "Digital LCD",
      Functions: "Time, Date, Alarm, Timer, Backlight",
      "Band Material": "Silicone",
      Dimensions: "4.5cm diameter, 2.5cm width",
    },
    featured: true,
    stock: 5,
  },
  {
    id: "mint-power-bank",
    name: "Mint Portable Power Bank 10000mAh",
    price: "$19.99",
    image: "/placeholder.svg?height=500&width=500&text=Power+Bank",
    additionalImages: ["/placeholder.svg?height=500&width=500&text=Power+Bank+View+1"],
    description:
      "Sleek mint-colored portable charger with 10000mAh capacity. Features multiple ports for charging various devices simultaneously.",
    category: "tech",
    subcategory: "chargers",
    specifications: {
      Capacity: "10000mAh",
      Input: "USB-C, Micro USB",
      Output: "USB-A, USB-C",
      Color: "Mint Green",
      Features: "LED Power Indicator, Fast Charging",
    },
    featured: true,
    stock: 8,
  },
  {
    id: "bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    price: "$34.99",
    image: "/placeholder.svg?height=500&width=500&text=Bluetooth+Speaker",
    additionalImages: ["/placeholder.svg?height=500&width=500&text=Bluetooth+Speaker+View+1"],
    description:
      "IPX7 fully waterproof Bluetooth speaker with excellent sound quality. Perfect for outdoor activities, beach trips, and pool parties.",
    category: "tech",
    subcategory: "audio",
    specifications: {
      "Waterproof Rating": "IPX7",
      "Battery Life": "Up to 12 hours",
      Connectivity: "Bluetooth 5.0",
      Features: "Waterproof, Portable, Built-in Microphone",
      Color: "Black/Blue",
    },
    featured: true,
    stock: 6,
  },

  // Jewelry Category
  {
    id: "layered-necklace-turquoise",
    name: "Believe Layered Heart & Turquoise Necklace",
    price: "$14.94",
    image: "/placeholder.svg?height=500&width=500&text=Layered+Necklace",
    description:
      "14KT Gold Flash Plated layered necklace featuring a heart charm and genuine turquoise stone. Perfect for everyday wear or special occasions.",
    category: "jewelry",
    subcategory: "necklaces",
    specifications: {
      Material: "14KT Gold Flash Plated",
      Stones: "Cubic Zirconia and Genuine Turquoise",
      Length: '16" + 2" & 18" + 2"',
      Brand: "Believe by BRILLIANCE",
    },
    featured: true,
    stock: 3,
  },
  {
    id: "opal-ring-set",
    name: "Gold Opal Ring Set - 3 Piece",
    price: "$29.99",
    image: "/placeholder.svg?height=500&width=500&text=Opal+Ring+Set",
    description:
      "Elegant set of three gold-plated rings featuring opal and crystal stones. Includes a rectangular crystal ring, twisted rope design, and oval opal solitaire.",
    category: "jewelry",
    subcategory: "rings",
    specifications: {
      Material: "Gold Plated",
      Stones: "Opal and Crystal",
      "Set Includes": "3 Rings",
      Brand: "LACN",
    },
    featured: true,
    stock: 2,
  },
  {
    id: "gold-pink-jewelry-set",
    name: "Gold & Pink Crystal Jewelry Set",
    price: "$24.99",
    image: "/placeholder.svg?height=500&width=500&text=Gold+Pink+Jewelry+Set",
    description:
      "Beautiful gold-plated jewelry set featuring a layered necklace with pink teardrop pendant, heart charm, and crystal accents. Includes matching stud earrings.",
    category: "jewelry",
    subcategory: "sets",
    specifications: {
      Material: "Gold Plated",
      Stones: "Pink Crystal and Clear Crystals",
      "Set Includes": "Layered Necklace and Stud Earrings",
    },
    featured: true,
    stock: 4,
  },

  // Bags Category
  {
    id: "fuzzy-trim-clutch-red",
    name: "Fuzzy Trim Clutch - Red",
    price: "$19.99",
    image: "/placeholder.svg?height=500&width=500&text=Fuzzy+Trim+Clutch+Red",
    description:
      "Adorable textured clutch bag with soft fuzzy white trim and gold bow accent. Perfect for holiday parties or adding a pop of color to your outfit.",
    category: "bags",
    subcategory: "clutches",
    specifications: {
      Material: "Textured Fabric with Faux Fur Trim",
      Color: "Red with White Trim",
      Accent: "Gold Bow",
      Closure: "Zipper",
    },
    featured: true,
    stock: 1,
  },
  {
    id: "fuzzy-trim-clutch-orange",
    name: "Fuzzy Trim Clutch - Orange",
    price: "$19.99",
    image: "/placeholder.svg?height=500&width=500&text=Fuzzy+Trim+Clutch+Orange",
    description:
      "Adorable textured clutch bag with soft fuzzy white trim and gold bow accent. Perfect for adding a vibrant touch to your outfit.",
    category: "bags",
    subcategory: "clutches",
    specifications: {
      Material: "Textured Fabric with Faux Fur Trim",
      Color: "Orange with White Trim",
      Accent: "Gold Bow",
      Closure: "Zipper",
    },
    stock: 1,
  },
  {
    id: "fuzzy-trim-clutch-tan",
    name: "Fuzzy Trim Clutch - Tan",
    price: "$19.99",
    image: "/placeholder.svg?height=500&width=500&text=Fuzzy+Trim+Clutch+Tan",
    description:
      "Adorable textured clutch bag with soft fuzzy white trim and gold bow accent. Neutral tan color perfect for everyday use.",
    category: "bags",
    subcategory: "clutches",
    specifications: {
      Material: "Textured Fabric with Faux Fur Trim",
      Color: "Tan with White Trim",
      Accent: "Gold Bow",
      Closure: "Zipper",
    },
    stock: 1,
  },
]

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

// Helper function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
