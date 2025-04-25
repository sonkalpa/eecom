"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  Bell, 
  Search, 
  User, 
  ChevronDown, 
  LogOut, 
  Settings, 
  HelpCircle,
  Menu as MenuIcon,
  ShoppingBag, 
  Package, 
  Users as UsersIcon, 
  CreditCard, 
  LayoutDashboard,
  Tag,
  Store
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const adminRoutes = [
  {
    icon: <LayoutDashboard className="h-5 w-5 mr-3" />,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: <Package className="h-5 w-5 mr-3" />,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: <Tag className="h-5 w-5 mr-3" />,
    label: "Categories",
    href: "/admin/categories",
  },
  {
    icon: <ShoppingBag className="h-5 w-5 mr-3" />,
    label: "Orders",
    href: "/admin/orders",
  },
  {
    icon: <UsersIcon className="h-5 w-5 mr-3" />,
    label: "Customers",
    href: "/admin/customers",
  },
  {
    icon: <CreditCard className="h-5 w-5 mr-3" />,
    label: "Payments",
    href: "/admin/payments",
  }
]

export function AdminHeader() {
  const pathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="flex h-16 items-center px-6">
        {/* Mobile Menu */}
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="flex flex-col h-full">
              <div className="border-b p-4">
                <Link 
                  href="/admin" 
                  className="flex items-center gap-2 text-lg font-bold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  StyleStride Admin
                </Link>
              </div>
              <nav className="flex-1 p-4">
                {adminRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center py-2 px-3 rounded-md text-sm font-medium mb-1",
                      pathname === route.href 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t p-4">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/" className="gap-2">
                    <Store className="h-4 w-4" />
                    View Store
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Logo */}
        <Link 
          href="/admin" 
          className="items-center gap-2 mr-8 hidden md:flex hover:opacity-80 transition-opacity"
        >
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">StyleStride Admin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 flex-1">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === route.href 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-10 w-64 h-9" 
            />
          </div>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] text-primary-foreground rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
          
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 flex items-center">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium hidden md:inline-block">Admin</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/admin/profile" className="cursor-pointer">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/settings" className="cursor-pointer">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/help" className="cursor-pointer">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer">
                  <Store className="h-4 w-4 mr-2" />
                  View Store
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/logout" className="cursor-pointer text-red-500 hover:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}