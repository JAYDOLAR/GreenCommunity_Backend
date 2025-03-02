import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface RecentProjectsProps {
  fullHeight?: boolean
}

export function RecentProjects({ fullHeight = false }: RecentProjectsProps) {
  const projects = [
    {
      id: "1",
      name: "City Park Clean-up",
      description: "Weekly clean-up of Central Park to remove litter and maintain green spaces.",
      date: "Next: Mar 15, 2025",
      participants: 12,
      status: "active",
    },
    {
      id: "2",
      name: "Community Garden",
      description: "Maintaining and expanding the community garden with organic vegetables and native plants.",
      date: "Next: Mar 10, 2025",
      participants: 8,
      status: "active",
    },
    {
      id: "3",
      name: "Recycling Workshop",
      description: "Educational workshop on proper recycling techniques and creative reuse of materials.",
      date: "Mar 20, 2025",
      participants: 15,
      status: "upcoming",
    },
    {
      id: "4",
      name: "Tree Planting Initiative",
      description: "Planting native trees to increase urban canopy and improve air quality.",
      date: "Apr 5, 2025",
      participants: 20,
      status: "upcoming",
    },
  ]

  return (
    <Card className={fullHeight ? "h-[600px]" : ""}>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
        <CardDescription>Your active and upcoming environmental projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge variant={project.status === "active" ? "default" : "secondary"}>
                    {project.status === "active" ? "Active" : "Upcoming"}
                  </Badge>
                </div>
                <Link href={`/dashboard/projects/${project.id}`} passHref>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm">{project.date}</div>
                <div className="flex -space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Avatar key={i} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${i + 1}`} />
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                  {project.participants > 3 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +{project.participants - 3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

