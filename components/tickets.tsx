
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, CheckCircle, Star, Zap, ExternalLink, Sparkles } from "lucide-react"

export function Tickets() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("tickets")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const earlyBirdEnd = new Date("2025-08-30T23:59:59")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = earlyBirdEnd.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
        setIsEarlyBirdActive(true)
      } else {
        setIsEarlyBirdActive(false)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegisterClick = () => {
    window.open("https://ticketnation.ph/events/aws_community_day_cebu_2025/tickets", "_blank", "noopener,noreferrer")
  }

  const ticketTypes = [
    {
      name: "General",
      price: "₱500",
      earlyBirdPrice: "₱400",
      description: "Get access to the Main Event on September 13, 1:00 PM–7:00 PM",
      features: [
        "Main Event access (1:00 PM–7:00 PM)",
        "General admission",
        "Official event merchandise",
        "Networking opportunities",
        "Access to all tech talks",
      ],
      badge: "Essential",
      badgeColor: "bg-gradient-to-r from-gray-500 to-gray-600",
      popular: false,
      icon: Users,
      glowColor: "gray"
    },
    {
      name: "Builder+",
      price: "₱1,000",
      earlyBirdPrice: "₱800",
      description: "Level up with access to both Workshop and Main Event",
      features: [
        "Workshop access (9:00 AM–12:00 PM)",
        "Main Event access (1:00 PM–7:00 PM)",
        "General merchandise",
        "Hands-on learning experience",
        "Priority seating",
      ],
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      popular: true,
      icon: Zap,
      glowColor: "orange"
    },
    {
      name: "VIP",
      price: "₱1,200",
      earlyBirdPrice: "₱1,000",
      description: "Enjoy the full VIP experience with exclusive perks",
      features: [
        "Workshop access (9:00 AM–12:00 PM)",
        "Main Event access (1:00 PM–7:00 PM)",
        "Exclusive VIP Dinner invitation",
        "General merch + exclusive AWS Community Day Cebu polo",
        "Complete experience for professionals",
      ],
      badge: "Premium",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      popular: false,
      icon: Star,
      glowColor: "purple"
    },
  ]

  return (
    <section id="tickets" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      {/* Enhanced Atmospheric Background with Pricing Highlights */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Ray SVG for CTA Button Highlights */}
          <div
            className="constellation-svg animate-ray-pulse"
            style={{ top: "60%", left: "15%", width: "200px", height: "auto", opacity: "0.04", '--ray-rotation': '25deg' } as React.CSSProperties}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto"
            />
          </div>
          
          <div
            className="constellation-svg animate-ray-pulse"
            style={{ bottom: "30%", right: "18%", width: "180px", height: "auto", opacity: "0.06", '--ray-rotation': '-40deg' } as React.CSSProperties}
          >
            <img 
              src="/art-assets/ray.svg" 
              alt="Light ray" 
              className="w-full h-auto"
            />
          </div>

          {/* Shroud SVG Behind Ticket Cards */}
          <div
            className="constellation-svg animate-shroud-depth"
            style={{ top: "20%", left: "10%", width: "300px", height: "auto", opacity: "0.03" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Constellation Pricing Accents */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "35%", left: "8%", width: "70px", height: "auto" }}
          >
            <img 
              src="/art-assets/cassiopeia.svg" 
              alt="Cassiopeia constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer"
              style={{ opacity: "0.4" }}
            />
          </div>

          <div
            className="constellation-svg constellation-hover-spin"
            style={{ bottom: "25%", right: "12%", width: "65px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>
          
          {/* Enhanced multi-layered gradient orbs */}
          <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-yellow-500/12 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/8 via-purple-500/12 to-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-1/6 w-28 h-28 bg-gradient-to-r from-green-500/8 via-emerald-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Optimized constellation network */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '25%', left: '18%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '40%', right: '22%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '35%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '20%', right: '20%'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 animate-twinkle" />
            Event Tickets
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Secure Your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Spot Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join 200+ developers, architects, and cloud enthusiasts for an unforgettable day of learning and networking.
            Choose the ticket that works best for you.
          </p>
        </div>

        {/* Enhanced Early Bird Countdown Timer */}
        {isEarlyBirdActive && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-orange-400 animate-pulse" />
                  <span className="text-orange-400 font-black text-xl">Early Bird Special Ends In:</span>
                </div>
                <div className="grid grid-cols-4 gap-6 max-w-lg mx-auto mb-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl p-4 mb-3 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                          <span className="text-3xl font-black">{item.value.toString().padStart(2, "0")}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-base font-bold px-6 py-2 shadow-lg">
                    Save up to ₱200 with early bird pricing until August 30, 2025
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card
                className={`relative border-2 transition-all duration-700 hover:scale-105 h-full group ${
                  ticket.popular
                    ? "border-orange-500/50 shadow-2xl shadow-orange-500/30 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-orange-500/10"
                    : "border-white/20 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/20 bg-white/5"
                } backdrop-blur-sm`}
              >
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  ticket.glowColor === 'orange' ? 'from-orange-500/20 to-yellow-500/20' :
                  ticket.glowColor === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
                  ticket.glowColor === 'gray' ? 'from-gray-500/20 to-gray-600/20' :
                  'from-purple-500/20 to-pink-500/20'
                } rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>

                {ticket.popular && (
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-base font-black shadow-xl animate-pulse">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                

                <CardHeader className="text-center pb-4 sm:pb-6 relative p-4 sm:p-6">
                  {/* Floating sparkles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <Sparkles className="w-5 h-5 text-orange-400 animate-twinkle" />
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full ${ticket.badgeColor} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <ticket.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <Badge className={`${ticket.badgeColor} text-white border-0 mb-4 sm:mb-6 text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 shadow-lg`}>
                      {ticket.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 group-hover:text-orange-400 transition-colors duration-500">
                    {ticket.name}
                  </CardTitle>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {isEarlyBirdActive ? (
                      <>
                        <span className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                          {ticket.earlyBirdPrice}
                        </span>
                        <span className="text-lg sm:text-xl text-gray-400 line-through">{ticket.price}</span>
                      </>
                    ) : (
                      <span className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                        {ticket.price}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {ticket.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <ul className="space-y-3 sm:space-y-4 flex-1 mb-6 sm:mb-8">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 group/item">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  </CardContent>
                
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Event Details */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12">
            Join us on{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              September 13, 2025
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: "September 13, 2025", color: "orange" },
              { icon: Clock, label: "1:00 PM - 7:00 PM (PHT)", color: "blue" },
              { icon: Users, label: "500+ Expected Attendees", color: "purple" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  item.color === 'orange' ? 'from-orange-500/20 to-yellow-500/20' :
                  item.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
                  'from-purple-500/20 to-pink-500/20'
                } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 group-hover:border-orange-500/30 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-bold text-white text-lg group-hover:text-orange-400 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 group-hover:border-orange-500/30 transition-all duration-500">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-white text-xl">UP Cebu Performing Arts Hall, Gorordo Avenue, Lahug</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            <Card className="relative border-2 border-white/20 overflow-hidden shadow-2xl group-hover:border-orange-500/30 transition-all duration-700">
              <CardContent className="p-0">
                <div className="aspect-[16/9] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4234567890123!2d123.89012345678901!3d10.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999f4c2f8b7c5%3A0x8b5c5e5f5e5e5e5e!2sUniversity%20of%20the%20Philippines%20Cebu%20Performing%20Arts%20Hall%2C%20Gorordo%20Ave%2C%20Lahug%2C%20Cebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 rounded-xl"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
            <Badge className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-lg font-bold px-6 py-3 shadow-xl">
              {isEarlyBirdActive
                ? "🎉 Early bird pricing available until August 30, 2025"
                : "Regular pricing now in effect"}
            </Badge>
          </div>
          <p className="text-gray-400 text-lg">
            Powered by <span className="font-bold text-orange-400">TicketNation</span> • All prices are in
            Philippine Pesos • Tickets are non-refundable but transferable
          </p>
        </div>
      </div>
    </section>
  )
}
