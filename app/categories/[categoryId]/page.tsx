import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product/product-card"

// Using the same categories data
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
  // ... other categories
];

// Mock products data
const mockProducts = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: 59.99,
    images: [{ url: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Dresses" }
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 79.99,
    images: [{ url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Outerwear" }
  },
  {
    id: "3",
    name: "Classic White Blouse",
    price: 45.99,
    images: [{ url: "https://images.pexels.com/photos/6311538/pexels-photo-6311538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Tops & Blouses" }
  },
  {
    id: "4",
    name: "High-Waist Jeans",
    price: 69.99,
    images: [{ url: "https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Pants & Jeans" }
  }
];

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories.find(cat => cat.id === params.categoryId);

  if (!category) {
    return <div className="container py-16">Category not found</div>;
  }

  return (
    <div className="container py-16">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/categories" className="hover:text-foreground">Categories</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-12">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-4xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-lg text-white/90">Explore our collection of {category.name.toLowerCase()}</p>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {category.subcategories?.map((subcat, index) => (
            <Card key={index} className="hover:bg-accent transition-colors">
              <CardContent className="p-4">
                <Link 
                  href={`/categories/${category.id}/${subcat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="block text-center"
                >
                  {subcat}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Button variant="outline" asChild>
            <Link href={`/products?category=${category.id}`}>View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
} 