'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

type WidgetState = 'idle' | 'loading' | 'streaming' | 'complete'

const loadingLines = [
  { text: '$ Connecting to ChatGPT-4o...', suffix: 'connected ✓', color: 'text-green-400' },
  { text: '$ Querying Claude 3.5 Sonnet...', suffix: 'connected ✓', color: 'text-green-400' },
  { text: '$ Querying Gemini 1.5 Pro...', suffix: 'connected ✓', color: 'text-green-400' },
  { text: '$ Querying DeepSeek R1...', suffix: 'connected ✓', color: 'text-green-400' },
  { text: '$ Analysing citation patterns...', suffix: '', color: 'text-yellow-400' },
]

function ProgressLine({ text, suffix, color, delay }: { text: string; suffix: string; color: string; delay: number }) {
  const [show, setShow] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [showSuffix, setShowSuffix] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), delay)
    const t2 = setTimeout(() => setShowBar(true), delay + 100)
    const t3 = setTimeout(() => setShowSuffix(true), delay + 800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [delay])

  if (!show) return null

  return (
    <div className="flex items-center gap-3 text-sm font-mono py-0.5">
      <span className="text-[#94A3B8]">{text}</span>
      {showBar && suffix && (
        <div className="flex items-center gap-2">
          <div className="h-1.5 bg-[#0F172A] rounded-full overflow-hidden w-20">
            <div
              className="h-full bg-[#22D3EE] rounded-full transition-all duration-700"
              style={{ width: showSuffix ? '100%' : '0%' }}
            />
          </div>
          {showSuffix && <span className={color}>{suffix}</span>}
        </div>
      )}
      {!suffix && showBar && (
        <div className="flex gap-0.5">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-yellow-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AuditWidget() {
  const [state, setState] = useState<WidgetState>('idle')
  const [company, setCompany] = useState('')
  const [category, setCategory] = useState('')
  const [streamedText, setStreamedText] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const streamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight
    }
  }, [streamedText])

  const handleSubmit = async () => {
    if (!company.trim()) {
      inputRef.current?.focus()
      return
    }

    setError('')
    setStreamedText('')
    setState('loading')

    // Show loading lines for 2.5 seconds
    await new Promise(resolve => setTimeout(resolve, 2800))

    setState('streaming')

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company: company.trim(), category: category.trim() || undefined }),
      })

      if (!res.ok) {
        throw new Error('API request failed')
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error('No stream')

      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        accumulated += chunk
        setStreamedText(accumulated)
      }

      setState('complete')
    } catch (err) {
      setError('Unable to connect. Please try again or enter your email for a manual audit.')
      setState('idle')
    }
  }

  const handleReset = () => {
    setState('idle')
    setStreamedText('')
    setCompany('')
    setCategory('')
    setError('')
  }

  const companyName = company.trim() || 'Your Brand'

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="text-[#22D3EE] text-sm font-medium">Live Demo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
          >
            See It Live:{' '}
            <span className="gradient-text">Check Your AI Visibility</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#94A3B8] text-lg max-w-xl mx-auto"
          >
            Enter your company name and watch AI recommendations appear in real time. Then see exactly what&apos;s missing.
          </motion.p>
        </div>

        {/* Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#0A0F1A] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Terminal header bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#050A14] border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-[#94A3B8] font-mono">onlyaeo terminal — ai visibility scanner</span>
            <div className="w-16" />
          </div>

          <div className="p-6 lg:p-8">
            {/* Input area */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1 text-xs text-[#94A3B8] font-mono">
                <span className="text-[#22D3EE]">$</span> onlyaeo audit --target
              </div>

              <div className={cn(
                'flex flex-col sm:flex-row gap-3',
                state !== 'idle' && 'pointer-events-none opacity-50'
              )}>
                <div className="flex-1 flex items-center gap-3 bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus-within:border-cyan-500/40 transition-colors">
                  <span className="text-[#22D3EE] font-mono text-sm flex-shrink-0">company:</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    placeholder="Enter your company name..."
                    className="flex-1 bg-transparent text-[#22D3EE] font-mono text-sm outline-none placeholder:text-[#94A3B8]/50"
                    disabled={state !== 'idle'}
                  />
                </div>
                <div className="flex items-center gap-3 bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus-within:border-cyan-500/40 transition-colors sm:w-48">
                  <span className="text-[#94A3B8] font-mono text-sm flex-shrink-0">category:</span>
                  <input
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="optional"
                    className="flex-1 bg-transparent text-[#94A3B8] font-mono text-sm outline-none placeholder:text-[#94A3B8]/40 min-w-0"
                    disabled={state !== 'idle'}
                  />
                </div>
              </div>
            </div>

            {/* Action button */}
            {state === 'idle' && (
              <button
                onClick={handleSubmit}
                disabled={!company.trim()}
                className="flex items-center gap-2 bg-[#22D3EE] text-[#020617] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#38BDF8] hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                <span>Run Audit</span>
                <span>→</span>
              </button>
            )}

            {error && (
              <p className="text-red-400 text-sm font-mono mt-2">{error}</p>
            )}

            {/* Loading state */}
            <AnimatePresence>
              {state === 'loading' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 border-t border-white/5 pt-4"
                >
                  {loadingLines.map((line, i) => (
                    <ProgressLine
                      key={i}
                      text={line.text}
                      suffix={line.suffix}
                      color={line.color}
                      delay={i * 450}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Streaming state */}
            <AnimatePresence>
              {(state === 'streaming' || state === 'complete') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  {/* Connection summary */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {['ChatGPT-4o', 'Claude 3.5', 'Gemini 1.5', 'DeepSeek R1'].map((model, i) => (
                      <div key={model} className="flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-500/5 border border-green-500/20 rounded-lg px-2 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        {model}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2 mb-3 text-xs text-[#94A3B8] font-mono">
                      <span className="text-[#22D3EE]">AI</span>
                      <span>Response — composite across all models</span>
                      {state === 'streaming' && (
                        <span className="flex gap-0.5 ml-1">
                          {[0,1,2].map(i => (
                            <span key={i} className="w-1 h-1 rounded-full bg-[#22D3EE] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                          ))}
                        </span>
                      )}
                    </div>

                    <div
                      ref={streamRef}
                      className="font-mono text-sm text-[#94A3B8] leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto pr-2"
                    >
                      {streamedText}
                      {state === 'streaming' && (
                        <span className="inline-block w-2 h-4 bg-[#22D3EE] animate-pulse ml-0.5 align-text-bottom" />
                      )}
                    </div>
                  </div>

                  {/* Complete state CTA */}
                  {state === 'complete' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 border-t border-white/5 pt-6"
                    >
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-5">
                        <p className="text-amber-400 font-mono text-sm font-semibold mb-2">
                          ⚠ {companyName} — not found in top AI recommendations
                        </p>
                        <p className="text-[#94A3B8] text-sm">
                          This is what AI says when your buyers ask. Your brand isn&apos;t in the answer.{' '}
                          <span className="text-white">We can change that.</span>
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                        <button
                          onClick={() => {
                            const el = document.querySelector('#contact')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="flex items-center gap-2 bg-[#22D3EE] text-[#020617] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#38BDF8] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                        >
                          Get Your Free AI Visibility Audit →
                        </button>
                        <button
                          onClick={handleReset}
                          className="text-[#94A3B8] text-sm hover:text-white transition-colors underline underline-offset-2"
                        >
                          Try another company
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-center text-[#94A3B8] text-xs mt-4 font-mono">
          Powered by Llama AI · Results are illustrative · Real audit includes full multi-model analysis
        </p>
      </div>
    </section>
  )
}
