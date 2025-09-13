"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Mock Solana wallet types - in real app, these would come from @solana/wallet-adapter-react
interface WalletBalance {
  sol: number
  usdc: number
}

interface WalletState {
  connected: boolean
  connecting: boolean
  address?: string
  balance?: WalletBalance
  walletName?: string
}

interface WalletContextType {
  wallet: WalletState
  connectWallet: (walletName: "phantom" | "solflare") => Promise<void>
  disconnectWallet: () => void
  refreshBalance: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    connecting: false,
  })

  // Mock wallet connection - in real app, this would use Solana Wallet Adapter
  const connectWallet = async (walletName: "phantom" | "solflare") => {
    setWallet((prev) => ({ ...prev, connecting: true }))

    try {
      // Simulate wallet connection delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful connection
      const mockAddress =
        walletName === "phantom"
          ? "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
          : "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"

      const mockBalance = {
        sol: Math.random() * 50 + 10, // Random SOL between 10-60
        usdc: Math.random() * 5000 + 500, // Random USDC between 500-5500
      }

      setWallet({
        connected: true,
        connecting: false,
        address: mockAddress,
        balance: mockBalance,
        walletName,
      })

      // Store in localStorage for persistence
      localStorage.setItem(
        "luxeshare-wallet",
        JSON.stringify({
          connected: true,
          address: mockAddress,
          balance: mockBalance,
          walletName,
        }),
      )
    } catch (error) {
      setWallet((prev) => ({ ...prev, connecting: false }))
      throw error
    }
  }

  const disconnectWallet = () => {
    setWallet({
      connected: false,
      connecting: false,
    })
    localStorage.removeItem("luxeshare-wallet")
  }

  const refreshBalance = async () => {
    if (!wallet.connected) return

    // Mock balance refresh
    const newBalance = {
      sol: Math.random() * 50 + 10,
      usdc: Math.random() * 5000 + 500,
    }

    setWallet((prev) => ({ ...prev, balance: newBalance }))
  }

  // Restore wallet state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("luxeshare-wallet")
    if (stored) {
      try {
        const walletData = JSON.parse(stored)
        setWallet(walletData)
      } catch (error) {
        console.error("Failed to restore wallet state:", error)
      }
    }
  }, [])

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet, refreshBalance }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
