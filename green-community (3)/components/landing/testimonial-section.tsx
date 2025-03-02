import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The GreenCommunity Platform has transformed how I engage with environmental initiatives. I've connected with like-minded individuals and made a real impact in my community.",
      name: "Sarah Johnson",
      role: "Community Member",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      quote:
        "As an environmental educator, I've found the educational resources on this platform to be invaluable. The interactive quizzes and challenges make learning about sustainability fun and engaging.",
      name: "Michael Chen",
      role: "Environmental Educator",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    {
      quote:
        "The carbon footprint tracker has helped me identify areas where I can reduce my environmental impact. I've already decreased my carbon footprint by 30% in just three months!",
      name: "Priya Patel",
      role: "Sustainability Advocate",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PP",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Community Says</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Hear from members who are making a difference with GreenCommunity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="eco-card">
              <CardContent className="pt-6">
                <Quote className="mb-4 h-8 w-8 text-primary/50" />
                <p className="mb-4 text-lg">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

