import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    image: string
    subcategories?: string[]
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="group overflow-hidden h-full transition-all duration-300 border-border/50 hover:border-border hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <Image 
            src={category.image} 
            alt={category.name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <CardContent className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
            {category.subcategories && (
              <div className="flex flex-wrap gap-1">
                {category.subcategories.slice(0, 4).map((subcat, index) => (
                  <span 
                    key={index}
                    className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full"
                  >
                    {subcat}
                  </span>
                ))}
                {category.subcategories.length > 4 && (
                  <span className="text-xs text-white/80">
                    +{category.subcategories.length - 4} more
                  </span>
                )}
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}