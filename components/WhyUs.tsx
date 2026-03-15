'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="5" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <path d="M16 5v2M16 25v2M5 16h2M25 16h2" />
      </svg>
    ),
    title: 'Pure AEO Specialty',
    body: "We don't do SEO, PPC, or social. We do AEO — one discipline, done obsessively well. Your category's AI citations won't be won by generalists.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <path d="M16 5a20 20 0 0 1 5 11 20 20 0 0 1-5 11 20 20 0 0 1-5-11 20 20 0 0 1 5-11z" />
      </svg>
    ),
    title: 'Every Signal Layer',
    body: 'AI trusts more than your website. We cover PR, social media, Reddit, Wikipedia, forums, and industry publications — every platform AI models use as evidence when deciding who to recommend.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 22 10 14 16 17 22 8 28 13" />
        <circle cx="28" cy="13" r="2" fill="currentColor" stroke="none" />
        <line x1="3" y1="26" x2="29" y2="26" opacity="0.35" />
      </svg>
    ),
    title: 'Real Measurement',
    body: 'We track what matters: citation share, mention rate, LLM recall frequency. Measurable from day one, reported monthly. No vanity metrics, no keyword rankings.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 24l4-6 4 2 4-8 4 3 4-6" />
        <path d="M26 13l2-3-3 1" />
      </svg>
    ),
    title: 'Compounding Strategy',
    body: 'Every citation we earn becomes evidence for the next. AEO authority builds over time. The longer it runs, the stronger it gets — compounding month over month.',
  },
]

const comparisonRows = [
  { feature: 'AEO/GEO Specialty', onlyaeo: true, seo: false, aitools: false },
  {
    feature: 'Multi-model LLM coverage (ChatGPT, Claude, Gemini, DeepSeek + more)',
    onlyaeo: true,
    seo: false,
    aitools: true,
  },
  { feature: 'PR, Reddit & Wikipedia citation building', onlyaeo: true, seo: false, aitools: false },
  { feature: 'Content creation & structured data builds', onlyaeo: true, seo: false, aitools: false },
  { feature: 'Citation metrics tracking & monthly reporting', onlyaeo: true, seo: false, aitools: true },
]

function CheckCell({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center mx-auto border"
        style={{ background: 'rgba(34,211,238,0.12)', borderColor: 'rgba(34,211,238,0.25)' }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path d="M3 8l4 4 6-7" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center mx-auto border"
      style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function WhyUs() {
  const gridRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })
  const tableInView = useInView(tableRef, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="relative py-28 lg:py-36 overflow-hidden" style={{ background: '#060912' }}>
      {/* Section top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          {/* Section label — cyan pill */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/[0.15] bg-cyan-500/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span className="text-[#22D3EE] text-[11px] font-semibold tracking-[0.12em] uppercase">
                Why OnlyAEO
              </span>
            </div>
          </div>

          <h2
            className="font-black leading-tight max-w-2xl tracking-[-0.03em]"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', color: '#F1F5F9' }}
          >
            Built for the AI Search Era.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nothing else.
            </span>
          </h2>
          <p className="mt-5 text-lg max-w-2xl leading-relaxed" style={{ color: '#64748B' }}>
            Most agencies bolt AEO onto SEO as an afterthought. We built OnlyAEO to do exactly one
            thing — make your brand the answer AI gives. End to end, across every platform that matters.
          </p>
        </motion.div>

        {/* 2×2 differentiator grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20"
        >
          {differentiators.map((d) => (
            <motion.div
              key={d.title}
              variants={cardVariants}
              className="group relative rounded-2xl p-7 border border-white/[0.07] card-lift hover:border-[#22D3EE]/22 transition-colors duration-300 overflow-hidden"
              style={{ background: '#080F20' }}
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22D3EE]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 text-[#22D3EE] transition-colors duration-300"
                  style={{ background: 'rgba(34,211,238,0.10)', borderColor: 'rgba(34,211,238,0.18)' }}
                >
                  {d.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#F1F5F9' }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{d.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 30 }}
          animate={tableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            {/* Compare label — cyan pill */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/[0.15] bg-cyan-500/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                <span className="text-[#22D3EE] text-[11px] font-semibold tracking-[0.12em] uppercase">Compare</span>
              </div>
            </div>
            <h3
              className="font-black tracking-[-0.03em]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#F1F5F9' }}
            >
              How we{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                compare
              </span>
            </h3>
          </div>

          <div
            className="rounded-2xl overflow-hidden border border-white/[0.07]"
            style={{ background: '#080F20' }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-4 border-b border-white/[0.07]"
              style={{ background: '#080F20' }}
            >
              <div className="col-span-1 px-5 py-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748B' }}>
                Capability
              </div>
              <div className="px-4 py-4 text-center">
                <div
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 border"
                  style={{ background: 'rgba(34,211,238,0.10)', borderColor: 'rgba(34,211,238,0.25)' }}
                >
                  <span className="text-[#22D3EE] text-sm font-bold">OnlyAEO</span>
                </div>
              </div>
              <div className="px-4 py-4 text-center text-sm font-semibold" style={{ color: '#64748B' }}>SEO Agency</div>
              <div className="px-4 py-4 text-center text-sm font-semibold leading-tight" style={{ color: '#64748B' }}>
                AI Analysis
                <br />
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold mt-0.5"
                  style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706', border: '1px solid rgba(245,158,11,0.2)' }}
                >
                  tools only
                </span>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                animate={tableInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="grid grid-cols-4 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.015] transition-colors duration-200"
              >
                <div className="col-span-1 px-5 py-4 text-sm leading-snug" style={{ color: '#64748B' }}>{row.feature}</div>
                <div className="px-4 py-4 flex justify-center items-center">
                  <CheckCell checked={row.onlyaeo} />
                </div>
                <div className="px-4 py-4 flex justify-center items-center">
                  <CheckCell checked={row.seo} />
                </div>
                <div className="px-4 py-4 flex justify-center items-center">
                  <CheckCell checked={row.aitools} />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm mt-5 leading-relaxed" style={{ color: '#64748B' }}>
            AI analysis tools tell you where you stand. OnlyAEO does the work to change it — content, PR, Reddit, Wikipedia, and more.
          </p>
        </motion.div>
      </div>

      {/* Section bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
