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
  Tag
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
    <header className="bg-background border-b">
      <div className="flex h-16 items-center px-6">
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex flex-col space-y-6 mt-6">
              <Link 
                href="/" 
                className="text-xl font-bold"
                onClick={() => setShowMobileMenu(false)}
              >
                StyleStride Admin
              </Link>
              <nav className="flex flex-col space-y-2">
                {adminRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center py-2 px-3 rounded-md text-sm font-medium",
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
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center mr-8 hidden md:flex">
          <span className="text-xl font-bold">StyleStride Admin</span>
        </Link>

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

        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-10 w-64 h-9" 
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-[10px] flex items-center justify-center">
              2
            </span>
          </Button>
          
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