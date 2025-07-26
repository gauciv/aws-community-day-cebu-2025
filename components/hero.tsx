"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { CountdownClock } from "./countdown-clock"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleRegisterClick = () => {
    window.open("https://ticketnation.ph/events/aws_community_day_cebu_-_2025", "_blank", "noopener,noreferrer")
  }

  const handleLearnMoreClick = () => {
    window.open("https://www.facebook.com/awsugcebu", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 ocean-gradient">
      {/* Constellation Background with Art Assets */}
      <div className="absolute inset-0 constellation-background">
        {/* Floating Cloud Elements */}
        <div className="absolute top-10 right-16 opacity-30">
          <Image
            src="/images/constellations/cloud.svg"
            alt=""
            width={200}
            height={100}
            className="animate-float-slow constellation-glow-soft"
            priority={false}
          />
        </div>
        <div className="absolute bottom-20 left-12 opacity-25">
          <Image
            src="/images/constellations/cloud.svg"
            alt=""
            width={160}
            height={80}
            className="animate-float-reverse constellation-glow-soft"
            priority={false}
          />
        </div>

        {/* Constellation Art Assets - Performance Optimized */}
        <div className="constellation-container">
          {/* Top Left Constellation Cluster */}
          <div className="absolute top-[12%] left-[8%] opacity-60">
            <Image
              src="/images/constellations/constellation-1.svg"
              alt=""
              width={120}
              height={120}
              className="animate-twinkle-slow constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Top Right Large Constellation */}
          <div className="absolute top-[15%] right-[10%] opacity-70">
            <Image
              src="/images/constellations/constellation-2.svg"
              alt=""
              width={140}
              height={140}
              className="animate-float constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Center Left Constellation */}
          <div className="absolute top-[45%] left-[5%] opacity-50">
            <Image
              src="/images/constellations/constellation-3.svg"
              alt=""
              width={100}
              height={100}
              className="animate-twinkle-delayed constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Center Right Constellation */}
          <div className="absolute top-[40%] right-[12%] opacity-65">
            <Image
              src="/images/constellations/constellation-1.svg"
              alt=""
              width={110}
              height={110}
              className="animate-bounce-subtle constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Bottom Left Constellation */}
          <div className="absolute bottom-[25%] left-[15%] opacity-55">
            <Image
              src="/images/constellations/constellation-2.svg"
              alt=""
              width={130}
              height={130}
              className="animate-rotate-slow constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Bottom Right Constellation */}
          <div className="absolute bottom-[30%] right-[8%] opacity-60">
            <Image
              src="/images/constellations/constellation-3.svg"
              alt=""
              width={115}
              height={115}
              className="animate-pulse-slow constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Additional Scattered Small Constellations */}
          <div className="absolute top-[25%] left-[30%] opacity-40">
            <Image
              src="/images/constellations/constellation-1.svg"
              alt=""
              width={60}
              height={60}
              className="animate-fade-pulse constellation-glow-soft"
              priority={false}
            />
          </div>

          <div className="absolute top-[35%] right-[35%] opacity-45">
            <Image
              src="/images/constellations/constellation-2.svg"
              alt=""
              width={70}
              height={70}
              className="animate-twinkle-fast constellation-glow-soft"
              priority={false}
            />
          </div>

          <div className="absolute bottom-[45%] left-[25%] opacity-35">
            <Image
              src="/images/constellations/constellation-3.svg"
              alt=""
              width={55}
              height={55}
              className="animate-float-slow constellation-glow-soft"
              priority={false}
            />
          </div>

          <div className="absolute top-[60%] right-[25%] opacity-50">
            <Image
              src="/images/constellations/constellation-1.svg"
              alt=""
              width={65}
              height={65}
              className="animate-glow-pulse constellation-glow-soft"
              priority={false}
            />
          </div>

          {/* Enhanced Glowing Dots and Elements */}
          <div className="constellation-dot constellation-dot-large constellation-glow-ocean animate-twinkle-slow" style={{top: '18%', left: '20%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow-ocean animate-pulse-slow" style={{top: '32%', right: '18%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow-ocean animate-bounce-subtle" style={{bottom: '40%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-large constellation-glow-ocean animate-fade-pulse" style={{bottom: '20%', right: '15%'}}></div>

          {/* Ocean-themed Circles */}
          <div className="constellation-circle constellation-glow-ocean animate-pulse-slow" style={{top: '28%', left: '45%', width: '20px', height: '20px'}}></div>
          <div className="constellation-circle constellation-glow-ocean animate-twinkle-delayed" style={{bottom: '35%', right: '40%', width: '15px', height: '15px'}}></div>
          <div className="constellation-circle constellation-glow-ocean animate-glow-pulse" style={{top: '55%', left: '35%', width: '18px', height: '18px'}}></div>

          {/* Subtle Connecting Lines */}
          <div className="constellation-line constellation-glow-ocean animate-fade-pulse" style={{top: '25%', left: '22%', width: '40px', transform: 'rotate(25deg)'}}></div>
          <div className="constellation-line constellation-glow-ocean animate-glow-pulse" style={{bottom: '30%', right: '20%', width: '35px', transform: 'rotate(-15deg)'}}></div>
          <div className="constellation-line constellation-glow-ocean animate-pulse-slow" style={{top: '50%', left: '40%', width: '30px', transform: 'rotate(60deg)'}}></div>
        </div>

        {/* Ocean Wave Effects */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent animate-wave-slow"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-300/10 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Content with enhanced ocean theme */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}>
          {/* Main Title with ocean-themed glow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight ocean-text-glow">
            AWS Community Day
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-ocean">
                Cebu 2025
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-60 animate-pulse-ocean"></div>
            </span>
          </h1>

          {/* Subtitle with enhanced ocean styling */}
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-8 tracking-[0.2em] relative ocean-text-shimmer">
            <span className="relative z-10">BUILD BEYOND LIMITS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-sm animate-ocean-shimmer"></div>
          </div>

          {/* Event Details with ocean theme */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white/95">
            <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 animate-float-gentle ocean-glass">
              <Calendar className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold">September 13, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 animate-float-gentle-delayed ocean-glass">
              <MapPin className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold">UP Cebu Performing Arts Hall</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/40 animate-float-gentle-delayed-2 ocean-glass">
              <Users className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-bold text-orange-300">9 Amazing Speakers</span>
            </div>
          </div>

          {/* Description with better ocean contrast */}
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed font-medium animate-fade-in-up ocean-text-shadow">
            Join the AWS community in Cebu for a day of learning, networking, and innovation. Discover the latest in
            cloud computing, connect with fellow developers, and build beyond limits.
          </p>

          {/* Enhanced CTA Buttons with ocean theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 btn-glow-ocean pulse-glow-ocean overflow-hidden group animate-button-glow-ocean"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              onClick={handleLearnMoreClick}
              size="lg"
              variant="outline"
              className="relative border-cyan-400/50 text-white hover:bg-blue-500/20 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 bg-transparent shadow-lg shadow-cyan-400/20 font-semibold ocean-glass-card hover:border-orange-400/60 hover:text-orange-300 group overflow-hidden animate-button-glow-ocean-secondary"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile-optimized Countdown Clock */}
      <div className="relative z-10 w-full">
        <CountdownClock />
      </div>

      {/* Down Arrow Button with ocean theme */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white/70 hover:text-white hover:bg-blue-500/20 rounded-full w-12 h-12 animate-bounce-gentle border border-cyan-400/30 animate-ocean-glow-ring"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }}
        >
          <ChevronDown className="w-6 h-6 animate-pulse-subtle" />
        </Button>
      </div>
    </section>
  )
}