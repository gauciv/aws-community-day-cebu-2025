import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import FirstToKnowForm from '@/components/FirstToKnowForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0A0E12]">
      {/* Background Gradient Effects */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#F7931E]/20 blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#FF6B35]/10 blur-[100px] opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F7931E]/10 blur-[100px] opacity-20" />
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
