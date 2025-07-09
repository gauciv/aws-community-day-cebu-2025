export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 md:pt-55 px-4">
      <div className="mb-8 px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#4A90E2]/20 border border-[#FF6B35] rounded-lg">
        <span className="text-[#FF6B35] text-sm md:text-base font-bold uppercase tracking-wider">
          🚧 Actual Website Is Under Development
        </span>
      </div>
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#4A90E2] inline-block text-transparent bg-clip-text">
          AWS COMMUNITY DAY
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light tracking-wide">
          <span className="text-[#4A90E2]">CEBU</span>
          <span className="hidden md:block text-[#FF6B35]">•</span>
          <span className="text-[#F7931E]">Q4 2025</span>
        </div>
      </div>
    </div>
  )
}
