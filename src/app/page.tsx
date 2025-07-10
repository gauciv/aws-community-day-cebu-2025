import Image from 'next/image'
import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import FirstToKnowForm from '@/components/FirstToKnowForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Desktop Arc Design */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px]">
          <Image
            src="/arc.png"
            alt="Main Arc"
            width={1200}
            height={800}
            className="w-full h-auto opacity-90"
          />
        </div>
      </div>

      {/* Mobile Gradient Background */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#4A90E2]/10 via-transparent to-[#F7931E]/10" />

      {/* Content Layout */}
      <div className="relative z-10">
        {/* AWS Logo - Positioned Higher in Arc Glow */}
        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/aws-logo.svg"
            alt="AWS Logo"
            width={120}
            height={39}
            priority
            className="w-16 h-auto md:w-20 lg:w-24 drop-shadow-2xl"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 pt-16 md:pt-24 max-w-4xl">
          <div className="space-y-12 md:space-y-16">
            <Hero />
            <Tagline />
            <FirstToKnowForm />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  )
}
