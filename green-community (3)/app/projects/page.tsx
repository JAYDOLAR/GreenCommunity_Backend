import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Search, Filter, PlusCircle, MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ProjectMap } from "@/components/projects/project-map"

export const metadata: Metadata = {
  title: "Projects | GreenCommunity",
  description: "Discover and join environmental projects in your community",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      name: "City Park Clean-up",
      description: "Weekly clean-up of Central Park to remove litter and maintain green spaces.",
      location: "Central Park, New York",
      date: "Every Saturday, 9:00 AM",
      participants: 24,
      image: "/placeholder.svg?height=200&width=400&text=Park+Cleanup",
      category: "Clean-up",
    },
    {
      id: "2",
      name: "Community Garden",
      description: "Maintaining and expanding the community garden with organic vegetables and native plants.",
      location: "Community Center, Boston",
      date: "Tuesdays and Thursdays, 4:00 PM",
      participants: 18,
      image: "/placeholder.svg?height=200&width=400&text=Community+Garden",
      category: "Gardening",
    },
    {
      id: "3",
      name: "Recycling Workshop",
      description: "Educational workshop on proper recycling techniques and creative reuse of materials.",
      location: "Public Library, Chicago",
      date: "March 20, 2025, 2:00 PM",
      participants: 15,
      image: "/placeholder.svg?height=200&width=400&text=Recycling+Workshop",
      category: "Education",
    },
    {
      id: "4",
      name: "Tree Planting Initiative",
      description: "Planting native trees to increase urban canopy and improve air quality.",
      location: "Riverside Park, Seattle",
      date: "April 5, 2025, 10:00 AM",
      participants: 32,
      image: "/placeholder.svg?height=200&width=400&text=Tree+Planting",
      category: "Planting",
    },
    {
      id: "5",
      name: "Beach Clean-up Drive",
      description: "Removing plastic and other waste from local beaches to protect marine life.",
      location: "Ocean Beach, San Francisco",
      date: "Every Sunday, 8:00 AM",
      participants: 45,
      image: "/placeholder.svg?height=200&width=400&text=Beach+Cleanup",
      category: "Clean-up",
    },
    {
      id: "6",
      name: "Solar Panel Installation",
      description: "Community project to install solar panels on public buildings.",
      location: "Community Center, Austin",
      date: "March 15-17, 2025",
      participants: 12,
      image: "/placeholder.svg?height=200&width=400&text=Solar+Panels",
      category: "Energy",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Environmental Projects</h1>
              <p className="text-muted-foreground">Discover and join environmental initiatives in your community.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search projects..." className="flex-1" />
                <Button type="submit" size="icon" variant="ghost">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Project
                </Button>
              </div>
            </div>

            <Tabs defaultValue="list" className="w-full">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>
              <TabsContent value="list" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute right-2 top-2">{project.category}</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2 text-sm">
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            {project.date}
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            {project.participants} participants
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button>
                          <Users className="mr-2 h-4 w-4" />
                          Join Project
                        </Button>
                        <Link href={`/projects/${project.id}`} passHref>
                          <Button variant="ghost">
                            Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="map">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-[600px]">
                      <ProjectMap projects={projects} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

