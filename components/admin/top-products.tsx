"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for top products
const topProducts = [
  {
    id: "1",
    name: "Classic Denim Jacket",
    sales: 124,
    revenue: 9922,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Jackets"
  },
  {
    id: "2",
    name: "Summer Floral Dress",
    sales: 98,
    revenue: 5880,
    image: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dresses"
  },
  {
    id: "3",
    name: "Classic White Sneakers",
    sales: 87,
    revenue: 6090,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Shoes"
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    sales: 76,
    revenue: 6840,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories"
  },
];

const chartData = topProducts.map(product => ({
  name: product.name.length > 15 ? product.name.substring(0, 12) + "..." : product.name,
  sales: product.sales,
  revenue: product.revenue
}));

export function TopProducts() {
  return (
    <div className="space-y-4">
      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value, name) => {
                if (name === "revenue") return [`$${value}`, "Revenue"];
                return [value, "Units Sold"];
              }}
            />
            <Bar 
              dataKey="sales" 
              name="Units Sold"
              fill="hsl(var(--chart-2))" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-3">
        {topProducts.map((product, index) => (
          <div key={product.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
            <div className="flex items-center">
              <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <div className="flex items-center">
                  <p className="text-xs text-muted-foreground mr-2">{product.sales} units</p>
                  <Badge variant="outline" className="text-[10px] px-1 h-4">
                    {product.category}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium">${product.revenue.toLocaleString()}</div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="w-full">
        View All Products
      </Button>
    </div>
  )
}