
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
      {/* Enhanced Atmospheric Background with Ray Elements */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Ray SVG Elements for Spotlight Effects */}
          <div
            className="constellation-svg"
            style={{ top: "20%", left: "10%", width: "180px", height: "auto", opacity: "0.06" }}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto animate-gentle-pulse"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
          
          <div
            className="constellation-svg"
            style={{ bottom: "25%", right: "12%", width: "160px", height: "auto", opacity: "0.08" }}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto animate-gentle-pulse"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>

          {/* Shroud SVG for Depth Behind Content */}
          <div
            className="constellation-svg"
            style={{ top: "15%", right: "20%", width: "200px", height: "auto", opacity: "0.05" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto animate-float-slow"
            />
          </div>
          
          {/* Constellation Accents */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "35%", left: "8%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "30%", right: "6%", width: "65px", height: "auto" }}
          >
            <img 
              src="/art-assets/orion.svg" 
              alt="Orion constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.45" }}
            />
          </div>
          
          {/* Enhanced multi-color gradient orbs */}
          <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/12 via-amber-500/15 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/8 via-purple-500/12 to-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Optimized network lines */}
          <div className="constellation-line" style={{top: '25%', left: '20%', width: '60px', transform: 'rotate(35deg)'}}></div>
          <div className="constellation-line" style={{bottom: '35%', right: '25%', width: '50px', transform: 'rotate(-25deg)'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 shadow-lg">
            <Star className="w-4 h-4 mr-2 animate-twinkle" />
            Featured Speakers
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Learn from{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get insights from leading professionals who are shaping the future of cloud technology and driving
            innovation in the AWS ecosystem.
          </p>
        </div>

        {/* Enhanced Keynote Speaker */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm text-yellow-400 border border-yellow-500/30 text-base font-bold mb-6 shadow-xl">
              <Crown className="w-5 h-5 mr-2 animate-pulse" />
              Keynote Speaker
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Opening the <span className="text-orange-400">Future</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative text-center group perspective-1000">
              {/* Enhanced Keynote Speaker Card */}
              <div className="relative mx-auto mb-12 w-72 h-72 md:w-80 md:h-80">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse scale-110"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse delay-500 scale-105"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-1000 transform group-hover:scale-105">
                  <OptimizedImage
                    src={keynoteSpeaker.image}
                    alt={keynoteSpeaker.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority
                    loading="eager"
                  />
                  
                  {/* Enhanced crown badge */}
                  <div className="absolute -top-4 -right-4 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-full shadow-xl border-4 border-white/20">
                      <Crown className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Floating sparkles */}
                  <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-twinkle" />
                  </div>
                  <div className="absolute bottom-12 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                    <Star className="w-5 h-5 text-orange-400 animate-twinkle" />
                  </div>
                </div>
              </div>

              {/* Enhanced speaker info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-700">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors duration-500">
                  {keynoteSpeaker.name}
                </h3>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-lg font-bold px-6 py-2 mb-4 shadow-lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Keynote Speaker
                </Badge>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-500">
                  {keynoteSpeaker.position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Regular Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative text-center h-full">
                {/* Enhanced Speaker Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700 h-full flex flex-col group-hover:border-orange-500/30">
                  
                  {/* Enhanced Speaker Image */}
                  <div className="relative mx-auto mb-6 w-40 h-40 md:w-48 md:h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-700 animate-pulse scale-110"></div>
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl group-hover:shadow-blue-500/40 transition-all duration-700 group-hover:scale-105">
                      <OptimizedImage
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>

                    {/* Enhanced Floating Icons */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-900 transform -translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Speaker Info */}
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:from-orange-400 group-hover:via-yellow-400 group-hover:to-orange-400 transition-all duration-500">
                        {speaker.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-sm font-bold border-blue-500/40 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-500 mb-4 group-hover:border-orange-500/40 group-hover:text-orange-400 group-hover:bg-orange-500/10"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Expert Speaker
                      </Badge>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-500 flex-1">
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
