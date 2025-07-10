'use client'
import { useState } from 'react'

export default function FirstToKnowForm() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({ name: '', email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: '', email: '' })

    // Validation
    const newErrors = { name: '', email: '' }
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email))
      newErrors.email = 'Invalid email format'

    if (newErrors.name || newErrors.email) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg mx-auto mt-16 md:mt-24 px-4 animate-fade-in">
        <div className="text-center p-8 bg-gradient-to-r from-[#4A90E2]/10 to-[#F7931E]/10 rounded-xl border border-[#4A90E2]/20">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#FF6B35] to-[#4A90E2] rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
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
          <h3 className="text-xl font-semibold mb-2 text-[#4A90E2]">
            You're all set!
          </h3>
          <p className="text-white/70">
            We'll notify you when the website launches and share event updates.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg mx-auto mt-16 md:mt-24 px-4">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl mb-3 bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#4A90E2] inline-block text-transparent bg-clip-text">
          Be the first to know
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-2">
          Sign up to get updates about AWS Community Day Cebu
        </p>
        <p className="text-[#4A90E2] text-sm font-medium">
          Join 500+ cloud enthusiasts already signed up
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border rounded-lg focus:outline-none text-white placeholder-white/40 transition-all hover:bg-black/30 ${
              errors.name
                ? 'border-red-500 focus:border-red-500'
                : 'border-white/10 focus:border-[#4A90E2]'
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border rounded-lg focus:outline-none text-white placeholder-white/40 transition-all hover:bg-black/30 ${
              errors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-white/10 focus:border-[#4A90E2]'
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#4A90E2] text-white font-medium py-3 px-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#4A90E2]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Signing up...
            </div>
          ) : (
            'Notify me'
          )}
        </button>
      </form>
    </div>
  )
}
