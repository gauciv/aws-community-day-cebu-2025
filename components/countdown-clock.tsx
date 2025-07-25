"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = (): TimeLeft => {
      const eventDate = new Date("2025-09-13T13:00:00+08:00") // 1PM Philippine time
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6 py-6 sm:py-8">
        <div className="animate-pulse bg-white/10 rounded-2xl w-16 h-20 sm:w-20 sm:h-24" />
        <div className="animate-pulse bg-white/10 rounded-2xl w-16 h-20 sm:w-20 sm:h-24" />
        <div className="animate-pulse bg-white/10 rounded-2xl w-16 h-20 sm:w-20 sm:h-24" />
        <div className="animate-pulse bg-white/10 rounded-2xl w-16 h-20 sm:w-20 sm:h-24" />
      </div>
    )
  }

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* Main card with subtle hover effects */}
        <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-orange-400/20 group-hover:via-white/20 group-hover:to-orange-300/15">
          <span className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-white drop-shadow-2xl transition-colors duration-300 group-hover:text-orange-100">
            {value.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-yellow-400/10 to-orange-400/20 rounded-2xl blur-lg" />
        </div>
      </div>

      <span className="text-sm sm:text-base text-white/90 mt-3 font-bold uppercase tracking-wider transition-all duration-300 group-hover:text-orange-300">
        {label}
      </span>
    </div>
  )

  const Separator = () => (
    <div className="flex flex-col items-center justify-center h-20 sm:h-24 md:h-28 px-2">
      <div className="flex flex-col gap-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg animate-pulse" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center py-8 sm:py-12 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-1/4 text-orange-400 text-lg animate-float-slow">✧</div>
        <div className="absolute bottom-8 right-1/4 text-orange-300 text-lg animate-float" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute top-1/2 left-1/6 text-orange-400 text-sm animate-twinkle">★</div>
        <div className="absolute top-1/2 right-1/6 text-orange-300 text-sm animate-twinkle-delayed">✧</div>
      </div>

      {/* Clean title */}
      <div className="text-center mb-8 relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 tracking-wide">
          Event Countdown
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 mx-auto rounded-full opacity-80" />
      </div>

      {/* Countdown display */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 relative z-10 mb-8">
        <TimeCard value={timeLeft.days} label="Days" />
        <Separator />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Event info */}
      <div className="text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-orange-400/30 shadow-lg">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <p className="text-white/90 text-sm sm:text-base font-medium">
            September 13, 2025 • 1:00 PM - 7:00 PM (PHT)
          </p>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <p className="text-white/70 text-sm mt-3">
          University of the Philippines Cebu • Performing Arts Hall
        </p>
      </div>
    </div>
  )
}