import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TreesIcon as Tree, Wind, Sun, Leaf, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CarbonOffsets() {
  const offsetProjects = [
    {
      id: "1",
      name: "Reforestation Project",
      description: "Support tree planting in deforested areas to sequester carbon and restore ecosystems.",
      location: "Amazon Rainforest, Brazil",
      price: 15,
      impact: "1 ton CO₂e offset per $15",
      image: "/placeholder.svg?height=200&width=400&text=Reforestation",
      category: "Forestry",
      icon: <Tree className="h-5 w-5" />,
      progress: 75,
    },
    {
      id: "2",
      name: "Wind Farm Development",
      description: "Help fund new wind turbines to generate clean, renewable electricity and reduce fossil fuel dependence.",
      location: "Midwest United States",
      price: 18,
      impact: "1 ton CO₂e offset per $18",
      image: "/placeholder.svg?height=200&width=400&text=Wind+Farm",
      category: "Renewable Energy",
      icon: <Wind className="h-5 w-5" />,
      progress: 60,
    },
    {
      id: "3",
      name: "Solar Energy Access",
      description: "Provide solar panels to communities without reliable electricity, replacing diesel generators.",
      location: "Rural Kenya",
      price: 20,
      impact: "1 ton CO₂e offset per $20",
      image: "/placeholder.svg?height=200&width=400&text=Solar+Energy",
      category: "Renewable Energy",
      icon: <Sun className="h-5 w-5" />,
      progress: 45,
    },
    {
      id: "4",
      name: "Methane Capture",
      description: "Capture methane emissions from landfills and convert them into usable energy.",
      location: "Various locations, United States",
      price: 12,
      impact: "1 ton CO₂e offset per $12",
      image: "/placeholder.svg?height=200&width=400&text=Methane+Capture",
      category: "Waste Management",
      icon: <Leaf className="h-5 w-5" />,
      progress: 80,
    },
    {
      id: "5",
      name: "Mangrove Restoration",
      description: "Restore mangrove forests that sequester carbon and protect coastal communities from storms.",
      location: "Coastal Indonesia",
      price: 22,
      impact: "1 ton CO₂e offset per $22",
      image: "/placeholder.svg?height=200&width=400&text=Mangrove",
      category: "Conservation",
      icon: <Globe className="h-5 w-5" />,
      progress: 35,
    },
    {
      id: "6",
      name: "Improved Cookstoves",
      description: "Provide efficient cookstoves to reduce wood consumption and indoor air pollution.",
      location: "Rural India",
      price: 10,
      impact: "1 ton CO₂e offset per $10",
      image: "/placeholder.svg?height=200&width=400&text=Cookstoves",
      category: "Energy Efficiency",
      icon: <Leaf className="h-5 w-5" />,
      progress: 90,
    },
  ];

  return (
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Offset Projects</CardTitle>
            <CardDescription>
              Support verified projects that reduce or remove carbon emissions from the atmosphere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="forestry">Forestry</TabsTrigger>
                <TabsTrigger value="renewable">Renewable Energy</TabsTrigger>
                <TabsTrigger value="other">Other Projects</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {offsetProjects.map((project) => (
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
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-2">
                            {project.icon}
                            <CardTitle className="text-lg">{project.name}</CardTitle>
                          </div>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="grid gap-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Location:</span>
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Price:</span>
                              <span>${project.price} per ton CO₂e</span>
                            </div>
                            <div className="mt-2">
                              <div className="mb-1 flex items-center justify-between text-xs">
                                <span>Funding Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between p-4">
                          <Button>Purchase Offset</Button>
                          <Link href={`/carbon/offsets/${project.id}`} passHref>
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
              <TabsContent value="forestry" className="pt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {offsetProjects
                      .filter(
                          (project) =>
                              project.category === "Forestry" || project.category === "Conservation"
                      )
                      .map((project) => (
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
                            <CardHeader className="p-4">
                              <div className="flex items-center gap-2">
                                {project.icon}
                                <CardTitle className="text-lg">{project.name}</CardTitle>
                              </div>
                              <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="grid gap-2 text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Location:</span>
                                  <span>{project.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Price:</span>
                                  <span>${project.price} per ton CO₂e</span>
                                </div>
                                <div className="mt-2">
                                  <div className="mb-1 flex items-center justify-between text-xs">
                                    <span>Funding Progress</span>
                                    <span>{project.progress}%</span>
                                  </div>
                                  <Progress value={project.progress} className="h-2" />
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4">
                              <Button>Purchase Offset</Button>
                              <Link href={`/carbon/offsets/${project.id}`} passHref>
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
              <TabsContent value="renewable" className="pt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {offsetProjects
                      .filter((project) => project.category === "Renewable Energy")
                      .map((project) => (
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
                            <CardHeader className="p-4">
                              <div className="flex items-center gap-2">
                                {project.icon}
                                <CardTitle className="text-lg">{project.name}</CardTitle>
                              </div>
                              <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="grid gap-2 text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Location:</span>
                                  <span>{project.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Price:</span>
                                  <span>${project.price} per ton CO₂e</span>
                                </div>
                                <div className="mt-2">
                                  <div className="mb-1 flex items-center justify-between text-xs">
                                    <span>Funding Progress</span>
                                    <span>{project.progress}%</span>
                                  </div>
                                  <Progress value={project.progress} className="h-2" />
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4">
                              <Button>Purchase Offset</Button>
                              <Link href={`/carbon/offsets/${project.id}`} passHref>
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
              <TabsContent value="other" className="pt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {offsetProjects
                      .filter(
                          (project) =>
                              project.category !== "Forestry" &&
                              project.category !== "Conservation" &&
                              project.category !== "Renewable Energy"
                      )
                      .map((project) => (
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
                            <CardHeader className="p-4">
                              <div className="flex items-center gap-2">
                                {project.icon}
                                <CardTitle className="text-lg">{project.name}</CardTitle>
                              </div>
                              <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="grid gap-2 text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Location:</span>
                                  <span>{project.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-muted-foreground">Price:</span>
                                  <span>${project.price} per ton CO₂e</span>
                                </div>
                                <div className="mt-2">
                                  <div className="mb-1 flex items-center justify-between text-xs">
                                    <span>Funding Progress</span>
                                    <span>{project.progress}%</span>
                                  </div>
                                  <Progress value={project.progress} className="h-2" />
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4">
                              <Button>Purchase Offset</Button>
                              <Link href={`/carbon/offsets/${project.id}`} passHref>
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
            </Tabs>
          </CardContent>
        </Card>
      </div>
  );
}
