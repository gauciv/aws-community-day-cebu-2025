
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Download, FileText, Zap, Sparkles, Star, Crown } from "lucide-react"

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
    <section id="sponsors" className="py-12 md:py-20 lg:py-32 hero-gradient-dark relative overflow-hidden">
      {/* Enhanced Atmospheric Background with Shroud Depth */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Shroud SVG for Depth Behind Content */}
          <div
            className="constellation-svg"
            style={{ top: "20%", left: "8%", width: "250px", height: "auto", opacity: "0.04" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto animate-gentle-pulse"
            />
          </div>
          
          <div
            className="constellation-svg"
            style={{ bottom: "15%", right: "10%", width: "220px", height: "auto", opacity: "0.06" }}
          >
            <img 
              src="/art-assets/shroud.svg" 
              alt="Atmospheric shroud" 
              className="w-full h-auto animate-float-slow"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>

          {/* Cloud SVG for Background Texture */}
          <div
            className="constellation-svg"
            style={{ top: "40%", right: "20%", width: "160px", height: "auto", opacity: "0.08" }}
          >
            <img 
              src="/art-assets/clouds.svg" 
              alt="Atmospheric clouds" 
              className="w-full h-auto animate-float-reverse"
            />
          </div>
          
          {/* Constellation Frames */}
          <div
            className="constellation-svg constellation-hover-spin"
            style={{ top: "25%", left: "20%", width: "80px", height: "auto" }}
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
            style={{ bottom: "30%", right: "25%", width: "75px", height: "auto" }}
          >
            <img 
              src="/art-assets/pegasus.svg" 
              alt="Pegasus constellation" 
              className="w-full h-auto constellation-glow-orange animate-gentle-shimmer-delayed"
              style={{ opacity: "0.35" }}
            />
          </div>
          
          {/* Enhanced gradient orbs with more color variety */}
          <div className="absolute top-40 right-1/5 w-48 h-48 bg-gradient-to-r from-orange-500/8 via-amber-500/12 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-56 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-500/8 via-purple-500/10 to-pink-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Optimized constellation network */}
          <div className="constellation-dot constellation-dot-medium constellation-glow" style={{top: '20%', left: '15%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{top: '35%', right: '20%'}}></div>
          <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '40%', left: '12%'}}></div>
          <div className="constellation-dot constellation-dot-small" style={{bottom: '25%', right: '18%'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 shadow-lg">
            <Crown className="w-4 h-4 mr-2 animate-pulse" />
            Sponsorship Opportunities
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Partner with{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              AWS Community Day
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join us in building the largest AWS community event in Cebu. Support local developers and showcase your
            commitment to cloud innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Enhanced Sponsorship Information */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                <Card className="relative border-2 border-white/20 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 bg-white/5 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="text-center mb-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                          <FileText className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors duration-500">
                        Sponsorship Primer
                      </h3>
                      
                      <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                        Download our comprehensive sponsorship primer to learn about all available packages, benefits, and
                        opportunities to partner with AWS Community Day Cebu 2025.
                      </p>
                      
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Button
                          onClick={handleDownloadPrimer}
                          className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-all font-black px-10 py-4 text-xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 duration-500"
                        >
                          <Download className="w-6 h-6 mr-3" />
                          Download Sponsorship Primer
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="text-center">
                        <h4 className="text-2xl font-black text-white mb-6 flex items-center justify-center gap-2">
                          <Star className="w-6 h-6 text-orange-400" />
                          Why Sponsor AWS Community Day?
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {[
                            "Reach 500+ cloud professionals",
                            "Brand visibility in tech community", 
                            "Networking with industry leaders",
                            "Support local developer ecosystem"
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 group/item">
                              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                              <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors duration-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                <Card className="relative border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 backdrop-blur-sm shadow-2xl hover:shadow-orange-500/30 transition-all duration-700">
                  <CardContent className="p-10 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-black text-white mb-6 group-hover:text-orange-400 transition-colors duration-500">
                      Custom Sponsorship Packages
                    </h4>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                      Have specific requirements? We can create a custom sponsorship package tailored to your needs and
                      budget. Let's discuss how we can work together to make this event amazing.
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-orange-500/40 text-orange-400 hover:bg-orange-500/20 bg-transparent hover:border-orange-500/60 font-bold px-8 py-3 text-lg transition-all duration-500 hover:scale-105"
                    >
                      Discuss Custom Package
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                <Card className="relative border-2 border-white/20 shadow-2xl shadow-orange-500/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-700">
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="text-center mb-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3">Become a Sponsor</h3>
                      <p className="text-gray-300 font-medium">
                        Join our amazing sponsors and support the AWS community in Cebu.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="company" className="text-white font-bold text-base mb-2 block">
                          Company Name
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl blur-sm"></div>
                          <Input 
                            id="company" 
                            placeholder="Your company name" 
                            className="relative bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 font-medium focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/30" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-white font-bold text-base mb-2 block">
                          Email Address
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-sm"></div>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="contact@company.com" 
                            className="relative bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 font-medium focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/30" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="tier" className="text-white font-bold text-base mb-2 block">
                          Interested Package
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-sm"></div>
                          <select className="relative w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl text-white font-medium focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/30">
                            <option className="bg-slate-900 text-white">Select sponsorship package</option>
                            <option className="bg-slate-900 text-white">Platinum Package</option>
                            <option className="bg-slate-900 text-white">Gold Package</option>
                            <option className="bg-slate-900 text-white">Silver Package</option>
                            <option className="bg-slate-900 text-white">Community Package</option>
                            <option className="bg-slate-900 text-white">Custom Package</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-white font-bold text-base mb-2 block">
                          Message
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-sm"></div>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your sponsorship interests and any specific requirements..."
                            className="relative min-h-[120px] bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 font-medium focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/30"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Button className="relative w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-all font-black text-lg py-4 shadow-2xl hover:scale-105 duration-500">
                          <Mail className="w-5 h-5 mr-3" />
                          Send Inquiry
                        </Button>
                      </div>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/20">
                      <div className="flex items-center gap-3 text-gray-300 justify-center">
                        <Mail className="w-5 h-5 text-orange-400" />
                        <span className="font-medium">For inquiries, email us at: awscloudclubctu@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
