"use client"

import { Search, Lightbulb, Code, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We analyze your business goals, target audience, and competitive landscape.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy & Design",
      description: "Creating wireframes, prototypes, and visual designs aligned with your brand.",
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description: "Building your product using modern tech stack with agile methodology.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "Deploying to production with ongoing maintenance and optimization.",
    },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-[var(--glass-highlight)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">Our Process</h2>
          <p className="text-lg text-[var(--text-muted)]">
            A streamlined approach to delivering exceptional digital products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent-1)] transition-all group"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-[var(--accent-1)] opacity-10 group-hover:opacity-20 transition-opacity">
                {step.number}
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{step.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
