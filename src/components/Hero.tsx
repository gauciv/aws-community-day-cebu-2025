'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const targetDate = new Date('2025-09-13T00:00:00')

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center pt-20 md:pt-32 px-4">
      <div className="mb-6 px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#4A90E2]/20 border border-[#FF6B35] rounded-lg">
        <span className="text-[#FF6B35] text-sm md:text-base font-bold uppercase tracking-wider">
          🚧 Website Under Development
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 w-full max-w-md">
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Development Progress</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#FF6B35] to-[#4A90E2] h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#4A90E2] inline-block text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
          AWS COMMUNITY DAY
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light tracking-wide">
          <span className="text-[#4A90E2] hover:text-[#F7931E] transition-colors">
            CEBU
          </span>
          <span className="hidden md:block text-[#FF6B35]">•</span>
          <span className="text-[#F7931E] hover:text-[#4A90E2] transition-colors">
            SEPTEMBER 13, 2025
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 p-6 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm rounded-xl border border-white/10">
          <p className="text-white/60 text-sm mb-4 uppercase tracking-wide">
            Event Countdown
          </p>
          <div className="flex justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#FF6B35]">
                {timeLeft.days}
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F7931E]">
                {timeLeft.hours}
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#4A90E2]">
                {timeLeft.minutes}
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase">
                Minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
