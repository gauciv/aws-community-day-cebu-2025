"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Mail } from "lucide-react"

export default function CodeOfConduct() {
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
              <Heart className="w-4 h-4 mr-2" />
              Code of Conduct
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Building an{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Inclusive
              </span>{" "}
              Community
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              AWS Community Day Cebu is dedicated to providing a harassment-free, inclusive, and welcoming experience
              for everyone, regardless of background or identity.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 23, 2025</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg">
                    We are committed to creating a welcoming and inclusive environment where all participants can learn,
                    network, and contribute to the AWS community regardless of:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Age, gender, or gender identity</li>
                      <li>Sexual orientation</li>
                      <li>Race, ethnicity, or nationality</li>
                      <li>Religion or belief system</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Physical appearance or disability</li>
                      <li>Technical skill level or experience</li>
                      <li>Employment status or company</li>
                      <li>Educational background</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Expected Behavior</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>All participants are expected to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Be respectful:</strong> Treat everyone with courtesy and respect, both in person and
                      online
                    </li>
                    <li>
                      <strong>Be inclusive:</strong> Welcome newcomers and help create an environment where everyone
                      feels valued
                    </li>
                    <li>
                      <strong>Be collaborative:</strong> Share knowledge freely and support others in their learning
                      journey
                    </li>
                    <li>
                      <strong>Be professional:</strong> Maintain appropriate language and behavior in all interactions
                    </li>
                    <li>
                      <strong>Be mindful:</strong> Consider how your words and actions affect others in the community
                    </li>
                    <li>
                      <strong>Be constructive:</strong> Provide helpful feedback and engage in meaningful discussions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Together We Build Better</h3>
                <p className="text-gray-300 mb-6">
                  By following this Code of Conduct, we create an environment where everyone can learn, grow, and
                  contribute to the AWS community. Thank you for helping make AWS Community Day Cebu a welcoming space
                  for all.
                </p>
                <a
                  href="mailto:conduct@awscommunitydaycebu.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Report an Issue
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
