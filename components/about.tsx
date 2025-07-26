
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Sparkles, Star, Zap, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isImageLoading, setIsImageLoading] = useState(false)

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

  // Auto-rotate featured photo every 5 seconds (when autoplay is enabled)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedPhoto((prev) => (prev + 1) % galleryPhotos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Navigation functions
  const goToNext = () => {
    setIsImageLoading(true)
    setSelectedPhoto((prev) => (prev + 1) % galleryPhotos.length)
    setTimeout(() => setIsImageLoading(false), 300)
  }

  const goToPrevious = () => {
    setIsImageLoading(true)
    setSelectedPhoto((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
    setTimeout(() => setIsImageLoading(false), 300)
  }

  const goToSlide = (index: number) => {
    if (index !== selectedPhoto) {
      setIsImageLoading(true)
      setSelectedPhoto(index)
      setTimeout(() => setIsImageLoading(false), 300)
    }
  }

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      } else if (event.key === ' ') {
        event.preventDefault()
        toggleAutoplay()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const galleryPhotos = [
    {
      id: 1,
      src: "/images/community-gallery/community-pic1.jpg",
      alt: "AWS Community Day Cebu - Workshop Session",
      title: "Hands-on Learning",
      description: "Participants engaging in interactive AWS workshops and technical sessions"
    },
    {
      id: 2,
      src: "/images/community-gallery/community-pic2.jpg",
      alt: "AWS Community Day Cebu - Keynote Presentation",
      title: "Expert Insights",
      description: "Industry leaders sharing their knowledge and AWS best practices"
    },
    {
      id: 3,
      src: "/images/community-gallery/community-pic3.jpg",
      alt: "AWS Community Day Cebu - Networking Session",
      title: "Community Networking",
      description: "Developers and cloud enthusiasts connecting and sharing experiences"
    },
    {
      id: 4,
      src: "/images/community-gallery/community-pic4.jpg",
      alt: "AWS Community Day Cebu - Technical Demo",
      title: "Live Demonstrations",
      description: "Real-world AWS solutions and architecture demonstrations"
    },
    {
      id: 5,
      src: "/images/community-gallery/community-pic5.jpg",
      alt: "AWS Community Day Cebu - Group Discussion",
      title: "Collaborative Learning",
      description: "Interactive discussions and knowledge sharing among participants"
    },
    {
      id: 6,
      src: "/images/community-gallery/community-pic6.jpg",
      alt: "AWS Community Day Cebu - Community Group",
      title: "Together We Grow",
      description: "The vibrant AWS community in Cebu coming together for learning and growth"
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Constellation Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/6 via-purple-500/10 to-indigo-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Constellation SVGs with hover effects */}
        <div
          className="absolute top-16 left-12 w-16 h-16 opacity-30 hover:opacity-60 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/leo.svg" 
            alt="Leo constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-orange-500/50"
          />
          <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div
          className="absolute top-32 right-16 w-14 h-14 opacity-25 hover:opacity-55 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/cassiopeia.svg" 
            alt="Cassiopeia constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-blue-500/50"
          />
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div
          className="absolute bottom-24 left-20 w-18 h-18 opacity-35 hover:opacity-65 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/orion.svg" 
            alt="Orion constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-purple-500/50"
          />
          <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div
          className="absolute bottom-40 right-24 w-12 h-12 opacity-20 hover:opacity-50 transition-all duration-500 hover:scale-110 cursor-pointer group"
        >
          <img 
            src="/art-assets/pegasus.svg" 
            alt="Pegasus constellation" 
            className="w-full h-auto filter drop-shadow-lg group-hover:drop-shadow-yellow-500/50"
          />
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Minimal twinkling stars */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-400/50 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-twinkle delay-1500"></div>
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
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
              Community <span className="text-orange-400">Gallery</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Moments from our AWS Community events showcasing learning, networking, and innovation
            </p>
          </div>

          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >

            {/* Enhanced Carousel with Navigation - Mobile optimized */}
            <div className="relative mb-6 sm:mb-8 group">
              <div 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="aspect-[4/3] sm:aspect-[16/9] relative">
                  <OptimizedImage
                    src={galleryPhotos[selectedPhoto].src}
                    alt={galleryPhotos[selectedPhoto].alt}
                    fill
                    className={`object-cover transition-all duration-700 ease-out ${isImageLoading ? 'opacity-70 scale-105' : 'opacity-100 scale-100'}`}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={true}
                    loading="eager"
                  />

                  {/* Loading indicator */}
                  {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Navigation Arrows - Mobile optimized */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>

                  {/* Autoplay Control - Mobile optimized */}
                  <button
                    onClick={toggleAutoplay}
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  
                  {/* Minimal overlay with counter only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">{galleryPhotos[selectedPhoto].title}</h4>
                        </div>
                        <div className="text-white/90 text-xs sm:text-sm font-medium bg-black/50 px-2 py-1 rounded-full">
                          {selectedPhoto + 1} / {galleryPhotos.length}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isAutoPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-100 ease-linear"
                        style={{ 
                          width: '100%',
                          animation: 'progress 5s linear infinite'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Enhanced Thumbnail Navigation - Mobile optimized */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex gap-1 sm:gap-2 p-1 sm:p-2 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-x-auto max-w-full">
                {galleryPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToSlide(index)}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 ${
                      selectedPhoto === index
                        ? "ring-2 ring-orange-500 scale-110 shadow-lg shadow-orange-500/25"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View ${photo.title}`}
                  >
                    <OptimizedImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                    />
                    {selectedPhoto === index && (
                      <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
