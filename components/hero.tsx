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
      {/* Constellation SVG Background */}
      <div className="absolute inset-0 constellation-background">
        {/* Constellation SVG Elements */}
        <div className="constellation-container">
          {/* Top Left Area - Leo constellation */}
          <div
            className="constellation-svg animate-float-slow"
            style={{ top: "8%", left: "5%", width: "120px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo constellation" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-slow"
              style={{ opacity: "0.8", filter: "brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
            />
          </div>

          {/* Top Right Area - Cassiopeia constellation */}
          <div
            className="constellation-svg animate-float-delayed"
            style={{ top: "12%", right: "8%", width: "100px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia constellation" 
              className="w-full h-auto constellation-glow-svg animate-pulse-subtle"
              style={{ opacity: "0.9", filter: "brightness(1.3) drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
            />
          </div>

          {/* Left Mid Area - Orion constellation */}
          <div
            className="constellation-svg animate-float-reverse"
            style={{ top: "35%", left: "3%", width: "140px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Orion constellation" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-delayed"
              style={{ opacity: "0.7", filter: "brightness(1.1) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))" }}
            />
          </div>

          {/* Right Mid Area - Aquarius constellation */}
          <div
            className="constellation-svg animate-float-gentle"
            style={{ top: "40%", right: "5%", width: "110px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius.svg" 
              alt="Aquarius constellation" 
              className="w-full h-auto constellation-glow-svg animate-bounce-subtle"
              style={{ opacity: "0.8", filter: "brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
            />
          </div>

          {/* Bottom Left Area - Big Dipper constellation */}
          <div
            className="constellation-svg animate-float-slow"
            style={{ bottom: "15%", left: "8%", width: "130px", height: "auto" }}
          >
            <img 
              src="/art-assets/big dipper.svg" 
              alt="Big Dipper constellation" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-slow"
              style={{ opacity: "0.85", filter: "brightness(1.25) drop-shadow(0 0 9px rgba(255, 255, 255, 0.55))" }}
            />
          </div>

          {/* Bottom Right Area - Pegasus constellation */}
          <div
            className="constellation-svg animate-float-delayed"
            style={{ bottom: "20%", right: "10%", width: "115px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-svg animate-pulse-subtle"
              style={{ opacity: "0.75", filter: "brightness(1.15) drop-shadow(0 0 11px rgba(255, 255, 255, 0.45))" }}
            />
          </div>

          {/* Center scattered smaller constellations */}
          <div
            className="constellation-svg animate-float-gentle"
            style={{ top: "25%", left: "35%", width: "80px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia-1.svg" 
              alt="Cassiopeia variant" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-fast"
              style={{ opacity: "0.6", filter: "brightness(1.0) drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-reverse"
            style={{ top: "60%", left: "25%", width: "90px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion-1.svg" 
              alt="Orion variant" 
              className="w-full h-auto constellation-glow-svg animate-bounce-subtle"
              style={{ opacity: "0.7", filter: "brightness(1.1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-delayed"
            style={{ top: "50%", right: "30%", width: "85px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius-1.svg" 
              alt="Aquarius variant" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-delayed"
              style={{ opacity: "0.65", filter: "brightness(1.05) drop-shadow(0 0 7px rgba(255, 255, 255, 0.35))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-slow"
            style={{ bottom: "45%", right: "25%", width: "95px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus-1.svg" 
              alt="Pegasus variant" 
              className="w-full h-auto constellation-glow-svg animate-pulse-subtle"
              style={{ opacity: "0.75", filter: "brightness(1.15) drop-shadow(0 0 9px rgba(255, 255, 255, 0.4))" }}
            />
          </div>

          {/* Smaller scattered constellation elements */}
          <div
            className="constellation-svg animate-float-gentle"
            style={{ top: "18%", left: "25%", width: "60px", height: "auto" }}
          >
            <img 
              src="/art-assets/Group 79.svg" 
              alt="Constellation group" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-fast"
              style={{ opacity: "0.5", filter: "brightness(0.95) drop-shadow(0 0 5px rgba(255, 255, 255, 0.25))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-reverse"
            style={{ bottom: "35%", left: "40%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/assets.svg" 
              alt="Constellation assets" 
              className="w-full h-auto constellation-glow-svg animate-bounce-subtle"
              style={{ opacity: "0.6", filter: "brightness(1.0) drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))" }}
            />
          </div>

          {/* Edge elements for depth */}
          <div
            className="constellation-svg animate-float-slow"
            style={{ top: "70%", right: "15%", width: "75px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo edge" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-slow"
              style={{ opacity: "0.4", filter: "brightness(0.9) drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-delayed"
            style={{ top: "75%", left: "15%", width: "65px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia edge" 
              className="w-full h-auto constellation-glow-svg animate-pulse-subtle"
              style={{ opacity: "0.45", filter: "brightness(0.95) drop-shadow(0 0 5px rgba(255, 255, 255, 0.25))" }}
            />
          </div>

          {/* Far edge subtle elements */}
          <div
            className="constellation-svg animate-float-gentle"
            style={{ top: "30%", right: "2%", width: "50px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius.svg" 
              alt="Edge constellation" 
              className="w-full h-auto constellation-glow-svg animate-twinkle-delayed"
              style={{ opacity: "0.3", filter: "brightness(0.8) drop-shadow(0 0 3px rgba(255, 255, 255, 0.15))" }}
            />
          </div>

          <div
            className="constellation-svg animate-float-reverse"
            style={{ bottom: "60%", left: "1%", width: "55px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Edge constellation" 
              className="w-full h-auto constellation-glow-svg animate-bounce-subtle"
              style={{ opacity: "0.35", filter: "brightness(0.85) drop-shadow(0 0 4px rgba(255, 255, 255, 0.18))" }}
            />
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