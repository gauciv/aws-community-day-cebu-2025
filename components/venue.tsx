"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Bus, Utensils, Wifi, Accessibility } from "lucide-react"

export function Venue() {
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

    const element = document.getElementById("venue")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const venueFeatures = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Reliable internet connectivity throughout the venue",
    },
    {
      icon: Accessibility,
      title: "Accessible Facilities",
      description: "Wheelchair accessible with modern amenities",
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "On-campus parking spaces for attendees",
    },
    {
      icon: Utensils,
      title: "Food & Beverages",
      description: "Catering services and nearby dining options",
    },
  ]

  const transportationOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on campus. GPS coordinates: 10.2937° N, 123.9019° E",
    },
    {
      icon: Bus,
      title: "Public Transport",
      description: "Take jeepneys to UP Cebu or use ride-sharing services like Grab",
    },
  ]

  return (
    <section id="venue" className="py-12 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle Constellation Background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          <div
            className="constellation-dot constellation-dot-small constellation-glow"
            style={{ top: "18%", left: "12%" }}
          ></div>
          <div className="constellation-star constellation-star-small" style={{ top: "30%", right: "10%" }}></div>
          <div className="constellation-circle" style={{ bottom: "20%", left: "8%" }}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{ top: "45%", right: "15%" }}></div>
          <div className="constellation-dot constellation-dot-tiny" style={{ bottom: "40%", right: "12%" }}></div>
          <div className="constellation-star constellation-star-small" style={{ bottom: "30%", left: "18%" }}></div>
          <div
            className="constellation-line"
            style={{ top: "25%", right: "12%", width: "22px", transform: "rotate(60deg)" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            Event Venue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            University of the Philippines Cebu
            <span className="text-orange-500"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us at the prestigious UP Cebu Performing Arts Hall & AVR1, a state-of-the-art facility perfect for our
            community gathering. Experience the vibrant atmosphere and cutting-edge amenities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Venue Information */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-border/50 mb-8 hover:shadow-lg hover:shadow-orange-500/10 transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Venue Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      University of the Philippines Cebu
                      <br />
                      Performing Arts Hall & AVR1
                      <br />
                      Gorordo Avenue, Lahug
                      <br />
                      Cebu City, 6000 Philippines
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {venueFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-orange-500/5 transition-colors duration-200"
                    >
                      <feature.icon className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="border-border/50 hover:shadow-lg hover:shadow-orange-500/10 transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Getting There</h3>
                <div className="space-y-4">
                  {transportationOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-orange-500/5 transition-colors duration-200"
                    >
                      <option.icon className="w-6 h-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Contact:</strong> For venue-specific questions, call UP Cebu at
                    +63 32 232 8187 or email events@upcebu.edu.ph
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-border/50 h-full hover:shadow-lg hover:shadow-orange-500/10 transition-shadow duration-200">
              <CardContent className="p-0 h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4234567890123!2d123.9019!3d10.2937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99d8b1234567%3A0x1234567890abcdef!2sUniversity%20of%20the%20Philippines%20Cebu!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />

                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">UP Cebu Performing Arts Hall</p>
                          <p className="text-sm text-muted-foreground">September 13, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg"
                      onClick={() =>
                        window.open("https://maps.google.com/?q=University+of+the+Philippines+Cebu", "_blank")
                      }
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
