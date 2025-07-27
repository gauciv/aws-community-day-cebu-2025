"use client"

import Link from "next/link"
import { Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white min-h-fit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Mobile and Tablet Layout */}
        <div className="block lg:hidden space-y-8 sm:space-y-10">
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/aws-logo.svg" alt="AWS Logo" className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white leading-tight">AWS COMMUNITY DAY</h3>
                <p className="text-sm text-orange-400">CEBU 2025</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
              AWS Community Days are community-organized cloud education events featuring technical discussions and
              demos.
            </p>
          </div>

          {/* Quick Links - Mobile/Tablet */}
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
            <div>
              <h4 className="font-bold text-base text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                <Link href="#about" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  About Event
                </Link>
                <Link href="#speakers" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Speakers
                </Link>
                <Link href="#schedule" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Schedule
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base text-white mb-4">Legal</h4>
              <div className="space-y-3">
                <Link href="/code-of-conduct" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Code of Conduct
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/awsugcebu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:awscloudclubctu@gmail.com"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src="/aws-logo.svg" alt="AWS Logo" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-2xl text-white leading-tight">AWS COMMUNITY DAY</h3>
                  <p className="text-orange-400 font-medium">CEBU 2025</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AWS Community Days are community-organized cloud education events that feature technical discussions and
                demos by expert AWS users and industry leaders from around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link href="#about" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  About Event
                </Link>
                <Link href="#speakers" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Speakers
                </Link>
                <Link href="#schedule" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Schedule
                </Link>
                <Link href="/code-of-conduct" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Code of Conduct
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/awsugcebu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="mailto:awscloudclubctu@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm pb-16">
            © 2025 AWS User Group Philippines - Cebu Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
