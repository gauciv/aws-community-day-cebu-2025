
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, ExternalLink, Star } from "lucide-react"
import { OptimizedImage } from "./ui/optimized-image"

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
    name: "Aldwyn Cabarrubias",
    title: "Senior Solutions Architect",
    company: "Amazon Web Services (AWS)",
    image: "/images/speakers/aldwyn-cabarrubias.jpg",
    bio: "Aldwyn is a seasoned cloud architect with over 8 years of experience helping organizations transform their infrastructure and applications using AWS services.",
    topic: "The Future of Cloud Architecture",
    isKeynote: true,
  }

  const speakers = [
    {
      name: "Cyrus Pastelero",
      title: "Cloud Solutions Architect",
      company: "AWS",
      image: "/images/speakers/cyrus-pastelero.jpeg",
      bio: "Expert in serverless architectures and cloud-native applications with extensive experience in enterprise migrations.",
      topic: "Serverless at Scale",
    },
    {
      name: "Raphael Jambalos",
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      image: "/images/speakers/raphael-jambalos.jpg",
      bio: "Full-stack developer specializing in modern web technologies and cloud integrations.",
      topic: "Modern Web Development with AWS",
    },
    {
      name: "Joshua Arvin Lat",
      title: "Chief Technology Officer",
      company: "NuWorks Interactive Labs",
      image: "/images/speakers/joshua-arvin-lat.jpg",
      bio: "Technology leader and AWS Community Builder with expertise in machine learning and data analytics.",
      topic: "AI/ML on AWS",
    },
    {
      name: "Raphael Quisumbing",
      title: "DevOps Engineer",
      company: "Cloud Systems Corp",
      image: "/images/speakers/raphael-quisumbing.jpg",
      bio: "DevOps specialist focused on automation, CI/CD, and infrastructure as code using AWS services.",
      topic: "DevOps Best Practices",
    },
    {
      name: "Rafael Louie Miguel",
      title: "Data Engineer",
      company: "Analytics Pro",
      image: "/images/speakers/rafael-louie-miguel.jpg",
      bio: "Data engineering expert specializing in big data processing and analytics solutions on AWS.",
      topic: "Big Data Analytics",
    },
    {
      name: "Ron Michael Khu",
      title: "Security Architect",
      company: "SecureCloud Solutions",
      image: "/images/speakers/ron-michael-khu.jpeg",
      bio: "Cybersecurity professional with deep expertise in cloud security and compliance frameworks.",
      topic: "Cloud Security Essentials",
    },
    {
      name: "Andrew Matheu",
      title: "Solutions Architect",
      company: "Enterprise Tech",
      image: "/images/speakers/andrew-matheu.jpg",
      bio: "Solutions architect helping enterprises adopt cloud-first strategies and digital transformation.",
      topic: "Enterprise Cloud Migration",
    },
    {
      name: "Cleo Credo",
      title: "Product Manager",
      company: "Innovation Labs",
      image: "/images/speakers/cleo-credo.jpg",
      bio: "Product management expert focusing on cloud-native products and user experience optimization.",
      topic: "Product Strategy in the Cloud",
    },
  ]

  return (
    <section id="speakers" className="py-12 md:py-20 lg:py-32 relative overflow-hidden hero-gradient-dark">
      {/* Hero-style constellation background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Top area */}
          <div className="constellation-star constellation-star-large constellation-glow animate-rotate-slow" style={{ top: "10%", left: "8%" }}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-slow" style={{ top: "15%", right: "12%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ top: "8%", right: "25%" }}></div>
          
          {/* Middle area */}
          <div className="constellation-dot constellation-dot-small animate-bounce-subtle" style={{ top: "40%", left: "5%" }}></div>
          <div className="constellation-star constellation-star-medium constellation-glow animate-rotate-reverse" style={{ top: "50%", right: "8%" }}></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "45%", left: "20%" }}></div>
          
          {/* Bottom area */}
          <div className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-delayed" style={{ bottom: "15%", left: "12%" }}></div>
          <div className="constellation-star constellation-star-small animate-rotate-slow" style={{ bottom: "20%", right: "15%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ bottom: "25%", left: "25%" }}></div>
          
          {/* Connecting elements */}
          <div className="constellation-line constellation-glow animate-glow-pulse" style={{ top: "30%", right: "20%", width: "35px", transform: "rotate(45deg)" }}></div>
          <div className="constellation-line animate-fade-pulse" style={{ bottom: "35%", left: "18%", width: "40px", transform: "rotate(-30deg)" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/15 to-orange-600/20 text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 backdrop-blur-sm shadow-lg shadow-orange-500/10">
            <Star className="w-4 h-4 animate-twinkle" />
            Featured Speakers
            <Star className="w-4 h-4 animate-twinkle-delayed" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Learn from <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">Industry Experts</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            Get insights from leading professionals who are shaping the future of cloud technology and driving
            innovation in the AWS ecosystem.
          </p>
        </div>

        {/* Keynote Speaker */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-bold mb-6 backdrop-blur-sm shadow-lg shadow-yellow-500/10">
              <Crown className="w-5 h-5 animate-bounce" />
              Keynote Speaker
              <Crown className="w-5 h-5 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Opening the Future</h3>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden group hover:scale-105 transition-all duration-700">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative aspect-[4/3] lg:aspect-auto">
                  <OptimizedImage
                    src={keynoteSpeaker.image}
                    alt={keynoteSpeaker.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-t lg:from-black/40 lg:to-transparent" />
                  
                  {/* Keynote badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-4 py-2 shadow-lg">
                      <Crown className="w-4 h-4 mr-2" />
                      Keynote
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      {keynoteSpeaker.name}
                    </h3>
                    <p className="text-orange-400 font-bold text-lg mb-2">
                      {keynoteSpeaker.title}
                    </p>
                    <p className="text-white/80 font-medium">
                      {keynoteSpeaker.company}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      Topic: <span className="text-orange-400">{keynoteSpeaker.topic}</span>
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      {keynoteSpeaker.bio}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/5 to-yellow-400/10 blur-2xl" />
            </div>
          </Card>
        </div>

        {/* Regular Speakers Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our <span className="text-orange-400">Expert Speakers</span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Meet the talented professionals who will share their knowledge and insights throughout the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-orange-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/20 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <OptimizedImage
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce" />
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-orange-400 font-semibold text-sm mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-white/70 text-sm">
                      {speaker.company}
                    </p>
                  </div>

                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border border-orange-500/30 text-xs">
                      {speaker.topic}
                    </Badge>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                </CardContent>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-yellow-400/5 to-orange-400/10 rounded-xl blur-xl" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Don't Miss These <span className="text-orange-400">Amazing Sessions</span>
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Reserve your spot now and get ready for an incredible learning experience with these industry leaders.
            </p>
            <Button
              onClick={() => window.open("https://ticketnation.ph/events/aws_community_day_cebu_-_2025", "_blank", "noopener,noreferrer")}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-10 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 overflow-hidden group"
            >
              <span className="relative z-10">Register for Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
