"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  name: string
  description: string
  location: string
  date: string
  participants: number
  image: string
  category: string
}

interface ProjectMapProps {
  projects: Project[]
}

export function ProjectMap({ projects }: ProjectMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    // In a real implementation, this would initialize a map library like Mapbox or Google Maps
    // For this demo, we'll just simulate the map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full">
      {!mapLoaded ? (
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p>Loading map...</p>
          </div>
        </div>
      ) : (
        <>
          <div
            className="h-full w-full bg-[url('/placeholder.svg?height=600&width=1200&text=Interactive+Map')] bg-cover bg-center"
            onClick={() => setSelectedProject(null)}
          >
            {/* Map markers would be placed here in a real implementation */}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="absolute cursor-pointer"
                style={{
                  top: `${20 + index * 10}%`,
                  left: `${15 + index * 12}%`,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedProject(project)
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96">
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{selectedProject.name}</CardTitle>
                    <Badge>{selectedProject.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{selectedProject.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      {selectedProject.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {selectedProject.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      {selectedProject.participants} participants
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4">
                  <Button size="sm">Join Project</Button>
                  <Link href={`/projects/${selectedProject.id}`} passHref>
                    <Button variant="ghost" size="sm">
                      Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  )
}

