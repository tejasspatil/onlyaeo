'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    accent: '#6366F1',
    title: 'AI Has No Page Two',
    body: "Traditional search returned ten blue links. AI returns one answer. If your brand isn't in that answer, you don't exist for that query. There's no bounce rate to warn you.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    accent: '#6366F1',
    title: 'Buyers Trust AI Over Search',
    body: 'The majority of B2B buyers now use AI assistants for vendor research before visiting a single website. They trust the recommendation. They rarely look further than the first answer.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    accent: '#6366F1',
    title: 'Early Movers Are Pulling Away',
    body: "Brands building AI citation authority right now will be significantly harder to displace. Every week this channel goes unoptimised, competitors get closer to owning your category's AI recommendations.",
  },
]

export default function Problem() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="relative py-24 lg:py-32" style={{ background: '#FFFFFF' }}>
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">

          {/* Section label — violet pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-violet-600 text-[11px] font-semibold tracking-[0.12em] uppercase">
                The Invisible Brand Problem
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-black leading-[1.06] tracking-[-0.03em] max-w-2xl mx-auto mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', color: '#0F172A' }}
          >
            When buyers ask AI,{' '}
            <span style={{ color: '#EF4444' }}>most brands aren&apos;t the answer.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg max-w-xl mx-auto leading-[1.75]"
            style={{ color: '#64748B' }}
          >
            Someone in your category is asking ChatGPT for a recommendation right now.
            AI responds in seconds with a list of names. For most brands, that list
            doesn&apos;t include them.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el }}
              className="relative rounded-2xl p-7 bg-white transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              style={{
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04)'
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${card.accent}12`,
                  color: card.accent,
                }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-[16px] mb-2.5 leading-snug" style={{ color: '#0F172A' }}>
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.7]" style={{ color: '#64748B' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div
            className="text-6xl font-black leading-none mb-3 select-none"
            style={{ color: 'rgba(0,0,0,0.06)', fontFamily: 'Georgia, serif' }}
          >
            &ldquo;
          </div>
          <p className="text-lg leading-[1.8] font-medium" style={{ color: '#475569' }}>
            The shift from search to AI is not a trend. It&apos;s a structural change in how buyers find vendors.
            The question isn&apos;t whether AEO matters. It&apos;s whether you&apos;ll act before your competitors do.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-8 h-px" style={{ background: 'rgba(0,0,0,0.12)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#94A3B8' }}>
              OnlyAEO
            </span>
            <div className="w-8 h-px" style={{ background: 'rgba(0,0,0,0.12)' }} />
          </div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
      />
    </section>
  )
}
