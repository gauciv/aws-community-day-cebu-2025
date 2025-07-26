"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const targetDate = new Date("2025-09-13T13:00:00+08:00")

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const newTimeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        }

        setTimeLeft(newTimeLeft)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days, gradient: "from-orange-500 to-red-500" },
    { label: "Hours", value: timeLeft.hours, gradient: "from-yellow-500 to-orange-500" },
    { label: "Minutes", value: timeLeft.minutes, gradient: "from-green-500 to-yellow-500" },
    { label: "Seconds", value: timeLeft.seconds, gradient: "from-blue-500 to-green-500" },
  ]

  return (
    <div className="w-full">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-yellow-500/20 to-orange-500/15 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

            <Card className="relative border-2 border-white/20 hover:border-orange-500/40 shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2">
                    Event Countdown
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    September 13, 2025 • 1:00 PM PHT
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {timeUnits.map((unit, index) => (
                    <div key={unit.label} className="text-center group/unit">
                      <div className="relative mb-3 sm:mb-4">
                        {/* Enhanced glow effect for each unit */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${unit.gradient} rounded-2xl blur-lg opacity-40 group-hover/unit:opacity-60 transition-all duration-500`}></div>

                        <div className={`relative bg-gradient-to-r ${unit.gradient} rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl transform group-hover/unit:scale-105 transition-all duration-500`}>
                          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white transition-all duration-300">
                            {unit.value.toString().padStart(2, "0")}
                          </span>
                        </div>

                        {/* Floating sparkles */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover/unit:opacity-100 transition-all duration-700 delay-200">
                          <span className="text-orange-400 text-xs animate-twinkle">✨</span>
                        </div>
                      </div>

                      <span className="text-xs sm:text-sm md:text-base text-gray-300 font-bold uppercase tracking-wider group-hover/unit:text-white transition-colors duration-300">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced bottom text */}
                <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                      Mark your calendars and join us for an amazing day!
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}