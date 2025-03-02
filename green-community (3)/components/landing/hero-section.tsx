import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="container relative flex flex-col items-center justify-center space-y-10 py-20 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Building a <span className="text-primary">Sustainable</span> Future Together
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Join our community platform to engage in environmental initiatives, learn about sustainability, and make a
            positive impact on our planet.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/register" passHref>
            <Button size="lg" className="eco-gradient">
              Join the Community
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="relative h-[300px] w-full max-w-4xl overflow-hidden rounded-lg shadow-xl md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="GreenCommunity Platform"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

