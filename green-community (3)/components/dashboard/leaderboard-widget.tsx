import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  user: {
    name: string
    avatar: string
    initials: string
  }
  points: number
}

export function LeaderboardWidget() {
  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      user: {
        name: "Alice Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AJ",
      },
      points: 500,
    },
    {
      rank: 2,
      user: {
        name: "Bob Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "BS",
      },
      points: 450,
    },
    {
      rank: 3,
      user: {
        name: "Charlie Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "CB",
      },
      points: 400,
    },
    {
      rank: 4,
      user: {
        name: "David Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DL",
      },
      points: 350,
    },
    {
      rank: 5,
      user: {
        name: "Eva Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EG",
      },
      points: 300,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top community members by points earned.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboard.map((entry) => (
            <div key={entry.rank} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{entry.rank}</span>
              </div>
              <Avatar>
                <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                <AvatarFallback>{entry.user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{entry.user.name}</p>
                <p className="text-sm text-muted-foreground">{entry.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

