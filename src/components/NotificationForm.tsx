'use client'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
}

interface FormErrors {
  name: string
  email: string
}

export default function NotificationForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: '', email: '' })

    const newErrors: FormErrors = { name: '', email: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (newErrors.name || newErrors.email) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-8 text-center">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-emerald-400">
              You're all set!
            </h3>
            <p className="text-slate-300">
              We'll notify you when the website launches on July 25th.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-slate-900/30 border border-slate-700/50 rounded-2xl p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-slate-200">
            Get Launch Notification
          </h3>
          <p className="text-slate-300 text-sm font-medium">
            Be the first to know when the official website goes live
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`
                  w-full px-4 py-3 bg-slate-800/50 border rounded-lg 
                  text-white placeholder-slate-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                  transition-all duration-200
                  ${errors.name ? 'border-red-500/50 bg-red-900/10' : 'border-slate-600/50'}
                `}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`
                  w-full px-4 py-3 bg-slate-800/50 border rounded-lg 
                  text-white placeholder-slate-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                  transition-all duration-200
                  ${errors.email ? 'border-red-500/50 bg-red-900/10' : 'border-slate-600/50'}
                `}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full bg-gradient-to-r from-orange-500 to-blue-600 
              text-white font-medium py-3 px-6 rounded-lg
              hover:from-orange-600 hover:to-blue-700
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
            "
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Subscribing...</span>
              </div>
            ) : (
              'Notify Me'
            )}
          </button>
        </form>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-slate-300 text-sm font-semibold">
            Join 500+ developers waiting for the launch
          </p>
        </div>
      </div>
    </section>
  )
}
