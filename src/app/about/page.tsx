"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Shield, Coins, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About LuxeShare
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Democratizing Luxury Asset Investment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LuxeShare is revolutionizing luxury asset ownership by tokenizing premium yachts, private jets, and supercars, 
            making fractional investment accessible to everyone through blockchain technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to luxury asset investments by leveraging blockchain technology, 
                enabling individuals to own fractions of premium assets and earn passive income through 
                professional asset management and strategic utilization.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading platform for fractional luxury asset ownership, creating a global 
                ecosystem where premium assets generate sustainable returns while remaining accessible 
                to a broader range of investors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How LuxeShare Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Asset Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We acquire premium luxury assets including yachts, private jets, and supercars, 
                  conducting thorough due diligence and professional valuations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Coins className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Tokenization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each asset is tokenized into fractional shares using blockchain technology, 
                  allowing multiple investors to own portions of high-value luxury assets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Revenue Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Assets generate revenue through strategic partnerships, charter services, and appreciation, 
                  with profits distributed to shareholders as regular dividends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LuxeShare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Blockchain-based ownership with full transparency and immutable records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Passive Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Earn regular dividends from asset utilization and appreciation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Coins className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Low Entry Barrier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Invest in luxury assets with fractional ownership starting from small amounts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Professional Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Expert asset management and maintenance handled by our professional team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <p className="text-muted-foreground">Assets Under Management</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Active Investors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15.2%</div>
              <p className="text-muted-foreground">Average Annual Return</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24</div>
              <p className="text-muted-foreground">Luxury Assets</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Experts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines decades of experience in luxury asset management, blockchain technology, 
            and financial services to deliver a secure and profitable investment platform.
          </p>
        </div>
      </div>
    </div>
  )
}