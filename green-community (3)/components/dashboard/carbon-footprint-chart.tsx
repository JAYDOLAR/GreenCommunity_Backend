"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export function CarbonFootprintChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const monthlyData = [
    { month: "Jan", carbon: 3.2, average: 4.1 },
    { month: "Feb", carbon: 3.0, average: 4.0 },
    { month: "Mar", carbon: 2.8, average: 3.9 },
    { month: "Apr", carbon: 2.7, average: 3.9 },
    { month: "May", carbon: 2.5, average: 3.8 },
    { month: "Jun", carbon: 2.4, average: 3.8 },
    { month: "Jul", carbon: 2.3, average: 3.7 },
    { month: "Aug", carbon: 2.4, average: 3.7 },
    { month: "Sep", carbon: 2.3, average: 3.6 },
    { month: "Oct", carbon: 2.2, average: 3.6 },
    { month: "Nov", carbon: 2.3, average: 3.5 },
    { month: "Dec", carbon: 2.4, average: 3.5 },
  ]

  const categoryData = [
    { name: "Transportation", value: 1.2 },
    { name: "Home Energy", value: 0.8 },
    { name: "Food", value: 0.6 },
    { name: "Goods", value: 0.4 },
    { name: "Services", value: 0.3 },
  ]

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Carbon Footprint Analysis</CardTitle>
        <CardDescription>Track your carbon emissions over time and by category.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trends">
          <TabsList className="mb-4">
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="trends" className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                <XAxis dataKey="month" stroke={isDark ? "#888" : "#333"} />
                <YAxis
                  stroke={isDark ? "#888" : "#333"}
                  label={{ value: "CO₂ (tons)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1f2937" : "#fff",
                    borderColor: isDark ? "#374151" : "#e5e7eb",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="carbon"
                  name="Your Footprint"
                  stroke="#10b981"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="average"
                  name="Community Average"
                  stroke="#6b7280"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="categories" className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                <XAxis dataKey="name" stroke={isDark ? "#888" : "#333"} />
                <YAxis
                  stroke={isDark ? "#888" : "#333"}
                  label={{ value: "CO₂ (tons)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1f2937" : "#fff",
                    borderColor: isDark ? "#374151" : "#e5e7eb",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
                <Legend />
                <Bar dataKey="value" name="Carbon Emissions" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

