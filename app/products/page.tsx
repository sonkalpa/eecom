import Link from "next/link"
import Image from "next/image"
import { ChevronDown, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProductCard } from "@/components/product/product-card"

// Mock data
const products = [
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
  },
  {
    id: "5",
    name: "Striped T-Shirt",
    price: 29.99,
    images: [{ url: "https://images.pexels.com/photos/6311672/pexels-photo-6311672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "T-Shirts" }
  },
  {
    id: "6",
    name: "Slim Fit Jeans",
    price: 49.99,
    images: [{ url: "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jeans" }
  },
  {
    id: "7",
    name: "Oversized Sweater",
    price: 54.99,
    images: [{ url: "https://images.pexels.com/photos/6311690/pexels-photo-6311690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Sweaters" }
  },
  {
    id: "8",
    name: "Digital Watch",
    price: 99.99,
    images: [{ url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Accessories" },
    salePrice: 79.99
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "jackets", name: "Jackets" },
  { id: "dresses", name: "Dresses" },
  { id: "tops", name: "Tops" },
  { id: "jeans", name: "Jeans" },
  { id: "shoes", name: "Shoes" },
  { id: "accessories", name: "Accessories" }
];

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Browse our latest collection of products</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Input type="search" placeholder="Search products..." className="w-full" />
          </div>
          
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <SlidersHorizontal className="h-4 w-4 mr-1" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <Checkbox id={`category-${category.id}`} />
                          <label 
                            htmlFor={`category-${category.id}`}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-4">Price Range</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="min-price" className="text-xs">Min Price</label>
                        <Input id="min-price" type="number" placeholder="$0" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="max-price" className="text-xs">Max Price</label>
                        <Input id="max-price" type="number" placeholder="$1000" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-4">Product Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Checkbox id="in-stock" />
                        <label 
                          htmlFor="in-stock"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="on-sale" />
                        <label 
                          htmlFor="on-sale"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          On Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="new-arrivals" />
                        <label 
                          htmlFor="new-arrivals"
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          New Arrivals
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" className="flex-1">Clear All</Button>
                    <Button className="flex-1">Apply Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Select defaultValue="featured">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="bestselling">Best Selling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters (visible on desktop) */}
        <div className="hidden md:block w-64 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Checkbox id={`sidebar-category-${category.id}`} />
                  <label 
                    htmlFor={`sidebar-category-${category.id}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="sidebar-min-price" className="text-xs">Min Price</label>
                <Input id="sidebar-min-price" type="number" placeholder="$0" />
              </div>
              <div className="space-y-2">
                <label htmlFor="sidebar-max-price" className="text-xs">Max Price</label>
                <Input id="sidebar-max-price" type="number" placeholder="$1000" />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium mb-4">Product Status</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Checkbox id="sidebar-in-stock" />
                <label 
                  htmlFor="sidebar-in-stock"
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox id="sidebar-on-sale" />
                <label 
                  htmlFor="sidebar-on-sale"
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  On Sale
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox id="sidebar-new-arrivals" />
                <label 
                  htmlFor="sidebar-new-arrivals"
                  className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  New Arrivals
                </label>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-4">Apply Filters</Button>
        </div>
        
        {/* Products grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium">
                1
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground">
                2
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground">
                3
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground">
                ...
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground">
                8
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}