'use client'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-25T12:00:00+08:00')

    const updateCountdown = () => {
      const now = Date.now()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center space-y-12 mb-16">
      {/* Status Indicator */}
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <span className="text-amber-400 text-sm font-medium tracking-wide">
          WEBSITE IN DEVELOPMENT
        </span>
      </div>

      {/* Primary Content Block */}
      <div className="space-y-8">
        {/* Event Branding */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display">
            <span className="block text-slate-100">AWS</span>
            <span className="block bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              COMMUNITY DAY
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-slate-300">
            <span className="text-blue-400 font-medium">Cebu</span>
            <span className="w-1 h-1 bg-slate-400 rounded-full" />
            <span className="text-orange-400 font-medium">Q4 2025</span>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl md:text-2xl text-slate-200 font-bold">
            Official Website Launching Soon
          </h2>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium">
            Connect with cloud pioneers and unlock limitless potential in the
            AWS community.
          </p>
        </div>
      </div>

      {/* Launch Countdown - countdown.png Style */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
        <div className="text-center space-y-8">
          {/* Clean Header */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Website Launch
            </h3>
            <p className="text-slate-300 text-sm font-mono">
              July 25, 2025 at 12:00 PM PHT
            </p>
          </div>

          {/* Minimalist Countdown */}
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' },
            ].map(({ value, label }, index) => (
              <div key={label} className="text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-light text-white tabular-nums mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-slate-200 font-medium tracking-[0.2em] uppercase">
                  {label}
                </div>
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl md:text-4xl text-slate-600 font-light">
                    :
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
