'use client'

import { useState, useEffect } from 'react'

interface FlipCardProps {
  value: number
  label: string
}

function FlipCard({ value, label }: FlipCardProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (value !== displayValue) {
      setIsFlipping(true)
      setTimeout(() => {
        setDisplayValue(value)
        setIsFlipping(false)
      }, 300)
    }
  }, [value, displayValue])

  const formattedValue = displayValue.toString().padStart(2, '0')

  return (
    <div className="text-center">
      <div className="relative w-20 h-24 mb-2">
        <div className="flip-card">
          <div className={`flip-card-inner ${isFlipping ? 'flipping' : ''}`}>
            <div className="flip-card-front">
              <span className="text-4xl font-mono font-bold">
                {formattedValue}
              </span>
            </div>
            <div className="flip-card-back">
              <span className="text-4xl font-mono font-bold">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300">{label}</p>
    </div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-09-13T08:00:00+08:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center text-white">
      <div className="mb-8 space-y-2">
        <p className="text-lg">September 13, 2025</p>
        <p className="text-lg">8:00 AM - 5:00 PM</p>
        <p className="text-lg">
          University of the Philippines Cebu Performing Arts Hall
        </p>
      </div>

      <div className="flex justify-center gap-8">
        <FlipCard value={timeLeft.days} label="Days" />
        <FlipCard value={timeLeft.hours} label="Hours" />
        <FlipCard value={timeLeft.minutes} label="Minutes" />
        <FlipCard value={timeLeft.seconds} label="Seconds" />
      </div>

      <style jsx>{`
        .flip-card {
          background-color: transparent;
          width: 80px;
          height: 96px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.3s;
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipping {
          transform: rotateX(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
          border: 1px solid #333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .flip-card-back {
          transform: rotateX(180deg);
        }

        .flip-card-front::before,
        .flip-card-back::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #333;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  )
}
