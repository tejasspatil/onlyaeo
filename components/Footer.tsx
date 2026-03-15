'use client'

import { motion } from 'framer-motion'

const serviceLinks = [
  { label: 'AI Presence Audit', href: '#contact' },
  { label: 'Content Optimization', href: '#services' },
  { label: 'FAQ & Q&A Assets', href: '#services' },
  { label: 'Ongoing Monitoring', href: '#services' },
]

const companyLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who We Help', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
]

const llmBadges = ['ChatGPT', 'Claude', 'Gemini', 'DeepSeek', 'Perplexity', 'and more']

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/[0.05] overflow-hidden" style={{ background: '#030508' }}>
      {/* Subtle dot grid — same as hero but lower opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(34,211,238,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top section */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-3 group w-fit">
              <div
                className="w-8 h-8 rounded-lg bg-[#22D3EE] flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(34,211,238,0.35), 0 0 60px rgba(34,211,238,0.12)' }}
              >
                <span className="text-[#020617] font-black text-xs tracking-tight select-none">AEO</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                <span className="text-white">Only</span>
                <span className="text-[#22D3EE] font-bold">AEO</span>
              </span>
            </a>

            <p className="text-sm font-medium leading-relaxed max-w-xs" style={{ color: '#F1F5F9' }}>
              When AI speaks, be the brand it names.
            </p>

            <p className="text-xs leading-relaxed max-w-xs" style={{ color: '#64748B' }}>
              We structure your brand&apos;s knowledge so ChatGPT, Claude, Gemini, DeepSeek,
              Perplexity, and more cite you when buyers ask. Measured in citations. Built to compound.
            </p>

            {/* LLM badges */}
            <div className="flex flex-wrap gap-2">
              {llmBadges.map((llm) => (
                <span
                  key={llm}
                  className="text-xs rounded-full px-2.5 py-1"
                  style={{
                    color: '#64748B',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {llm}
                </span>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-semibold text-sm mb-5" style={{ color: '#F1F5F9' }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-sm text-left transition-colors duration-200 hover:text-[#F1F5F9]"
                    style={{ color: '#64748B' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-semibold text-sm mb-5" style={{ color: '#F1F5F9' }}>Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-sm text-left transition-colors duration-200 hover:text-[#F1F5F9]"
                    style={{ color: '#64748B' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="font-semibold text-sm mb-5" style={{ color: '#F1F5F9' }}>Connect</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:tejas@gai.ventures"
                  className="text-sm transition-colors duration-200 hover:text-[#22D3EE]"
                  style={{ color: '#64748B' }}
                >
                  tejas@gai.ventures
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/tejas-gai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-[#22D3EE]"
                  style={{ color: '#64748B' }}
                >
                  Book a Call →
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/onlyaeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-[#22D3EE] inline-flex items-center gap-1.5"
                  style={{ color: '#64748B' }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 1 1-.003-3.096 1.548 1.548 0 0 1 .003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs" style={{ color: '#475569' }}>
            © 2025 OnlyAEO. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs" style={{ color: '#475569' }}>
            <span>AEO</span>
            <span className="opacity-40">·</span>
            <span>GEO</span>
            <span className="opacity-40">·</span>
            <span>AI Search</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
