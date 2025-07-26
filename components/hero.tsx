"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { CountdownClock } from "./countdown-clock"

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24" style={{background: 'linear-gradient(135deg, #003E84 0%, #011C3B 100%)'}}>
      {/* Constellation Background with Uploaded SVGs */}
      <div className="absolute inset-0 constellation-background">
        {/* Soft cloud elements with subtle movement */}
        <div className="absolute top-0 right-0 w-64 h-48 bg-white/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-48 bg-white/8 rounded-full blur-3xl animate-float-reverse" />

        {/* Constellation SVGs scattered throughout */}
        <div className="constellation-container">
          {/* Constellation SVG 1 - Top Left */}
          <div className="absolute top-[10%] left-[8%] opacity-60 animate-twinkle-slow" style={{filter: 'drop-shadow(0 0 20px rgba(255, 153, 0, 0.5))'}}>
            <svg width="120" height="116" viewBox="0 0 446 433" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="427.554" cy="212.957" rx="17.9314" ry="19.2854" fill="#FF9900" className="animate-pulse-subtle"/>
              <ellipse cx="330.728" cy="39.3911" rx="35.8627" ry="38.5707" stroke="#FF9900" strokeWidth="2" className="animate-glow-pulse"/>
            </svg>
          </div>

          {/* Constellation SVG 2 - Top Right */}
          <div className="absolute top-[15%] right-[12%] opacity-50 animate-float-gentle" style={{filter: 'drop-shadow(0 0 25px rgba(255, 153, 0, 0.4))'}}>
            <svg width="140" height="132" viewBox="0 0 1038 975" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.6221 110.219V286.702M47.6221 286.702L136.496 65.0039M47.6221 286.702L308.802 457.351M308.802 457.351L582.678 705.302L618.953 940.127L918.221 824.903L658.855 619.249L597.188 403.385M308.802 457.351L457.529 324.624L597.188 403.385M597.188 403.385L943.613 261.907M943.613 261.907L918.221 457.351M943.613 261.907L796.7 178.77" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5 7 10" className="animate-dash-flow"/>
            </svg>
          </div>

          {/* Constellation SVG 3 - Center Left */}
          <div className="absolute top-[45%] left-[5%] opacity-45 animate-bounce-subtle" style={{filter: 'drop-shadow(0 0 18px rgba(255, 153, 0, 0.6))'}}>
            <svg width="100" height="50" viewBox="0 0 2078 1016" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="197.17" y="444.984" width="84.2756" height="84.2756" fill="#FF9900" opacity="0.8" className="animate-twinkle-delayed"/>
            </svg>
          </div>

          {/* Constellation SVG 4 - Center Right */}
          <div className="absolute top-[40%] right-[15%] opacity-55 animate-twinkle-delayed" style={{filter: 'drop-shadow(0 0 22px rgba(255, 153, 0, 0.45))'}}>
            <svg width="110" height="60" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="454.991" cy="238.204" r="10.5345" stroke="#FF9900" strokeWidth="2" className="animate-pulse-glow"/>
              <circle cx="130.661" cy="597.77" r="21.0689" stroke="#FF9900" strokeWidth="1.5" className="animate-fade-pulse"/>
              <ellipse cx="11.6666" cy="257.231" rx="11.6666" ry="9.51221" fill="#FF9900" className="animate-glow-pulse"/>
              <ellipse cx="800.323" cy="352.346" rx="11.6666" ry="9.51221" fill="#FF9900" className="animate-twinkle-fast"/>
            </svg>
          </div>

          {/* Constellation SVG 5 - Bottom Left */}
          <div className="absolute bottom-[25%] left-[10%] opacity-50 animate-float-reverse" style={{filter: 'drop-shadow(0 0 20px rgba(255, 153, 0, 0.5))'}}>
            <svg width="95" height="87" viewBox="0 0 712 654" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M310.887 391.687L111.186 337.884L182.278 174.829L353.397 236.962M310.887 391.687L356.995 435.353L376.314 467.34L463.843 530.451L539.104 500.891M310.887 391.687L353.397 236.962M353.397 236.962L380.302 283.344L391.021 303.264L498.535 291.925L564.894 298.68M353.397 236.962L416.234 220.004L514.132 198.927" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8 6 10" className="animate-dash-flow-reverse"/>
            </svg>
          </div>

          {/* Constellation SVG 6 - Bottom Right */}
          <div className="absolute bottom-[20%] right-[8%] opacity-60 animate-glow-pulse" style={{filter: 'drop-shadow(0 0 25px rgba(255, 153, 0, 0.4))'}}>
            <svg width="130" height="120" viewBox="0 0 446 433" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="427.554" cy="212.957" rx="17.9314" ry="19.2854" fill="#FF9900" className="animate-twinkle-slow"/>
              <ellipse cx="330.728" cy="39.3911" rx="35.8627" ry="38.5707" stroke="#FF9900" strokeWidth="2" className="animate-pulse-subtle"/>
            </svg>
          </div>

          {/* Additional smaller constellation elements */}
          {/* Small constellation - Top Center */}
          <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 opacity-40 animate-twinkle-fast" style={{filter: 'drop-shadow(0 0 15px rgba(255, 153, 0, 0.3))'}}>
            <svg width="80" height="50" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="11.6666" cy="257.231" rx="11.6666" ry="9.51221" fill="#FF9900" className="animate-pulse-glow"/>
              <ellipse cx="800.323" cy="352.346" rx="11.6666" ry="9.51221" fill="#FF9900" className="animate-fade-pulse"/>
            </svg>
          </div>

          {/* Small constellation - Mid Center */}
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 opacity-35 animate-bounce-gentle" style={{filter: 'drop-shadow(0 0 12px rgba(255, 153, 0, 0.4))'}}>
            <svg width="70" height="40" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="454.991" cy="238.204" r="10.5345" stroke="#FF9900" strokeWidth="1.5" className="animate-twinkle-delayed"/>
            </svg>
          </div>

          {/* Scattered individual elements */}
          <div className="absolute top-[30%] left-[25%] opacity-30 animate-pulse-subtle" style={{filter: 'drop-shadow(0 0 10px rgba(255, 153, 0, 0.3))'}}>
            <svg width="40" height="40" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="11.6666" cy="257.231" rx="8" ry="6" fill="#FF9900"/>
            </svg>
          </div>

          <div className="absolute bottom-[35%] right-[30%] opacity-25 animate-twinkle-slow" style={{filter: 'drop-shadow(0 0 8px rgba(255, 153, 0, 0.4))'}}>
            <svg width="35" height="35" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="454.991" cy="238.204" r="6" stroke="#FF9900" strokeWidth="1"/>
            </svg>
          </div>

          <div className="absolute top-[65%] left-[20%] opacity-35 animate-float-gentle" style={{filter: 'drop-shadow(0 0 12px rgba(255, 153, 0, 0.3))'}}>
            <svg width="50" height="50" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="11.6666" cy="257.231" rx="10" ry="8" fill="#FF9900" className="animate-glow-pulse"/>
            </svg>
          </div>

          <div className="absolute top-[25%] right-[25%] opacity-40 animate-twinkle-fast" style={{filter: 'drop-shadow(0 0 14px rgba(255, 153, 0, 0.5))'}}>
            <svg width="45" height="45" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="454.991" cy="238.204" r="8" stroke="#FF9900" strokeWidth="1.5" className="animate-pulse-subtle"/>
            </svg>
          </div>

          <div className="absolute bottom-[45%] left-[35%] opacity-30 animate-bounce-subtle" style={{filter: 'drop-shadow(0 0 10px rgba(255, 153, 0, 0.3))'}}>
            <svg width="38" height="38" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="11.6666" cy="257.231" rx="7" ry="5" fill="#FF9900"/>
            </svg>
          </div>

          <div className="absolute top-[75%] right-[20%] opacity-45 animate-fade-pulse" style={{filter: 'drop-shadow(0 0 16px rgba(255, 153, 0, 0.4))'}}>
            <svg width="55" height="55" viewBox="0 0 1377 739" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="454.991" cy="238.204" r="9" stroke="#FF9900" strokeWidth="2" className="animate-glow-pulse"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content with subtle entrance animations */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}>
          {/* Main Title with subtle text animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-text-glow">
            AWS Community Day
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">
                Cebu 2025
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-60 animate-pulse-glow"></div>
            </span>
          </h1>

          {/* Subtitle with enhanced styling and animation */}
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-8 tracking-[0.2em] relative animate-text-shimmer">
            <span className="relative z-10">BUILD BEYOND LIMITS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm animate-shimmer-wave"></div>
          </div>

          {/* Event Details with icons and subtle animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float-gentle">
              <Calendar className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold">September 13, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float-gentle-delayed">
              <MapPin className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold">UP Cebu Performing Arts Hall</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/30 animate-float-gentle-delayed-2">
              <Users className="w-5 h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-bold text-orange-300">9 Amazing Speakers</span>
            </div>
          </div>

          {/* Description with better contrast */}
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed font-medium animate-fade-in-up">
            Join the AWS community in Cebu for a day of learning, networking, and innovation. Discover the latest in
            cloud computing, connect with fellow developers, and build beyond limits.
          </p>

          {/* Enhanced CTA Buttons with improved animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 btn-glow-orange pulse-glow-orange overflow-hidden group animate-button-glow"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              onClick={handleLearnMoreClick}
              size="lg"
              variant="outline"
              className="relative border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 bg-transparent shadow-lg shadow-white/10 font-semibold glass-card hover:border-orange-400/50 hover:text-orange-300 group overflow-hidden animate-button-glow-secondary"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div></div>
      </div>

      {/* Mobile-optimized Countdown Clock */}
      <div className="relative z-10 w-full">
        <CountdownClock />
      </div>

      {/* Down Arrow Button with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 animate-bounce-gentle border border-white/20 animate-glow-ring"
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