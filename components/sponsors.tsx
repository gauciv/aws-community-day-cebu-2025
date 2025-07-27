"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Download, FileText, Zap, Sparkles, Star, Crown, CheckCircle, Loader2 } from "lucide-react"

export function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const [sponsorshipType, setSponsorshipType] = useState("")
  const [sponsorshipPackage, setSponsorshipPackage] = useState("")
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    contactPerson: "",
    phone: "",
    message: ""
  })
  const [emailStatus, setEmailStatus] = useState<'idle' | 'opening' | 'success'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0)
  const [submissionCount, setSubmissionCount] = useState<number>(0)

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const constructEmailBody = () => {
    return `Dear AWS Community Day Cebu Team,

${formData.message || 'I am interested in becoming a sponsor for AWS Community Day Cebu 2025.'}

Thank you for considering our sponsorship proposal. We look forward to hearing from you soon and potentially partnering with you for this exciting community event.

Best regards,

${formData.contactPerson}
${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}`
  }

  const constructEmailSubject = () => {
    const typeText = sponsorshipType === 'national' ? 'National' : sponsorshipType === 'local' ? 'Local' : ''
    const packageText = sponsorshipPackage ? getPackageOptions(sponsorshipType).find(p => p.value === sponsorshipPackage)?.label || '' : ''
    return `AWS Community Day Cebu - ${typeText} ${packageText} Sponsorship Inquiry from ${formData.company}`
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters'
    }
    
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required'
    } else if (formData.contactPerson.trim().length < 2) {
      newErrors.contactPerson = 'Contact person must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Phone number must be at least 10 characters'
    }
    
    if (!sponsorshipType) {
      newErrors.sponsorshipType = 'Please select a sponsorship type'
    }
    if (!sponsorshipPackage) {
      newErrors.sponsorshipPackage = 'Please select a sponsorship package'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isFormValid = () => {
    return formData.company.trim().length >= 2 && 
           formData.contactPerson.trim().length >= 2 && 
           formData.email.trim() && 
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
           formData.phone.trim().length >= 10 && 
           sponsorshipType && 
           sponsorshipPackage && 
           formData.message.trim().length >= 20
  }

  const handleSendInquiry = () => {
    if (!validateForm()) {
      return
    }

    // Anti-spam checks
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmissionTime
    
    // Prevent rapid submissions (minimum 30 seconds between submissions)
    if (timeSinceLastSubmission < 30000 && lastSubmissionTime > 0) {
      setErrors({ general: 'Please wait 30 seconds before sending another inquiry.' })
      return
    }
    
    // Limit submissions per session (maximum 3 per session)
    if (submissionCount >= 3) {
      setErrors({ general: 'Maximum 3 inquiries per session. Please refresh the page to send more.' })
      return
    }

    try {
      setEmailStatus('opening')
      setLastSubmissionTime(now)
      setSubmissionCount(prev => prev + 1)

      const subject = constructEmailSubject()
      const body = constructEmailBody()
      const mailtoLink = `mailto:awscommunitydaycebu.2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      window.open(mailtoLink, '_blank')
      
      setTimeout(() => {
        setEmailStatus('success')
        setTimeout(() => {
          setEmailStatus('idle')
        }, 5000)
      }, 1000)
    } catch (error) {
      console.error('Error opening email client:', error)
      setEmailStatus('idle')
      setErrors({ general: 'Failed to open email client. Please try again.' })
    }
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Sponsorship Opportunities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2 sm:px-0">
            <span className="block sm:inline">Partner with</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent block sm:inline">
              AWS Community Day
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 md:px-0">
            Join us in building the largest AWS community event in Cebu. Support local developers and showcase your
            commitment to cloud innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/20 transition-colors duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Sponsorship Primer
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    Download our comprehensive sponsorship primer to learn about all available packages, benefits, and
                    opportunities to partner with AWS Community Day Cebu 2025.
                  </p>
                  
                  <Button
                    onClick={handleDownloadPrimer}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity font-semibold px-4 sm:px-6 py-3 text-sm sm:text-base w-full min-h-[44px] touch-manipulation"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download Sponsorship Primer
                  </Button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    Why Sponsor AWS Community Day?
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {[
                      "Reach 500+ cloud professionals",
                      "Brand visibility in tech community", 
                      "Networking with industry leaders",
                      "Support local developer ecosystem"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                <div className="text-center mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Quick Email Setup</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    Fill out this form for a quick email setup, or draft your own email and send it to <span className="text-orange-400 break-all">awscommunitydaycebu.2025@gmail.com</span>
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between">

                <form className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="company" className="text-white font-medium mb-2 block text-sm sm:text-base">
                      Company Name *
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="Your company name" 
                      value={formData.company}
                      onChange={(e) => {
                        handleInputChange('company', e.target.value)
                        if (errors.company) setErrors(prev => ({...prev, company: ''}))
                      }}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm sm:text-base min-h-[44px] touch-manipulation ${errors.company ? 'border-red-500' : ''}`}
                    />
                    {errors.company && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <Label htmlFor="contactPerson" className="text-white font-medium mb-2 block">
                      Contact Person *
                    </Label>
                    <Input 
                      id="contactPerson" 
                      placeholder="Your full name" 
                      value={formData.contactPerson}
                      onChange={(e) => {
                        handleInputChange('contactPerson', e.target.value)
                        if (errors.contactPerson) setErrors(prev => ({...prev, contactPerson: ''}))
                      }}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 min-h-[44px] touch-manipulation ${errors.contactPerson ? 'border-red-500' : ''}`}
                    />
                    {errors.contactPerson && <p className="text-red-400 text-sm mt-1">{errors.contactPerson}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contact@company.com" 
                      value={formData.email}
                      onChange={(e) => {
                        handleInputChange('email', e.target.value)
                        if (errors.email) setErrors(prev => ({...prev, email: ''}))
                      }}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 min-h-[44px] touch-manipulation ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white font-medium mb-2 block">
                      Phone Number *
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+63 XXX XXX XXXX" 
                      value={formData.phone}
                      onChange={(e) => {
                        handleInputChange('phone', e.target.value)
                        if (errors.phone) setErrors(prev => ({...prev, phone: ''}))
                      }}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 min-h-[44px] touch-manipulation ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="sponsorship-type" className="text-white font-medium mb-2 block">
                      Sponsorship Type *
                    </Label>
                    <Select value={sponsorshipType} onValueChange={(value) => {
                      handleTypeChange(value)
                      if (errors.sponsorshipType) setErrors(prev => ({...prev, sponsorshipType: ''}))
                    }}>
                      <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 ${errors.sponsorshipType ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select sponsorship type" className="text-white" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600 max-h-60 overflow-y-auto">
                        <SelectItem value="national" className="text-white hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-200">
                          🌍 National Sponsorship
                        </SelectItem>
                        <SelectItem value="local" className="text-white hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-200">
                          🏢 Local Sponsorship
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.sponsorshipType && <p className="text-red-400 text-sm mt-1">{errors.sponsorshipType}</p>}
                  </div>

                  {/* Always render the package field but with smooth transitions */}
                  <div className={`transition-all duration-300 ease-in-out ${sponsorshipType ? 'opacity-100 max-h-96' : 'opacity-50 max-h-24 pointer-events-none'}`}>
                    <Label htmlFor="sponsorship-package" className="text-white font-medium mb-2 block">
                      Sponsorship Package *
                    </Label>
                    <Select 
                      value={sponsorshipPackage} 
                      onValueChange={(value) => {
                        setSponsorshipPackage(value)
                        if (errors.sponsorshipPackage) setErrors(prev => ({...prev, sponsorshipPackage: ''}))
                      }}
                      disabled={!sponsorshipType}
                    >
                      <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed ${errors.sponsorshipPackage ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select sponsorship package" className="text-white" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600 max-h-60 overflow-y-auto">
                        {sponsorshipType && getPackageOptions(sponsorshipType).map((option) => (
                          <SelectItem 
                            key={option.value} 
                            value={option.value} 
                            className="text-white hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-200"
                          >
                            {option.icon} {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.sponsorshipPackage && <p className="text-red-400 text-sm mt-1">{errors.sponsorshipPackage}</p>}
                    
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
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your sponsorship interests, specific requirements, or any questions you may have..."
                      value={formData.message}
                      onChange={(e) => {
                        handleInputChange('message', e.target.value)
                        if (errors.message) setErrors(prev => ({...prev, message: ''}))
                      }}
                      className={`min-h-[100px] sm:min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 touch-manipulation ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-400">This message will appear in the email body</p>
                      <p className={`text-xs ${
                        formData.message.length < 20 ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {formData.message.length} characters (min: 20)
                      </p>
                    </div>
                  </div>
                  
                  {errors.general && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm text-center">{errors.general}</p>
                    </div>
                  )}

                  <Button 
                    type="button"
                    onClick={handleSendInquiry}
                    disabled={emailStatus === 'opening' || !isFormValid()}
                    className={`w-full font-semibold py-3 sm:py-4 text-sm sm:text-base transform transition-all duration-300 min-h-[44px] touch-manipulation ${
                      emailStatus === 'success' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600' 
                        : !isFormValid()
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:scale-105 active:scale-95'
                    } ${(emailStatus === 'opening' || !isFormValid()) ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {emailStatus === 'opening' && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                    {emailStatus === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
                    {emailStatus === 'idle' && <Mail className="w-5 h-5 mr-2" />}
                    
                    {emailStatus === 'opening' && 'Opening Email Client...'}
                    {emailStatus === 'success' && 'Email Client Opened Successfully!'}
                    {emailStatus === 'idle' && 'Send Inquiry via Email'}
                  </Button>

                  {/* Status Messages */}
                  {emailStatus === 'opening' && (
                    <div className="text-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-blue-400 text-sm">
                        Opening your email client with pre-filled sponsorship inquiry...
                      </p>
                    </div>
                  )}

                  {emailStatus === 'success' && (
                    <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-green-400 text-sm font-medium">
                        ✅ Email client opened successfully!
                      </p>
                      <p className="text-green-300 text-xs mt-1">
                        Please review and send the pre-filled email from your email client.
                      </p>
                    </div>
                  )}

                  <div className="text-center">
                    <p className="text-xs text-gray-400">
                      * All fields are required. This will open your email client with pre-filled sponsorship information.
                    </p>
                    {!isFormValid() && (
                      <p className="text-xs text-red-400 mt-1">
                        Please fill in all required fields to send inquiry
                      </p>
                    )}
                    {submissionCount > 0 && (
                      <p className="text-xs text-orange-400 mt-1">
                        Inquiries sent this session: {submissionCount}/3
                      </p>
                    )}
                  </div>
                </form>

                <div className="mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t border-white/20 text-center flex-shrink-0">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span className="text-xs sm:text-sm break-all sm:break-normal">For inquiries: awscommunitydaycebu.2025@gmail.com</span>
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
