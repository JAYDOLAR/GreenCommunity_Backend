import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Search, Filter, ShoppingCart, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { MarketplaceFilters } from "@/components/marketplace/marketplace-filters"
import { MarketplaceCart } from "@/components/marketplace/marketplace-cart"

export const metadata: Metadata = {
  title: "Marketplace | GreenCommunity",
  description: "Shop eco-friendly products from local vendors",
}

export default function MarketplacePage() {
  const products = [
    {
      id: "1",
      name: "Reusable Bamboo Utensil Set",
      description: "Portable and eco-friendly utensil set made from sustainable bamboo.",
      price: 15.99,
      ecoRating: 5,
      vendor: "EcoEssentials",
      image: "/placeholder.svg?height=200&width=200&text=Bamboo+Utensils",
      category: "Kitchen",
    },
    {
      id: "2",
      name: "Organic Cotton Tote Bag",
      description: "Durable tote bag made from 100% organic cotton. Perfect for shopping.",
      price: 12.5,
      ecoRating: 5,
      vendor: "GreenThreads",
      image: "/placeholder.svg?height=200&width=200&text=Tote+Bag",
      category: "Bags",
    },
    {
      id: "3",
      name: "Stainless Steel Water Bottle",
      description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 24.99,
      ecoRating: 4,
      vendor: "HydroEco",
      image: "/placeholder.svg?height=200&width=200&text=Water+Bottle",
      category: "Drinkware",
    },
    {
      id: "4",
      name: "Beeswax Food Wraps (Set of 3)",
      description:
        "Reusable food wraps made with organic cotton, beeswax, and jojoba oil. A sustainable alternative to plastic wrap.",
      price: 18.99,
      ecoRating: 5,
      vendor: "BeeGreen",
      image: "/placeholder.svg?height=200&width=200&text=Beeswax+Wraps",
      category: "Kitchen",
    },
    {
      id: "5",
      name: "Biodegradable Phone Case",
      description: "Protective phone case made from plant-based materials that will biodegrade when composted.",
      price: 29.99,
      ecoRating: 4,
      vendor: "TechEco",
      image: "/placeholder.svg?height=200&width=200&text=Phone+Case",
      category: "Electronics",
    },
    {
      id: "6",
      name: "Solar Powered Charger",
      description: "Portable solar panel charger for phones and small devices. Harness the power of the sun!",
      price: 45.0,
      ecoRating: 5,
      vendor: "SolarTech",
      image: "/placeholder.svg?height=200&width=200&text=Solar+Charger",
      category: "Electronics",
    },
    {
      id: "7",
      name: "Recycled Paper Notebook",
      description: "Notebook made from 100% post-consumer recycled paper with a seed paper cover that can be planted.",
      price: 8.99,
      ecoRating: 5,
      vendor: "PaperSprout",
      image: "/placeholder.svg?height=200&width=200&text=Notebook",
      category: "Stationery",
    },
    {
      id: "8",
      name: "Bamboo Toothbrush Set",
      description: "Set of 4 biodegradable toothbrushes with bamboo handles and BPA-free bristles.",
      price: 12.99,
      ecoRating: 5,
      vendor: "EcoSmile",
      image: "/placeholder.svg?height=200&width=200&text=Toothbrushes",
      category: "Personal Care",
    },
    {
      id: "9",
      name: "Organic Wool Dryer Balls",
      description: "Set of 6 wool dryer balls that naturally soften laundry and reduce drying time.",
      price: 19.99,
      ecoRating: 4,
      vendor: "CleanGreen",
      image: "/placeholder.svg?height=200&width=200&text=Dryer+Balls",
      category: "Home",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Green Marketplace</h1>
              <p className="text-muted-foreground">
                Shop eco-friendly products from local vendors and reduce your environmental impact.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search products..." className="flex-1" />
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
                <MarketplaceCart />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="hidden md:block">
                <MarketplaceFilters />
              </div>
              <div className="md:col-span-3">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute right-2 top-2">{product.category}</Badge>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < product.ecoRating ? "fill-primary text-primary" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-xs">Eco Rating</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                          <span className="text-sm text-muted-foreground">by {product.vendor}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4">
                        <Button>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                        <Link href={`/marketplace/${product.id}`} passHref>
                          <Button variant="ghost">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

