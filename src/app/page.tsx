import Image from 'next/image'
import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import FirstToKnowForm from '@/components/FirstToKnowForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      {/* AWS Logo Floating Above Arc */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 flex justify-center items-center">
        <Image
          src="/aws-logo.svg"
          alt="AWS Logo"
          width={120}
          height={39}
          priority
          className="w-20 h-auto drop-shadow-lg"
        />
      </div>
      {/* Arc Background */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-center">
        <Image
          src="/arc.png"
          alt="Arc Background"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <Tagline />
        <FirstToKnowForm />
        <Footer />
      </div>
    </main>
  )
}
