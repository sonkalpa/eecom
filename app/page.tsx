import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag, Truck, Check, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product/product-card"
import { CategoryCard } from "@/components/category/category-card"

// Mock data for demonstration (will be replaced with actual data)
const featuredProducts = [
  {
    id: "1",
    name: "Casual Denim Jacket",
    price: 79.99,
    images: [{ url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jackets" }
  },
  {
    id: "2",
    name: "Summer Floral Dress",
    price: 59.99,
    images: [{ url: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Dresses" }
  },
  {
    id: "3",
    name: "Classic White Sneakers",
    price: 69.99,
    images: [{ url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Shoes" }
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 89.99,
    images: [{ url: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Accessories" }
  }
];

const categories = [
  { 
    id: "1", 
    name: "Women's Fashion", 
    image: "https://images.pexels.com/photos/7691178/pexels-photo-7691178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Dresses", "Tops & Blouses", "Pants & Jeans", "Skirts", "Activewear", "Outerwear", "Swimwear", "Lingerie"]
  },
  { 
    id: "2", 
    name: "Men's Fashion", 
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Shirts", "T-Shirts & Polos", "Pants & Jeans", "Suits", "Activewear", "Outerwear", "Swimwear", "Underwear"]
  },
  { 
    id: "3", 
    name: "Jewelry & Watches", 
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Necklaces", "Rings", "Earrings", "Bracelets", "Luxury Watches", "Smart Watches", "Fashion Watches", "Fine Jewelry"]
  },
  { 
    id: "4", 
    name: "Footwear", 
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Sneakers", "Boots", "Heels", "Flats", "Sandals", "Athletic Shoes", "Loafers", "Dress Shoes"]
  },
  { 
    id: "5", 
    name: "Kids & Baby", 
    image: "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Girls' Clothing", "Boys' Clothing", "Baby Girls", "Baby Boys", "Kids' Shoes", "School Uniforms", "Accessories", "Toys"]
  },
  { 
    id: "6", 
    name: "Beauty & Cosmetics", 
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Makeup", "Skincare", "Hair Care", "Fragrances", "Nail Care", "Tools & Accessories", "Men's Grooming", "Natural & Organic"]
  },
  { 
    id: "7", 
    name: "Sports & Active", 
    image: "https://images.pexels.com/photos/4753987/pexels-photo-4753987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Running", "Yoga", "Training & Gym", "Cycling", "Swimming", "Team Sports", "Outdoor Recreation", "Sports Equipment"]
  },
  { 
    id: "8", 
    name: "Vintage & Luxury", 
    image: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subcategories: ["Designer Bags", "Vintage Clothing", "Luxury Watches", "Designer Shoes", "Fine Jewelry", "Accessories", "Limited Editions", "Pre-owned Luxury"]
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Hero image" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        </div>
        <div className="container relative h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Your Style
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Explore our new arrivals and find the perfect pieces to elevate your wardrobe.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
                <Link href="/categories">Explore Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-accent/30">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Find what you're looking for</p>
            </div>
            <Link href="/categories" className="group flex items-center text-sm font-medium">
              View All Categories 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked for your style</p>
            </div>
            <Link href="/products?featured=true" className="group flex items-center text-sm font-medium">
              View All Featured 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Summer Sale
              </h2>
              <p className="text-primary-foreground/90 mb-6">
                Get up to 40% off on selected items. Limited time offer.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/products?sale=true">Shop Sale</Link>
              </Button>
            </div>
            <div className="relative h-64 w-full lg:w-1/2 rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Summer Sale" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On all orders over $50</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Secure Checkout</h3>
                <p className="text-sm text-muted-foreground">100% secure payment</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">Only the best products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}