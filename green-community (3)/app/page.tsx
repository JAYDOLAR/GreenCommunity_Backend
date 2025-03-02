"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Leaf, Users, BookOpen, ShoppingBag, BarChart3, MessageCircle } from "lucide-react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeatureSection } from "@/components/landing/feature-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { StatsSection } from "@/components/landing/stats-section"
import { Footer } from "@/components/layout/footer"
import { LandingHeader } from "@/components/layout/landing-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <section className="container py-12 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <Leaf className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Environmental Initiatives</CardTitle>
                  <CardDescription>Join and track local projects</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Discover and participate in environmental projects in your community. Track progress and make a real
                  impact.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/projects" passHref>
                  <Button className="w-full">
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sustainability Education</CardTitle>
                  <CardDescription>Learn and grow your knowledge</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Access educational resources, take quizzes, and participate in challenges to enhance your
                  sustainability knowledge.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education" passHref>
                  <Button className="w-full">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Community Engagement</CardTitle>
                  <CardDescription>Connect with like-minded people</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Join forums, participate in discussions, and share your experiences with a community of sustainability
                  enthusiasts.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/community" passHref>
                  <Button className="w-full">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Green Marketplace</CardTitle>
                  <CardDescription>Shop eco-friendly products</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Discover and purchase eco-friendly products from local vendors. Support sustainable businesses and
                  reduce your environmental impact.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/marketplace" passHref>
                  <Button className="w-full">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Carbon Footprint Tracker</CardTitle>
                  <CardDescription>Monitor and reduce your impact</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Track your carbon footprint, set reduction goals, and explore offset options to minimize your
                  environmental impact.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/carbon" passHref>
                  <Button className="w-full">
                    Track Footprint <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="eco-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageCircle className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>AI Chatbot Assistant</CardTitle>
                  <CardDescription>Get personalized guidance</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Receive 24/7 support, answers to your sustainability questions, and personalized recommendations from
                  our AI assistant.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => {}}>
                  Chat Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <StatsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}

