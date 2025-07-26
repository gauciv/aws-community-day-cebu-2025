"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Download, FileText, Zap, Sparkles, Star, Crown } from "lucide-react"

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const [sponsorshipType, setSponsorshipType] = useState("")
  const [sponsorshipPackage, setSponsorshipPackage] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("sponsors")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleDownloadPrimer = () => {
    window.open(
      "https://drive.google.com/file/d/1HyIvUZQX81X58-RkSntHRfU0p8BD2De7/view",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const getPackageOptions = (type: string) => {
    if (type === "national") {
      return [
        { value: "platinum", label: "Platinum Package", icon: "👑", color: "from-purple-400 to-pink-400", description: "Premium tier with maximum visibility" },
        { value: "gold", label: "Gold Package", icon: "🥇", color: "from-yellow-400 to-orange-400", description: "High-impact sponsorship benefits" },
        { value: "silver", label: "Silver Package", icon: "🥈", color: "from-gray-300 to-gray-400", description: "Great value with solid exposure" }
      ]
    } else if (type === "local") {
      return [
        { value: "gold", label: "Gold Package", icon: "🥇", color: "from-yellow-400 to-orange-400", description: "Top-tier local community presence" },
        { value: "silver", label: "Silver Package", icon: "🥈", color: "from-gray-300 to-gray-400", description: "Strong local community engagement" },
        { value: "bronze", label: "Bronze Package", icon: "🥉", color: "from-amber-600 to-orange-600", description: "Essential local community support" }
      ]
    }
    return []
  }

  const handleTypeChange = (value: string) => {
    setSponsorshipType(value)
    setSponsorshipPackage("")
  }

  return (
    <section id="sponsors" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/8 via-yellow-500/12 to-orange-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/6 via-purple-500/10 to-indigo-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-400/50 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-twinkle delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-semibold mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Sponsorship Opportunities
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Partner with{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              AWS Community Day
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us in building the largest AWS community event in Cebu. Support local developers and showcase your
            commitment to cloud innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/20 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Sponsorship Primer
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Download our comprehensive sponsorship primer to learn about all available packages, benefits, and
                    opportunities to partner with AWS Community Day Cebu 2025.
                  </p>
                  
                  <Button
                    onClick={handleDownloadPrimer}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity font-semibold px-6 py-3 text-base w-full"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Sponsorship Primer
                  </Button>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-400" />
                    Why Sponsor AWS Community Day?
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Reach 500+ cloud professionals",
                      "Brand visibility in tech community", 
                      "Networking with industry leaders",
                      "Support local developer ecosystem"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm min-h-[600px]">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-8 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Become a Sponsor</h3>
                  <p className="text-gray-300">
                    Join our amazing sponsors and support the AWS community in Cebu.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between">

                <form className="space-y-6">
                  <div>
                    <Label htmlFor="company" className="text-white font-medium mb-2 block">
                      Company Name
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="Your company name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contact@company.com" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="sponsorship-type" className="text-white font-medium mb-2 block">
                      Sponsorship Type
                    </Label>
                    <Select value={sponsorshipType} onValueChange={handleTypeChange}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                        <SelectValue placeholder="Select sponsorship type" className="text-white" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="national" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                          🌍 National Sponsorship
                        </SelectItem>
                        <SelectItem value="local" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                          🏢 Local Sponsorship
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Always render the package field but with smooth transitions */}
                  <div className={`transition-all duration-300 ease-in-out ${sponsorshipType ? 'opacity-100 max-h-96' : 'opacity-50 max-h-24 pointer-events-none'}`}>
                    <Label htmlFor="sponsorship-package" className="text-white font-medium mb-2 block">
                      Sponsorship Package
                    </Label>
                    <Select 
                      value={sponsorshipPackage} 
                      onValueChange={setSponsorshipPackage}
                      disabled={!sponsorshipType}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed">
                        <SelectValue placeholder="Select sponsorship package" className="text-white" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {sponsorshipType && getPackageOptions(sponsorshipType).map((option) => (
                          <SelectItem 
                            key={option.value} 
                            value={option.value} 
                            className="text-white hover:bg-slate-700 focus:bg-slate-700"
                          >
                            {option.icon} {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {/* Package description with smooth transitions */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${sponsorshipType ? 'max-h-48 mt-3' : 'max-h-0 mt-0'}`}>
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-sm text-gray-300">
                          {sponsorshipType === "national" ? (
                            <>
                              <span className="text-orange-400 font-semibold">National Sponsorship:</span> Reach a broader audience across the Philippines with enhanced visibility and premium benefits.
                            </>
                          ) : sponsorshipType === "local" ? (
                            <>
                              <span className="text-orange-400 font-semibold">Local Sponsorship:</span> Connect with the local Cebu tech community with targeted exposure and community-focused benefits.
                            </>
                          ) : null}
                        </p>
                        
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${sponsorshipPackage && sponsorshipType ? 'max-h-32 mt-3' : 'max-h-0 mt-0'}`}>
                          <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">
                                {sponsorshipType && sponsorshipPackage && getPackageOptions(sponsorshipType).find(p => p.value === sponsorshipPackage)?.icon}
                              </span>
                              <span className="font-semibold text-orange-400">
                                {sponsorshipType && sponsorshipPackage && getPackageOptions(sponsorshipType).find(p => p.value === sponsorshipPackage)?.label}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              {sponsorshipType && sponsorshipPackage && getPackageOptions(sponsorshipType).find(p => p.value === sponsorshipPackage)?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white font-medium mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your sponsorship interests and any specific requirements..."
                      className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity font-semibold py-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/20 text-center flex-shrink-0">
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">For inquiries: awscloudclubctu@gmail.com</span>
                  </div>
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
