import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WalletProvider } from "@/lib/wallet-context"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "LuxeShare - Fractional Luxury Asset Ownership",
  description: "Own fractions of luxury yachts, jets, and cars with blockchain technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <WalletProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
        </WalletProvider>
        <Analytics />
      </body>
    </html>
  )
}
