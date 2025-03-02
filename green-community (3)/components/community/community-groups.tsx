import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CommunityGroups() {
  const groups = [
    {
      id: "1",
      name: "Urban Gardeners",
      description:
        "A group dedicated to promoting urban gardening and sustainable food production in city environments.",
      members: 156,
      category: "Gardening",
      image: "/placeholder.svg?height=40&width=40&text=UG",
    },
    {
      id: "2",
      name: "Zero Waste Living",
      description: "Tips, tricks, and support for reducing waste and living a more sustainable lifestyle.",
      members: 243,
      category: "Lifestyle",
      image: "/placeholder.svg?height=40&width=40&text=ZW",
    },
    {
      id: "3",
      name: "Renewable Energy Advocates",
      description: "Discussing and promoting renewable energy solutions for homes and communities.",
      members: 118,
      category: "Energy",
      image: "/placeholder.svg?height=40&width=40&text=RE",
    },
    {
      id: "4",
      name: "Eco-Friendly Transportation",
      description: "Exploring sustainable transportation options from biking to electric vehicles.",
      members: 92,
      category: "Transportation",
      image: "/placeholder.svg?height=40&width=40&text=ET",
    },
    {
      id: "5",
      name: "Wildlife Conservation",
      description: "Dedicated to protecting and preserving local wildlife and natural habitats.",
      members: 175,
      category: "Conservation",
      image: "/placeholder.svg?height=40&width=40&text=WC",
    },
    {
      id: "6",
      name: "Sustainable Fashion",
      description: "Discussing ethical fashion choices, upcycling, and reducing the environmental impact of clothing.",
      members: 134,
      category: "Fashion",
      image: "/placeholder.svg?height=40&width=40&text=SF",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <Card key={group.id}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={group.image} alt={group.name} />
              <AvatarFallback>{group.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{group.name}</CardTitle>
              <CardDescription className="flex items-center">
                <Users className="mr-1 h-3 w-3" />
                {group.members} members
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Badge className="mb-2">{group.category}</Badge>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Join Group
            </Button>
            <Link href={`/community/groups/${group.id}`} passHref>
              <Button variant="ghost">
                View
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

