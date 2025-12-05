"use client"

import { Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ]

  return (
    <footer className="bg-[#020617] border-t border-[var(--border)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Prysmor<span className="text-[var(--accent-1)]">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming ideas into exceptional digital experiences. We build scalable, high-performance web
              applications that drive business growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--accent-1)] flex items-center justify-center transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-[var(--accent-1)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-[var(--accent-1)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-[var(--accent-1)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Prysmor Innovation. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Made with <span className="text-red-500">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
