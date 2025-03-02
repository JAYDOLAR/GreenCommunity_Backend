import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Leaf, Award } from "lucide-react"
import Link from "next/link"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentProjects } from "@/components/dashboard/recent-projects"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { CarbonFootprintChart } from "@/components/dashboard/carbon-footprint-chart"
import { LeaderboardWidget } from "@/components/dashboard/leaderboard-widget"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your sustainability journey.</p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Projects</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Active Projects</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
            <div className="mt-4">
              <Link href="/dashboard/projects" passHref>
                <Button size="sm" className="w-full" variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Courses Completed</div>
            <p className="text-xs text-muted-foreground">3 courses in progress</p>
            <div className="mt-4">
              <Link href="/dashboard/education" passHref>
                <Button size="sm" className="w-full" variant="outline">
                  Continue Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Community Impact</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250 Points Earned</div>
            <p className="text-xs text-muted-foreground">Ranked #12 in your area</p>
            <div className="mt-4">
              <Link href="/dashboard/community" passHref>
                <Button size="sm" className="w-full" variant="outline">
                  View Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="carbon">Carbon Footprint</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <RecentProjects />
            <UpcomingEvents />
          </div>
        </TabsContent>
        <TabsContent value="projects">
          <RecentProjects fullHeight />
        </TabsContent>
        <TabsContent value="carbon">
          <CarbonFootprintChart />
        </TabsContent>
        <TabsContent value="leaderboard">
          <LeaderboardWidget />
        </TabsContent>
      </Tabs>
    </div>
  )
}

