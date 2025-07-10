'use client'
import React, { useState, useEffect } from 'react'

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
    <section className="text-center space-y-12 mb-16 animate-fade-in">
      {/* Status Indicator */}
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/5 backdrop-blur-sm border border-amber-500/10 rounded-full animate-float">
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <span className="text-amber-400 text-sm font-medium tracking-wide">
          WEBSITE IN DEVELOPMENT
        </span>
      </div>

      {/* Primary Content Block */}
      <div className="space-y-8">
        {/* Event Branding */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            <span className="block">AWS</span>
            <span className="block">COMMUNITY DAY</span>
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

      {/* Launch Countdown - Minimalist Sketched Style */}
      <div className="text-center space-y-8">
        {/* Handwritten Title */}
        <h3 className="text-2xl md:text-3xl text-blue-300 font-mono italic">
          Website Launch
        </h3>

        {/* Individual Time Boxes */}
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {[
            { value: timeLeft.days, label: 'days' },
            { value: timeLeft.hours, label: 'hours' },
            { value: timeLeft.minutes, label: 'minutes' },
            { value: timeLeft.seconds, label: 'seconds' },
          ].map(({ value, label }, index) => (
            <React.Fragment key={label}>
              <div className="text-center">
                {/* Frosted Glass Box */}
                <div className="bg-blue-200/20 backdrop-blur-md border border-blue-300/30 rounded-3xl p-4 md:p-6 mb-3 min-w-[60px] md:min-w-[80px] shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl md:text-4xl font-mono font-bold text-white tabular-nums">
                    {value.toString().padStart(2, '0')}
                  </div>
                </div>
                {/* Handwritten Label */}
                <p className="text-blue-300 text-sm md:text-base font-mono italic lowercase">
                  {label}
                </p>
              </div>
              {/* Colon Separator */}
              {index < 3 && (
                <div className="text-3xl md:text-5xl text-blue-300/50 font-mono font-bold mb-12">
                  :
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Date Info */}
        <p className="text-slate-400 text-sm font-mono">
          July 25, 2025 at 12:00 PM PHT
        </p>
      </div>
    </section>
  )
}
