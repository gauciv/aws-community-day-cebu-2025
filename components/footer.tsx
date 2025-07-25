"use client"

import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-yellow-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Description - Centered */}
          <div className="md:col-span-1 space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <img src="/aws-logo.svg" alt="AWS Logo" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="font-bold text-xl text-white">COMMUNITY DAY</h3>
                <p className="text-sm text-orange-400 font-medium">Philippines</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              AWS Community Days are community-organized cloud education events that feature technical discussions and
              demos by expert AWS users and industry leaders from around the world.
            </p>
          </div>

          {/* Event - Centered */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Event
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources - Centered */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Resources
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us - Centered */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/awsugcebu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-blue-700 hover:to-blue-800 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/20">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="mailto:awscloudclubctu@gmail.com" className="group relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Reduced padding */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <p className="text-gray-400 text-sm">Copyright © 2024 by AWS User Group, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
