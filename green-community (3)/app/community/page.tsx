import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Search, Users, Calendar, MessageSquare, Filter, PlusCircle, Heart, MessageCircle, Share2 } from "lucide-react"
import { CommunityEvents } from "@/components/community/community-events"
import { CommunityGroups } from "@/components/community/community-groups"

export const metadata: Metadata = {
  title: "Community | GreenCommunity",
  description: "Connect with like-minded individuals in the GreenCommunity",
}

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Community</h1>
              <p className="text-muted-foreground">
                Connect with like-minded individuals and share your sustainability journey.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search discussions..." className="flex-1" />
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
                  New Post
                </Button>
              </div>
            </div>

            <Tabs defaultValue="discussions" className="w-full">
              <TabsList>
                <TabsTrigger value="discussions">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Discussions
                </TabsTrigger>
                <TabsTrigger value="groups">
                  <Users className="mr-2 h-4 w-4" />
                  Groups
                </TabsTrigger>
                <TabsTrigger value="events">
                  <Calendar className="mr-2 h-4 w-4" />
                  Events
                </TabsTrigger>
              </TabsList>
              <TabsContent value="discussions" className="space-y-4">
                {[1, 2, 3, 4, 5].map((post) => (
                  <Card key={post} className="overflow-hidden">
                    <CardHeader className="flex flex-row items-start gap-4 p-4 pb-2">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${post}`} alt="User" />
                        <AvatarFallback>U{post}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-base">
                              <Link href={`/community/post/${post}`} className="hover:underline">
                                How to start a community garden in your neighborhood
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-xs">
                              Posted by <span className="font-medium">EcoEnthusiast</span> • 2 days ago
                            </CardDescription>
                          </div>
                          <Badge>Gardening</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-3 text-sm">
                        I've been thinking about starting a community garden in my neighborhood to promote sustainable
                        food practices and bring people together. Does anyone have experience with this? What are the
                        first steps I should take? I'm particularly interested in how to approach local authorities for
                        permission and how to get neighbors involved.
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between border-t p-2">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" />
                          <span>24</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>12</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>
              <TabsContent value="groups">
                <CommunityGroups />
              </TabsContent>
              <TabsContent value="events">
                <CommunityEvents />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

