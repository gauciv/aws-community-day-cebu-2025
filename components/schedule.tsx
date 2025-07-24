'use client'

import { Card, CardContent } from '@/components/ui/card'

export function Schedule() {
  const skeletonCards = Array.from({ length: 3 }, (_, i) => i)

  return (
    <section id="schedule" className="py-12 md:py-20 lg:py-32 bg-gray-900/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-orange-400/10 text-4xl animate-twinkle">✧</div>
        <div className="absolute bottom-10 right-10 text-orange-300/10 text-5xl animate-float-slow">✦</div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4 md:mb-6 border border-orange-500/20">
            Event Schedule
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            Full Day of{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A carefully curated schedule of sessions, workshops, and networking opportunities designed to maximize your
            learning experience.
          </p>
        </div>

        <div className="relative">
          {/* Schedule Coming Soon Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Coming Soon</h3>
              <p className="text-gray-300">We&apos;re finalizing the detailed schedule and will announce it soon!</p>
            </div>
          </div>

          {/* Skeleton Loading Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletonCards.map((index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 skeleton rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 skeleton rounded w-3/4" />
                        <div className="h-3 skeleton rounded w-1/2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 skeleton rounded w-full" />
                      <div className="h-4 skeleton rounded w-5/6" />
                      <div className="h-4 skeleton rounded w-4/6" />
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-8 h-8 skeleton rounded-full" />
                      <div className="h-3 skeleton rounded w-24" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
