"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"
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
    { name: "Yurii Onein T. Yankin", categories: ["Finance and Sponsorship"] },
    { name: "Mikaela Vianca Molina", categories: ["Programs and Activity"] },
    { name: "James Gabriel Elijah P. Ty", categories: ["Logistics/Venue"] },
    { name: "Luis Andrei Ouano", categories: ["Registration/Ushers"] },
    { name: "Erik James M. Caliskis", categories: ["Logistics/Venue"] },
    { name: "Spyke Matthew Lim", categories: ["Documentation and Publicity"] },
    { name: "Trixie T. Dolera", categories: ["Documentation and Publicity"] },
    { name: "Gio Christian D. Macatual", categories: ["Documentation and Publicity"] },
    { name: "Shan Michael V. Raboy", categories: ["Documentation and Publicity"] },
    { name: "Maica C. Eupinado", categories: ["Documentation and Publicity"] },
    { name: "Princess Mikaela E. Borbajo", categories: ["Documentation and Publicity"] },
    { name: "Tyrone Tabormal", categories: ["Finance and Sponsorship"] },
    { name: "Arnold Joseph Najera", categories: ["Documentation and Publicity"] },
    { name: "Zoie Estorba", categories: ["Documentation and Publicity"] },
    { name: "Liv Jewel Monsalud", categories: ["Registration/Ushers"] },
    { name: "Chriscia Xanelle Llamas", categories: ["Logistics/Venue"] },
    { name: "Daniel Ian Macalisang", categories: ["Registration/Ushers"] },
    { name: "Mhart Nuera", categories: ["Documentation and Publicity"] },
    { name: "Elijah Luis Bes", categories: ["Documentation and Publicity"] },
    { name: "John Emmanuel O. Pacres", categories: ["Documentation and Publicity"] },
    { name: "Shaira Mae O. Ma-asin", categories: ["Finance and Sponsorship"] },
    { name: "Rhon Dwyane De Gracia", categories: ["Programs and Activity"] },
    { name: "Adrian Say", categories: ["Registration/Ushers"] },
    { name: "Andre Salonga", categories: ["Documentation and Publicity"] },
    { name: "Heart Alvern Sumicad", categories: ["Registration/Ushers"] },
    { name: "Lady Bridget Erica L. Alegre", categories: ["Finance and Sponsorship"] },
    { name: "Josh Edward Lui", categories: ["Emcee/Host"] },
    { name: "Princess Jaena Marie O. De La Pena", categories: ["Logistics/Venue"] },
    { name: "Bren D. Sohon", categories: ["Logistics/Venue"] },
    { name: "Wilfred Justin D. Peteros", categories: ["Documentation and Publicity"] },
    { name: "Chrys Sean T. Sevilla", categories: ["Documentation and Publicity"] },
    { name: "Cris Villem P. Saniel", categories: ["Documentation and Publicity"] },
    { name: "Annissa Freida Ramones Balaga", categories: ["Documentation and Publicity"] },
    { name: "Lev Altair Imetri S. Aguirre", categories: ["Documentation and Publicity"] },
    { name: "James Earl Ryan Cometa", categories: ["Finance and Sponsorship"] },
    { name: "Charles Vincent Montero", categories: ["Emcee/Host"] },
    { name: "Trishia Mae G. Basmayor", categories: ["Logistics/Venue", "Registration/Ushers"] },
    { name: "Jezreel Chad Lumbab", categories: ["Logistics/Venue"] },
    { name: "John Vincent Augusto", categories: ["Technical"] },
    { name: "Dan Chavez", categories: ["Technical"] },
    { name: "Fabiola Villanueva", categories: ["Technical"] },
  ]

  const categoryColors = {
    Technical: "bg-blue-500 text-white",
    "Programs and Activity": "bg-green-500 text-white",
    "Emcee/Host": "bg-purple-500 text-white",
    "Logistics/Venue": "bg-orange-500 text-white",
    "Registration/Ushers": "bg-pink-500 text-white",
    "Finance and Sponsorship": "bg-yellow-500 text-black",
    "Documentation and Publicity": "bg-indigo-500 text-white",
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

  // Show only 2 rows (10 volunteers) initially
  const volunteersPerRow = 5
  const rowsToShow = showAll ? Math.ceil(filteredVolunteers.length / volunteersPerRow) : 2
  const displayedVolunteers = filteredVolunteers.slice(0, rowsToShow * volunteersPerRow)
  const hasMore = filteredVolunteers.length > displayedVolunteers.length

  return (
    <section id="volunteers" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            Our Volunteers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-orange-500">Amazing Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated volunteers are the heart of AWS Community Day Cebu. Get to know the passionate individuals who
            make this event possible.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search volunteers by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="sm:w-64 w-full">
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

        {/* Volunteers Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {displayedVolunteers.map((volunteer, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${(index % 20) * 50}ms` }}
            >
              <Card className="border-border/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {volunteer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-sm leading-tight">{volunteer.name}</h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {volunteer.categories.map((category, categoryIndex) => (
                      <Badge
                        key={categoryIndex}
                        className={`text-xs px-2 py-1 ${categoryColors[category as keyof typeof categoryColors]} border-0`}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="border-orange-500/30 text-orange-600 hover:bg-orange-500/10 px-8 py-3"
            >
              <ChevronDown className="w-4 h-4 mr-2" />
              Show More Volunteers ({filteredVolunteers.length - displayedVolunteers.length} remaining)
            </Button>
          </div>
        )}

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No volunteers found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
