'use client'

import { motion } from 'framer-motion'
import HeroScanner from './HeroScanner'

const STATS = [
  { value: '3 in 4', label: 'people use AI for discovery' },
  { value: '< 10%', label: 'of brands optimised for AI' },
  { value: 'First-mover', label: 'advantage is still open' },
]

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#FAFBFF' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Top-left glow orb */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Top-right glow orb */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="flex-1 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-20">

        {/* Left copy */}
        <div className="flex flex-col gap-8">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Answer Engine Optimization
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1
              style={{
                fontSize: 'clamp(44px, 5vw, 68px)',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
              }}
            >
              <span className="block" style={{ color: '#0F172A' }}>Be the Brand</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI Recommends.
              </span>
            </h1>
          </motion.div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="leading-[1.8] max-w-[420px]"
            style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: '#64748B' }}
          >
            Buyers are asking ChatGPT, Claude, and Gemini what to choose.{' '}
            <span style={{ color: '#1E293B', fontWeight: 500 }}>
              We make sure your brand is the answer.
            </span>{' '}
            Get ahead before your competitors figure out this channel even exists.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
              style={{
                background: '#22D3EE',
                color: '#020617',
                fontSize: '15px',
                boxShadow: '0 0 32px rgba(34,211,238,0.3), 0 4px 14px rgba(34,211,238,0.2)',
              }}
            >
              Get a Free AI Visibility Audit
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <a
              href="https://calendly.com/tejas-gai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-[15px] px-6 py-3.5 rounded-full border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:bg-white transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Talk to us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex pt-6 border-t border-slate-100"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 pr-7 last:pr-0"
                style={{
                  borderRight: i < STATS.length - 1 ? '1px solid #E2E8F0' : 'none',
                  marginRight: i < STATS.length - 1 ? '28px' : '0',
                }}
              >
                <span
                  className="text-xl font-black tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </span>
                <span className="text-[11px] leading-snug" style={{ color: '#94A3B8' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right scanner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="w-full"
        >
          <HeroScanner />
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  )
}
