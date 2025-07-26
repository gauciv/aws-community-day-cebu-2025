"use client"

import { useEffect } from "react"
import { ImagePreloader } from "@/lib/image-preloader"

export function ImagePreloadScript() {
  useEffect(() => {
    // Preload critical images when the app loads
    if (typeof window !== 'undefined') {
      // Small delay to ensure the page has started loading
      setTimeout(() => {
        ImagePreloader.preloadCriticalImages()
      }, 100)
    }
  }, [])

  return null // This component doesn't render anything
}
