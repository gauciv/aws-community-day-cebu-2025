
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=AWS+Workshop+Session",
      alt: "AWS Workshop Session",
      title: "Hands-on Workshop"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Keynote+Presentation",
      alt: "Keynote Presentation",
      title: "Keynote Presentation"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Networking+Break",
      alt: "Networking Break",
      title: "Networking Break"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Community+Group+Photo",
      alt: "Community Group Photo",
      title: "Community Gathering"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Constellation Background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Enhanced constellation elements with soft glows */}
          <div className="absolute top-16 left-12 text-orange-400/20 text-6xl animate-twinkle-slow">✧</div>
          <div className="absolute bottom-24 right-16 text-orange-300/15 text-8xl animate-float-slow">✦</div>
          <div className="absolute top-1/3 right-1/3 text-orange-400/25 text-4xl animate-twinkle-delayed">★</div>
          <div className="absolute bottom-1/4 left-1/5 text-orange-300/20 text-5xl animate-float">✧</div>
          
          {/* Soft glowing orbs */}
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/8 to-yellow-500/6 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-48 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/6 to-purple-500/8 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          
          {/* Constellation dots with soft glows */}
          <div className="constellation-dot constellation-dot-medium constellation-glow-soft" style={{top: '25%', left: '18%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow-soft" style={{top: '40%', right: '22%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow-soft" style={{bottom: '35%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small constellation-glow-soft" style={{bottom: '20%', right: '20%'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-6 md:mb-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Users className="w-4 h-4 mr-2 animate-pulse" />
            About the Event
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
            Building the{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              AWS Community
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AWS Community Day Cebu brings together cloud enthusiasts, developers, and industry experts for a day of
            learning, innovation, and networking in the heart of Cebu City.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          {/* Enhanced Content Section */}
          <div className="space-y-6 md:space-y-8">
            <div
              className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <Card className="border-2 border-white/10 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 bg-white/5 backdrop-blur-sm group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                        <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        Full Day Experience
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        From morning workshops to evening networking, immerse yourself in a comprehensive learning
                        experience designed to elevate your cloud expertise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="border-2 border-white/10 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 bg-white/5 backdrop-blur-sm group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                        <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        Community Driven
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        Connect with fellow developers, share experiences, and build lasting relationships within the
                        vibrant AWS community in Cebu and beyond.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="border-2 border-white/10 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 bg-white/5 backdrop-blur-sm group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        Premium Venue
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        Join us at the prestigious UP Cebu Performing Arts Hall, a state-of-the-art venue perfect for
                        our community gathering and technical sessions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Image Carousel */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "animate-fade-in" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
              <Card className="relative border-2 border-white/20 overflow-hidden shadow-2xl group-hover:border-orange-500/30 transition-all duration-700">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Main Image */}
                    <OptimizedImage
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentImageIndex === 0}
                      loading="eager"
                    />
                    
                    {/* Overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg md:text-xl mb-2">
                        {galleryImages[currentImageIndex].title}
                      </h4>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-orange-400 w-6"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 md:mt-20">
          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Build Beyond Limits?
              </span>
            </h3>
            <Button
              onClick={() => {
                document.querySelector("#tickets")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-all font-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-2xl hover:shadow-orange-500/50 hover:scale-105 duration-300"
            >
              Get Your Tickets
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
