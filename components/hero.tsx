"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ChevronDown, Zap, ExternalLink } from "lucide-react"
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24" style={{background: 'linear-gradient(135deg, #003E84 0%, #0A2A5C 30%, #011C3B 100%)'}}>
      {/* Enhanced Constellation SVG Background */}
      <div className="absolute inset-0 constellation-background" key={Date.now()}>
        {/* Constellation SVG Elements */}
        <div className="constellation-container">
          {/* Top Left Area - Leo constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "10%", left: "6%", width: "90px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.6" }}
            />
          </div>

          {/* Top Right Area - Cassiopeia constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "15%", right: "8%", width: "75px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.5" }}
            />
          </div>

          {/* Left Mid Area - Orion constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "35%", left: "4%", width: "100px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Orion constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.55" }}
            />
          </div>

          {/* Right Mid Area - Aquarius constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "40%", right: "6%", width: "85px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius.svg" 
              alt="Aquarius constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.5" }}
            />
          </div>

          {/* Bottom Left Area - Big Dipper constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "20%", left: "10%", width: "95px", height: "auto" }}
          >
            <img 
              src="/art-assets/big dipper.svg" 
              alt="Big Dipper constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.6" }}
            />
          </div>

          {/* Bottom Right Area - Pegasus constellation */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "25%", right: "12%", width: "80px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.55" }}
            />
          </div>

          {/* Strategically placed subtle accent constellations */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "25%", left: "20%", width: "45px", height: "auto" }}
          >
            <img 
              src="/art-assets/Group 79.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.3" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "35%", right: "20%", width: "50px", height: "auto" }}
          >
            <img 
              src="/art-assets/assets.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>

          {/* Additional Main Constellations for Better Coverage */}

          {/* Aquarius - Top Center Right */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "12%", right: "25%", width: "85px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius.svg" 
              alt="Aquarius constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.55" }}
            />
          </div>

          {/* Big Dipper - Left Center */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "50%", left: "8%", width: "95px", height: "auto" }}
          >
            <img 
              src="/art-assets/big dipper.svg" 
              alt="Big Dipper constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.6" }}
            />
          </div>

          {/* Additional Cassiopeia - Bottom Center */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "15%", left: "40%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.5" }}
            />
          </div>

          {/* Additional Orion - Right Center Upper */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "30%", right: "15%", width: "80px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Orion constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.55" }}
            />
          </div>

          {/* Additional Pegasus - Top Left Center */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "20%", left: "25%", width: "75px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.5" }}
            />
          </div>

          {/* Small Asset Accents for Depth */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "18%", left: "15%", width: "40px", height: "auto" }}
          >
            <img 
              src="/art-assets/Group 79.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.35" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "30%", right: "30%", width: "45px", height: "auto" }}
          >
            <img 
              src="/art-assets/assets.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "45%", left: "35%", width: "35px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius-1.svg" 
              alt="Small constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.3" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "40%", right: "10%", width: "38px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion-1.svg" 
              alt="Small constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>

          {/* Subtle edge accents for depth */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "65%", right: "3%", width: "35px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia-1.svg" 
              alt="Edge accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.25" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "75%", left: "5%", width: "40px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus-1.svg" 
              alt="Edge accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.3" }}
            />
          </div>
        </div>
      </div>

      {/* Content with subtle entrance animations */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}`}>
          {/* Main Title with mobile-first responsive design */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight animate-text-glow">
            AWS Community Day
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">
                Cebu 2025
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-60 animate-pulse-glow"></div>
            </span>
          </h1>

          {/* Subtitle with mobile-first responsive design */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-6 sm:mb-8 tracking-[0.1em] sm:tracking-[0.2em] relative animate-text-shimmer">
            <span className="relative z-10">BUILD BEYOND LIMITS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm animate-shimmer-wave"></div>
          </div>

          {/* Event Details with mobile-first responsive design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 animate-float-gentle text-sm sm:text-base">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold">September 13, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 animate-float-gentle-delayed text-sm sm:text-base">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-semibold text-center sm:text-left">UP Cebu Performing Arts Hall</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-orange-400/30 animate-float-gentle-delayed-2 text-sm sm:text-base">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-pulse-subtle" />
              <span className="font-bold text-orange-300">9 Amazing Speakers</span>
            </div>
          </div>

          {/* Description with mobile-first responsive design */}
          <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium animate-fade-in-up px-4 sm:px-0">
            Join the AWS community in Cebu for a day of learning, networking, and innovation. Discover the latest in
            cloud computing, connect with fellow developers, and build beyond limits.
          </p>

          {/* Enhanced CTA Buttons with mobile-first responsive design */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 sm:px-0">
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 btn-glow-orange pulse-glow-orange overflow-hidden group animate-button-glow w-full sm:w-auto"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              onClick={handleLearnMoreClick}
              size="lg"
              variant="outline"
              className="relative border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 bg-transparent shadow-lg shadow-white/10 font-semibold glass-card hover:border-orange-400/50 hover:text-orange-300 group overflow-hidden animate-button-glow-secondary w-full sm:w-auto"
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