"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Car, Home, Utensils, ShoppingBag, Plane } from "lucide-react"

export function CarbonCalculator() {
  const [transportationScore, setTransportationScore] = useState(0)
  const [homeScore, setHomeScore] = useState(0)
  const [foodScore, setFoodScore] = useState(0)
  const [goodsScore, setGoodsScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  const calculateTotal = () => {
    const newTotal = transportationScore + homeScore + foodScore + goodsScore
    setTotalScore(newTotal)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Carbon Footprint Calculator</CardTitle>
          <CardDescription>Answer questions about your lifestyle to estimate your carbon footprint.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="transportation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="transportation">
                <Car className="mr-2 h-4 w-4" />
                Transportation
              </TabsTrigger>
              <TabsTrigger value="home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="food">
                <Utensils className="mr-2 h-4 w-4" />
                Food
              </TabsTrigger>
              <TabsTrigger value="goods">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Goods
              </TabsTrigger>
            </TabsList>
            <TabsContent value="transportation" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Primary mode of transportation</Label>
                <Select defaultValue="car">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walk">Walking/Biking</SelectItem>
                    <SelectItem value="public">Public Transit</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="carpool">Carpool</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Weekly miles driven</Label>
                <div className="pt-2">
                  <Slider
                    defaultValue={[100]}
                    max={500}
                    step={10}
                    onValueChange={(value) => setTransportationScore(value[0] * 0.01)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 miles</span>
                  <span className="text-sm">500 miles</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Flights per year</Label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setTransportationScore((prev) => prev + 0.2)}
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Short (&lt; 3 hours)
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setTransportationScore((prev) => prev + 0.5)}
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Medium (3-6 hours)
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setTransportationScore((prev) => prev + 1.2)}
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Long (6+ hours)
                  </Button>
                </div>
              </div>
              <div className="pt-4">
                <Button onClick={() => calculateTotal()}>Next: Home Energy</Button>
              </div>
            </TabsContent>
            <TabsContent value="home" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Home size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (&lt; 1,000 sq ft)</SelectItem>
                    <SelectItem value="medium">Medium (1,000-2,000 sq ft)</SelectItem>
                    <SelectItem value="large">Large (2,000+ sq ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Primary heating source</Label>
                <Select defaultValue="natural-gas">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electricity">Electricity</SelectItem>
                    <SelectItem value="natural-gas">Natural Gas</SelectItem>
                    <SelectItem value="oil">Oil</SelectItem>
                    <SelectItem value="renewable">Renewable Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Monthly electricity usage (kWh)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 500"
                  onChange={(e) => setHomeScore(Number.parseInt(e.target.value) * 0.001)}
                />
              </div>
              <div className="pt-4">
                <Button onClick={() => calculateTotal()}>Next: Food</Button>
              </div>
            </TabsContent>
            <TabsContent value="food" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Diet type</Label>
                <Select defaultValue="omnivore">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="pescatarian">Pescatarian</SelectItem>
                    <SelectItem value="omnivore">Omnivore</SelectItem>
                    <SelectItem value="high-meat">High Meat Consumption</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>How often do you eat locally produced food?</Label>
                <Select defaultValue="sometimes">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="always">Almost Always</SelectItem>
                    <SelectItem value="often">Often</SelectItem>
                    <SelectItem value="sometimes">Sometimes</SelectItem>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Food waste per week</Label>
                <div className="pt-2">
                  <Slider
                    defaultValue={[20]}
                    max={100}
                    step={5}
                    onValueChange={(value) => setFoodScore(value[0] * 0.006)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">None</span>
                  <span className="text-sm">High</span>
                </div>
              </div>
              <div className="pt-4">
                <Button onClick={() => calculateTotal()}>Next: Goods & Services</Button>
              </div>
            </TabsContent>
            <TabsContent value="goods" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Monthly spending on new goods</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (&lt; $100)</SelectItem>
                    <SelectItem value="medium">Medium ($100-$300)</SelectItem>
                    <SelectItem value="high">High ($300-$500)</SelectItem>
                    <SelectItem value="very-high">Very High ($500+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>How often do you buy second-hand items?</Label>
                <Select defaultValue="sometimes">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="always">Almost Always</SelectItem>
                    <SelectItem value="often">Often</SelectItem>
                    <SelectItem value="sometimes">Sometimes</SelectItem>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Recycling habits</Label>
                <Select defaultValue="most">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Recycle Everything Possible</SelectItem>
                    <SelectItem value="most">Recycle Most Items</SelectItem>
                    <SelectItem value="some">Recycle Some Items</SelectItem>
                    <SelectItem value="none">Don't Recycle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4">
                <Button onClick={() => calculateTotal()}>Calculate Total</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-lg font-medium">Your Estimated Carbon Footprint</h3>
          <div className="mt-2 w-full">
            <div className="mb-2 flex items-center justify-between">
              <span>Total: {totalScore.toFixed(2)} tons CO₂e per year</span>
              <span className="text-sm text-muted-foreground">
                {totalScore < 6 ? "Better than average" : totalScore < 10 ? "Average" : "Above average"}
              </span>
            </div>
            <Progress value={(totalScore / 20) * 100} className="h-3" />
          </div>
          <div className="mt-4 grid w-full grid-cols-4 gap-2 text-center text-sm">
            <div>
              <p className="font-medium">Transportation</p>
              <p>{transportationScore.toFixed(2)} tons</p>
            </div>
            <div>
              <p className="font-medium">Home</p>
              <p>{homeScore.toFixed(2)} tons</p>
            </div>
            <div>
              <p className="font-medium">Food</p>
              <p>{foodScore.toFixed(2)} tons</p>
            </div>
            <div>
              <p className="font-medium">Goods</p>
              <p>{goodsScore.toFixed(2)} tons</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

