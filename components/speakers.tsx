"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Sparkles } from "lucide-react"

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
    image: "/images/speakers/raphael-quisumbing.jpg", // Updated image path
    isKeynote: true,
};

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
      position: "Fullstack Engineer/Project Lead @ TutoriasDojoNote",
      image: "/images/speakers/rafael-louie-miguel.jpg",
    },
  ]

  return (
    <section id="speakers" className="py-12 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            Featured Speakers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learn from <span className="text-orange-500">Industry Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get insights from leading professionals who are shaping the future of cloud technology and driving
            innovation in the AWS ecosystem.
          </p>
        </div>

        {/* Keynote Speaker */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30">
              <Crown className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-semibold text-sm">Keynote Speaker</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative text-center group">
              {/* Keynote Speaker Design */}
              <div className="relative mx-auto mb-6 w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-yellow-500 shadow-2xl group-hover:shadow-orange-500/40 transition-all duration-500">
                  <img
                    src={keynoteSpeaker.image || "/placeholder.svg"}
                    alt={keynoteSpeaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4 group-hover:from-orange-400 group-hover:via-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                {keynoteSpeaker.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {keynoteSpeaker.position}
              </p>
            </div>
          </div>
        </div>

        {/* Regular Speakers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative text-center">
                {/* Speaker Image with Enhanced Design */}
                <div className="relative mx-auto mb-6 w-40 h-40 md:w-48 md:h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-2 group-hover:translate-x-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {speaker.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-sm font-medium border-blue-500/30 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 mb-3"
                    >
                      Expert Speaker
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {speaker.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
