"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("faq")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: "What is AWS Community Day Cebu?",
      answer:
        "AWS Community Day Cebu is a free, community-driven event that brings together AWS enthusiasts, developers, and cloud professionals in Cebu. It features technical sessions, networking opportunities, and hands-on workshops focused on Amazon Web Services technologies.",
    },
    {
      question: "Who can attend this event?",
      answer:
        "This event is open to everyone! Whether you're a beginner curious about cloud computing, an experienced developer, a student, or a business professional, you're welcome to join. No prior AWS experience is required for most sessions.",
    },
    {
      question: "Is registration required?",
      answer:
        "Yes, registration is required as we have limited seats available. Registration is completely free, and you can sign up through our official registration link. We recommend registering early to secure your spot.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Bring your laptop for hands-on workshops, business cards for networking, a notebook for taking notes, and your enthusiasm to learn! We'll provide refreshments, swag, and all workshop materials.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Absolutely! We have dedicated networking sessions, coffee breaks, and lunch time specifically designed for attendees to connect with fellow AWS enthusiasts, speakers, and industry professionals.",
    },
    {
      question: "Are the sessions recorded?",
      answer:
        "Selected sessions may be recorded for later sharing with the community, but we'll always inform speakers and attendees beforehand. Some hands-on workshops and networking sessions won't be recorded to encourage participation.",
    },
    {
      question: "What topics will be covered?",
      answer:
        "Topics include serverless computing, AI/ML on AWS, DevOps best practices, cloud security, data analytics, enterprise migration strategies, and modern application development. Check our schedule for detailed session information.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes, we maintain a strict code of conduct to ensure a welcoming and inclusive environment for all attendees. Harassment, discrimination, or disruptive behavior will not be tolerated. Respect and professionalism are expected from everyone.",
    },
  ]

  // Generate floating question marks with very transparent opacity
  const floatingQuestionMarks = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 30, // 30-70px
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDuration: Math.random() * 20 + 15, // 15-35s
    animationDelay: Math.random() * 10,
    animationName: `questionBounceRandom${(i % 18) + 1}`,
    opacity: Math.random() * 0.08 + 0.03, // Very transparent: 0.03-0.11
  }))

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-32 relative overflow-hidden hero-gradient-dark">
      {/* Hero-style constellation background */}
      <div className="absolute inset-0 constellation-background">
        <div className="constellation-container">
          {/* Top section */}
          <div className="constellation-dot constellation-dot-small constellation-glow animate-twinkle-slow" style={{ top: "8%", left: "12%" }}></div>
          <div className="constellation-star constellation-star-medium constellation-glow animate-rotate-slow" style={{ top: "15%", right: "10%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ top: "12%", left: "25%" }}></div>

          {/* Middle section */}
          <div className="constellation-dot constellation-dot-medium constellation-glow animate-twinkle-delayed" style={{ top: "45%", right: "15%" }}></div>
          <div className="constellation-star constellation-star-small animate-rotate-reverse" style={{ top: "50%", left: "8%" }}></div>
          <div className="constellation-circle animate-fade-pulse" style={{ top: "55%", right: "25%" }}></div>

          {/* Bottom section */}
          <div className="constellation-dot constellation-dot-small animate-bounce-subtle" style={{ bottom: "18%", left: "18%" }}></div>
          <div className="constellation-star constellation-star-large constellation-glow animate-rotate-slow" style={{ bottom: "25%", right: "12%" }}></div>
          <div className="constellation-circle constellation-glow animate-pulse-slow" style={{ bottom: "30%", left: "30%" }}></div>

          {/* Connecting lines */}
          <div className="constellation-line constellation-glow animate-glow-pulse" style={{ top: "28%", left: "20%", width: "35px", transform: "rotate(40deg)" }}></div>
          <div className="constellation-line animate-fade-pulse" style={{ bottom: "40%", right: "28%", width: "30px", transform: "rotate(-35deg)" }}></div>
        </div>
      </div>

      {/* Very transparent floating question marks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingQuestionMarks.map((mark) => (
          <div
            key={mark.id}
            className="absolute text-white/10 font-bold question-mark-bounce select-none" // Very transparent
            style={{
              fontSize: `${mark.size}px`,
              left: `${mark.left}%`,
              top: `${mark.top}%`,
              animation: `${mark.animationName} ${mark.animationDuration}s ease-in-out infinite`,
              animationDelay: `${mark.animationDelay}s`,
              opacity: mark.opacity, // Individual transparency
            }}
          >
            ?
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/15 to-orange-600/20 text-orange-400 border border-orange-500/30 text-sm font-bold mb-8 backdrop-blur-sm shadow-lg shadow-orange-500/10">
            <HelpCircle className="w-4 h-4 animate-pulse" />
            Frequently Asked Questions
            <HelpCircle className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Got <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">Questions?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            Find answers to the most common questions about AWS Community Day Cebu. 
            Can't find what you're looking for? Feel free to reach out to us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm px-6 py-2 transition-all duration-500 hover:border-orange-400/30 hover:bg-white/10 ${
                    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left text-white hover:text-orange-300 transition-colors duration-300 py-6 font-bold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-6 pt-2 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Still Have <span className="text-orange-400">Questions?</span>
            </h3>
            <p className="text-white/90 mb-6">
              Reach out to our organizing team, and we'll be happy to help!
            </p>
            <a
              href="mailto:organizers@awscommunitydaycebu.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              <HelpCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}