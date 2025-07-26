/**
 * Performance Monitor Utility
 * Tracks image loading performance and provides insights
 */

interface ImageLoadMetrics {
  src: string
  loadTime: number
  size?: number
  timestamp: number
  wasPreloaded: boolean
}

export class PerformanceMonitor {
  private static metrics: ImageLoadMetrics[] = []
  private static preloadedImages = new Set<string>()

  /**
   * Track image load performance
   */
  static trackImageLoad(src: string, startTime: number, wasPreloaded = false) {
    const loadTime = performance.now() - startTime
    
    this.metrics.push({
      src,
      loadTime,
      timestamp: Date.now(),
      wasPreloaded
    })

    // Log slow loading images in development
    if (process.env.NODE_ENV === 'development' && loadTime > 1000) {
      console.warn(`Slow image load detected: ${src} took ${loadTime.toFixed(2)}ms`)
    }
  }

  /**
   * Mark image as preloaded
   */
  static markAsPreloaded(src: string) {
    this.preloadedImages.add(src)
  }

  /**
   * Check if image was preloaded
   */
  static wasPreloaded(src: string): boolean {
    return this.preloadedImages.has(src)
  }

  /**
   * Get performance statistics
   */
  static getStats() {
    if (this.metrics.length === 0) return null

    const loadTimes = this.metrics.map(m => m.loadTime)
    const preloadedCount = this.metrics.filter(m => m.wasPreloaded).length
    
    return {
      totalImages: this.metrics.length,
      averageLoadTime: loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length,
      maxLoadTime: Math.max(...loadTimes),
      minLoadTime: Math.min(...loadTimes),
      preloadedImages: preloadedCount,
      preloadEfficiency: (preloadedCount / this.metrics.length) * 100
    }
  }

  /**
   * Log performance report (development only)
   */
  static logReport() {
    if (process.env.NODE_ENV !== 'development') return

    const stats = this.getStats()
    if (!stats) return

    console.group('🖼️ Image Performance Report')
    console.log(`Total images loaded: ${stats.totalImages}`)
    console.log(`Average load time: ${stats.averageLoadTime.toFixed(2)}ms`)
    console.log(`Max load time: ${stats.maxLoadTime.toFixed(2)}ms`)
    console.log(`Min load time: ${stats.minLoadTime.toFixed(2)}ms`)
    console.log(`Preloaded images: ${stats.preloadedImages}/${stats.totalImages} (${stats.preloadEfficiency.toFixed(1)}%)`)
    
    // Show slowest images
    const slowestImages = this.metrics
      .sort((a, b) => b.loadTime - a.loadTime)
      .slice(0, 5)
    
    if (slowestImages.length > 0) {
      console.log('\n🐌 Slowest loading images:')
      slowestImages.forEach((img, index) => {
        console.log(`${index + 1}. ${img.src} - ${img.loadTime.toFixed(2)}ms`)
      })
    }
    
    console.groupEnd()
  }

  /**
   * Clear metrics (useful for testing)
   */
  static clearMetrics() {
    this.metrics = []
    this.preloadedImages.clear()
  }
}

/**
 * Hook for tracking image performance in React components
 */
export function useImagePerformance() {
  const trackLoad = (src: string, startTime: number) => {
    const wasPreloaded = PerformanceMonitor.wasPreloaded(src)
    PerformanceMonitor.trackImageLoad(src, startTime, wasPreloaded)
  }

  const markPreloaded = (src: string) => {
    PerformanceMonitor.markAsPreloaded(src)
  }

  return { trackLoad, markPreloaded }
}
