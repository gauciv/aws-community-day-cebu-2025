
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, Target, Lightbulb } from "lucide-react"
import { OptimizedImage } from "./ui/optimized-image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const galleryImages = [
    { src: "/images/gallery/event1.jpg", alt: "AWS Community Day 2024 - Opening Ceremony" },
    { src: "/images/gallery/event2.jpg", alt: "Networking Session" },
    { src: "/images/gallery/event3.jpg", alt: "Technical Workshop" },
    { src: "/images/gallery/event4.jpg", alt: "Community Gathering" },
    { src: "/images/gallery/event5.jpg", alt: "Speaker Session" },
    { src: "/images/gallery/event6.jpg", alt: "Closing Ceremony" },
  ]

  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering the AWS community in Cebu through knowledge sharing and networking opportunities.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built by the community, for the community. Every session designed with your growth in mind.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Exploring cutting-edge AWS technologies and real-world solutions from industry experts.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Curated content and speakers delivering the highest quality learning experience.",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 relative overflow-hidden hero-gradient-dark">
      {/* Hero-style constellation background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Top section */}
          <div className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow" style={{ top: "8%", left: "10%" }}></div>
          <div className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow" style={{ top: "12%", right: "15%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ top: "20%", left: "5%" }}></div>
          
          {/* Middle section */}
          <div className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-delayed" style={{ top: "45%", right: "8%" }}></div>
          <div className="constellation-star constellation-star-small animate-rotate-reverse" style={{ top: "50%", left: "12%" }}></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "55%", right: "20%" }}></div>
          
          {/* Bottom section */}
          <div className="constellation-dot constellation-dot-small animate-bounce-subtle" style={{ bottom: "15%", left: "15%" }}></div>
          <div className="constellation-star constellation-star-large constellation-glow animate-rotate-slow" style={{ bottom: "20%", right: "10%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ bottom: "30%", left: "8%" }}></div>
          
          {/* Connecting lines */}
          <div className="constellation-line constellation-glow animate-glow-pulse" style={{ top: "25%", left: "18%", width: "40px", transform: "rotate(35deg)" }}></div>
          <div className="constellation-line animate-fade-pulse" style={{ bottom: "40%", right: "25%", width: "35px", transform: "rotate(-25deg)" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/15 to-orange-600/20 text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 backdrop-blur-sm shadow-lg shadow-orange-500/10">
            <Award className="w-4 h-4 animate-pulse" />
            About Our Event
            <Award className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            AWS Community Day <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">Cebu 2025</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Join us for an extraordinary day of learning, networking, and innovation. Connect with fellow AWS enthusiasts, 
            discover cutting-edge cloud technologies, and be part of the vibrant tech community in Cebu.
          </p>

          {/* Event details with hero styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-white">September 13, 2025</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-white">UP Cebu Performing Arts Hall</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 shadow-lg">
              <Users className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-orange-300">9 Expert Speakers</span>
            </div>
          </div>
        </div>

        {/* Event Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-orange-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/20 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Enhanced Photo Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Event <span className="text-orange-400">Highlights</span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Relive the memorable moments from our previous AWS Community Day events and get excited for what's coming next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/20 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-white/80 font-medium">{image.alt}</p>
                      <p className="text-white/60 text-sm mt-2">Coming Soon</p>
                    </div>
                  </div>

                  {/* Shimmer overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-yellow-400/5 to-orange-400/10 rounded-2xl blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Ready to <span className="text-orange-400">Join Us?</span>
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the most exciting AWS community event in Cebu. Reserve your spot today and connect with the future of cloud computing.
            </p>
            <Button
              onClick={() => window.open("https://ticketnation.ph/events/aws_community_day_cebu_-_2025", "_blank", "noopener,noreferrer")}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-10 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 overflow-hidden group"
            >
              <span className="relative z-10">Get Your Tickets Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
