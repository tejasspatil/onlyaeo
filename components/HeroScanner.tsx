'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCAN_STEPS = [
  { label: 'Scanning ChatGPT-4o', color: '#10A37F' },
  { label: 'Scanning Claude 3.5', color: '#D97706' },
  { label: 'Scanning Gemini 1.5', color: '#4285F4' },
  { label: 'Scanning DeepSeek R1', color: '#7C3AED' },
  { label: 'Scanning Perplexity', color: '#6366F1' },
  { label: 'Checking PR coverage', color: '#EC4899' },
  { label: 'Analysing Reddit signals', color: '#F97316' },
  { label: 'Checking Wikipedia entity', color: '#94A3B8' },
  { label: 'Mapping social authority', color: '#8B5CF6' },
  { label: 'Compiling visibility report', color: '#6366F1' },
]

type Phase = 'idle' | 'scanning' | 'done'

export default function HeroScanner() {
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [visibleSteps, setVisibleSteps] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  function run() {
    const name = company.trim()
    if (!name) { inputRef.current?.focus(); return }
    setSubmitted(name)
    setPhase('scanning')
    setVisibleSteps(0)

    let step = 0
    const interval = setInterval(() => {
      step++
      setVisibleSteps(step)
      if (step >= SCAN_STEPS.length) {
        clearInterval(interval)
        setTimeout(() => setPhase('done'), 350)
      }
    }, 260)
  }

  function reset() {
    setPhase('idle')
    setCompany('')
    setSubmitted('')
    setVisibleSteps(0)
  }

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="w-full">
      <div className="relative">
        {/* Glow bloom behind the card — indigo, distinct from cyan site accent */}
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.06) 50%, transparent 75%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Terminal card */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #0A0E1A 0%, #070B14 60%, #050910 100%)',
            border: '1px solid rgba(99,102,241,0.18)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(99,102,241,0.08)',
          }}
        >
          {/* Chrome bar */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{
              background: 'rgba(0,0,0,0.35)',
              borderColor: 'rgba(99,102,241,0.12)',
            }}
          >
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>

            {/* Title */}
            <span className="font-mono text-[11px] font-semibold select-none truncate max-w-[140px] xs:max-w-none" style={{ color: '#A5B4FC' }}>
              Try The AI Visibility Scanner
            </span>

            {/* Live indicator */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
              <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#8B5CF6' }}>LIVE</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 font-mono text-[13px] space-y-4">
            {/* Prompt line */}
            <div className="flex items-center gap-2">
              <span style={{ color: '#8B5CF6' }}>$</span>
              <span style={{ color: '#334155' }}>onlyaeo --scan</span>
              {submitted && (
                <span className="font-semibold ml-1" style={{ color: '#8B5CF6' }}>{submitted}</span>
              )}
            </div>

            {/* Idle input */}
            {phase === 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div
                    className="flex-1 flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all"
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(99,102,241,0.15)',
                    }}
                  >
                    <span className="text-xs flex-shrink-0" style={{ color: '#8B5CF6' }}>company:</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && run()}
                      placeholder="Enter your company name..."
                      className="flex-1 bg-transparent text-[13px] outline-none min-w-0"
                      style={{ color: '#CBD5E1' }}
                    />
                  </div>
                  <button
                    onClick={run}
                    disabled={!company.trim()}
                    className="w-full sm:w-auto px-5 py-2.5 font-bold rounded-xl text-[13px] disabled:opacity-25 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5 whitespace-nowrap text-white"
                    style={{
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                    }}
                  >
                    Scan →
                  </button>
                </div>
                <p className="text-[11px] pl-1" style={{ color: '#1E3352' }}>
                  We check across ChatGPT, Claude, Gemini, DeepSeek, Perplexity, and more
                </p>
              </motion.div>
            )}

            {/* Scan steps */}
            {(phase === 'scanning' || phase === 'done') && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-1.5"
              >
                {SCAN_STEPS.slice(0, visibleSteps).map((step) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center gap-2 min-w-[160px] sm:min-w-[188px]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                      <span className="text-[12px]" style={{ color: '#475569' }}>{step.label}</span>
                    </div>
                    <div className="flex-1 max-w-[60px] h-px rounded-full overflow-hidden" style={{ background: '#0F172A' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.35 }}
                        className="h-full rounded-full"
                        style={{ background: step.color }}
                      />
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-[11px] text-green-400/60"
                    >
                      ✓
                    </motion.span>
                  </motion.div>
                ))}

                {/* Scanning pulse */}
                {phase === 'scanning' && visibleSteps < SCAN_STEPS.length && (
                  <div className="flex gap-0.5 pl-0.5 pt-0.5">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1 h-1 rounded-full animate-bounce"
                        style={{ background: 'rgba(99,102,241,0.4)', animationDelay: `${i * 0.12}s` }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Done state */}
            <AnimatePresence>
              {phase === 'done' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="mt-2 space-y-3"
                >
                  <div className="border-t pt-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />

                  {/* Warning box */}
                  <div
                    className="relative flex items-center justify-center rounded-xl px-4 py-3.5 overflow-hidden"
                    style={{
                      background: 'rgba(245,158,11,0.08)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      minHeight: '48px',
                    }}
                  >
                    {/* Blurred background text — decorative only */}
                    <p className="select-none pointer-events-none text-amber-400 font-bold text-[13px] text-center w-full" style={{ filter: 'blur(5px)', opacity: 0.6 }}>
                      ⚠ {submitted}: not found in AI recommendations
                    </p>
                    {/* Overlay CTA — centered over the blur */}
                    <button
                      onClick={scrollToContact}
                      className="absolute inset-0 flex items-center justify-center gap-1.5 text-[12px] sm:text-[13px] font-semibold transition-opacity hover:opacity-75 px-4 text-center"
                      style={{ color: 'rgba(251,191,36,0.95)' }}
                    >
                      To know more get your free AI Audit →
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      onClick={scrollToContact}
                      className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-[13px] px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        boxShadow: '0 0 24px rgba(99,102,241,0.3)',
                      }}
                    >
                      Get Your Free AI Audit →
                    </button>
                    <button
                      onClick={reset}
                      className="text-[12px] hover:text-white transition-colors px-3 py-2 sm:py-0"
                      style={{ color: '#94A3B8' }}
                    >
                      Try another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-[10px] font-mono tracking-widest uppercase mt-3" style={{ color: '#94A3B8' }}>
        Checks signals across AI, PR, social &amp; more
      </p>
    </div>
  )
}
