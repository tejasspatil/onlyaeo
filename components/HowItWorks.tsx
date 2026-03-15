'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="5" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <path d="M16 5v2M16 25v2M5 16h2M25 16h2" />
      </svg>
    ),
    title: 'Audit & Benchmark',
    description:
      'We run your brand through all major AI models: ChatGPT, Claude, Gemini, DeepSeek, Perplexity, and more. We map every citation and every gap. You get a quantified baseline showing exactly where you stand today across every platform that matters.',
    tags: ['AI query testing', 'Citation mapping', 'Competitor benchmark', 'Gap analysis'],
    highlight: false,
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 22 26 16 20 10" />
        <polyline points="12 10 6 16 12 22" />
        <line x1="17" y1="9" x2="15" y2="23" />
      </svg>
    ),
    title: 'Build Citation Architecture',
    description:
      'We restructure your content, implement structured data, and build Q&A assets engineered for LLM citation. Every piece of content is purpose-built to be referenced by AI models answering buyer questions in your category.',
    tags: ['Structured data', 'Q&A asset creation', 'Content restructuring', 'Schema markup'],
    highlight: false,
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <path d="M16 5a20 20 0 0 1 5 11 20 20 0 0 1-5 11 20 20 0 0 1-5-11 20 20 0 0 1 5-11z" />
      </svg>
    ),
    title: 'Distribute Across Every Signal Layer',
    description:
      "AI reads everything: PR coverage, industry publications, Reddit threads, Wikipedia, social media, forums, and third-party citations. We identify where you need to appear and execute it end to end.",
    tags: ['Strategic PR placement', 'Reddit & forum presence', 'Wikipedia entity building', 'Social authority signals'],
    highlight: true,
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 22 10 14 16 17 22 8 28 13" />
        <circle cx="28" cy="13" r="2" fill="currentColor" stroke="none" />
        <line x1="3" y1="26" x2="29" y2="26" opacity="0.35" />
      </svg>
    ),
    title: 'Monitor, Report & Compound',
    description:
      'We track mention frequency, citation share, and LLM recall across all major models on an ongoing basis. Monthly reports show exactly how your AI visibility is growing, and every citation we earn becomes evidence for the next.',
    tags: ['Citation tracking', 'Monthly reporting', 'LLM recall metrics', 'Compounding growth'],
    highlight: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' })

  return (
    <section
      id="how-it-works"
      className="relative py-28 lg:py-36"
      style={{ background: '#F5F7FF' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-16 lg:mb-20"
        >
          <motion.div variants={headerVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-indigo-600 text-[11px] font-semibold tracking-[0.12em] uppercase">
                The Process
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="font-black leading-tight max-w-2xl tracking-[-0.03em]"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', color: '#0F172A' }}
          >
            How we get your brand{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              into AI answers
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="mt-5 text-lg max-w-xl leading-relaxed"
            style={{ color: '#64748B' }}
          >
            A systematic four-step process. From measuring where you stand today to compounding
            citation authority across every AI model and signal layer.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="relative rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1"
              style={
                step.highlight
                  ? {
                      background: '#FFFFFF',
                      border: '1px solid rgba(99,102,241,0.2)',
                      boxShadow: '0 4px 24px rgba(99,102,241,0.1), 0 1px 3px rgba(0,0,0,0.05)',
                    }
                  : {
                      background: '#FFFFFF',
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)',
                    }
              }
            >
              {/* Highlighted top accent */}
              {step.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
                />
              )}

              <div className="relative z-10">
                {/* Step number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{
                      background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      opacity: 0.5,
                    }}
                  >
                    {step.number}
                  </span>

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={
                      step.highlight
                        ? { background: 'rgba(99,102,241,0.1)', color: '#6366F1', border: '1px solid rgba(99,102,241,0.2)' }
                        : { background: '#F8FAFC', color: '#6366F1', border: '1px solid #E2E8F0' }
                    }
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Differentiator badge */}
                {step.highlight && (
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-indigo-600 text-xs font-semibold tracking-wide uppercase">
                      The Differentiator
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F172A' }}>{step.title}</h3>

                <p className="leading-relaxed mb-6 text-sm lg:text-[0.9375rem]" style={{ color: '#64748B' }}>
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={
                        step.highlight
                          ? { background: 'rgba(99,102,241,0.08)', color: '#6366F1', border: '1px solid rgba(99,102,241,0.15)' }
                          : { background: '#F1F5F9', color: '#64748B', border: '1px solid #E2E8F0' }
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Step progress indicators */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 20 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors"
                style={
                  step.highlight
                    ? { background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.3)', color: '#6366F1' }
                    : { background: '#F1F5F9', borderColor: '#E2E8F0', color: '#94A3B8' }
                }
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="h-px w-14 lg:w-20"
                  style={
                    i === 1
                      ? { background: 'linear-gradient(90deg, #E2E8F0, rgba(99,102,241,0.35), rgba(99,102,241,0.45))' }
                      : { background: '#E2E8F0' }
                  }
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl px-8 py-6 max-w-xl w-full"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <div className="text-left flex-1">
              <p className="font-semibold" style={{ color: '#0F172A' }}>Ready to see where you stand?</p>
              <p className="text-sm mt-1" style={{ color: '#64748B' }}>
                Free audit. All four steps mapped to your brand.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex-shrink-0 font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap text-white"
              style={{
                background: '#22D3EE',
                color: '#020617',
                boxShadow: '0 0 20px rgba(34,211,238,0.25)',
              }}
            >
              Get Free Audit →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />
    </section>
  )
}
