import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Using the same categories data from the home page
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

export default function CategoriesPage() {
  return (
    <div className="container py-16">
      {/* Header */}
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">Categories</span>
      </div>

      <h1 className="text-4xl font-bold mb-8">Shop by Category</h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                <div className="space-y-2">
                  {category.subcategories?.map((subcat, index) => (
                    <div key={index}>
                      <Link 
                        href={`/categories/${category.id}/${subcat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subcat}
                      </Link>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/categories/${category.id}`}>
                    View All {category.name}
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 