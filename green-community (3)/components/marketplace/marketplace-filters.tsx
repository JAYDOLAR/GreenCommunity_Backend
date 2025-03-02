"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [ecoRating, setEcoRating] = useState(0)

  const categories = [
    { id: "kitchen", label: "Kitchen" },
    { id: "bags", label: "Bags" },
    { id: "drinkware", label: "Drinkware" },
    { id: "electronics", label: "Electronics" },
    { id: "stationery", label: "Stationery" },
    { id: "personal-care", label: "Personal Care" },
    { id: "home", label: "Home" },
  ]

  const vendors = [
    { id: "eco-essentials", label: "EcoEssentials" },
    { id: "green-threads", label: "GreenThreads" },
    { id: "hydro-eco", label: "HydroEco" },
    { id: "bee-green", label: "BeeGreen" },
    { id: "tech-eco", label: "TechEco" },
    { id: "solar-tech", label: "SolarTech" },
    { id: "paper-sprout", label: "PaperSprout" },
    { id: "eco-smile", label: "EcoSmile" },
    { id: "clean-green", label: "CleanGreen" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription>Refine your product search</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Price Range</h3>
          <div className="pt-4">
            <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Eco Rating</h3>
          <div className="pt-4">
            <Slider
              defaultValue={[0]}
              max={5}
              step={1}
              value={[ecoRating]}
              onValueChange={(value) => setEcoRating(value[0])}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Any</span>
            <span className="text-sm">{ecoRating > 0 ? `${ecoRating}+ stars` : "Any"}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={`category-${category.id}`} />
                <Label htmlFor={`category-${category.id}`} className="text-sm">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Vendors</h3>
          <div className="space-y-2">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="flex items-center space-x-2">
                <Checkbox id={`vendor-${vendor.id}`} />
                <Label htmlFor={`vendor-${vendor.id}`} className="text-sm">
                  {vendor.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Apply Filters</Button>
      </CardFooter>
    </Card>
  )
}

