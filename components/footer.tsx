"use client"

import Link from "next/link"
import { Facebook, Mail, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/3 to-yellow-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-yellow-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-orange-400/25 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section - Full width on mobile, spans 5 columns on desktop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <img src="/aws-logo.svg" alt="AWS Logo" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="font-bold text-xl text-white">AWS COMMUNITY DAY</h3>
                <p className="text-sm text-orange-400 font-medium">CEBU 2025</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              AWS Community Days are community-organized cloud education events that feature technical discussions and
              demos by expert AWS users and industry leaders from around the world.
            </p>
          </div>

          {/* Quick Links - Spans 3 columns on desktop */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-lg text-white text-center lg:text-left relative">
              Quick Links
              <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    About Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="#speakers"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#schedule"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    Schedule
                  </Link>
                </li>
              </ul>
              
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/code-of-conduct"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect Section - Spans 4 columns on desktop */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-lg text-white text-center lg:text-left relative">
              Connect With Us
              <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/awsugcebu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Follow us on Facebook"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:scale-105">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a 
                href="mailto:awscloudclubctu@gmail.com" 
                className="group relative"
                aria-label="Send us an email"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 text-center lg:text-left mb-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                <Users className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-medium text-orange-400 uppercase tracking-wide">ORGANIZED BY</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white font-medium">AWS User Group Philippines</p>
                <p className="text-xs text-gray-400">Cebu Chapter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-8 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 AWS User Group Philippines - Cebu Chapter. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Built with ❤️ by the community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
