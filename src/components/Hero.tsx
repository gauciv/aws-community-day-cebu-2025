'use client'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
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
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
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
          <h2 className="text-xl md:text-2xl text-slate-200 font-light">
            Official Website Launching Soon
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Connect with cloud pioneers and unlock limitless potential in the
            AWS community.
          </p>
        </div>
      </div>

      {/* Launch Countdown */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-200">
              Website Launch
            </h3>
            <p className="text-slate-400 text-sm">
              July 25, 2025 • 12:00 PM PHT
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: timeLeft.days, label: 'Days', color: 'orange' },
              { value: timeLeft.hours, label: 'Hours', color: 'blue' },
              { value: timeLeft.minutes, label: 'Minutes', color: 'orange' },
            ].map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <div
                  className={`
                  bg-slate-800/50 border rounded-xl p-4 mb-2
                  ${color === 'orange' ? 'border-orange-500/20' : 'border-blue-500/20'}
                `}
                >
                  <div
                    className={`
                    text-3xl md:text-4xl font-bold tabular-nums
                    ${color === 'orange' ? 'text-orange-400' : 'text-blue-400'}
                  `}
                  >
                    {value}
                  </div>
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
