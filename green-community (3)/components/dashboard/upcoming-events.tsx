import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export function UpcomingEvents() {
  const events = [
    {
      id: "1",
      title: "Earth Day Celebration",
      date: "Apr 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "City Central Park",
      type: "community",
    },
    {
      id: "2",
      title: "Sustainable Living Workshop",
      date: "Mar 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      type: "education",
    },
    {
      id: "3",
      title: "Farmers Market",
      date: "Mar 12, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Downtown Plaza",
      type: "marketplace",
    },
    {
      id: "4",
      title: "Climate Action Meeting",
      date: "Mar 25, 2025",
      time: "6:30 PM - 8:00 PM",
      location: "Virtual",
      type: "community",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Environmental events and activities in your area.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{event.title}</h3>
                <Badge
                  variant={
                    event.type === "community" ? "default" : event.type === "education" ? "secondary" : "outline"
                  }
                >
                  {event.type}
                </Badge>
              </div>
              <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={`/dashboard/events/${event.id}`} passHref>
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

