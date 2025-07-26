"use client"

import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Enhanced Gradient Background with Atmospheric Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/6 via-amber-500/4 to-yellow-500/6"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
        
        {/* Smoke SVG for Background Texture */}
        <div
          className="absolute"
          style={{ top: "20%", left: "5%", width: "120px", height: "auto", opacity: "0.04" }}
        >
          <img 
            src="/art-assets/smoke.svg" 
            alt="Atmospheric smoke" 
            className="w-full h-auto animate-smoke-wisp"
            style={{ '--smoke-rotation': '10deg' } as React.CSSProperties}
          />
        </div>
        
        <div
          className="absolute"
          style={{ bottom: "15%", right: "8%", width: "100px", height: "auto", opacity: "0.06" }}
        >
          <img 
            src="/art-assets/smoke.svg" 
            alt="Atmospheric smoke" 
            className="w-full h-auto animate-smoke-wisp"
            style={{ '--smoke-rotation': '-15deg' } as React.CSSProperties}
          />
        </div>

        {/* Constellation Dots in Corners */}
        <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{top: '20%', left: '10%'}}></div>
        <div className="constellation-dot constellation-dot-small" style={{top: '30%', right: '15%'}}></div>
        <div className="constellation-dot constellation-dot-tiny constellation-glow" style={{bottom: '25%', left: '12%'}}></div>
        <div className="constellation-dot constellation-dot-small" style={{bottom: '35%', right: '18%'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <img src="/aws-logo.svg" alt="AWS Logo" className="h-8 md:h-10 w-8 md:w-10 object-contain" />
              <div>
                <h3 className="font-bold text-lg md:text-xl text-white">COMMUNITY DAY</h3>
                <p className="text-xs md:text-sm text-orange-400 font-medium">CEBU</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs hidden md:block">
              AWS Community Days are community-organized cloud education events that feature technical discussions and
              demos by expert AWS users and industry leaders from around the world.
            </p>
          </div>

          {/* Event */}
          <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-base md:text-lg mb-3 md:mb-6 relative">
              Event
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-6 md:w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-xs md:text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-500/50 rounded-full mr-2 md:mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-base md:text-lg mb-3 md:mb-6 relative">
              Resources
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-6 md:w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-xs md:text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-500/50 rounded-full mr-2 md:mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-xs md:text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-500/50 rounded-full mr-2 md:mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-xs md:text-sm flex items-center group justify-center md:justify-start"
                >
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-500/50 rounded-full mr-2 md:mr-3 group-hover:bg-orange-400 transition-colors"></div>
                  Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-base md:text-lg mb-3 md:mb-6 relative">
              Connect
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none w-6 md:w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </h4>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/awsugcebu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="mailto:awscloudclubctu@gmail.com" className="group relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors" />
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
