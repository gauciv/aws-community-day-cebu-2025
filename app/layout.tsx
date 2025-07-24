import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
  description:
    "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
  keywords: "AWS, Community Day, Cebu, 2025, Cloud Computing, Technology Conference",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
