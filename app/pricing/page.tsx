'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const CheckIcon = () => (
  <div
    className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5"
    style={{
      width: 20,
      height: 20,
      background: 'rgba(34,211,238,0.1)',
      border: '1px solid rgba(34,211,238,0.2)',
    }}
  >
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
)

const CheckTag = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      color: '#94A3B8',
    }}
  >
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
    {children}
  </span>
)

export default function PricingPage() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-7')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (i: number) => (el: HTMLDivElement | null) => {
    revealRefs.current[i] = el
  }

  return (
    <>
      <Nav />

      <main
        className="relative overflow-hidden"
        style={{ background: '#020617', minHeight: '100vh' }}
      >
        {/* Grid texture */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* Ambient glow */}
        <div
          className="fixed pointer-events-none"
          style={{
            top: -200,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 600,
            background:
              'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        <div className="relative" style={{ zIndex: 1 }}>

          {/* ── Page Hero ── */}
          <section className="text-center" style={{ padding: '140px 24px 72px' }}>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  color: '#22D3EE',
                  padding: '6px 16px',
                  letterSpacing: '0.02em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#22D3EE', animation: 'pulse 2s ease-in-out infinite' }}
                />
                Plans &amp; Pricing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-black tracking-tight mb-5"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#F1F5F9',
                }}
              >
                Be the Brand{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AI Recommends.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mx-auto leading-relaxed"
                style={{
                  fontSize: 'clamp(16px, 2vw, 19px)',
                  color: '#64748B',
                  maxWidth: 520,
                }}
              >
                Two focused plans to get your brand cited across ChatGPT, Claude, Gemini &amp;
                Perplexity. Pick your growth stage.
              </motion.p>
            </div>
          </section>

          {/* ── Plan Cards ── */}
          <section style={{ padding: '0 24px 72px' }}>
            <div className="max-w-5xl mx-auto">

              <div
                className="grid gap-6 mb-16"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}
              >
                {/* ── Starter ── */}
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="rounded-2xl relative"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    backdropFilter: 'blur(12px)',
                    padding: '40px 36px',
                  }}
                >
                  <p
                    className="font-bold uppercase tracking-widest mb-2.5"
                    style={{ fontSize: 12, color: '#64748B', letterSpacing: '0.1em' }}
                  >
                    Starter
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-1.5">
                    <span
                      className="font-black"
                      style={{ fontSize: 50, color: '#F1F5F9', letterSpacing: '-0.03em', lineHeight: 1 }}
                    >
                      $999
                    </span>
                    <span style={{ fontSize: 16, color: '#64748B' }}>/month</span>
                  </div>

                  <p
                    className="mb-8 pb-7"
                    style={{
                      fontSize: 14,
                      color: '#64748B',
                      borderBottom: '1px solid rgba(34,211,238,0.1)',
                    }}
                  >
                    The essentials to get your brand into AI answers.
                  </p>

                  <p
                    className="uppercase tracking-widest mb-5"
                    style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.1em' }}
                  >
                    What&apos;s included
                  </p>

                  <ul className="flex flex-col gap-4 mb-9">
                    {[
                      <>Full AI visibility <strong style={{ color: '#F1F5F9' }}>audit &amp; benchmark</strong> report</>,
                      <>AEO strategy &amp; content architecture plan</>,
                      <>Website &amp; content structure optimisation</>,
                      <><strong style={{ color: '#F1F5F9' }}>250 AEO-optimised articles</strong> created &amp; published per month</>,
                      <>Monthly performance reporting</>,
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: '#94A3B8' }}>
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="block w-full text-center font-bold rounded-lg transition-all duration-200"
                    style={{
                      padding: '14px 24px',
                      fontSize: 15,
                      background: 'transparent',
                      color: '#F1F5F9',
                      border: '1px solid rgba(34,211,238,0.25)',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22D3EE'
                      e.currentTarget.style.color = '#22D3EE'
                      e.currentTarget.style.background = 'rgba(34,211,238,0.06)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                      e.currentTarget.style.color = '#F1F5F9'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Get Started →
                  </a>
                </motion.div>

                {/* ── Growth ── */}
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="rounded-2xl relative"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid #22D3EE',
                    backdropFilter: 'blur(12px)',
                    padding: '40px 36px',
                    boxShadow: '0 0 60px rgba(34,211,238,0.1)',
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 rounded-t-2xl pointer-events-none"
                    style={{
                      left: 20,
                      right: 20,
                      height: 1,
                      background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                    }}
                  />

                  {/* Most Popular badge */}
                  <div
                    className="absolute font-bold uppercase"
                    style={{
                      top: -13,
                      right: 28,
                      background: '#22D3EE',
                      color: '#020617',
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      padding: '4px 14px',
                      borderRadius: 100,
                    }}
                  >
                    Most Popular
                  </div>

                  <p
                    className="font-bold uppercase tracking-widest mb-2.5"
                    style={{ fontSize: 12, color: '#22D3EE', letterSpacing: '0.1em' }}
                  >
                    Growth
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-1.5">
                    <span
                      className="font-black"
                      style={{ fontSize: 50, color: '#F1F5F9', letterSpacing: '-0.03em', lineHeight: 1 }}
                    >
                      ~$2,000
                    </span>
                    <span style={{ fontSize: 16, color: '#64748B' }}>/month</span>
                  </div>

                  <p
                    className="mb-8 pb-7"
                    style={{
                      fontSize: 14,
                      color: '#64748B',
                      borderBottom: '1px solid rgba(34,211,238,0.15)',
                    }}
                  >
                    Everything in Starter, plus distribution &amp; social reach.
                  </p>

                  <p
                    className="uppercase tracking-widest mb-5"
                    style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.1em' }}
                  >
                    What&apos;s included
                  </p>

                  <ul className="flex flex-col gap-4 mb-9">
                    {[
                      { text: <><strong style={{ color: '#F1F5F9' }}>Everything in Starter</strong></>, badge: null },
                      { text: <><strong style={{ color: '#F1F5F9' }}>500 AEO-optimised articles</strong> per month</>, badge: '2×' },
                      { text: <>Bi-monthly performance reporting</>, badge: null },
                      { text: <>2 PR articles written &amp; published</>, badge: 'New' },
                      { text: <>Quora, Reddit &amp; Wikipedia strategy</>, badge: 'New' },
                      { text: <>Social content: <strong style={{ color: '#F1F5F9' }}>10 LinkedIn + 10 X posts</strong></>, badge: 'New' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: '#94A3B8' }}>
                        <CheckIcon />
                        <span>
                          {item.text}
                          {item.badge && (
                            <span
                              className="inline-block font-bold ml-1.5 align-middle"
                              style={{
                                fontSize: 10,
                                background: 'rgba(34,211,238,0.1)',
                                border: '1px solid rgba(34,211,238,0.2)',
                                color: '#22D3EE',
                                padding: '2px 7px',
                                borderRadius: 4,
                                letterSpacing: '0.04em',
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="block w-full text-center font-bold rounded-lg transition-all duration-200"
                    style={{
                      padding: '14px 24px',
                      fontSize: 15,
                      background: '#22D3EE',
                      color: '#020617',
                      border: '1px solid #22D3EE',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#38BDF8'
                      e.currentTarget.style.borderColor = '#38BDF8'
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,211,238,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#22D3EE'
                      e.currentTarget.style.borderColor = '#22D3EE'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Get Started →
                  </a>
                </motion.div>
              </div>

              {/* ── Comparison Table ── */}
              <div
                ref={addRef(0)}
                className="opacity-0 translate-y-7 transition-all duration-700 mb-16"
              >
                <h2
                  className="text-center font-bold mb-8"
                  style={{ fontSize: 22, color: '#F1F5F9', letterSpacing: '-0.01em' }}
                >
                  Feature-by-feature comparison
                </h2>

                <div
                  className="overflow-x-auto rounded-2xl"
                  style={{ border: '1px solid rgba(34,211,238,0.15)' }}
                >
                  <table
                    className="w-full border-collapse"
                    style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)', minWidth: 520 }}
                    aria-label="Plan feature comparison"
                  >
                    <thead>
                      <tr>
                        <th
                          className="text-left font-bold uppercase tracking-widest"
                          style={{ padding: '20px 24px', fontSize: 12, color: '#64748B', borderBottom: '1px solid rgba(34,211,238,0.1)', letterSpacing: '0.08em' }}
                        >
                          Feature
                        </th>
                        <th
                          className="text-center font-bold uppercase tracking-widest"
                          style={{ padding: '20px 24px', fontSize: 12, color: '#64748B', borderBottom: '1px solid rgba(34,211,238,0.1)', letterSpacing: '0.08em' }}
                        >
                          Starter
                        </th>
                        <th
                          className="text-center font-bold uppercase tracking-widest"
                          style={{ padding: '20px 24px', fontSize: 12, color: '#22D3EE', borderBottom: '1px solid rgba(34,211,238,0.1)', letterSpacing: '0.08em', background: 'rgba(34,211,238,0.04)' }}
                        >
                          Growth
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['AI visibility scan', 'Full', 'Full', 'val', 'val'],
                        ['Competitor benchmarking', '✓', '✓', 'check', 'check'],
                        ['Gap analysis report', '✓', '✓', 'check', 'check'],
                        ['AEO strategy & architecture plan', '✓', '✓', 'check', 'check'],
                        ['Website & content structure optimisation', '✓', '✓', 'check', 'check'],
                        ['AEO-optimised articles per month', '250', '500', 'val', 'val'],
                        ['Performance reporting', 'Monthly', 'Bi-monthly', 'plain', 'val'],
                        ['PR articles (written & published)', '—', '2 / month', 'dash', 'val'],
                        ['Quora, Reddit & Wikipedia strategy', '—', '✓', 'dash', 'check'],
                        ['Social media content creation', '—', '10 LinkedIn + 10 X', 'dash', 'val'],
                      ].map(([feature, starter, growth, starterType, growthType], i) => (
                        <tr key={i}>
                          <td
                            className="font-medium"
                            style={{
                              padding: '15px 24px',
                              fontSize: 14,
                              color: '#F1F5F9',
                              borderBottom: i < 9 ? '1px solid rgba(34,211,238,0.06)' : 'none',
                            }}
                          >
                            {feature}
                          </td>
                          <td
                            className="text-center"
                            style={{
                              padding: '15px 24px',
                              fontSize: (starterType === 'check' || starterType === 'dash') ? 17 : 14,
                              borderBottom: i < 9 ? '1px solid rgba(34,211,238,0.06)' : 'none',
                              color: starterType === 'check' ? '#10B981' : starterType === 'dash' ? '#1E293B' : starterType === 'val' ? '#F1F5F9' : '#94A3B8',
                              fontWeight: ['val', 'check'].includes(starterType as string) ? 600 : 400,
                            }}
                          >
                            {starter}
                          </td>
                          <td
                            className="text-center"
                            style={{
                              padding: '15px 24px',
                              fontSize: (growthType === 'check' || growthType === 'dash') ? 17 : 14,
                              borderBottom: i < 9 ? '1px solid rgba(34,211,238,0.06)' : 'none',
                              background: 'rgba(34,211,238,0.03)',
                              color: growthType === 'check' ? '#10B981' : growthType === 'dash' ? '#1E293B' : growthType === 'val' ? '#F1F5F9' : '#94A3B8',
                              fontWeight: ['val', 'check'].includes(growthType as string) ? 600 : 400,
                            }}
                          >
                            {growth}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Free Audit Strip ── */}
              <div
                ref={addRef(1)}
                className="opacity-0 translate-y-7 transition-all duration-700 mb-16"
                style={{ transitionDelay: '0.1s' }}
              >
                <div
                  className="rounded-xl relative overflow-hidden"
                  style={{
                    background: '#0F172A',
                    border: '1px solid rgba(34,211,238,0.15)',
                    padding: '28px 32px',
                  }}
                >
                  {/* subtle top line */}
                  <div
                    className="absolute top-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: 2,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.35) 50%, transparent 100%)',
                    }}
                  />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <p
                        className="uppercase font-bold tracking-widest mb-1.5"
                        style={{ fontSize: 11, color: '#64748B', letterSpacing: '0.1em' }}
                      >
                        Not sure where to start?
                      </p>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontSize: 18, color: '#F1F5F9' }}
                      >
                        Free AI Visibility Audit
                      </h3>
                      <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6, maxWidth: 480 }}>
                        See exactly where your brand stands across ChatGPT, Claude, Gemini &amp; Perplexity
                        before committing to any plan. No credit card, no obligation.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <CheckTag>Multi-model scan</CheckTag>
                        <CheckTag>Competitor benchmarking</CheckTag>
                        <CheckTag>Gap analysis</CheckTag>
                        <CheckTag>Full report delivered</CheckTag>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-start sm:items-center gap-1">
                      <span
                        className="font-black"
                        style={{ fontSize: 30, color: '#F1F5F9', letterSpacing: '-0.02em' }}
                      >
                        Free
                      </span>
                      <span style={{ fontSize: 12, color: '#64748B', marginBottom: 12 }}>
                        zero commitment
                      </span>
                      <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200"
                        style={{
                          background: '#22D3EE',
                          color: '#020617',
                          padding: '12px 22px',
                          fontSize: 14,
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#38BDF8'
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,211,238,0.3)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#22D3EE'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        Get Free Audit →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Bottom CTA ── */}
              <div
                ref={addRef(2)}
                className="opacity-0 translate-y-7 transition-all duration-700"
                style={{ transitionDelay: '0.15s' }}
              >
                <div
                  className="rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    backdropFilter: 'blur(12px)',
                    padding: 'clamp(32px, 5vw, 52px) clamp(24px, 5vw, 52px)',
                  }}
                >
                  {/* top glow line */}
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: 48,
                      right: 48,
                      height: 1,
                      background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                    }}
                  />

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                      <h2
                        className="font-extrabold mb-2"
                        style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#F1F5F9', letterSpacing: '-0.02em' }}
                      >
                        Ready to get started?
                      </h2>
                      <p style={{ fontSize: 16, color: '#64748B' }}>
                        Pick a plan or start with a free audit — we&apos;ll take it from there.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 flex-shrink-0">
                      <a
                        href="/#contact"
                        className="inline-flex items-center font-bold rounded-lg transition-all duration-200"
                        style={{
                          background: '#22D3EE',
                          color: '#020617',
                          padding: '13px 26px',
                          fontSize: 15,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#38BDF8'
                          e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,211,238,0.35)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#22D3EE'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        Get Free Audit →
                      </a>
                      <a
                        href="https://calendly.com/tejas-gai/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-semibold rounded-lg transition-all duration-200"
                        style={{
                          background: 'transparent',
                          color: '#F1F5F9',
                          padding: '12px 26px',
                          fontSize: 15,
                          border: '1px solid rgba(34,211,238,0.25)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#22D3EE'
                          e.currentTarget.style.color = '#22D3EE'
                          e.currentTarget.style.background = 'rgba(34,211,238,0.06)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                          e.currentTarget.style.color = '#F1F5F9'
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        Talk to Us
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fine print */}
                <p
                  className="text-center mt-6"
                  style={{ fontSize: 13, color: '#475569', lineHeight: 1.8 }}
                >
                  Pricing customised after audit based on category, competition &amp; scope &middot; All plans include onboarding call
                  <br />
                  PR articles billed separately &middot; Enterprise plans available on request
                </p>
              </div>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
