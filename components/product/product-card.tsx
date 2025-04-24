"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    images: { url: string }[]
    category: { name: string }
    salePrice?: number
    isNew?: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  
  const isOnSale = product.salePrice && product.salePrice < product.price
  
  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 border-border/50 hover:border-border hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Link href={`/products/${product.id}`}>
          <Image 
            src={product.images[0].url} 
            alt={product.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered && "scale-110"
            )}
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isOnSale && (
            <Badge className="bg-destructive hover:bg-destructive">Sale</Badge>
          )}
          {product.isNew && (
            <Badge className="bg-chart-2 hover:bg-chart-2">New</Badge>
          )}
        </div>
        
        {/* Quick action buttons that appear on hover */}
        <div className={cn(
          "absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={cn(
              "h-4 w-4", 
              isFavorited ? "fill-destructive text-destructive" : ""
            )} />
          </Button>
          
          <Button 
            variant="secondary"
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            asChild
          >
            <Link href={`/products/${product.id}`}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between mb-1">
          <Badge variant="outline" className="text-xs font-normal">
            {product.category.name}
          </Badge>
        </div>
        <Link href={`/products/${product.id}`} className="block group-hover:text-primary">
          <h3 className="font-medium truncate">{product.name}</h3>
        </Link>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          {isOnSale ? (
            <div className="flex items-center gap-2">
              <span className="font-medium">${product.salePrice?.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
        
        <Button size="sm" className="h-8 w-8 rounded-full p-0">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}