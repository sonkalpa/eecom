import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product/product-card"

// Mock data for the product details page
const product = {
  id: "1",
  name: "Classic Denim Jacket",
  description: "This timeless denim jacket features a regular fit with button closure and multiple pockets. Made from high-quality cotton denim, it's perfect for layering in any season. The versatile design makes it easy to pair with any outfit for a casual, effortless look.",
  price: 79.99,
  inventory: 15,
  images: [
    { url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { url: "https://images.pexels.com/photos/5325575/pexels-photo-5325575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { url: "https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ],
  category: { name: "Jackets", id: "1" },
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Blue", "Black", "Light Wash"],
  features: [
    "100% Cotton Denim",
    "Button Closure",
    "Regular Fit",
    "Multiple Pockets",
    "Machine Washable"
  ],
  reviews: [
    { id: "1", rating: 5, user: "Alex", comment: "Great quality and fit! Exactly as described." },
    { id: "2", rating: 4, user: "Taylor", comment: "Love the style but runs slightly large." }
  ]
};

// Mock related products
const relatedProducts = [
  {
    id: "2",
    name: "Vintage Wash Denim Jacket",
    price: 89.99,
    images: [{ url: "https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jackets" }
  },
  {
    id: "3",
    name: "Distressed Denim Jacket",
    price: 74.99,
    images: [{ url: "https://images.pexels.com/photos/5325575/pexels-photo-5325575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jackets" }
  },
  {
    id: "4",
    name: "Sherpa Lined Denim Jacket",
    price: 99.99,
    images: [{ url: "https://images.pexels.com/photos/6567618/pexels-photo-6567618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jackets" }
  },
  {
    id: "5",
    name: "Cropped Denim Jacket",
    price: 69.99,
    images: [{ url: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
    category: { name: "Jackets" }
  }
];

export default function ProductPage({ params }: { params: { productId: string } }) {
  return (
    <div className="container py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/products" className="hover:text-foreground">Products</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href={`/categories/${product.category.id}`} className="hover:text-foreground">{product.category.name}</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image 
              src={product.images[0].url} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, i) => (
              <div key={i} className="aspect-square relative rounded-md overflow-hidden border cursor-pointer">
                <Image 
                  src={image.url} 
                  alt={`${product.name} - view ${i+1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <Badge className="mb-2">{product.category.name}</Badge>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
            </div>
            <Separator orientation="vertical" className="mx-4 h-4" />
            <span className="text-sm text-muted-foreground">In Stock ({product.inventory} available)</span>
          </div>
          
          <div className="mb-6">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          
          <div className="space-y-6 mb-8">
            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Size</h3>
                <Button variant="link" className="h-auto p-0 text-sm">Size Guide</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="h-10 px-4">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="h-10">
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center w-32">
                <Button variant="outline" size="icon" className="rounded-r-none">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="border-y border-x-0 flex-1 h-10 flex items-center justify-center">
                  1
                </div>
                <Button variant="outline" size="icon" className="rounded-l-none">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="w-12 flex-none">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-12 flex-none">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Product Features */}
          <div>
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="space-y-1">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs for Additional Info */}
      <Tabs defaultValue="details" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-1">Material</h4>
                <p className="text-muted-foreground">100% Cotton Denim</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Care Instructions</h4>
                <p className="text-muted-foreground">Machine washable, cold water. Tumble dry low.</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Country of Origin</h4>
                <p className="text-muted-foreground">Imported</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Style</h4>
                <p className="text-muted-foreground">Casual, Classic</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="space-y-6">
          <div className="flex items-center">
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-lg font-medium">4.5 out of 5</span>
            <span className="ml-2 text-muted-foreground">Based on {product.reviews.length} reviews</span>
          </div>
          
          <Separator />
          
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="space-y-2">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 fill-current ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-medium">{review.user}</span>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
                <Separator />
              </div>
            ))}
          </div>
          
          <Button>Write a Review</Button>
        </TabsContent>
        
        <TabsContent value="shipping" className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
            <p className="text-muted-foreground mb-4">
              We offer free standard shipping on all orders over $50. Orders typically arrive within 5-7 business days.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between pb-2 border-b">
                <span>Standard Shipping (5-7 business days)</span>
                <span>Free on orders over $50 (otherwise $4.99)</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Express Shipping (2-3 business days)</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Next Day Delivery (Order by 12pm)</span>
                <span>$14.99</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Return Policy</h3>
            <p className="text-muted-foreground mb-4">
              If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
              <li>Return shipping costs are the responsibility of the customer unless the item is defective.</li>
              <li>Refunds will be processed within 5-7 business days after we receive your return.</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}