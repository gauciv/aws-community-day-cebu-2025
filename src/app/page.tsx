import Image from 'next/image'
import Hero from '@/components/Hero'
import NotificationForm from '@/components/NotificationForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-orange-500/5 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '4s' }}
        />
      </div>
      {/* Desktop Arc - Subtle Background Element */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0 opacity-40">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px]">
          <Image
            src="/arc.png"
            alt="Background Arc"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* AWS Logo - Fixed Position */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
        <Image
          src="/aws-logo.svg"
          alt="AWS Logo"
          width={80}
          height={26}
          priority
          className="w-16 h-auto opacity-90"
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid grid-rows-[1fr_auto] max-w-7xl mx-auto">
        {/* Content Area */}
        <div className="flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-4xl">
            <Hero />
            <NotificationForm />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
