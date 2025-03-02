import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CommunityEvents() {
  const events = [
    {
      id: "1",
      title: "Earth Day Celebration",
      description:
        "Join us for a day of environmental activities, workshops, and community building to celebrate Earth Day.",
      date: "Apr 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "City Central Park",
      attendees: 120,
      image: "/placeholder.svg?height=200&width=400&text=Earth+Day",
      type: "community",
    },
    {
      id: "2",
      title: "Sustainable Living Workshop",
      description:
        "Learn practical tips and techniques for reducing your environmental footprint and living more sustainably.",
      date: "Mar 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      attendees: 45,
      image: "/placeholder.svg?height=200&width=400&text=Workshop",
      type: "education",
    },
    {
      id: "3",
      title: "Farmers Market",
      description:
        "Shop for locally grown produce, handmade crafts, and eco-friendly products from vendors in your community.",
      date: "Mar 12, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Downtown Plaza",
      attendees: 200,
      image: "/placeholder.svg?height=200&width=400&text=Farmers+Market",
      type: "marketplace",
    },
    {
      id: "4",
      title: "Climate Action Meeting",
      description: "Discuss local climate initiatives and plan community actions to address environmental challenges.",
      date: "Mar 25, 2025",
      time: "6:30 PM - 8:00 PM",
      location: "Virtual",
      attendees: 75,
      image: "/placeholder.svg?height=200&width=400&text=Climate+Action",
      type: "community",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{event.title}</CardTitle>
              <Badge
                variant={event.type === "community" ? "default" : event.type === "education" ? "secondary" : "outline"}
              >
                {event.type}
              </Badge>
            </div>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                {event.attendees} attending
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Join Event
            </Button>
            <Link href={`/community/events/${event.id}`} passHref>
              <Button variant="ghost">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

