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
  authors: [{ name: "AWS User Group Philippines - Cebu Chapter" }],
  creator: "AWS User Group Philippines - Cebu Chapter",
  publisher: "AWS User Group Philippines - Cebu Chapter",
  metadataBase: new URL("https://official.d3qya03l6igwcl.amplifyapp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://official.d3qya03l6igwcl.amplifyapp.com",
    title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
    description:
      "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
    siteName: "AWS Community Day Cebu 2025",
    images: [
      {
        url: "/awscdcebu-banner.png",
        width: 1200,
        height: 630,
        alt: "AWS Community Day Cebu 2025 - Build Beyond Limits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
    description:
      "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
    images: ["/awscdcebu-banner.png"],
    creator: "@AWSUserGroupPH",
    site: "@AWSUserGroupPH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Additional meta tags for better social media support */}
        <meta name="theme-color" content="#232F3E" />
        <meta name="msapplication-TileColor" content="#232F3E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured data for events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "AWS Community Day Cebu 2025",
              "description": "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
              "startDate": "2025-09-13T08:00:00+08:00",
              "endDate": "2025-09-13T18:00:00+08:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "University of the Philippines Cebu Performing Arts Hall",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Gorordo Avenue, Lahug",
                  "addressLocality": "Cebu City",
                  "postalCode": "6000",
                  "addressCountry": "Philippines"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "AWS User Group Philippines - Cebu Chapter",
                "url": "https://official.d3qya03l6igwcl.amplifyapp.com"
              },
              "image": "https://official.d3qya03l6igwcl.amplifyapp.com/awscdcebu-banner.png",
              "url": "https://official.d3qya03l6igwcl.amplifyapp.com"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
