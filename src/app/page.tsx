import Image from 'next/image'
import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import FirstToKnowForm from '@/components/FirstToKnowForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full bg-black text-white">
      {/* Arc Background - CORRECTED */}
      {/* This places the arc at the top and allows it to scale proportionally without being cut off. */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src="/arc.png"
          alt="Arc Background"
          width={1440} // Use the actual width of your image file
          height={700} // Use the actual height of your image file
          className="w-full h-auto opacity-80" // h-auto is the key fix
        />
      </div>

      {/* Content Container */}
      {/* This container holds all your content and sits on top of the arc. */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* AWS Logo Container */}
        {/* Use padding-top (pt-...) here to move the logo (and all content below it) up or down. */}
        <div className="pt-8 sm:pt-12 md:pt-16">
          <Image
            src="/aws-logo.svg"
            alt="AWS Logo"
            width={120}
            height={39}
            priority
            className="w-20 h-auto drop-shadow-lg"
          />
        </div>

        {/* Your other page components will follow naturally */}
        <Hero />
        <Tagline />
        <FirstToKnowForm />
        <Footer />
      </div>
    </main>
  )
}
