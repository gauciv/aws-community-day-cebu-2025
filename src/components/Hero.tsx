export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 md:pt-32 px-4">
      <div className="mb-8 px-6 py-3 bg-[#FF6B35]/20 border-2 border-[#FF6B35] rounded-lg">
        <span className="text-[#FF6B35] text-sm md:text-base font-bold uppercase tracking-wider">
          🚧 SPLASH PAGE - WEBSITE IN DEVELOPMENT
        </span>
      </div>
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] inline-block text-transparent bg-clip-text">
          AWS COMMUNITY DAY
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light tracking-wide">
          <span className="text-white/90">CEBU</span>
          <span className="hidden md:block text-[#FF6B35]">•</span>
          <span className="text-white/90">Q4 2025</span>
        </div>
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
          <p className="text-[#FF6B35] font-semibold text-lg mb-2">
            TEMPORARY SPLASH PAGE
          </p>
          <p className="text-gray-300 text-sm">
            The official website is currently under construction. This page
            serves as a placeholder.
          </p>
        </div>
      </div>
    </div>
  )
}
