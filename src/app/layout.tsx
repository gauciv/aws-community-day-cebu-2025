import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import './globals.css'

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo-one',
})

const amazonEmber = localFont({
  src: [
    {
      path: '../../public/fonts/AmazonEmber_Bd.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_RgIt.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_Bd.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_BdIt.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-amazon-ember',
})

const amazonEmberMono = localFont({
  src: '../../public/fonts/AmazonEmberMono_Bd.ttf',
  variable: '--font-amazon-ember-mono',
})

export const metadata: Metadata = {
  title: 'AWS Community Day Cebu 2025 | Official Website Launching Soon',
  description:
    'Join us for AWS Community Day Cebu 2025 - A community-led conference featuring technical discussions and networking in the AWS cloud computing community. September 13, 2025 at UP Cebu.',
  keywords:
    'AWS, Community Day, Cebu, 2025, Cloud Computing, Conference, Philippines, Amazon Web Services',
  authors: [{ name: 'AWS User Group Philippines - Cebu Chapter' }],
  openGraph: {
    title: 'AWS Community Day Cebu 2025',
    description:
      'Connect with cloud pioneers and unlock limitless potential in the AWS community. September 13, 2025 at UP Cebu.',
    url: 'https://main.d3qya03l6igwcl.amplifyapp.com',
    siteName: 'AWS Community Day Cebu 2025',
    images: [
      {
        url: '/aws-logo.svg',
        width: 1200,
        height: 630,
        alt: 'AWS Community Day Cebu 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Community Day Cebu 2025',
    description:
      'Connect with cloud pioneers and unlock limitless potential in the AWS community.',
    images: ['/aws-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${amazonEmber.variable} ${amazonEmberMono.variable} ${russoOne.variable} antialiased`}
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 12 }}>{children}</div>
      </body>
    </html>
  )
}
