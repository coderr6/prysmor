"use client"

import { ArrowRight, Sparkles, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--accent-1)] to-transparent opacity-10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[var(--accent-2)] to-transparent opacity-10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-highlight)] border border-[var(--border)] text-sm text-[var(--text-main)]">
              <Sparkles className="w-4 h-4 text-[var(--accent-1)]" />
              <span>Transforming Ideas Into Reality</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[var(--text-main)] leading-tight">
              Premium Digital
              <br />
              <span className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-xl leading-relaxed">
              We craft cutting-edge web applications, stunning websites, and scalable digital products that drive real
              business growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-all hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-[var(--glass-highlight)] text-[var(--text-main)] rounded-full font-semibold border border-[var(--border)] hover:bg-[var(--border)] transition-all"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-[var(--accent-1)]">150+</div>
                <div className="text-sm text-[var(--text-muted)]">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--accent-2)]">98%</div>
                <div className="text-sm text-[var(--text-muted)]">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--accent-1)]">24/7</div>
                <div className="text-sm text-[var(--text-muted)]">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent-1)] transition-all group">
              <Zap className="w-12 h-12 text-[var(--accent-1)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">Lightning Fast</h3>
              <p className="text-[var(--text-muted)]">
                Built with cutting-edge tech stack including React, Next.js, and modern cloud infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] shadow-[0_10px_40px_rgba(99,102,241,0.3)]">
              <h3 className="text-2xl font-bold text-white mb-2">🎨 Stunning Design</h3>
              <p className="text-white/90">
                Every pixel crafted to perfection with attention to detail and user experience at the core.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)]">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">🚀 Scalable Solutions</h3>
              <p className="text-[var(--text-muted)]">
                Built to grow with your business, from startup to enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
