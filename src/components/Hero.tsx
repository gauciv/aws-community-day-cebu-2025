export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 md:pt-32 px-4">
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#F9841A] to-[#FF9A3D] inline-block text-transparent bg-clip-text">
          AWS COMMUNITY DAY
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light tracking-wide">
          <span className="text-white/90">CEBU</span>
          <span className="hidden md:block text-[#F9841A]">•</span>
          <span className="text-white/90">Q4 2025</span>
        </div>
      </div>
    </div>
  )
}
