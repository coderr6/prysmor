"use client"

import { CheckCircle2, Users, Award, Target } from "lucide-react"

export function About() {
  const benefits = [
    "100% Transparent Process",
    "Agile Development Methodology",
    "Mobile-First & Responsive",
    "SEO Optimized",
    "Security Best Practices",
    "Long-term Support & Maintenance",
  ]

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled developers, designers, and project managers dedicated to your success.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "150+ successful projects across various industries and technologies.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "We focus on delivering measurable results that align with your business objectives.",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-1)]/10 to-[var(--accent-2)]/10 border border-[var(--accent-1)]/20 text-sm font-semibold text-[var(--accent-1)]">
              About Prysmor Innovation
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)]">
              Digital Architects Building The Future
            </h2>

            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              We are a team of passionate digital craftsmen who believe that exceptional software is a perfect blend of
              engineering precision and artistic design.
            </p>

            <p className="text-[var(--text-muted)]">
              Founded in 2020, Prysmor Innovation has grown from a small startup to a leading digital agency, helping
              businesses across the globe transform their digital presence.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-1)] flex-shrink-0" />
                  <span className="text-[var(--text-muted)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-custom)] shadow-[var(--shadow)] hover:border-[var(--accent-1)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">{feature.title}</h3>
                    <p className="text-[var(--text-muted)]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
