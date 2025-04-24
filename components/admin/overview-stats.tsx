import { cn } from "@/lib/utils"

export function OverviewStats() {
  // Mock data for today's overview
  const stats = [
    {
      label: "Today's Orders",
      value: 12,
      changeValue: 3,
      changePercent: 25,
      changeType: "increase"
    },
    {
      label: "Today's Revenue",
      value: 842.5,
      changeValue: 125.3,
      changePercent: 14.8,
      changeType: "increase"
    },
    {
      label: "New Customers",
      value: 5,
      changeValue: -2,
      changePercent: 28.5,
      changeType: "decrease"
    },
    {
      label: "Abandoned Carts",
      value: 3,
      changeValue: -1,
      changePercent: 25,
      changeType: "decrease"
    }
  ];
  
  return (
    <div className="space-y-4">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-xl font-bold">
              {typeof stat.value === "number" && stat.label.includes("Revenue") 
                ? `$${stat.value.toLocaleString()}`
                : stat.value
              }
            </p>
          </div>
          <div className={cn(
            "text-xs font-medium",
            stat.changeType === "increase" ? "text-green-600" : "text-red-600"
          )}>
            {stat.changeType === "increase" ? "↑" : "↓"} {stat.changePercent}%
          </div>
        </div>
      ))}
    </div>
  )
}