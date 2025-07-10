'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'When will the full website be ready?',
      answer:
        'The complete website will launch in early 2025, featuring full event details, speaker lineup, and registration.',
    },
    {
      question: 'How can I stay updated?',
      answer:
        'Sign up for our newsletter above to receive updates about the website launch and event announcements.',
    },
    {
      question: 'What is AWS Community Day?',
      answer:
        'AWS Community Day is a community-led conference featuring technical sessions, workshops, and networking opportunities for cloud enthusiasts.',
    },
    {
      question: 'Where will the event be held?',
      answer:
        'The event will be held at University of the Philippines Cebu Performing Arts Hall, Gorordo Avenue, Lahug, Cebu City.',
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
