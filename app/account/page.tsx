"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Mail, Lock, CreditCard, Package, LogOut, Settings, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)
  
  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinedDate: "January 2024"
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    defaultValue={user.name}
                    className="pl-9"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="pl-9"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="/account/orders">
                    <div className="flex items-center">
                      <Package className="mr-2 h-4 w-4" />
                      My Orders
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="/account/payments">
                    <div className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="/account/settings">
                    <div className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Lock className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
                <Separator />
                <Button variant="destructive" className="w-full justify-start">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              Member since {user.joinedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}