"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We will get back to you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">Get In Touch</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Ready to start your project? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Let's Talk</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're excited to learn about your
                project!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-main)] mb-1">Email</div>
                  <a
                    href="mailto:hello@prysmor.com"
                    className="text-[var(--text-muted)] hover:text-[var(--accent-1)] transition-colors"
                  >
                    hello@prysmor.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-main)] mb-1">Phone</div>
                  <a
                    href="tel:+919876543210"
                    className="text-[var(--text-muted)] hover:text-[var(--accent-1)] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-main)] mb-1">Location</div>
                  <div className="text-[var(--text-muted)]">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)]">
              <h4 className="text-xl font-bold text-white mb-2">Ready to Scale?</h4>
              <p className="text-white/90">Let's build something exceptional together.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-main)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:border-[var(--accent-1)] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-main)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:border-[var(--accent-1)] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[var(--text-main)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:border-[var(--accent-1)] focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-main)] mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)] focus:border-[var(--accent-1)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
