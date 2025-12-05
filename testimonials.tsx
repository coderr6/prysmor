"use client"

import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://placehold.co/100x100?text=Professional+headshot+business+woman+smiling",
      rating: 5,
      text: "Prysmor transformed our outdated website into a modern, high-performing platform. The team was professional, responsive, and delivered beyond our expectations.",
    },
    {
      name: "Michael Chen",
      role: "Founder, E-Shop Pro",
      image: "https://placehold.co/100x100?text=Professional+headshot+business+man+confident",
      rating: 5,
      text: "Working with Prysmor was a game-changer for our business. They built us a custom e-commerce platform that increased our sales by 150% in just 3 months.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Creative Co",
      image: "https://placehold.co/100x100?text=Professional+headshot+woman+creative+professional",
      rating: 5,
      text: "The attention to detail and design expertise from the Prysmor team is unmatched. Our new website perfectly captures our brand identity and engages our audience.",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 text-sm font-semibold text-[var(--accent-1)] mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[var(--text-muted)]">Real feedback from real businesses we've helped grow</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent-1)] transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--accent-1)] opacity-10" />

              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--accent-2)] text-[var(--accent-2)]" />
                  ))}
                </div>

                <p className="text-[var(--text-muted)] leading-relaxed mb-6">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-1)]"
                  />
                  <div>
                    <div className="font-bold text-[var(--text-main)]">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-muted)]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
