
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, Star } from "lucide-react"
import Image from "next/image"
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
    "Technical": "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/20",
    "Programs and Activity": "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-500/20",
    "Emcee/Host": "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/20",
    "Logistics/Venue": "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/20",
    "Registration/Ushers": "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink-500/20",
    "Finance and Sponsorship": "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-yellow-500/20",
    "Documentation and Publicity": "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-indigo-500/20",
  }

  const categories = [
    { value: "all", label: "🔍 All Categories" },
    { value: "Technical", label: "Technical" },
    { value: "Programs and Activity", label: "Programs and Activity" },
    { value: "Emcee/Host", label: "Emcee/Host" },
    { value: "Logistics/Venue", label: "Logistics/Venue" },
    { value: "Registration/Ushers", label: "Registration/Ushers" },
    { value: "Finance and Sponsorship", label: "Finance and Sponsorship" },
    { value: "Documentation and Publicity", label: "Documentation and Publicity" },
  ]

  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || volunteer.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const volunteersPerRow = 4
  const rowsToShow = showAll ? Math.ceil(filteredVolunteers.length / volunteersPerRow) : 3
  const displayedVolunteers = filteredVolunteers.slice(0, rowsToShow * volunteersPerRow)
  const hasMore = filteredVolunteers.length > displayedVolunteers.length

  return (
    <section id="volunteers" className="py-12 md:py-20 lg:py-32 relative overflow-hidden hero-gradient-dark">
      {/* Hero-style constellation background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Scattered constellation elements */}
          <div className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow" style={{ top: "10%", left: "5%" }}></div>
          <div className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow" style={{ top: "15%", right: "8%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ top: "25%", left: "12%" }}></div>
          <div className="constellation-dot constellation-dot-tiny animate-bounce-subtle" style={{ top: "35%", right: "15%" }}></div>
          <div className="constellation-star constellation-star-small animate-rotate-reverse" style={{ bottom: "20%", left: "10%" }}></div>
          <div className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-delayed" style={{ bottom: "30%", right: "12%" }}></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "60%", left: "18%" }}></div>
          <div className="constellation-dot constellation-dot-small animate-bounce-subtle" style={{ bottom: "40%", right: "20%" }}></div>
          <div className="constellation-line constellation-glow animate-glow-pulse" style={{ top: "45%", left: "15%", width: "30px", transform: "rotate(25deg)" }}></div>
          <div className="constellation-line animate-fade-pulse" style={{ bottom: "35%", right: "25%", width: "25px", transform: "rotate(-45deg)" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero-style header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/15 to-orange-600/20 text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 backdrop-blur-sm shadow-lg shadow-orange-500/10">
            <Star className="w-4 h-4 animate-twinkle" />
            Our Amazing Volunteers
            <Star className="w-4 h-4 animate-twinkle-delayed" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">Dedicated Team</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            Our passionate volunteers are the driving force behind AWS Community Day Cebu. 
            Discover the talented individuals making this extraordinary event possible.
          </p>
        </div>

        {/* Enhanced Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto mb-16">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
            <Input
              placeholder="Search our amazing volunteers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-orange-400/50 focus:ring-orange-400/20"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="lg:w-80 h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clean Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedVolunteers.map((volunteer, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-orange-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/20 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {volunteer.image ? (
                    <Image
                      src={volunteer.image}
                      alt={volunteer.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={index < 8 ? "eager" : "lazy"}
                      priority={index < 8}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-orange-600/30">
                      <span className="text-5xl font-black text-white/80">
                        {volunteer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce" />
                  <div className="absolute top-6 right-6 w-2 h-2 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
                
                <CardContent className="p-6 relative">
                  <h3 className="font-bold text-lg mb-4 text-white group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                    {volunteer.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.categories.map((category, idx) => (
                      <Badge
                        key={idx}
                        className={`text-xs font-medium px-3 py-1 transition-all duration-300 hover:scale-110 shadow-lg ${categoryColors[category as keyof typeof categoryColors]}`}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-yellow-400/5 to-orange-400/10 rounded-xl blur-xl" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hero-style Show More Button */}
        {hasMore ? (
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/30 border border-orange-400/20 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ChevronDown className="w-5 h-5" />
                Show More Amazing Volunteers ({filteredVolunteers.length - displayedVolunteers.length} remaining)
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        ) : null}

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <p className="text-white/90 text-lg font-medium">No volunteers found matching your search criteria.</p>
              <p className="text-white/60 mt-2">Try adjusting your search or filter settings.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
