"use client"

import { Code2, Palette, ShoppingCart, Plug, Cloud, Smartphone } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Complex dashboards, SaaS platforms, and enterprise tools built with React, Next.js, and Node.js.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Pixel-perfect designs that prioritize user experience and conversion optimization.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "High-conversion online stores with secure payments, inventory management, and analytics.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamless integration with Stripe, OpenAI, Google services, and custom third-party APIs.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Cloud,
      title: "Cloud Hosting & DevOps",
      description: "Deployment on AWS, Vercel, and cloud infrastructure with CI/CD pipelines.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Mobile-first applications that work offline and provide native app-like experiences.",
      color: "from-teal-500 to-green-600",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-[var(--glass-highlight)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 text-sm font-semibold text-[var(--accent-1)] mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Engineering Digital Excellence
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Full-stack development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-custom)] shadow-[var(--shadow)] hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{service.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
