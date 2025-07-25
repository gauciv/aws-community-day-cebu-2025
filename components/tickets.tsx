"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, CheckCircle, Star, Zap, ExternalLink } from "lucide-react"

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
    // Early bird ends on August 30, 2025
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
      badge: "Most Popular",
      badgeColor: "bg-orange-500",
      popular: true,
      icon: Users,
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
      ],
      badge: "Best Value",
      badgeColor: "bg-blue-500",
      popular: false,
      icon: Zap,
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
      badgeColor: "bg-purple-500",
      popular: false,
      icon: Star,
    },
  ]

  return (
    <section id="tickets" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            Event Tickets
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secure Your <span className="text-orange-500">Spot Today</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join 500+ developers, architects, and cloud enthusiasts for an unforgettable day of learning and networking.
            Choose the ticket that works best for you.
          </p>
        </div>

        {/* Early Bird Countdown Timer */}
        {isEarlyBirdActive && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-orange-400 font-semibold">Early Bird Special Ends In:</span>
              </div>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-3 mb-2">
                      <span className="text-2xl font-bold">{item.value.toString().padStart(2, "0")}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Save up to ₱200 with early bird pricing until August 30, 2025
              </p>
            </div>
          </div>
        )}

        {/* Ticket Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card
                className={`relative border-2 transition-all duration-300 hover:scale-105 h-full ${
                  ticket.popular
                    ? "border-orange-500/50 shadow-lg shadow-orange-500/20 bg-gradient-to-br from-orange-500/5 to-yellow-500/5"
                    : "border-border/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-4 py-1 text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                      <ticket.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className={`${ticket.badgeColor} text-white border-0 mb-4`}>{ticket.badge}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{ticket.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {isEarlyBirdActive ? (
                      <>
                        <span className="text-4xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                          {ticket.earlyBirdPrice}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">{ticket.price}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        {ticket.price}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ticket.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleRegisterClick}
                    className={`w-full font-semibold transition-all duration-300 ${
                      ticket.popular
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                        : "bg-transparent border-2 border-orange-500/30 text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/50"
                    }`}
                  >
                    {ticket.popular && <Zap className="w-4 h-4 mr-2" />}
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Join us on September 13, 2025</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="font-medium">September 13, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="font-medium">1:00 PM - 7:00 PM (PHT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="font-medium">500+ Expected Attendees</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-foreground">UP Cebu Performing Arts Hall, Gorordo Avenue, Lahug</span>
          </div>
        </div>

        {/* Map with Proper Location */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-border/50 overflow-hidden">
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
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TicketNation Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {isEarlyBirdActive
              ? "🎉 Early bird pricing available until August 30, 2025"
              : "Regular pricing now in effect"}
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-semibold text-orange-600">TicketNation</span> • All prices are in
            Philippine Pesos • Tickets are non-refundable but transferable
          </p>
        </div>
      </div>
    </section>
  )
}
