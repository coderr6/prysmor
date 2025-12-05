"use client"

import { Check, Zap } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹15,000",
      description: "Perfect for small businesses and personal projects",
      features: [
        "Static Website (5-7 Pages)",
        "Responsive Mobile Design",
        "Contact Form Integration",
        "Basic SEO Optimization",
        "Social Media Integration",
        "1 Month Support",
      ],
      color: "border-[var(--accent-1)]",
    },
    {
      name: "Business",
      price: "₹60,000",
      description: "Ideal for growing businesses with dynamic needs",
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication System",
        "Admin Dashboard/CMS",
        "Payment Gateway Integration",
        "Advanced SEO & Analytics",
        "3 Months Support",
        "Priority Email Support",
      ],
      color: "border-[var(--accent-2)]",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale projects",
      features: [
        "Custom SaaS Application",
        "Multi-tenant Architecture",
        "Advanced API Integrations",
        "Cloud Infrastructure Setup",
        "DevOps & CI/CD Pipeline",
        "Security Audit & Testing",
        "Dedicated Project Manager",
        "24/7 Priority Support",
        "Service Level Agreement",
      ],
      color: "border-[var(--text-main)]",
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-[var(--glass-highlight)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">Transparent Pricing</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Choose the plan that fits your needs. No hidden fees, ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-[var(--bg-card)] border-2 ${plan.color} shadow-[var(--shadow)] ${
                plan.recommended ? "lg:scale-105" : ""
              } transition-all hover:-translate-y-2`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white text-sm font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{plan.description}</p>
                <div className="text-5xl font-bold text-[var(--text-main)]">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--accent-1)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 text-center rounded-full font-semibold transition-all ${
                  plan.recommended
                    ? "bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"
                    : "bg-[var(--glass-highlight)] text-[var(--text-main)] border border-[var(--border)] hover:bg-[var(--border)]"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
