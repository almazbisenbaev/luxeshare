"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AssetCard } from "@/components/asset-card"
import { Calendar, TrendingUp, Wallet, Clock, MapPin } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Mock data
const mockPortfolio = [
  {
    id: "1",
    asset: "Azimut Grande 35M",
    type: "Yacht",
    shares: 5,
    totalShares: 100,
    purchasePrice: 125,
    currentValue: 132,
    income: 625,
  },
  {
    id: "2",
    asset: "Gulfstream G650",
    type: "Jet",
    shares: 3,
    totalShares: 80,
    purchasePrice: 89,
    currentValue: 94,
    income: 267,
  },
]

const mockBookings = [
  {
    id: "1",
    asset: "Azimut Grande 35M",
    dates: "Dec 15-22, 2024",
    amount: "2.5 SOL",
    status: "confirmed",
    location: "Monaco",
  },
  {
    id: "2",
    asset: "Gulfstream G650",
    dates: "Jan 8-15, 2025",
    amount: "3.0 SOL",
    status: "pending",
    location: "Miami",
  },
]

const availableAssets = [
  {
    id: "3",
    name: "Lamborghini Huracán",
    type: "car" as const,
    image: "/luxury-sports-car-lamborghini.jpg",
    location: "Los Angeles",
    price: 45,
    currency: "USDC" as const,
    totalShares: 50,
    availableShares: 8,
    nextAvailable: "Dec 22",
  },
  {
    id: "4",
    name: "Sunseeker Predator 74",
    type: "yacht" as const,
    image: "/luxury-yacht-ocean.png",
    location: "Ibiza",
    price: 95,
    currency: "SOL" as const,
    totalShares: 120,
    availableShares: 34,
    nextAvailable: "Jan 5",
  },
]

export function InvestorDashboard() {
  const handleBookAsset = (_assetId: string) => {
    toast({
      title: "Booking Requested",
      description: "Your booking request has been submitted for approval",
    })
  }

  const handleBuyShares = (_assetId: string, _shares: number) => {
    toast({
      title: "Shares Purchased",
      description: `Successfully purchased ${_shares} shares`,
    })
  }

  const totalPortfolioValue = mockPortfolio.reduce((sum, item) => sum + item.currentValue * item.shares, 0)
  const totalIncome = mockPortfolio.reduce((sum, item) => sum + item.income, 0)
  const totalShares = mockPortfolio.reduce((sum, item) => sum + item.shares, 0)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Investor Dashboard</h1>
          <p className="text-muted-foreground">Manage your luxury asset portfolio and bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalPortfolioValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Income</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalIncome}</div>
              <p className="text-xs text-muted-foreground">From rental income</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Shares</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalShares}</div>
              <p className="text-xs text-muted-foreground">Across {mockPortfolio.length} assets</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockBookings.length}</div>
              <p className="text-xs text-muted-foreground">Upcoming experiences</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Assets</TabsTrigger>
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Browse Assets */}
          <TabsContent value="browse" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Available Assets</h2>
              <p className="text-muted-foreground mb-6">Discover luxury assets available for investment</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableAssets.map((asset) => (
                <AssetCard key={asset.id} {...asset} />
              ))}
            </div>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Portfolio</CardTitle>
                <CardDescription>Your luxury asset investments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Shares</TableHead>
                      <TableHead>Purchase Price</TableHead>
                      <TableHead>Current Value</TableHead>
                      <TableHead>Income</TableHead>
                      <TableHead>P&L</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPortfolio.map((item) => {
                      const totalValue = item.currentValue * item.shares
                      const totalCost = item.purchasePrice * item.shares
                      const pnl = totalValue - totalCost
                      const pnlPercent = ((pnl / totalCost) * 100).toFixed(1)

                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{item.asset}</p>
                              <p className="text-sm text-muted-foreground">{item.type}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            {item.shares}/{item.totalShares}
                          </TableCell>
                          <TableCell>${item.purchasePrice}</TableCell>
                          <TableCell>${item.currentValue}</TableCell>
                          <TableCell className="text-green-600">+${item.income}</TableCell>
                          <TableCell>
                            <span className={pnl >= 0 ? "text-green-600" : "text-red-600"}>
                              {pnl >= 0 ? "+" : ""}${pnl} ({pnlPercent}%)
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings */}
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Your upcoming and past bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <Card key={booking.id} className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="font-semibold">{booking.asset}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {booking.dates}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {booking.location}
                              </div>
                            </div>
                            <p className="text-sm">Amount: {booking.amount}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                              {booking.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                              {booking.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transaction History */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your investment and booking history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-medium">Purchased 5 shares</p>
                      <p className="text-sm text-muted-foreground">Azimut Grande 35M • Nov 15, 2024</p>
                    </div>
                    <span className="font-semibold text-red-600">-625 SOL</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-medium">Rental Income</p>
                      <p className="text-sm text-muted-foreground">Azimut Grande 35M • Nov 20, 2024</p>
                    </div>
                    <span className="font-semibold text-green-600">+125 SOL</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-medium">Purchased 3 shares</p>
                      <p className="text-sm text-muted-foreground">Gulfstream G650 • Oct 28, 2024</p>
                    </div>
                    <span className="font-semibold text-red-600">-267 SOL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
