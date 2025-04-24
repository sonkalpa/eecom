"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [order, setOrder] = useState<any>(null)

  useEffect(() => {
    // TODO: Fetch order details using session ID
    setOrder({
      id: "ORD-" + Math.random().toString(36).substr(2, 9),
      total: 159.98,
      items: 2,
    })
  }, [sessionId])

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold">Order Confirmed!</CardTitle>
            <CardDescription>
              Thank you for your purchase. Your order has been received.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {order && (
              <div className="rounded-lg bg-muted p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Order number:</span>
                  <span className="font-medium">{order.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total amount:</span>
                  <span className="font-medium">${order.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Items:</span>
                  <span className="font-medium">{order.items}</span>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Package className="h-4 w-4 mr-2" />
              Order confirmation sent to your email
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full" asChild>
              <Link href="/account/orders">View Order</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}