"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, CreditCard, Users, Mail } from "lucide-react"

export default function TermsOfService() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simple Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AWS</span>
              </div>
            </Link>

            <Button
              variant="outline"
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 bg-transparent"
              onClick={() => {
                window.location.href = "/"
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Event
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Event{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Terms
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before registering for AWS Community Day Cebu 2025. By registering, you
              agree to these terms and conditions.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 23, 2025</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Event Registration</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>By registering for AWS Community Day Cebu 2025, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete registration information</li>
                    <li>Comply with all event rules, policies, and code of conduct</li>
                    <li>Respect other attendees, speakers, sponsors, and organizers</li>
                    <li>Follow venue rules and security procedures</li>
                    <li>Allow photography and recording for promotional purposes</li>
                    <li>Understand that registration does not guarantee admission if capacity is reached</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Tickets and Payments</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="font-semibold text-white mb-2">General Admission (Free)</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>No payment required for general admission tickets</li>
                      <li>Registration is required and subject to availability</li>
                      <li>Free tickets are non-transferable</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Paid Tickets (Builder+ and VIP)</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Payment must be completed within 24 hours of registration</li>
                      <li>All prices are in Philippine Pesos (PHP) and include applicable taxes</li>
                      <li>Tickets are non-refundable except as specified in our refund policy</li>
                      <li>Tickets may be transferred to another person with prior notification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Questions About Terms?</h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact our team before registering.
                </p>
                <a
                  href="mailto:legal@awscommunitydaycebu.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Legal Team
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
