/**
 * Image Preloader Utility
 * Preloads critical images to improve perceived performance
 */

interface PreloadOptions {
  priority?: boolean
  sizes?: string
  quality?: number
}

export class ImagePreloader {
  private static preloadedImages = new Set<string>()
  private static preloadQueue: Array<{ src: string; options: PreloadOptions }> = []
  private static isProcessing = false

  /**
   * Preload a single image
   */
  static preload(src: string, options: PreloadOptions = {}) {
    if (this.preloadedImages.has(src)) return

    const { priority = false, sizes, quality = 85 } = options

    // Create optimized image URL
    const optimizedSrc = this.getOptimizedUrl(src, quality)

    if (priority) {
      this.preloadImmediately(optimizedSrc, sizes)
    } else {
      this.preloadQueue.push({ src: optimizedSrc, options })
      this.processQueue()
    }

    this.preloadedImages.add(src)
  }

  /**
   * Preload multiple images
   */
  static preloadBatch(images: Array<{ src: string; options?: PreloadOptions }>) {
    images.forEach(({ src, options = {} }) => {
      this.preload(src, options)
    })
  }

  /**
   * Preload critical images immediately
   */
  private static preloadImmediately(src: string, sizes?: string) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    if (sizes) link.setAttribute('imagesizes', sizes)
    document.head.appendChild(link)
  }

  /**
   * Process preload queue with throttling
   */
  private static async processQueue() {
    if (this.isProcessing || this.preloadQueue.length === 0) return

    this.isProcessing = true

    while (this.preloadQueue.length > 0) {
      const batch = this.preloadQueue.splice(0, 3) // Process 3 at a time
      
      await Promise.all(
        batch.map(({ src, options }) => this.loadImage(src, options.sizes))
      )

      // Small delay between batches to avoid overwhelming the browser
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    this.isProcessing = false
  }

  /**
   * Load image using Image constructor
   */
  private static loadImage(src: string, sizes?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to preload ${src}`))
      if (sizes) img.sizes = sizes
      img.src = src
    })
  }

  /**
   * Generate optimized image URL
   */
  private static getOptimizedUrl(src: string, quality: number): string {
    // For Next.js, the Image component handles optimization
    // This is where you could add custom optimization logic if needed
    return src
  }

  /**
   * Preload critical images for the current page
   */
  static preloadCriticalImages() {
    // Preload keynote speaker image
    this.preload('/images/speakers/raphael-quisumbing.jpg', {
      priority: true,
      sizes: '(max-width: 768px) 288px, 320px',
      quality: 95
    })

    // Preload first few speaker images
    const criticalSpeakers = [
      '/images/speakers/raphael-jambalos.jpg',
      '/images/speakers/joshua-arvin-lat.jpg',
      '/images/speakers/aldwyn-cabarrubias.jpg',
      '/images/speakers/cyrus-pastelero.jpeg'
    ]

    criticalSpeakers.forEach((src, index) => {
      this.preload(src, {
        priority: index < 2,
        sizes: '(max-width: 768px) 160px, 192px',
        quality: 90
      })
    })

    // Preload first few volunteer images
    const criticalVolunteers = [
      '/images/volunteers/yurii-yankin.jpg',
      '/images/volunteers/mikae-molina.jpg',
      '/images/volunteers/james-ty.jpg',
      '/images/volunteers/augusto-john-vincent.jpeg'
    ]

    criticalVolunteers.forEach(src => {
      this.preload(src, {
        sizes: '(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw',
        quality: 85
      })
    })
  }

  /**
   * Clear preload cache (useful for testing)
   */
  static clearCache() {
    this.preloadedImages.clear()
    this.preloadQueue.length = 0
  }
}

/**
 * Hook for preloading images in React components
 */
export function useImagePreloader() {
  const preloadImage = (src: string, options?: PreloadOptions) => {
    ImagePreloader.preload(src, options)
  }

  const preloadBatch = (images: Array<{ src: string; options?: PreloadOptions }>) => {
    ImagePreloader.preloadBatch(images)
  }

  return { preloadImage, preloadBatch }
}
