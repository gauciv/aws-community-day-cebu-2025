import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  loading?: "eager" | "lazy"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  quality?: number
}

// Enhanced blur data URL for better loading experience
const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+I/wDPtdd7WVvGvLI2eUZKMuc7+kzxE4PY3T3IQ7EY2jr1CU1RFp5vRc="

// Intersection Observer hook for lazy loading optimization
function useIntersectionObserver(ref: React.RefObject<HTMLDivElement>, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  sizes,
  priority = false,
  loading = "lazy",
  placeholder = "blur",
  blurDataURL = defaultBlurDataURL,
  onLoad,
  onError,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Use intersection observer for non-priority images
  const isInView = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    rootMargin: '100px' // Start loading 100px before entering viewport
  })

  // Trigger loading when image comes into view (for non-priority images)
  useEffect(() => {
    if (!priority && isInView) {
      setShouldLoad(true)
    }
  }, [isInView, priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  // Generate optimized image URL with quality and format parameters
  const getOptimizedSrc = (originalSrc: string) => {
    // For Next.js Image optimization, we can add quality parameter
    return originalSrc
  }

  if (hasError) {
    return (
      <div 
        ref={containerRef}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400",
          fill ? "absolute inset-0" : "",
          className
        )}
      >
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-xl">📷</span>
          </div>
          <span className="text-xs">Image unavailable</span>
        </div>
      </div>
    )
  }

  // Show placeholder until image should load
  if (!shouldLoad) {
    return (
      <div 
        ref={containerRef}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse",
          fill ? "absolute inset-0" : "w-full h-full",
          className
        )}
      >
        <div className="w-8 h-8 border-2 border-slate-600 border-t-orange-400 rounded-full animate-spin" />
      </div>
    )
  }

  // Determine the loading strategy based on priority
  const imageLoading = priority ? "eager" : loading

  // Optimize sizes attribute for better performance
  const optimizedSizes = sizes || (
    fill 
      ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      : undefined
  )

  return (
    <div 
      ref={containerRef}
      className={cn("relative", fill ? "w-full h-full" : "inline-block")}
    >
      <Image
        src={getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        sizes={optimizedSizes}
        priority={priority}
        loading={imageLoading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Enhanced loading state */}
      {isLoading && (
        <div className={cn(
          "flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse",
          fill ? "absolute inset-0" : "w-full h-full",
          className
        )}>
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-slate-600 border-t-orange-400 rounded-full animate-spin mx-auto mb-2" />
            <div className="text-xs text-slate-400">Loading...</div>
          </div>
        </div>
      )}
    </div>
  )
}