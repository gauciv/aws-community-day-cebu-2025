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
      <div className="w-full max-w-lg mx-auto px-4 py-16">
        <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
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
          <h3 className="text-2xl font-bold text-white mb-4">
            You&apos;re All Set!
          </h3>
          <p className="text-white/70 text-lg">
            We&apos;ll notify you as soon as the official website goes live on
            July 25!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-16">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-6 py-4 bg-white/5 backdrop-blur-sm border rounded-2xl focus:outline-none text-white placeholder-white/50 transition-all text-lg ${
              errors.name
                ? 'border-red-500'
                : 'border-white/20 focus:border-[#4A90E2]'
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-2 ml-2">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-6 py-4 bg-white/5 backdrop-blur-sm border rounded-2xl focus:outline-none text-white placeholder-white/50 transition-all text-lg ${
              errors.email
                ? 'border-red-500'
                : 'border-white/20 focus:border-[#4A90E2]'
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-2 ml-2">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#FF6B35] to-[#4A90E2] text-white font-semibold py-4 px-6 rounded-2xl transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
              Signing Up...
            </div>
          ) : (
            'Notify Me When It Launches'
          )}
        </button>
      </form>

      <p className="text-center text-white/50 text-sm mt-6">
        Join 500+ people waiting for the launch
      </p>
    </div>
  )
}
