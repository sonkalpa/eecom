"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Shop",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/about",
    label: "About",
  },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                <Link href="/admin" className="text-lg font-medium text-muted-foreground hover:text-primary">
                  Admin
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-bold text-xl ml-2 md:ml-0">
            StyleStride
          </Link>

          <nav className="hidden md:flex items-center ml-8 space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          {showSearchInput ? (
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-[200px] md:w-[250px] pr-8" 
                autoFocus
                onBlur={() => setShowSearchInput(false)}
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearchInput(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isMounted && theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-[10px] flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}