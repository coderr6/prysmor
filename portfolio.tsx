"use client"

import { ExternalLink } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      tech: "React · TypeScript · D3.js",
      image:
        "https://placehold.co/800x600?text=Modern+fintech+dashboard+with+data+visualization+charts+and+graphs+dark+theme",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "E-Commerce Platform",
      category: "Online Store",
      tech: "Next.js · Stripe · Prisma",
      image: "https://placehold.co/800x600?text=Elegant+ecommerce+product+showcase+with+clean+modern+design",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "SaaS Marketing Site",
      category: "Landing Page",
      tech: "Next.js · Tailwind · Framer",
      image: "https://placehold.co/800x600?text=Professional+SaaS+landing+page+with+hero+section+and+features",
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Real Estate Portal",
      category: "Web Platform",
      tech: "React · Node.js · MongoDB",
      image: "https://placehold.co/800x600?text=Modern+real+estate+website+with+property+listings+and+search",
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Healthcare App",
      category: "PWA",
      tech: "Next.js · Firebase · AI",
      image: "https://placehold.co/800x600?text=Clean+healthcare+application+interface+with+patient+dashboard",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "Agency Portfolio",
      category: "Website",
      tech: "HTML5 · CSS3 · GSAP",
      image: "https://placehold.co/800x600?text=Creative+agency+portfolio+with+stunning+visual+design",
      gradient: "from-orange-600 to-red-600",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-2)]/10 border border-[var(--accent-2)]/20 text-sm font-semibold text-[var(--accent-2)] mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">Selected Work</h2>
          <p className="text-lg text-[var(--text-muted)]">Showcasing our recent projects across various industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <ExternalLink className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-[var(--accent-1)] font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">{project.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
