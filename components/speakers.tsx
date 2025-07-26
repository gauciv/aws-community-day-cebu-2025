
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Sparkles, Zap } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function Speakers() {
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

    const element = document.getElementById("speakers")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const keynoteSpeaker = {
    name: "Raphael Quisumbing",
    position: "AWS Community Hero | IT & Cloud Advisor | Head of Product Innovation MediaTrack",
    image: "/images/speakers/raphael-quisumbing.jpg",
    isKeynote: true,
  }

  const speakers = [
    {
      name: "Raphael Jambalos",
      position: "AWS Community Hero | Head of Modernization and Security, eCloudValley Technology Philippines",
      image: "/images/speakers/raphael-jambalos.jpg",
    },
    {
      name: "Joshua Arvin Lat",
      position: "AWS Machine Learning Hero | Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc",
      image: "/images/speakers/joshua-arvin-lat.jpg",
    },
    {
      name: "Aldwyn Cabarrubias",
      position: "Senior Ops Engineer at ING Hubs Philippines",
      image: "/images/speakers/aldwyn-cabarrubias.jpg",
    },
    {
      name: "Cyrus Pastelero",
      position: "Senior Software Engineer | Reap | Certified AWS Solution Architect | Ex-Founder",
      image: "/images/speakers/cyrus-pastelero.jpeg",
    },
    {
      name: "Andrew Matheu",
      position: "Founder and CEO of TechStart TV",
      image: "/images/speakers/andrew-matheu.jpg",
    },
    {
      name: "Cleo Credo",
      position: "CTO of Full Scale | Google Developer Expert | Co-lead PizzaPy",
      image: "/images/speakers/cleo-credo.jpg",
    },
    {
      name: "Ron Michael Khu",
      position: "Java Developer/Sr. Software Architect at LegalMatch | Co-lead PizzaPy | Community Elder CeGnuLug",
      image: "/images/speakers/ron-michael-khu.jpeg",
    },
    {
      name: "Louie Miguel",
      position: "Fullstack Engineer/Project Lead @ TutorialsDojo",
      image: "/images/speakers/rafael-louie-miguel.jpg",
    },
  ]

  return (
    <section id="speakers" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Soft constellation elements */}
          <div className="absolute top-16 left-12 text-orange-400/20 text-6xl animate-twinkle-slow">✧</div>
          <div className="absolute bottom-24 right-16 text-orange-300/15 text-8xl animate-float-slow">✦</div>
          <div className="absolute top-1/3 right-1/3 text-orange-400/25 text-4xl animate-twinkle-delayed">★</div>
          <div className="absolute bottom-1/4 left-1/5 text-orange-300/20 text-5xl animate-float">✧</div>
          
          {/* Soft glowing orbs */}
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/8 to-yellow-500/6 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-48 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/6 to-purple-500/8 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-6 md:mb-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Star className="w-4 h-4 mr-2 animate-twinkle" />
            Featured Speakers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
            Learn from{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get insights from leading professionals who are shaping the future of cloud technology and driving
            innovation in the AWS ecosystem.
          </p>
        </div>

        {/* Enhanced Keynote Speaker */}
        <div className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
              Opening the <span className="text-orange-400">Future</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative text-center group perspective-1000">
              {/* Enhanced Keynote Speaker Card */}
              <div className="relative mx-auto mb-8 md:mb-12 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse-slow scale-110"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse-slow delay-500 scale-105"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-1000 transform group-hover:scale-105">
                  <OptimizedImage
                    src={keynoteSpeaker.image}
                    alt={keynoteSpeaker.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    priority
                    loading="eager"
                  />
                  
                  {/* Enhanced crown badge */}
                  <div className="absolute -top-4 -right-4 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 md:p-4 rounded-full shadow-xl border-4 border-white/20">
                      <Crown className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>

                  {/* Floating sparkles */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 animate-twinkle" />
                  </div>
                  <div className="absolute bottom-8 right-6 md:bottom-12 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-orange-400 animate-twinkle" />
                  </div>
                </div>
              </div>

              {/* Enhanced speaker info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-orange-500/20 shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-700">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors duration-500">
                  {keynoteSpeaker.name}
                </h3>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-base md:text-lg font-bold px-4 md:px-6 py-2 mb-4 shadow-lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Keynote Speaker
                </Badge>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg group-hover:text-white transition-colors duration-500">
                  {keynoteSpeaker.position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Regular Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative text-center h-full">
                {/* Enhanced Speaker Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700 h-full flex flex-col group-hover:border-orange-500/30">
                  
                  {/* Enhanced Speaker Image */}
                  <div className="relative mx-auto mb-4 md:mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow scale-110"></div>
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl group-hover:shadow-blue-500/40 transition-all duration-700 group-hover:scale-105">
                      <OptimizedImage
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                      />
                    </div>

                    {/* Enhanced Floating Icons */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-900 transform -translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Speaker Info */}
                  <div className="space-y-3 md:space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:from-orange-400 group-hover:via-yellow-400 group-hover:to-orange-400 transition-all duration-500">
                        {speaker.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-xs md:text-sm font-bold border-blue-500/40 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-500 mb-3 md:mb-4 group-hover:border-orange-500/40 group-hover:text-orange-400 group-hover:bg-orange-500/10"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Expert Speaker
                      </Badge>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base group-hover:text-gray-300 transition-colors duration-500 flex-1">
                      {speaker.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
