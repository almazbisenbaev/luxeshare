"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useWallet } from "@/lib/wallet-context"
import { OwnerDashboard } from "@/components/dashboard/owner-dashboard"
import { InvestorDashboard } from "@/components/dashboard/investor-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Building } from "lucide-react"

export default function DashboardPage() {
  const { wallet } = useWallet()
  const [userType, setUserType] = useState<"owner" | "investor" | null>(null)

  if (!wallet.connected) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-md mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Connect your wallet to access your dashboard</p>
            </div>
            <WalletConnect />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!userType) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold text-foreground">Welcome to LuxeShare</h1>
              <p className="text-muted-foreground">Choose your role to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Asset Owner</CardTitle>
                  <CardDescription>List your luxury assets and earn from fractional ownership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Register Assets
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Mint NFTs
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Track Income
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Manage Bookings
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setUserType("owner")}>
                    Continue as Owner
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Investor/Renter</CardTitle>
                  <CardDescription>Invest in luxury assets and book exclusive experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Browse Assets
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Buy Shares
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Book Experiences
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Track Portfolio
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setUserType("investor")}>
                    Continue as Investor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {userType === "owner" ? <OwnerDashboard /> : <InvestorDashboard />}
      <Footer />
    </div>
  )
}
