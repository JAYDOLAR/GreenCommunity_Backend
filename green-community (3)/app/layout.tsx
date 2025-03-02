import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"
import { ChatbotProvider } from "@/components/chatbot/chatbot-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreenCommunity Platform",
  description: "A comprehensive digital platform for environmental sustainability",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ChatbotProvider>
            {children}
            <Toaster />
          </ChatbotProvider>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'