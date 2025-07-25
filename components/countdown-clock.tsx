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
  const [prevSeconds, setPrevSeconds] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

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
      const newTime = calculateTimeLeft()

      // Trigger flip animation for seconds
      if (newTime.seconds !== prevSeconds) {
        setIsFlipping(true)
        setTimeout(() => setIsFlipping(false), 300)
        setPrevSeconds(newTime.seconds)
      }

      setTimeLeft(newTime)
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [prevSeconds])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-4 py-6 sm:py-8">
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
        <div className="animate-pulse bg-white/10 rounded-xl w-12 h-12 sm:w-20 sm:h-20" />
      </div>
    )
  }

  const TimeCard = ({ value, label, isActive = false }: { value: number; label: string; isActive?: boolean }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* Main card with smooth morphing animation */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 ${
            isActive ? "border-orange-400/50 shadow-orange-400/30 bg-gradient-to-br from-orange-400/20 via-white/15 to-orange-300/10" : ""
          }`}
          style={{
            transform: isFlipping && isActive ? 'perspective(1000px) rotateY(180deg)' : 'perspective(1000px) rotateY(0deg)',
            transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <span className={`text-xl sm:text-3xl md:text-5xl font-black font-mono text-white drop-shadow-2xl transition-all duration-500 ${isFlipping && isActive ? 'scale-110' : 'scale-100'}`}>
            {value.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Animated border glow */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-1000 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-yellow-400/20 to-orange-400/30 rounded-2xl blur-md animate-pulse" />
        </div>

        {/* Floating particles */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-0 -left-3 w-1 h-1 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>

        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-1000 ${isActive ? "animate-ping" : ""}`}>
          <div className="absolute inset-0 bg-orange-400/10 rounded-2xl" />
        </div>
      </div>

      <span className="text-sm sm:text-base text-white/90 mt-3 sm:mt-4 font-bold uppercase tracking-wider transform transition-all duration-300 group-hover:scale-105">{label}</span>
    </div>
  )

  const AnimatedColon = () => (
    <div className="flex flex-col items-center justify-center h-16 sm:h-20 md:h-28">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-400/50 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-400/50 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center py-6 sm:py-8 relative">
      {/* Background constellation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-1/4 text-orange-400 text-sm animate-twinkle">✧</div>
        <div className="absolute bottom-4 right-1/4 text-orange-300 text-sm animate-float-slow">✦</div>
        <div className="absolute top-1/2 left-1/6 text-orange-400 text-xs animate-twinkle-delayed">★</div>
        <div className="absolute top-1/2 right-1/6 text-orange-300 text-xs animate-float">✧</div>
      </div>

      {/* Enhanced title */}
      <div className="text-center mb-4 sm:mb-6 relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 tracking-wide">Event Starts In</h3>
        <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full opacity-80" />
      </div>

      {/* Countdown display */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-8 relative z-10">
        <TimeCard value={timeLeft.days} label="Days" />
        <AnimatedColon />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <AnimatedColon />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <AnimatedColon />
        <TimeCard value={timeLeft.seconds} label="Seconds" isActive={true} />
      </div>

      {/* Enhanced event info */}
      <div className="mt-4 sm:mt-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-orange-400/20">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <p className="text-white/90 text-xs sm:text-sm font-medium">September 13, 2025 • 1:00 PM - 7:00 PM (PHT)</p>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-1000" />
        </div>

        <p className="text-white/60 text-xs mt-2">University of the Philippines Cebu • Performing Arts Hall</p>
      </div>
    </div>
  )
}
