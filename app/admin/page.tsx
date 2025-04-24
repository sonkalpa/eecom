import Link from "next/link"
import { 
  ShoppingBag, 
  Users, 
  Package, 
  CreditCard, 
  DollarSign, 
  Tag, 
  TrendingUp, 
  ShoppingCart, 
  Calendar, 
  Clock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AdminHeader } from "@/components/admin/admin-header"
import { OverviewStats } from "@/components/admin/overview-stats"
import { RecentOrders } from "@/components/admin/recent-orders"
import { SalesChart } from "@/components/admin/sales-chart"
import { TopProducts } from "@/components/admin/top-products"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />
      <div className="container p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your store performance and recent activity</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button asChild>
              <Link href="/admin/products/new">
                <Package className="h-4 w-4 mr-2" />
                Add Product
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <h3 className="text-2xl font-bold">$12,628</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <h3 className="text-2xl font-bold">156</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Customers</p>
                  <h3 className="text-2xl font-bold">2,842</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.3% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <h3 className="text-2xl font-bold">3.2%</h3>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                    -0.4% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Daily sales revenue for the past month</CardDescription>
                </CardHeader>
                <CardContent>
                  <SalesChart />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Best selling products this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopProducts />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest customer purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentOrders />
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Today's Overview</CardTitle>
                  <CardDescription>Summary of today's activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <OverviewStats />
                  
                  <div>
                    <h4 className="text-sm font-medium mb-3">Upcoming Tasks</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <Package className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Update inventory</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            Due in 2 hours
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <CreditCard className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Process refund #45892</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            Due today
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          <Tag className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Update product prices</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            Due tomorrow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed analytics and reports coming soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64">
                  <p className="text-muted-foreground">Analytics dashboard is under development.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Download and view reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64">
                  <p className="text-muted-foreground">Reports section is coming soon.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Recent system notifications and alerts.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64">
                  <p className="text-muted-foreground">You have no new notifications.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}