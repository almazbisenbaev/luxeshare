"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AssetCard } from "@/components/asset-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Users, TrendingUp, Anchor, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for assets
const featuredAssets = [
  {
    id: "1",
    name: "Azimut Grande 35M",
    type: "yacht" as const,
    image: "/luxury-yacht-ocean.png",
    location: "Monaco",
    price: 125,
    currency: "SOL" as const,
    totalShares: 100,
    availableShares: 23,
    nextAvailable: "Dec 15",
  },
  {
    id: "2",
    name: "Gulfstream G650",
    type: "jet" as const,
    image: "/private-jet-on-tarmac.jpg",
    location: "Miami",
    price: 89,
    currency: "SOL" as const,
    totalShares: 80,
    availableShares: 12,
    nextAvailable: "Jan 8",
  },
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
]

// Mock blog posts
const blogPosts = [
  {
    id: "1",
    title: "The Future of Fractional Ownership in Luxury Assets",
    excerpt: "Discover how blockchain technology is revolutionizing access to high-end investments.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "/blockchain-luxury-assets.jpg",
  },
  {
    id: "2",
    title: "Yacht Ownership Made Accessible: A Complete Guide",
    excerpt: "Learn how fractional yacht ownership works and what to expect from your investment.",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    image: "/yacht-ownership-guide.jpg",
  },
  {
    id: "3",
    title: "Private Jet Sharing: Luxury Travel Redefined",
    excerpt: "Explore the benefits of fractional private jet ownership for modern travelers.",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/private-jet-travel-luxury.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Powered by Solana Blockchain</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Own Fractions of <span className="text-primary">Luxury Assets</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                  Invest in yachts, private jets, and luxury cars with as little as $100. Democratizing luxury through
                  blockchain technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Investing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  View Assets
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Blockchain Secured
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  500+ Investors
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  $2M+ Assets
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/luxury-yacht-aerial-view.jpg"
                    alt="Luxury Yacht"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                  <Image
                    src="/luxury-sports-car.png"
                    alt="Luxury Car"
                    width={300}
                    height={150}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <Image
                    src="/private-jet-interior.png"
                    alt="Private Jet"
                    width={300}
                    height={150}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                  <Image
                    src="/luxury-yacht-deck.png"
                    alt="Yacht Deck"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How LuxeShare Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Simple, secure, and transparent fractional ownership of luxury assets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Anchor className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Choose Your Asset</CardTitle>
                <CardDescription>Browse our curated collection of luxury yachts, jets, and cars</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Buy Shares</CardTitle>
                <CardDescription>Purchase fractional ownership using SOL or USDC through your wallet</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Enjoy & Earn</CardTitle>
                <CardDescription>Book usage time and earn from rental income when others use the asset</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Assets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Assets</h2>
              <p className="text-xl text-muted-foreground">
                Discover premium luxury assets available for fractional ownership
              </p>
            </div>
            <Button variant="outline" className="bg-transparent">
              View All Assets
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAssets.map((asset) => (
              <AssetCard key={asset.id} {...asset} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with the latest trends in luxury asset investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">List Your Asset</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Own a luxury asset? Join our platform and start earning from fractional ownership
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Asset Owner Application</CardTitle>
                <CardDescription>
                  Tell us about your luxury asset and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Asset Type</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select asset type</option>
                      <option>Yacht</option>
                      <option>Private Jet</option>
                      <option>Luxury Car</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Asset Value (USD)</label>
                    <Input placeholder="e.g., $2,500,000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Asset Description</label>
                  <Textarea
                    placeholder="Describe your asset, including make, model, year, location, and any special features..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
