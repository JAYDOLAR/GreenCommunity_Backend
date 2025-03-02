"get client"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { CarbonFootprintChart } from "@/components/dashboard/carbon-footprint-chart"
import { CarbonCalculator } from "@/components/carbon/carbon-calculator"
import { CarbonOffsets } from "@/components/carbon/carbon-offsets"

export const metadata: Metadata = {
  title: "Carbon Footprint Tracker | GreenCommunity",
  description: "Track, reduce, and offset your carbon footprint",
}

export default function CarbonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Carbon Footprint Tracker</h1>
              <p className="text-muted-foreground">
                Monitor your carbon emissions, set reduction goals, and explore offset options.
              </p>
            </div>

            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="offsets">Offset Options</TabsTrigger>
                <TabsTrigger value="tips">Reduction Tips</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">
                <div className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Current Footprint</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2.4 tons CO₂e</div>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500">↓ 12% from last month</span>
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Annual Projection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8.7 tons CO₂e</div>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500">↓ 3.2 tons from last year</span>
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Reduction Goal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">7.5 tons CO₂e</div>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-amber-500">1.2 tons to go</span>
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Offsets Purchased</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.5 tons CO₂e</div>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500">↑ 0.5 tons from last month</span>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <CarbonFootprintChart />
                </div>
              </TabsContent>
              <TabsContent value="calculator">
                <CarbonCalculator />
              </TabsContent>
              <TabsContent value="offsets">
                <CarbonOffsets />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

