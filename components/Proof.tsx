'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const stats = [
  {
    value: '3 in 4',
    label: 'Buyers use AI for vendor research',
    sub: 'AI is now a primary discovery channel for B2B purchasing decisions.',
    color: '#22D3EE',
  },
  {
    value: '< 10%',
    label: 'Brands optimised for AI search',
    sub: 'The vast majority of brands are invisible to AI models answering buyer questions.',
    color: '#818CF8',
  },
  {
    value: 'Day One',
    label: 'Measurable baseline established',
    sub: 'We quantify your current AI visibility from the very first day of engagement.',
    color: '#22D3EE',
  },
  {
    value: '4+ LLMs',
    label: 'Covered simultaneously',
    sub: 'ChatGPT, Claude, Gemini, DeepSeek, Perplexity, and more. Every engagement covers all major models.',
    color: '#818CF8',
  },
]

const faqs = [
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: 'AEO is the practice of optimising your brand\'s content and digital presence to appear in AI-generated answers from ChatGPT, Claude, Gemini, Perplexity, and other AI tools. When a buyer asks an AI assistant for a recommendation in your category, AEO is what puts your brand in the answer.',
  },
  {
    q: 'How is AEO different from traditional SEO?',
    a: 'Traditional SEO targets rankings and click-through traffic. AEO targets AI model citations. When a buyer asks ChatGPT for a recommendation, AEO ensures your brand is the answer. AI doesn\'t show a list of links; it gives a direct recommendation. AEO is the discipline of being that recommendation.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'We establish a measurable baseline from day one. First citation improvements typically appear within the first few months of sustained optimisation, and results compound over time as your citation architecture matures and your brand\'s AI presence grows across more signal layers.',
  },
  {
    q: 'Which AI platforms do you optimise for?',
    a: 'We optimise across ChatGPT, Claude, Gemini, DeepSeek, Perplexity, and more. The AI landscape changes rapidly. Our methodology covers all major models buyers actively use, and we continuously monitor and adapt as new models gain adoption.',
  },
  {
    q: 'Does AEO work for any industry?',
    a: 'If your buyers use AI to research, compare, or shortlist vendors, AEO is directly relevant to your growth. We work across B2B SaaS, e-commerce, professional services, and beyond. The core question is simple: when a potential buyer asks an AI assistant about your category, should your brand appear? If yes, AEO is for you.',
  },
  {
    q: "What's included in the free audit?",
    a: 'We assess your current AI visibility across all major models, benchmark your citation share against key competitors, identify the top gaps blocking your brand from appearing in AI recommendations, and deliver a prioritised action roadmap. No commitment required.',
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-sm sm:text-base transition-colors duration-200"
          style={{ color: open ? '#0891B2' : '#1E293B' }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200"
          style={{
            borderColor: open ? 'rgba(34,211,238,0.4)' : '#E2E8F0',
            color: open ? '#0891B2' : '#94A3B8',
          }}
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: '#64748B' }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Proof() {
  const statsRef = useRef<HTMLDivElement>(null)
  const outcomesRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const outcomesInView = useInView(outcomesRef, { once: true, margin: '-60px' })
  const faqInView = useInView(faqRef, { once: true, margin: '-60px' })

  return (
    <section id="proof" className="relative py-28 lg:py-36 overflow-hidden" style={{ background: '#F7F8FC' }}>
      {/* Section top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

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
                The Numbers
              </span>
            </div>
          </div>

          <h2
            className="font-black leading-tight max-w-2xl tracking-[-0.03em]"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', color: '#0F172A' }}
          >
            The AI search shift is{' '}
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              already happening
            </span>
          </h2>
          <p className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: '#475569' }}>
            Not vanity metrics. These are the numbers that define the opportunity and urgency of AEO.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-2xl p-7 overflow-hidden card-lift"
              style={{
                border: '1px solid #F1F5F9',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 16px 40px rgba(0,0,0,0.06)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)` }}
              />
              <div
                className="text-5xl lg:text-6xl font-black mb-3 leading-none"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-2 leading-snug" style={{ color: '#1E293B' }}>{stat.label}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{stat.sub}</div>
              <div
                className="absolute bottom-0 left-0 right-0 h-20 opacity-[0.04]"
                style={{ background: `radial-gradient(ellipse at bottom, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Outcome cards */}
        <motion.div
          ref={outcomesRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20"
        >
          {/* What Good AEO Looks Like */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl p-7"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 16px 40px rgba(0,0,0,0.06)',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span className="text-[#0891B2] text-xs font-semibold tracking-wide uppercase">
                What Good AEO Looks Like
              </span>
            </div>

            <h3 className="text-xl font-bold mb-6" style={{ color: '#0F172A' }}>Before & after sustained optimisation</h3>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="text-xs font-mono text-red-400/80 mb-3 tracking-wider">BEFORE AEO</div>
                <div className="text-2xl font-black text-red-400 mb-2 leading-tight">0 citations</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  across hundreds of AI queries in the category. Completely invisible to AI models.
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <div className="text-xs font-mono text-emerald-600/80 mb-3 tracking-wider">AFTER SUSTAINED WORK</div>
                <div className="text-2xl font-black text-emerald-500 mb-2 leading-tight">Brand cited</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  brand begins appearing in category recommendations across multiple major models
                </div>
              </div>
            </div>

            <p className="text-xs italic leading-relaxed" style={{ color: '#94A3B8' }}>
              Outcome descriptions based on the nature of the work. Individual results vary by category, competition, and timeline.
            </p>
          </motion.div>

          {/* The Compounding Effect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl p-7"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 16px 40px rgba(0,0,0,0.06)',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              <span className="text-[#0891B2] text-xs font-semibold tracking-wide uppercase">
                The Compounding Effect
              </span>
            </div>

            <h3 className="text-xl font-bold mb-6" style={{ color: '#0F172A' }}>How AI visibility builds over time</h3>

            <div className="relative flex flex-col gap-5">
              <div
                className="absolute left-3 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.4), rgba(129,140,248,0.2), transparent)' }}
              />
              {[
                { month: 'Month 1', text: 'Baseline established. Audit complete. Gaps mapped across all major AI models.' },
                { month: 'Month 2', text: 'First citations appear. Citation architecture deployed across signal layers.' },
                { month: 'Month 3', text: 'Citation frequency grows. Brand enters category recommendations.' },
                { month: 'Month 6', text: 'Brand becomes a consistent AI recommendation in its category.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
                  className="flex gap-4 pl-10 relative"
                >
                  <div
                    className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#22D3EE] flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: '0 0 0 3px rgba(34,211,238,0.08)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold mb-1 tracking-wide" style={{ color: '#0891B2' }}>{item.month}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          ref={faqRef}
          id="faq"
          initial={{ opacity: 0, y: 30 }}
          animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            {/* FAQ label — cyan pill */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/[0.15] bg-cyan-500/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                <span className="text-[#22D3EE] text-[11px] font-semibold tracking-[0.12em] uppercase">FAQ</span>
              </div>
            </div>
            <h2
              className="font-black tracking-[-0.03em]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#0F172A' }}
            >
              Frequently asked{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                questions
              </span>
            </h2>
          </div>

          <div
            className="bg-white rounded-2xl px-6 sm:px-8"
            style={{
              border: '1px solid #F1F5F9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />
    </section>
  )
}
