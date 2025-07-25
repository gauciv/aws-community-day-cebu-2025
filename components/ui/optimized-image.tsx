"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  width?: number
  height?: number
  lazy?: boolean
  loading?: "eager" | "lazy"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+I/wDPtdd7WVvGvLI2eUZKMuc7+kzxE4PY3T3IQ7EY2jr1CU1RFp5vRc="

export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  sizes,
  width,
  height,
  lazy = true,
  loading = "lazy",
  placeholder = "blur",
  blurDataURL = defaultBlurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lazy || priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [lazy, priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }


  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
          <span className="text-orange-500/60 font-bold text-2xl">
            {alt.split(" ").map(word => word[0]).join("").slice(0, 2)}
          </span>
        </div>
      ) : isInView ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`transition-all duration-700 ease-out ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200" />
      )}
    </div>
  )
}