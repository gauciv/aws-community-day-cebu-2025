
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Sparkles, Star, Zap } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(0)

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

  // Auto-rotate featured photo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPhoto((prev) => (prev + 1) % galleryPhotos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const galleryPhotos = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=AWS+Workshop+Session",
      alt: "AWS Workshop Session",
      title: "Hands-on Learning"
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Keynote+Presentation",
      alt: "Keynote Presentation",
      title: "Expert Insights"
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600&text=Networking+Break",
      alt: "Networking Break",
      title: "Community Connect"
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600&text=Community+Group+Photo",
      alt: "Community Group Photo",
      title: "Together We Grow"
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 hero-gradient-dark relative overflow-hidden">
      {/* Enhanced Atmospheric Background with New Assets */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Cloud SVG Elements for Depth */}
          <div
            className="constellation-svg"
            style={{ top: "10%", left: "5%", width: "120px", height: "auto", opacity: "0.15" }}
          >
            <img 
              src="/art-assets/clouds.svg" 
              alt="Atmospheric clouds" 
              className="w-full h-auto animate-float-slow"
            />
          </div>
          
          <div
            className="constellation-svg"
            style={{ bottom: "15%", right: "8%", width: "140px", height: "auto", opacity: "0.12" }}
          >
            <img 
              src="/art-assets/clouds.svg" 
              alt="Atmospheric clouds" 
              className="w-full h-auto animate-float-reverse"
            />
          </div>

          {/* Smoke SVG for Movement */}
          <div
            className="constellation-svg"
            style={{ top: "30%", right: "15%", width: "100px", height: "auto", opacity: "0.08" }}
          >
            <img 
              src="/art-assets/smoke.svg" 
              alt="Atmospheric smoke" 
              className="w-full h-auto animate-gentle-shimmer"
            />
          </div>
          
          {/* Small Constellation Accents */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "25%", left: "15%", width: "60px", height: "auto" }}
          >
            <img 
              src="/art-assets/Group 79.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "25%", right: "20%", width: "55px", height: "auto" }}
          >
            <img 
              src="/art-assets/assets.svg" 
              alt="Constellation accent" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>
          
          {/* Enhanced gradient orbs */}
          <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-orange-500/8 via-amber-500/10 to-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/8 via-cyan-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Optimized constellation network */}
          <div className="constellation-dot constellation-dot-small constellation-glow" style={{top: '15%', left: '20%'}}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{top: '25%', right: '15%'}}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{bottom: '30%', left: '10%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '15%', right: '25%'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            About the Event
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            What is{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              AWS Community Day
            </span>
            ?
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              AWS Community Days are community-organized cloud education events that feature technical discussions and
              demos by expert AWS users and industry leaders from around the world. These events are designed to educate
              everyone, regardless of their level of AWS knowledge.
            </p>
            <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/20 shadow-2xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Zap className="w-4 h-4 inline mr-1" />
                  Join the Movement
                </div>
              </div>
              <p className="text-2xl text-white leading-relaxed font-semibold">
                Join <span className="text-orange-400 font-black">500+</span> developers, architects, and cloud enthusiasts in Cebu for an unforgettable day of learning,
                networking, and innovation. Experience hands-on workshops, inspiring keynotes, and connect with the vibrant
                AWS community in the Philippines.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Photo Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Community <span className="text-orange-400">Gallery</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Moments from our AWS Community events showcasing learning, networking, and innovation
            </p>
          </div>

          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {/* Enhanced Featured Photo with 3D effect */}
            <div className="relative mb-8 group perspective-1000">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                <div className="aspect-[16/9] relative">
                  <OptimizedImage
                    src={galleryPhotos[selectedPhoto].src}
                    alt={galleryPhotos[selectedPhoto].alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={true}
                    loading="eager"
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 text-base font-bold mb-3 shadow-lg">
                            <Star className="w-4 h-4 mr-2" />
                            AWS Community Day
                          </Badge>
                          <h4 className="text-2xl font-bold text-white">{galleryPhotos[selectedPhoto].title}</h4>
                        </div>
                        <div className="text-white/80 text-sm">
                          {selectedPhoto + 1} / {galleryPhotos.length}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Sparkles className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 -z-10"></div>
            </div>

            {/* Enhanced Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(index)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-500 hover:scale-110 group ${
                    selectedPhoto === index
                      ? "border-orange-500 shadow-lg shadow-orange-500/50 ring-4 ring-orange-500/30"
                      : "border-white/20 hover:border-orange-500/60"
                  }`}
                >
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 25vw, 200px"
                    loading="lazy"
                  />
                  
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      selectedPhoto === index 
                        ? "bg-gradient-to-t from-orange-500/40 to-transparent" 
                        : "bg-black/40 group-hover:bg-black/20"
                    }`}
                  />
                  
                  {selectedPhoto === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-medium">{photo.title}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
