export default function FirstToKnowForm() {
  return (
    <div className="w-full max-w-lg mx-auto mt-16 md:mt-24 px-4">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl mb-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] inline-block text-transparent bg-clip-text">
          Be the first to know
        </h2>
        <p className="text-white/60 text-base md:text-lg">
          Sign up to get updates about AWS Community Day Cebu
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg focus:border-[#FF6B35] focus:outline-none text-white placeholder-white/40 transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg focus:border-[#FF6B35] focus:outline-none text-white placeholder-white/40 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#FF6B35]/20"
        >
          Notify me
        </button>
      </form>
    </div>
  )
}
