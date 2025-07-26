
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, Users, Sparkles, Star } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Volunteers() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("volunteers")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const volunteers = [
    { 
      name: "Yurii Onein T. Yankin", 
      categories: ["Finance and Sponsorship"],
      image: "/images/volunteers/yurii-yankin.jpg"
    },
    { 
      name: "Mikaela Vianca Molina", 
      categories: ["Programs and Activity"],
      image: "/images/volunteers/mikae-molina.jpg"
    },
    { 
      name: "James Gabriel Elijah P. Ty", 
      categories: ["Logistics/Venue", "Technical"],
      image: "/images/volunteers/james-ty.jpg"
    },
    { 
      name: "John Vincent Augusto", 
      categories: ["Technical"],
      image: "/images/volunteers/augusto-john-vincent.jpeg"
    },
    { 
      name: "Luis Andrei Ouano", 
      categories: ["Registration/Ushers"],
      image: "/images/volunteers/luis-andrei-ouano.jpeg"
    },
    { 
      name: "Spyke Matthew Lim", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/spyke-matthew-lim.jpeg"
    },
    { 
      name: "Trixie T. Dolera", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/trixie-dolera.png"
    },
    { 
      name: "Gio Christian D. Macatual", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/gio-macatual.jpg"
    },
    { 
      name: "Shan Michael V. Raboy", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/shan-raboy.png"
    },
    { 
      name: "Maica C. Eupinado", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/eupinado-maica.jpg"
    },
    { 
      name: "Princess Mikaela E. Borbajo", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/princess-mikaelaa-borbajo.jpeg"
    },
    { 
      name: "Tyrone Tabormal", 
      categories: ["Finance and Sponsorship"],
      image: "/images/volunteers/tyrone-tabornal.jpg"
    },
    { 
      name: "Arnold Joseph Najera", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/arnold-najera.png"
    },
    { 
      name: "Zoie Estorba", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/zoie-estorba.png"
    },
    { 
      name: "Daniel Ian Macalisang", 
      categories: ["Registration/Ushers"],
      image: "/images/volunteers/daniel-ian-macalisang.png" 
    },
    { 
      name: "Mhart Nuera", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/nuera-mhart.png" 
    },
    { 
      name: "John Emmanuel O. Pacres",
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/john-emmanuel-pacres.png" 
    },
    { 
      name: "Shaira Mae O. Ma-asin", 
      categories: ["Finance and Sponsorship"],
      image: "/images/volunteers/shaira-mae-maasin.jpg" 
    },
    { 
      name: "Rhon Dwyane De Gracia", 
      categories: ["Programs and Activity"],
      image: "/images/volunteers/rhon-de-gracia.jpeg"
    },
    { 
      name: "Adrian Say", 
      categories: ["Registration/Ushers"],
      image: "/images/volunteers/adrian-say.png"
    },
    { 
      name: "Lady Bridget Erica L. Alegre", 
      categories: ["Finance and Sponsorship"],
      image: "/images/volunteers/lady-bridget-alegre.jpg" 
    },
    { 
      name: "Josh Edward Lui", 
      categories: ["Emcee/Host"],
      image: "/images/volunteers/lui-josh.jpg" 
    },
    { 
      name: "Princess Jaena Marie O. De La Pena", 
      categories: ["Logistics/Venue"],
      image: "/images/volunteers/princess-jaena-marie-de-la-pena.jpeg" 
    },
    { 
      name: "Bren D. Sohon", 
      categories: ["Logistics/Venue"],
      image: "/images/volunteers/bren-sohon.jpg" 
    },
    { 
      name: "Wilfred Justin D. Peteros", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/wilfred-peteros.jpg" 
    },
    { 
      name: "Chrys Sean T. Sevilla", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/chrys-sean-sevilla.jpg" 
    },
    { 
      name: "Annissa Freida Ramones Balaga", 
      categories: ["Documentation and Publicity"],
      image: "/images/volunteers/annissa-balaga.jpg" 
    },
    { 
      name: "James Earl Ryan Cometa", 
      categories: ["Finance and Sponsorship"], 
      image: "/images/volunteers/james-cometa.png"
    },
    { 
      name: "Trishia Mae G. Basmayor", 
      categories: ["Logistics/Venue", "Registration/Ushers"],
      image: "/images/volunteers/trishia-mae-basmayor.jpeg" 
    },
    { 
      name: "Jezreel Chad Lumbab", 
      categories: ["Logistics/Venue"],
      image: "/images/volunteers/jezreel-chad-lumbab.jpg" 
    },
    { 
      name: "Dan Chavez", 
      categories: ["Technical"],
      image: "/images/volunteers/dan-chavez.jpeg"
    },
    { name: "Fabiola Villanueva", categories: ["Technical"] },
    { name: "Liv Jewel Monsalud", categories: ["Registration/Ushers"] },
    { name: "Chriscia Xanelle Llamas", categories: ["Logistics/Venue"] },
    { 
      name: "Erik James M. Caliskis",
      categories: ["Logistics/Venue"]
    },
    { name: "Elijah Luis Bes", categories: ["Documentation and Publicity"] },
    { name: "Andre Salonga", categories: ["Documentation and Publicity"] },
    { name: "Heart Alvern Sumicad", categories: ["Registration/Ushers"] },
    { name: "Cris Villem P. Saniel", categories: ["Documentation and Publicity"] },
    { name: "Lev Altair Imetri S. Aguirre", categories: ["Documentation and Publicity"] },
    { name: "Charles Vincent Montero", categories: ["Emcee/Host"] }
  ]

  const categoryColors = {
    "Technical": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0",
    "Programs and Activity": "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0",
    "Emcee/Host": "bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0",
    "Logistics/Venue": "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0",
    "Registration/Ushers": "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0",
    "Finance and Sponsorship": "bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0",
    "Documentation and Publicity": "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0",
  }

  const categories = [
    { value: "all", label: "🔍 All Categories" },
    { value: "Technical", label: "💻 Technical" },
    { value: "Programs and Activity", label: "🎯 Programs and Activity" },
    { value: "Emcee/Host", label: "🎤 Emcee/Host" },
    { value: "Logistics/Venue", label: "📦 Logistics/Venue" },
    { value: "Registration/Ushers", label: "👥 Registration/Ushers" },
    { value: "Finance and Sponsorship", label: "💰 Finance and Sponsorship" },
    { value: "Documentation and Publicity", label: "📝 Documentation and Publicity" },
  ]

  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || volunteer.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const volunteersPerRow = 5
  const rowsToShow = showAll ? Math.ceil(filteredVolunteers.length / volunteersPerRow) : 2
  const displayedVolunteers = filteredVolunteers.slice(0, rowsToShow * volunteersPerRow)
  const hasMore = filteredVolunteers.length > displayedVolunteers.length

  return (
    <section id="volunteers" className="py-12 md:py-20 lg:py-32 hero-gradient-dark relative overflow-hidden">
      {/* Enhanced Network Constellation Background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Constellation Network Patterns */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "15%", left: "12%", width: "90px", height: "auto" }}
          >
            <img 
              src="/art-assets/big dipper.svg" 
              alt="Big Dipper constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "45%", right: "15%", width: "85px", height: "auto" }}
          >
            <img 
              src="/art-assets/aquarius.svg" 
              alt="Aquarius constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.38" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "20%", left: "18%", width: "75px", height: "auto" }}
          >
            <img 
              src="/art-assets/leo.svg" 
              alt="Leo constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.42" }}
            />
          </div>

          {/* Ray SVG for Team Lead Highlights */}
          <div
            className="constellation-svg"
            style={{ top: "30%", left: "5%", width: "140px", height: "auto", opacity: "0.05" }}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto animate-gentle-pulse"
              style={{ transform: "rotate(60deg)" }}
            />
          </div>

          {/* Cloud SVG for Background Texture */}
          <div
            className="constellation-svg"
            style={{ bottom: "35%", right: "8%", width: "120px", height: "auto", opacity: "0.08" }}
          >
            <img 
              src="/art-assets/clouds.svg" 
              alt="Atmospheric clouds" 
              className="w-full h-auto animate-float-slow"
            />
          </div>
          
          {/* Enhanced rainbow gradient orbs */}
          <div className="absolute top-40 right-1/5 w-48 h-48 bg-gradient-to-r from-orange-500/8 via-pink-500/10 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-56 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-500/8 via-cyan-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Enhanced network dots with connecting lines */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '20%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '35%', right: '20%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '40%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '25%', right: '18%'}}></div>
          
          {/* Network connecting lines */}
          <div className="constellation-line" style={{top: '22%', left: '17%', width: '80px', transform: 'rotate(25deg)'}}></div>
          <div className="constellation-line" style={{top: '37%', right: '22%', width: '70px', transform: 'rotate(-35deg)'}}></div>
          <div className="constellation-line" style={{bottom: '42%', left: '14%', width: '60px', transform: 'rotate(45deg)'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 shadow-lg">
            <Users className="w-4 h-4 mr-2 animate-pulse" />
            Our Volunteers
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our dedicated volunteers are the heart of AWS Community Day Cebu. Get to know the passionate individuals who
            make this event possible.
          </p>
        </div>

        {/* Enhanced Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto mb-16">
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <Input
                  placeholder="Search volunteers by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-transparent border-0 text-white placeholder:text-gray-400 text-lg font-medium focus:ring-2 focus:ring-orange-500/30"
                />
              </div>
            </div>
          </div>
          
          <div className="relative sm:w-80">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full bg-transparent border-0 text-white text-lg font-medium focus:ring-2 focus:ring-orange-500/30">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-white/20">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-white hover:bg-white/10 focus:bg-white/10">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Enhanced Volunteers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {displayedVolunteers.map((volunteer, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 group hover:scale-105 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${(index % 20) * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {volunteer.image ? (
                  <div className="relative w-full h-full">
                    <OptimizedImage
                      src={volunteer.image}
                      alt={volunteer.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      loading={index < 10 ? "eager" : "lazy"}
                      priority={index < 4}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-500/20 relative">
                    <span className="text-4xl font-black text-orange-400/70 z-10">
                      {volunteer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 animate-pulse"></div>
                  </div>
                )}
                
                {/* Overlay with floating elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Star className="w-5 h-5 text-orange-400 animate-twinkle" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6 bg-gradient-to-t from-slate-900/50 to-transparent h-32 flex flex-col justify-center items-center text-center">
                <h3 className="font-black text-sm sm:text-base text-white mb-3 group-hover:text-orange-400 transition-colors duration-200 leading-tight min-h-[2.5rem] flex items-center justify-center">
                  <span className="line-clamp-2 text-center">{volunteer.name}</span>
                </h3>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {volunteer.categories.map((category, idx) => (
                    <Badge
                      key={idx}
                      className={`text-xs font-bold shadow-lg transition-all duration-200 group-hover:scale-105 ${categoryColors[category as keyof typeof categoryColors]}`}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Show More Button */}
        {hasMore ? (
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
              <Button
                onClick={() => setShowAll(true)}
                className="relative bg-white/10 backdrop-blur-sm border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-200 hover:scale-105"
              >
                <ChevronDown className="w-5 h-5 mr-2 animate-bounce" />
                Show More Volunteers ({filteredVolunteers.length - displayedVolunteers.length} remaining)
              </Button>
            </div>
          </div>
        ) : null}

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-md mx-auto">
              <Search className="w-12 h-12 text-orange-400/50 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No volunteers found matching your search criteria.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
