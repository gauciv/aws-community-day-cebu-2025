import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import './globals.css'
import Header from '@/components/Header'

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
  title: 'AWS Community Day Cebu 2025',
  description:
    'Join us for AWS Community Day Cebu 2025 - A community-led conference featuring technical discussions and networking in the AWS cloud computing community.',
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
        <div style={{ position: 'relative', zIndex: 12 }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
