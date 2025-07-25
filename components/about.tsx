"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

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

  // Reduced to only 4 photos
  const galleryPhotos = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=AWS+Workshop+Session",
      alt: "AWS Workshop Session",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Keynote+Presentation",
      alt: "Keynote Presentation",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600&text=Networking+Break",
      alt: "Networking Break",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600&text=Community+Group+Photo",
      alt: "Community Group Photo",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            About the Event
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What is <span className="text-orange-500">AWS Community Day</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            AWS Community Days are community-organized cloud education events that feature technical discussions and
            demos by expert AWS users and industry leaders from around the world. These events are designed to educate
            everyone, regardless of their level of AWS knowledge.
          </p>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Join 500+ developers, architects, and cloud enthusiasts in Cebu for an unforgettable day of learning,
            networking, and innovation. Experience hands-on workshops, inspiring keynotes, and connect with the vibrant
            AWS community in the Philippines.
          </p>
        </div>

        {/* Enhanced Interactive Photo Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/15 to-yellow-500/15 text-orange-400 border border-orange-500/30 text-sm font-semibold mb-6 backdrop-blur-sm">
              📸 Community Gallery
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Moments of Innovation
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Capturing the energy, collaboration, and breakthrough moments from our AWS Community events
            </p>
          </div>

          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {/* Enhanced Featured Photo with overlay effects */}
            <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-1">
              <div className="aspect-[16/9] relative rounded-3xl overflow-hidden bg-black/5">
                <img
                  src={galleryPhotos[selectedPhoto].src || "/placeholder.svg"}
                  alt={galleryPhotos[selectedPhoto].alt}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 text-base font-bold px-4 py-2 rounded-full shadow-lg">
                        AWS Community Day
                      </Badge>
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Live Event</span>
                      </div>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{galleryPhotos[selectedPhoto].alt}</h4>
                    <p className="text-white/80 text-lg">Connecting minds, building the future</p>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-400/60 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-400/60 rounded-bl-lg" />
              </div>
            </div>

            {/* Enhanced Thumbnail Grid with hover effects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(index)}
                  className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    selectedPhoto === index
                      ? "ring-4 ring-orange-500/50 shadow-2xl shadow-orange-500/40 scale-105"
                      : "hover:ring-2 hover:ring-orange-400/30 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    selectedPhoto === index 
                      ? "bg-gradient-to-t from-orange-500/40 to-transparent" 
                      : "bg-gradient-to-t from-black/40 to-transparent group-hover:from-orange-500/30"
                  }`} />

                  {/* Active indicator */}
                  {selectedPhoto === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping" />
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className={`absolute top-3 right-3 w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedPhoto === index ? "bg-orange-400 animate-pulse" : "bg-white/60 opacity-0 group-hover:opacity-100"
                  }`} />

                  {/* Photo title on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium truncate">{photo.alt}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Gallery navigation indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {galleryPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedPhoto === index 
                      ? "bg-orange-500 scale-125" 
                      : "bg-gray-400/50 hover:bg-orange-400/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
