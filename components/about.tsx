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

        {/* Reduced Size Photo Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Community Gallery</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Moments from our AWS Community events showcasing learning, networking, and innovation
            </p>
          </div>

          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {/* Smaller Featured Photo */}
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-xl group">
              <div className="aspect-[16/10] relative">
                <img
                  src={galleryPhotos[selectedPhoto].src || "/placeholder.svg"}
                  alt={galleryPhotos[selectedPhoto].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="bg-orange-500/90 text-white border-0 text-sm font-semibold">
                      AWS Community Day
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedPhoto === index
                      ? "border-orange-500 shadow-lg shadow-orange-500/30 ring-2 ring-orange-500/20"
                      : "border-border/50 hover:border-orange-500/50"
                  }`}
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      selectedPhoto === index ? "bg-orange-500/20" : "bg-black/20 hover:bg-black/10"
                    }`}
                  />
                  {selectedPhoto === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
