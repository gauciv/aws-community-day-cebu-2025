"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Download, FileText, Zap } from "lucide-react"

export function Sponsors() {
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

    const element = document.getElementById("sponsors")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleDownloadPrimer = () => {
    window.open(
      "https://drive.google.com/file/d/1HyIvUZQX81X58-RkSntHRfU0p8BD2De7/view",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="sponsors" className="py-12 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-medium mb-6">
            Sponsorship Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Partner with <span className="text-orange-500">AWS Community Day</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us in building the largest AWS community event in Cebu. Support local developers and showcase your
            commitment to cloud innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Sponsorship Information */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <Card className="border-border/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Sponsorship Primer</h3>
                    <p className="text-muted-foreground mb-6">
                      Download our comprehensive sponsorship primer to learn about all available packages, benefits, and
                      opportunities to partner with AWS Community Day Cebu 2025.
                    </p>
                    <Button
                      onClick={handleDownloadPrimer}
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Sponsorship Primer
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Why Sponsor AWS Community Day?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Reach 500+ cloud professionals</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Brand visibility in tech community</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Networking with industry leaders</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Support local developer ecosystem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-yellow-500/5">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-4">Custom Sponsorship Packages</h4>
                  <p className="text-muted-foreground mb-6">
                    Have specific requirements? We can create a custom sponsorship package tailored to your needs and
                    budget. Let's discuss how we can work together to make this event amazing.
                  </p>
                  <Button
                    variant="outline"
                    className="border-orange-500/30 text-orange-600 hover:bg-orange-500/10 bg-transparent"
                  >
                    Discuss Custom Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-border/50 shadow-lg shadow-orange-500/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Become a Sponsor</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our amazing sponsors and support the AWS community in Cebu.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input id="company" placeholder="Your company name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="contact@company.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="tier" className="text-sm font-medium">
                        Interested Package
                      </Label>
                      <select className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm">
                        <option>Select sponsorship package</option>
                        <option>Platinum Package</option>
                        <option>Gold Package</option>
                        <option>Silver Package</option>
                        <option>Community Package</option>
                        <option>Custom Package</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your sponsorship interests and any specific requirements..."
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>awscloudclubctu@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
