"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showRegisterButton, setShowRegisterButton] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 50)

          // Show register button only when scrolled past the hero section
          const heroSection = document.querySelector('section')
          if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
            setShowRegisterButton(scrollY >= heroBottom - 200)
          }

          // Determine active section with smooth transitions
          const sections = ["about", "program", "speakers", "tickets", "sponsors", "volunteers"]
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section === "program" ? "schedule" : section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 150 && rect.bottom >= 150
            }
            return false
          })

          if (currentSection) {
            setActiveSection(currentSection)
          } else if (scrollY < 100) {
            setActiveSection("")
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#schedule", label: "Program", id: "program" },
    { href: "#speakers", label: "Speakers", id: "speakers" },
    { href: "#tickets", label: "Tickets", id: "tickets" },
    { href: "#sponsors", label: "Sponsors", id: "sponsors" },
    { href: "#volunteers", label: "Volunteers", id: "volunteers" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleRegisterClick = () => {
    window.open("https://ticketnation.ph/events/aws_community_day_cebu_2025", "_blank", "noopener,noreferrer")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
             <img src="/aws-logo.svg" alt="AWS Logo" className="h-10 w-10 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-300 hover:text-white transition-colors duration-200 font-medium px-3 py-2 ${
                  activeSection === item.id ? "text-orange-400" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Only show when scrolled past hero section */}
          <div className="flex items-center space-x-4">
            <div className={`transition-all duration-500 ease-out ${
              showRegisterButton 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }`}>
              <Button
                onClick={handleRegisterClick}
                className="hidden sm:inline-flex bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t backdrop-blur-md bg-gray-900/95 border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(item.href)
                  }}
                  className={`block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 font-medium rounded-md ${
                    activeSection === item.id ? "text-orange-400 bg-gray-800/50" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleRegisterClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity font-semibold"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
