"use client"

import { useState } from "react"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Mock data for the sales chart
const dailyData = [
  { name: "May 1", revenue: 1200, orders: 12 },
  { name: "May 2", revenue: 1800, orders: 18 },
  { name: "May 3", revenue: 1400, orders: 14 },
  { name: "May 4", revenue: 2200, orders: 22 },
  { name: "May 5", revenue: 1900, orders: 19 },
  { name: "May 6", revenue: 2400, orders: 24 },
  { name: "May 7", revenue: 2100, orders: 21 },
  { name: "May 8", revenue: 1700, orders: 17 },
  { name: "May 9", revenue: 1500, orders: 15 },
  { name: "May 10", revenue: 2300, orders: 23 },
  { name: "May 11", revenue: 2500, orders: 25 },
  { name: "May 12", revenue: 2700, orders: 27 },
  { name: "May 13", revenue: 2600, orders: 26 },
  { name: "May 14", revenue: 3000, orders: 30 },
  { name: "May 15", revenue: 2800, orders: 28 },
  { name: "May 16", revenue: 3200, orders: 32 },
  { name: "May 17", revenue: 3100, orders: 31 },
  { name: "May 18", revenue: 2900, orders: 29 },
  { name: "May 19", revenue: 2600, orders: 26 },
  { name: "May 20", revenue: 2400, orders: 24 },
  { name: "May 21", revenue: 2200, orders: 22 },
  { name: "May 22", revenue: 2500, orders: 25 },
  { name: "May 23", revenue: 2700, orders: 27 },
  { name: "May 24", revenue: 3000, orders: 30 },
  { name: "May 25", revenue: 3200, orders: 32 },
  { name: "May 26", revenue: 3400, orders: 34 },
  { name: "May 27", revenue: 3300, orders: 33 },
  { name: "May 28", revenue: 3500, orders: 35 },
  { name: "May 29", revenue: 3700, orders: 37 },
  { name: "May 30", revenue: 3600, orders: 36 }
];

const weeklyData = [
  { name: "Week 1", revenue: 9000, orders: 90 },
  { name: "Week 2", revenue: 12000, orders: 120 },
  { name: "Week 3", revenue: 15000, orders: 150 },
  { name: "Week 4", revenue: 18000, orders: 180 }
];

const monthlyData = [
  { name: "Jan", revenue: 42000, orders: 420 },
  { name: "Feb", revenue: 38000, orders: 380 },
  { name: "Mar", revenue: 45000, orders: 450 },
  { name: "Apr", revenue: 50000, orders: 500 },
  { name: "May", revenue: 55000, orders: 550 }
];

type TimeRange = "daily" | "weekly" | "monthly";

export function SalesChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");
  const [showOrders, setShowOrders] = useState(true);
  
  const data = 
    timeRange === "daily" ? dailyData :
    timeRange === "weekly" ? weeklyData :
    monthlyData;
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant={timeRange === "daily" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("daily")}
          >
            Daily
          </Button>
          <Button 
            variant={timeRange === "weekly" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("weekly")}
          >
            Weekly
          </Button>
          <Button 
            variant={timeRange === "monthly" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("monthly")}
          >
            Monthly
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowOrders(!showOrders)}
        >
          {showOrders ? "Hide Orders" : "Show Orders"}
        </Button>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              yAxisId="revenue"
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            {showOrders && (
              <YAxis
                yAxisId="orders"
                orientation="right"
                className="text-xs fill-muted-foreground"
                tick={{ fontSize: 12 }}
              />
            )}
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
                return [value, "Orders"];
              }}
            />
            <Legend />
            <Line
              yAxisId="revenue"
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="hsl(var(--chart-1))"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            {showOrders && (
              <Line
                yAxisId="orders"
                type="monotone"
                dataKey="orders"
                name="Orders"
                stroke="hsl(var(--chart-2))"
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}