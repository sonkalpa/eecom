"use client"

import { useState } from "react"
import { 
  Package, 
  Check, 
  Clock, 
  Truck, 
  Search, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Mock data for recent orders
const recentOrders = [
  {
    id: "ORD-12345",
    customer: "Alex Johnson",
    email: "alex@example.com",
    date: "2023-05-30",
    amount: 79.99,
    status: "delivered",
    items: 1
  },
  {
    id: "ORD-12344",
    customer: "Sam Wilson",
    email: "sam@example.com",
    date: "2023-05-29",
    amount: 149.98,
    status: "processing",
    items: 2
  },
  {
    id: "ORD-12343",
    customer: "Taylor Smith",
    email: "taylor@example.com",
    date: "2023-05-29",
    amount: 59.99,
    status: "shipped",
    items: 1
  },
  {
    id: "ORD-12342",
    customer: "Jordan Lee",
    email: "jordan@example.com",
    date: "2023-05-28",
    amount: 224.97,
    status: "processing",
    items: 3
  },
  {
    id: "ORD-12341",
    customer: "Morgan Brown",
    email: "morgan@example.com",
    date: "2023-05-28",
    amount: 89.99,
    status: "shipped",
    items: 1
  }
];

export function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const statusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-500" />;
      case "delivered":
        return <Check className="h-4 w-4 text-green-500" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };
  
  const statusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Processing
          </Badge>
        );
      case "shipped":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Shipped
          </Badge>
        );
      case "delivered":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Delivered
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search orders..." 
            className="pl-10 w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Amount</SelectItem>
              <SelectItem value="lowest">Lowest Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(order.date).toLocaleDateString()}
                </TableCell>
                <TableCell>${order.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {statusIcon(order.status)}
                    <span className="ml-2 hidden md:inline">
                      {statusBadge(order.status)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">256</span> results
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            3
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            ...
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            26
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}