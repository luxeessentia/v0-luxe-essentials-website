export type ProductColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "brown"
  | "black"
  | "white"
  | "gray"
  | "gold"
  | "silver"
  | "multicolor"
  | "tan"
  | "mint"

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "One Size"

export type Product = {
  id: string
  name: string
  price: string
  numericPrice: number // Adding numeric price for easier filtering
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
  colors?: ProductColor[]
  sizes?: ProductSize[]
  tags?: string[]
  dateAdded?: string
}

export const products: Product[] = [
  // Tech & Accessories Category
  {
    id: "digital-watch-blue",
    name: "Sports Digital Watch - Blue/Black",
    price: "$24.99",
    numericPrice: 24.99,
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
    colors: ["blue", "black"],
    sizes: ["One Size"],
    tags: ["digital", "watch", "sports", "waterproof"],
    dateAdded: "2025-03-15",
  },
  {
    id: "mint-power-bank",
    name: "Mint Portable Power Bank 10000mAh",
    price: "$19.99",
    numericPrice: 19.99,
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
    colors: ["mint", "green"],
    sizes: ["One Size"],
    tags: ["power bank", "charger", "portable", "USB-C"],
    dateAdded: "2025-04-02",
  },
  {
    id: "bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    price: "$34.99",
    numericPrice: 34.99,
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
    colors: ["black", "blue"],
    sizes: ["One Size"],
    tags: ["speaker", "bluetooth", "waterproof", "audio"],
    dateAdded: "2025-03-20",
  },

  // Jewelry Category
  {
    id: "layered-necklace-turquoise",
    name: "Believe Layered Heart & Turquoise Necklace",
    price: "$14.94",
    numericPrice: 14.94,
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
    colors: ["gold", "blue"],
    sizes: ["One Size"],
    tags: ["necklace", "layered", "turquoise", "heart", "gold"],
    dateAdded: "2025-02-10",
  },
  {
    id: "opal-ring-set",
    name: "Gold Opal Ring Set - 3 Piece",
    price: "$29.99",
    numericPrice: 29.99,
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
    colors: ["gold", "white"],
    sizes: ["6", "7", "8"],
    tags: ["rings", "opal", "crystal", "gold", "set"],
    dateAdded: "2025-01-15",
  },
  {
    id: "gold-pink-jewelry-set",
    name: "Gold & Pink Crystal Jewelry Set",
    price: "$24.99",
    numericPrice: 24.99,
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
    colors: ["gold", "pink"],
    sizes: ["One Size"],
    tags: ["jewelry set", "necklace", "earrings", "crystal", "pink", "gold"],
    dateAdded: "2025-02-28",
  },

  // Bags Category
  {
    id: "fuzzy-trim-clutch-red",
    name: "Fuzzy Trim Clutch - Red",
    price: "$19.99",
    numericPrice: 19.99,
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
    colors: ["red", "white", "gold"],
    sizes: ["One Size"],
    tags: ["clutch", "bag", "fuzzy", "red", "holiday"],
    dateAdded: "2025-04-10",
  },
  {
    id: "fuzzy-trim-clutch-orange",
    name: "Fuzzy Trim Clutch - Orange",
    price: "$19.99",
    numericPrice: 19.99,
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
    colors: ["orange", "white", "gold"],
    sizes: ["One Size"],
    tags: ["clutch", "bag", "fuzzy", "orange"],
    dateAdded: "2025-04-10",
  },
  {
    id: "fuzzy-trim-clutch-tan",
    name: "Fuzzy Trim Clutch - Tan",
    price: "$19.99",
    numericPrice: 19.99,
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
    colors: ["tan", "white", "gold"],
    sizes: ["One Size"],
    tags: ["clutch", "bag", "fuzzy", "tan", "neutral"],
    dateAdded: "2025-04-10",
  },
  // Adding more products with different price points
  {
    id: "leather-tote-black",
    name: "Premium Leather Tote - Black",
    price: "$89.99",
    numericPrice: 89.99,
    image: "/placeholder.svg?height=500&width=500&text=Leather+Tote+Black",
    description:
      "Luxurious genuine leather tote bag with spacious interior and multiple pockets. Perfect for work, travel, or everyday use.",
    category: "bags",
    subcategory: "totes",
    specifications: {
      Material: "Genuine Leather",
      Color: "Black",
      Dimensions: '14" x 12" x 5"',
      Pockets: "3 Interior, 1 Exterior",
    },
    stock: 3,
    colors: ["black"],
    sizes: ["One Size"],
    tags: ["tote", "leather", "black", "work", "premium"],
    dateAdded: "2025-03-05",
  },
  {
    id: "mini-crossbody-purple",
    name: "Mini Crossbody Bag - Purple",
    price: "$45.99",
    numericPrice: 45.99,
    image: "/placeholder.svg?height=500&width=500&text=Mini+Crossbody+Purple",
    description:
      "Compact crossbody bag in vibrant purple with adjustable strap and gold hardware. Perfect for keeping essentials close while on the go.",
    category: "bags",
    subcategory: "crossbody",
    specifications: {
      Material: "Vegan Leather",
      Color: "Purple",
      Dimensions: '8" x 6" x 2"',
      Features: "Adjustable Strap, Gold Hardware",
    },
    stock: 5,
    colors: ["purple"],
    sizes: ["One Size"],
    tags: ["crossbody", "purple", "mini", "gold"],
    dateAdded: "2025-02-20",
  },
  // Add these beauty products to the products array
  {
    id: "rose-face-mask",
    name: "Rose Hydrating Face Mask",
    price: "$12.99",
    numericPrice: 12.99,
    image: "/placeholder.svg?height=500&width=500&text=Rose+Face+Mask",
    description:
      "Hydrating rose-infused face mask that soothes and moisturizes dry skin. Perfect for a self-care night.",
    category: "beauty",
    subcategory: "skincare",
    specifications: {
      "Skin Type": "All Skin Types",
      Volume: "50ml",
      "Main Ingredients": "Rose Water, Hyaluronic Acid, Aloe Vera",
    },
    featured: true,
    stock: 15,
    colors: ["pink"],
    sizes: ["One Size"],
    tags: ["face mask", "skincare", "hydrating", "rose"],
    dateAdded: "2025-03-01",
  },
  {
    id: "matte-lipstick-red",
    name: "Matte Lipstick - Classic Red",
    price: "$18.99",
    numericPrice: 18.99,
    image: "/placeholder.svg?height=500&width=500&text=Matte+Lipstick+Red",
    description:
      "Long-lasting matte lipstick in a classic red shade. Provides full coverage with a comfortable, non-drying formula.",
    category: "beauty",
    subcategory: "makeup",
    specifications: {
      Finish: "Matte",
      "Wear Time": "Up to 8 hours",
      "Main Ingredients": "Vitamin E, Shea Butter",
    },
    featured: true,
    stock: 8,
    colors: ["red"],
    sizes: ["One Size"],
    tags: ["lipstick", "makeup", "matte", "red"],
    dateAdded: "2025-02-15",
  },
  {
    id: "eyeshadow-palette-neutral",
    name: "Neutral Eyeshadow Palette",
    price: "$24.99",
    numericPrice: 24.99,
    image: "/placeholder.svg?height=500&width=500&text=Eyeshadow+Palette",
    description:
      "Versatile eyeshadow palette featuring 12 highly-pigmented neutral shades in matte and shimmer finishes.",
    category: "beauty",
    subcategory: "makeup",
    specifications: {
      "Number of Shades": "12",
      Finishes: "Matte and Shimmer",
      "Net Weight": "12g",
    },
    stock: 6,
    colors: ["brown", "tan", "gold"],
    sizes: ["One Size"],
    tags: ["eyeshadow", "palette", "neutral", "makeup"],
    dateAdded: "2025-01-20",
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

// Helper function to get all unique colors from products
export function getAllColors(): ProductColor[] {
  const colorSet = new Set<ProductColor>()
  products.forEach((product) => {
    if (product.colors) {
      product.colors.forEach((color) => colorSet.add(color))
    }
  })
  return Array.from(colorSet)
}

// Helper function to get all unique sizes from products
export function getAllSizes(): ProductSize[] {
  const sizeSet = new Set<ProductSize>()
  products.forEach((product) => {
    if (product.sizes) {
      product.sizes.forEach((size) => sizeSet.add(size))
    }
  })
  return Array.from(sizeSet)
}

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  const categorySet = new Set<string>()
  products.forEach((product) => {
    categorySet.add(product.category)
  })
  return Array.from(categorySet)
}

// Helper function to get all unique subcategories
export function getAllSubcategories(): string[] {
  const subcategorySet = new Set<string>()
  products.forEach((product) => {
    if (product.subcategory) {
      subcategorySet.add(product.subcategory)
    }
  })
  return Array.from(subcategorySet)
}

// Helper function to get price range
export function getPriceRange(): { min: number; max: number } {
  let min = Number.MAX_VALUE
  let max = 0

  products.forEach((product) => {
    if (product.numericPrice < min) min = product.numericPrice
    if (product.numericPrice > max) max = product.numericPrice
  })

  return { min, max }
}
