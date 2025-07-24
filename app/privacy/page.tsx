'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Cookie, Mail, Calendar } from 'lucide-react'

export default function PrivacyPolicy() {
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
                window.location.href = '/'
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Your Privacy{' '}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency about how we collect, use, and
              protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 23, 2025</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>When you register for AWS Community Day Cebu 2025, we may collect the following information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, phone number, company/organization,
                      job title
                    </li>
                    <li>
                      <strong>Registration Data:</strong> Ticket type, dietary preferences, accessibility requirements
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Newsletter subscriptions, event updates, feedback responses
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type, device information for website
                      analytics
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Event registration and ticket management</li>
                    <li>Communication about event details, updates, and changes</li>
                    <li>Providing customer support and responding to inquiries</li>
                    <li>Improving our event experience and services</li>
                    <li>Compliance with legal obligations and venue requirements</li>
                    <li>Creating attendee certificates and networking opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Cookies and Tracking</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Our website uses cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Provide social media integration features</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure data storage with reputable cloud providers</li>
                    <li>Regular backup and disaster recovery procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Your Rights</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> Request a copy of your personal information
                    </li>
                    <li>
                      <strong>Correction:</strong> Update or correct inaccurate information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Receive your data in a structured format
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your personal information
                    </li>
                    <li>
                      <strong>Withdrawal:</strong> Withdraw consent for data processing
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a
                      href="mailto:privacy@awscommunitydaycebu.com"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      privacy@awscommunitydaycebu.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Questions About Privacy?</h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please don&apos;t hesitate
                  to contact us.
                </p>
                <a
                  href="mailto:privacy@awscommunitydaycebu.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Privacy Team
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
