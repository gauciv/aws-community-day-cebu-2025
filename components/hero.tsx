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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-slate-800 via-blue-900/95 to-slate-800">
      {/* Enhanced Constellation Background with Connected Dots Pattern */}
      <div className="absolute inset-0 constellation-background">
        {/* Soft cloud elements with subtle movement */}
        <div className="absolute top-0 right-0 w-64 h-48 bg-white/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-48 bg-white/8 rounded-full blur-3xl animate-float-reverse" />

        {/* Constellation Pattern Similar to Image */}
        <div className="constellation-container">
          {/* Left Side Constellation Cluster */}
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{top: '15%', left: '8%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '18%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{top: '22%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{top: '25%', left: '10%'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '16%', left: '9%', width: '25px', transform: 'rotate(35deg)'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '20%', left: '11%', width: '30px', transform: 'rotate(-15deg)'}}></div>
          <div className="constellation-line" style={{top: '23%', left: '13%', width: '20px', transform: 'rotate(70deg)'}}></div>

          {/* Top Center Constellation */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '12%', left: '45%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '16%', left: '48%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{top: '20%', left: '42%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '14%', left: '52%'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '13%', left: '46%', width: '22px', transform: 'rotate(25deg)'}}></div>
          <div className="constellation-line" style={{top: '17%', left: '45%', width: '28px', transform: 'rotate(-30deg)'}}></div>

          {/* Right Side Upper Constellation */}
          <div className="constellation-dot constellation-dot-large constellation-glow" style={{top: '18%', right: '12%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '22%', right: '8%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '15%', right: '16%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{top: '25%', right: '14%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{top: '28%', right: '18%'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '19%', right: '13%', width: '30px', transform: 'rotate(-45deg)'}}></div>
          <div className="constellation-line" style={{top: '23%', right: '10%', width: '25px', transform: 'rotate(20deg)'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '26%', right: '15%', width: '20px', transform: 'rotate(60deg)'}}></div>

          {/* Center Right Constellation */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '45%', right: '20%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '48%', right: '15%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{top: '52%', right: '22%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '42%', right: '18%'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '46%', right: '19%', width: '25px', transform: 'rotate(-20deg)'}}></div>
          <div className="constellation-line" style={{top: '49%', right: '17%', width: '22px', transform: 'rotate(40deg)'}}></div>

          {/* Bottom Left Constellation Cluster */}
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{bottom: '25%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{bottom: '28%', left: '10%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{bottom: '22%', left: '18%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '32%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '20%', left: '14%'}}></div>
          <div className="constellation-line constellation-glow" style={{bottom: '26%', left: '13%', width: '28px', transform: 'rotate(30deg)'}}></div>
          <div className="constellation-line" style={{bottom: '29%', left: '11%', width: '25px', transform: 'rotate(-40deg)'}}></div>
          <div className="constellation-line constellation-glow" style={{bottom: '23%', left: '16%', width: '20px', transform: 'rotate(75deg)'}}></div>

          {/* Bottom Right Large Constellation */}
          <div className="constellation-dot constellation-dot-large constellation-glow" style={{bottom: '30%', right: '15%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{bottom: '25%', right: '12%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '35%', right: '18%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '20%', right: '20%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '28%', right: '8%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{bottom: '32%', right: '22%'}}></div>
          <div className="constellation-line constellation-glow" style={{bottom: '28%', right: '14%', width: '35px', transform: 'rotate(-25deg)'}}></div>
          <div className="constellation-line" style={{bottom: '31%', right: '16%', width: '30px', transform: 'rotate(45deg)'}}></div>
          <div className="constellation-line constellation-glow" style={{bottom: '26%', right: '10%', width: '25px', transform: 'rotate(15deg)'}}></div>

          {/* Left Center Constellation */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '50%', left: '8%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '45%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{top: '55%', left: '6%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '48%', left: '15%'}}></div>
          <div className="constellation-line constellation-glow" style={{top: '49%', left: '9%', width: '22px', transform: 'rotate(50deg)'}}></div>
          <div className="constellation-line" style={{top: '46%', left: '11%', width: '25px', transform: 'rotate(-10deg)'}}></div>

          {/* Scattered Individual Stars */}
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{top: '35%', left: '25%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '40%', right: '35%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{bottom: '45%', left: '30%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{top: '60%', right: '40%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{top: '25%', left: '35%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{bottom: '40%', right: '30%'}}></div>

          {/* Additional connecting lines for network effect */}
          <div className="constellation-line" style={{top: '30%', left: '20%', width: '40px', transform: 'rotate(15deg)'}}></div>
          <div className="constellation-line constellation-glow" style={{bottom: '35%', right: '25%', width: '35px', transform: 'rotate(-35deg)'}}></div>
          <div className="constellation-line" style={{top: '55%', left: '25%', width: '30px', transform: 'rotate(60deg)'}}></div>

        {/* Enhanced Constellation Elements with More Movement */}
        <div className="constellation-container">
          {/* Top Left Cluster - Enhanced */}
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow"
            style={{ top: "15%", left: "8%" }}
          ></div>
          <div
            className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow"
            style={{ top: "12%", left: "15%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ top: "20%", left: "12%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-bounce-subtle"
            style={{ top: "18%", left: "10%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "14%", left: "13%" }}
          ></div>
          <div
            className="constellation-line constellation-glow animate-fade-pulse"
            style={{ top: "16%", left: "10%", width: "40px", transform: "rotate(25deg)" }}
          ></div>
          <div
            className="constellation-line animate-glow-pulse"
            style={{ top: "17%", left: "13%", width: "25px", transform: "rotate(-10deg)" }}
          ></div>

          {/* Additional scattered elements for more density */}
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-fast"
            style={{ top: "8%", left: "5%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-reverse"
            style={{ top: "25%", left: "3%" }}
          ></div>
          <div className="constellation-circle animate-pulse-fast" style={{ top: "18%", left: "20%" }}></div>

          {/* Top Right Cluster - Enhanced */}
          <div
            className="constellation-star constellation-star-large constellation-glow animate-rotate-slow"
            style={{ top: "18%", right: "10%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-slow"
            style={{ top: "25%", right: "15%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ top: "22%", right: "8%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-small animate-bounce-subtle"
            style={{ top: "16%", right: "12%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "27%", right: "13%" }}
          ></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "20%", right: "17%" }}></div>
          <div
            className="constellation-line constellation-glow animate-glow-pulse"
            style={{ top: "20%", right: "12%", width: "30px", transform: "rotate(-15deg)" }}
          ></div>

          {/* Additional top right elements */}
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-fast"
            style={{ top: "10%", right: "5%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-slow"
            style={{ top: "30%", right: "3%" }}
          ></div>

          {/* Left Side - Mid level Enhanced */}
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow"
            style={{ top: "45%", left: "5%" }}
          ></div>
          <div
            className="constellation-star constellation-star-medium constellation-glow animate-rotate-reverse"
            style={{ top: "50%", left: "3%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ top: "55%", left: "7%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-bounce-subtle"
            style={{ top: "48%", left: "6%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "52%", left: "4%" }}
          ></div>
          <div
            className="constellation-line animate-fade-pulse"
            style={{ top: "47%", left: "4%", width: "20px", transform: "rotate(60deg)" }}
          ></div>

          {/* Additional left side elements */}
          <div
            className="constellation-dot constellation-dot-medium animate-twinkle-fast"
            style={{ top: "35%", left: "2%" }}
          ></div>
          <div className="constellation-circle animate-pulse-fast" style={{ top: "65%", left: "1%" }}></div>

          {/* Right Side - Mid level Enhanced */}
          <div
            className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow"
            style={{ top: "40%", right: "6%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-slow"
            style={{ top: "48%", right: "4%" }}
          ></div>
          <div className="constellation-circle animate-pulse-slow" style={{ top: "43%", right: "8%" }}></div>
          <div
            className="constellation-dot constellation-dot-small animate-bounce-subtle"
            style={{ top: "46%", right: "7%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "41%", right: "9%" }}
          ></div>
          <div
            className="constellation-line constellation-glow animate-glow-pulse"
            style={{ top: "44%", right: "5%", width: "25px", transform: "rotate(45deg)" }}
          ></div>

          {/* Additional right side elements */}
          <div
            className="constellation-star constellation-star-small animate-rotate-reverse"
            style={{ top: "35%", right: "2%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-small animate-twinkle-fast"
            style={{ top: "60%", right: "1%" }}
          ></div>

          {/* Center Area - More sparse but animated elements */}
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-slow"
            style={{ top: "30%", left: "25%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-bounce-subtle"
            style={{ top: "35%", right: "30%" }}
          ></div>
          <div className="constellation-circle animate-pulse-slow" style={{ top: "32%", left: "30%" }}></div>
          <div
            className="constellation-dot constellation-dot-small animate-twinkle-delayed"
            style={{ top: "38%", right: "35%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-slow"
            style={{ top: "28%", left: "35%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-fade-pulse"
            style={{ top: "42%", left: "40%" }}
          ></div>
          <div className="constellation-circle animate-twinkle-fast" style={{ top: "26%", right: "40%" }}></div>

          {/* Bottom Left Cluster - Enhanced */}
          <div
            className="constellation-star constellation-star-large constellation-glow animate-rotate-slow"
            style={{ bottom: "25%", left: "12%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow"
            style={{ bottom: "20%", left: "8%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ bottom: "30%", left: "15%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-medium animate-bounce-subtle"
            style={{ bottom: "28%", left: "10%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ bottom: "22%", left: "14%" }}
          ></div>
          <div className="constellation-circle animate-fade-pulse" style={{ bottom: "26%", left: "17%" }}></div>
          <div
            className="constellation-line constellation-glow animate-glow-pulse"
            style={{ bottom: "27%", left: "10%", width: "35px", transform: "rotate(-30deg)" }}
          ></div>
          <div
            className="constellation-line animate-fade-pulse"
            style={{ bottom: "24%", left: "13%", width: "20px", transform: "rotate(15deg)" }}
          ></div>

          {/* Additional bottom left elements */}
          <div
            className="constellation-dot constellation-dot-medium animate-twinkle-fast"
            style={{ bottom: "15%", left: "5%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-reverse"
            style={{ bottom: "35%", left: "3%" }}
          ></div>

          {/* Bottom Right Cluster - Enhanced */}
          <div
            className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-slow"
            style={{ bottom: "22%", right: "10%" }}
          ></div>
          <div
            className="constellation-star constellation-star-medium constellation-glow animate-rotate-reverse"
            style={{ bottom: "28%", right: "14%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ bottom: "25%", right: "8%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-small animate-bounce-subtle"
            style={{ bottom: "30%", right: "12%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ bottom: "24%", right: "16%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-slow"
            style={{ bottom: "26%", right: "11%" }}
          ></div>
          <div
            className="constellation-line animate-glow-pulse"
            style={{ bottom: "26%", right: "12%", width: "28px", transform: "rotate(75deg)" }}
          ></div>

          {/* Additional bottom right elements */}
          <div
            className="constellation-dot constellation-dot-small animate-twinkle-fast"
            style={{ bottom: "18%", right: "5%" }}
          ></div>
          <div className="constellation-circle animate-pulse-fast" style={{ bottom: "35%", right: "3%" }}></div>

          {/* Far edges - extending slightly outside with animation */}
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow"
            style={{ top: "35%", left: "-2%" }}
          ></div>
          <div
            className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow"
            style={{ top: "60%", right: "-3%" }}
          ></div>
          <div
            className="constellation-circle constellation-glow animate-pulse-slow"
            style={{ bottom: "40%", left: "-1%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-small constellation-glow animate-bounce-subtle"
            style={{ bottom: "50%", right: "-2%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "25%", left: "-1%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-fade-pulse"
            style={{ bottom: "35%", right: "-1%" }}
          ></div>

          {/* Additional scattered elements for depth with animation */}
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-fast"
            style={{ top: "70%", right: "25%" }}
          ></div>
          <div className="constellation-circle animate-pulse-slow" style={{ top: "65%", left: "20%" }}></div>
          <div
            className="constellation-dot constellation-dot-small animate-bounce-subtle"
            style={{ top: "75%", left: "18%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-reverse"
            style={{ top: "68%", right: "28%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-delayed"
            style={{ top: "72%", left: "22%" }}
          ></div>

          {/* Upper area additional elements with animation */}
          <div
            className="constellation-dot constellation-dot-tiny animate-fade-pulse"
            style={{ top: "8%", left: "20%" }}
          ></div>
          <div className="constellation-circle animate-pulse-fast" style={{ top: "10%", right: "25%" }}></div>
          <div
            className="constellation-dot constellation-dot-small animate-twinkle-slow"
            style={{ top: "6%", right: "30%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-slow"
            style={{ top: "9%", left: "25%" }}
          ></div>

          {/* Mid-level connecting elements with animation */}
          <div
            className="constellation-dot constellation-dot-tiny animate-bounce-subtle"
            style={{ top: "42%", left: "18%" }}
          ></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-twinkle-fast"
            style={{ top: "58%", right: "20%" }}
          ></div>
          <div className="constellation-circle animate-pulse-slow" style={{ top: "45%", left: "22%" }}></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "55%", right: "18%" }}></div>

          {/* Additional connecting lines with subtle animation */}
          <div
            className="constellation-line animate-glow-pulse"
            style={{ top: "32%", left: "20%", width: "20px", transform: "rotate(60deg)" }}
          ></div>
          <div
            className="constellation-line constellation-glow animate-fade-pulse"
            style={{ bottom: "35%", right: "20%", width: "25px", transform: "rotate(-45deg)" }}
          ></div>
          <div
            className="constellation-line animate-glow-pulse"
            style={{ top: "65%", left: "19%", width: "18px", transform: "rotate(30deg)" }}
          ></div>
          <div
            className="constellation-line animate-fade-pulse"
            style={{ top: "8%", right: "28%", width: "22px", transform: "rotate(-60deg)" }}
          ></div>

          {/* More floating elements for enhanced density */}
          <div
            className="constellation-dot constellation-dot-small animate-twinkle-slow"
            style={{ top: "22%", left: "45%" }}
          ></div>
          <div
            className="constellation-star constellation-star-small animate-rotate-reverse"
            style={{ bottom: "45%", right: "45%" }}
          ></div>
          <div className="constellation-circle animate-pulse-fast" style={{ top: "55%", left: "35%" }}></div>
          <div
            className="constellation-dot constellation-dot-tiny animate-bounce-subtle"
            style={{ bottom: "60%", right: "35%" }}
          ></div>
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
          </div>
        </div>
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
