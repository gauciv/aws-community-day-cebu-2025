'use client'
import { useState, useEffect } from 'react'
import { getSubscriberCount } from '@/lib/api'

export default function SubscriberCount() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const result = await getSubscriberCount()
        setCount(result.count)
      } catch (error) {
        console.error('Failed to fetch subscriber count:', error)
        // Fallback to 0 if API not available
        setCount(0)
      } finally {
        setLoading(false)
      }
    }

    fetchCount()
  }, [])

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-slate-400 text-sm font-medium">Loading...</p>
      </div>
    )
  }

  if (count === 0) {
    return (
      <div className="text-center">
        <p className="text-slate-300 text-sm font-semibold">
          Be the first to join!
        </p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p className="text-slate-300 text-sm font-semibold">
        {count} developer{count !== 1 ? 's' : ''} waiting for the launch
      </p>
    </div>
  )
}
