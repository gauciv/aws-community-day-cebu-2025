'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'When will the official website be ready?',
      answer:
        'The complete website will launch on July 25, 2025 at 12:00 PM PHT, featuring full event details, speaker lineup, and registration.',
    },
    {
      question: 'What can I expect from the final website?',
      answer:
        'The official website will include event schedules, speaker profiles, registration system, venue information, and all event updates.',
    },
    {
      question: 'How can I stay updated?',
      answer:
        'Sign up for our newsletter above to receive notifications when the official website launches and for important announcements.',
    },
    {
      question: 'Is this the official event website?',
      answer:
        'No, this is a temporary splash page. The official AWS Community Day Cebu website is currently under development and will launch soon.',
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 px-4">
      <h3 className="text-2xl font-display font-bold text-center mb-8 bg-gradient-to-r from-[#FF6B35] to-[#4A90E2] inline-block text-transparent bg-clip-text">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-white">{faq.question}</span>
              <span
                className={`text-[#4A90E2] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-white/70 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
