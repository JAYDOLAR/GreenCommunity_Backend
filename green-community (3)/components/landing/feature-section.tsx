import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, BookOpen, ShoppingBag, BarChart3, MessageCircle } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Environmental Initiatives",
      description:
        "Organize and participate in local environmental projects, track progress, and make a real impact in your community.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Sustainability Education",
      description:
        "Access educational resources, take quizzes, and participate in challenges to enhance your sustainability knowledge.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Engagement",
      description:
        "Connect with like-minded individuals, share experiences, and collaborate on sustainability initiatives.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Green Marketplace",
      description: "Discover and purchase eco-friendly products from local vendors and support sustainable businesses.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Carbon Footprint Tracker",
      description:
        "Monitor your carbon footprint, set reduction goals, and explore offset options to minimize your impact.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      title: "AI Chatbot Assistant",
      description:
        "Get 24/7 support, answers to your questions, and personalized recommendations for sustainable living.",
    },
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Our platform offers a comprehensive suite of tools and resources to help you live more sustainably.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="eco-card">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

