'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

/* ─── Small reusable pieces ─── */
const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: 'linear-gradient(135deg, #22D3EE 0%, #818CF8 55%, #C084FC 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {children}
  </span>
)

const SectionPill = ({ color, children }: { color: 'cyan' | 'indigo' | 'violet'; children: React.ReactNode }) => {
  const styles = {
    cyan:   { bg: '#ECFEFF', border: 'rgba(34,211,238,0.35)',  dot: '#22D3EE', text: '#0891B2' },
    indigo: { bg: '#EEF2FF', border: 'rgba(99,102,241,0.3)',   dot: '#818CF8', text: '#4F46E5' },
    violet: { bg: '#F5F3FF', border: 'rgba(167,139,250,0.3)',  dot: '#C084FC', text: '#7C3AED' },
  }[color]
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-6"
      style={{ background: styles.bg, border: `1px solid ${styles.border}`, color: styles.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: styles.dot }} />
      {children}
    </div>
  )
}

const CheckRow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3" style={{ color: '#64748B', fontSize: 14 }}>
    <span
      className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5"
      style={{ width: 20, height: 20, background: '#ECFEFF', border: '1px solid rgba(34,211,238,0.3)' }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <span>{children}</span>
  </li>
)

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function PricingPage() {

  /* refs for scroll-triggered sections */
  const opportunityRef  = useRef<HTMLElement>(null)
  const fitRef          = useRef<HTMLElement>(null)
  const plansRef        = useRef<HTMLElement>(null)
  const tableRef        = useRef<HTMLElement>(null)
  const auditRef        = useRef<HTMLDivElement>(null)

  const oppInView    = useInView(opportunityRef,  { once: true, margin: '-60px' })
  const fitInView    = useInView(fitRef,           { once: true, margin: '-60px' })
  const plansInView  = useInView(plansRef,         { once: true, margin: '-60px' })
  const tableInView  = useInView(tableRef,         { once: true, margin: '-60px' })
  const auditInView  = useInView(auditRef,         { once: true, margin: '-60px' })

  return (
    <>
      <Nav />
      <main style={{ background: '#FAFBFF', color: '#0F172A' }}>

        {/* ── dot-grid texture ── */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* ── ambient glow ── */}
        <div
          className="fixed pointer-events-none"
          style={{
            top: -160, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 500,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, rgba(129,140,248,0.05) 45%, transparent 70%)',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        <div className="relative" style={{ zIndex: 1 }}>

          {/* ══════════════════════════════════════════════
              PRICING PLANS  (hero of this page)
          ══════════════════════════════════════════════ */}
          <section
            ref={plansRef}
            id="plans"
            style={{ background: '#FAFBFF', padding: '120px 24px 80px' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />

            <div className="max-w-5xl mx-auto">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={plansInView ? 'visible' : 'hidden'}
              >
                <motion.div variants={fadeUp} className="text-center mb-12">
                  <SectionPill color="cyan">Choose Your Plan</SectionPill>
                  <h2
                    className="font-black tracking-tight"
                    style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A' }}
                  >
                    Straightforward pricing. <GradientText>No surprises.</GradientText>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* ── Starter ── */}
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl p-7 flex flex-col"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E8EDFB',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(99,102,241,0.06)',
                    }}
                  >
                    <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: 12, color: '#94A3B8', letterSpacing: '0.12em' }}>
                      Starter
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="font-black" style={{ fontSize: 52, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1 }}>$999</span>
                      <span style={{ fontSize: 16, color: '#94A3B8' }}>/month</span>
                    </div>
                    <p className="mb-8 pb-7" style={{ fontSize: 14, color: '#94A3B8', borderBottom: '1px solid #F1F5F9' }}>
                      The essentials to get your brand into AI answers.
                    </p>

                    <p className="uppercase tracking-widest mb-5" style={{ fontSize: 11, fontWeight: 700, color: '#CBD5E1', letterSpacing: '0.12em' }}>
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-4 mb-9 flex-1">
                      <CheckRow>Full AI visibility <strong style={{ color: '#0F172A', fontWeight: 600 }}>audit &amp; benchmark</strong> report</CheckRow>
                      <CheckRow>AEO strategy &amp; content architecture plan</CheckRow>
                      <CheckRow>Website &amp; content structure optimisation</CheckRow>
                      <CheckRow><strong style={{ color: '#0F172A', fontWeight: 600 }}>250 AEO-optimised articles</strong> created &amp; published per month</CheckRow>
                      <CheckRow>Monthly performance reporting</CheckRow>
                    </ul>

                    <a
                      href="/#contact"
                      className="block w-full text-center font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: '14px 24px',
                        fontSize: 15,
                        background: 'transparent',
                        color: '#0F172A',
                        border: '1.5px solid #CBD5E1',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#22D3EE'; e.currentTarget.style.color = '#0891B2'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#CBD5E1'; e.currentTarget.style.color = '#0F172A'; }}
                    >
                      Get Started →
                    </a>
                  </motion.div>

                  {/* ── Growth ── */}
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl p-7 flex flex-col relative"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid #22D3EE',
                      boxShadow: '0 0 0 4px rgba(34,211,238,0.08), 0 8px 40px rgba(34,211,238,0.12)',
                    }}
                  >
                    {/* accent top line */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)' }}
                    />

                    {/* badge */}
                    <div
                      className="absolute font-bold uppercase"
                      style={{
                        top: -14, right: 28,
                        background: 'linear-gradient(135deg, #22D3EE, #818CF8)',
                        color: '#fff',
                        fontSize: 11, letterSpacing: '0.08em',
                        padding: '4px 14px', borderRadius: 100,
                        boxShadow: '0 4px 12px rgba(34,211,238,0.3)',
                      }}
                    >
                      Most Popular
                    </div>

                    <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: 12, color: '#0891B2', letterSpacing: '0.12em' }}>
                      Growth
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="font-black" style={{ fontSize: 52, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1 }}>~$2,000</span>
                      <span style={{ fontSize: 16, color: '#94A3B8' }}>/month</span>
                    </div>
                    <p className="mb-8 pb-7" style={{ fontSize: 14, color: '#94A3B8', borderBottom: '1px solid rgba(34,211,238,0.15)' }}>
                      Everything in Starter, plus distribution &amp; social reach.
                    </p>

                    <p className="uppercase tracking-widest mb-5" style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.12em' }}>
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-4 mb-9 flex-1">
                      <CheckRow><strong style={{ color: '#0F172A', fontWeight: 600 }}>Everything in Starter</strong></CheckRow>
                      <CheckRow>
                        <strong style={{ color: '#0F172A', fontWeight: 600 }}>500 AEO-optimised articles</strong> per month{' '}
                        <span
                          className="inline-block ml-1 font-bold align-middle"
                          style={{ fontSize: 10, background: '#ECFEFF', border: '1px solid rgba(34,211,238,0.3)', color: '#0891B2', padding: '2px 7px', borderRadius: 4 }}
                        >
                          2×
                        </span>
                      </CheckRow>
                      <CheckRow>Bi-monthly performance reporting</CheckRow>
                      <CheckRow>
                        2 PR articles written &amp; published{' '}
                        <span className="inline-block ml-1 font-bold align-middle" style={{ fontSize: 10, background: '#EEF2FF', border: '1px solid rgba(99,102,241,0.3)', color: '#4F46E5', padding: '2px 7px', borderRadius: 4 }}>New</span>
                      </CheckRow>
                      <CheckRow>
                        Quora, Reddit &amp; Wikipedia strategy{' '}
                        <span className="inline-block ml-1 font-bold align-middle" style={{ fontSize: 10, background: '#EEF2FF', border: '1px solid rgba(99,102,241,0.3)', color: '#4F46E5', padding: '2px 7px', borderRadius: 4 }}>Strategy only</span>
                      </CheckRow>
                      <CheckRow>
                        Social content strategy: <strong style={{ color: '#0F172A', fontWeight: 600 }}>10 LinkedIn + 10 X posts</strong>{' '}
                        <span className="inline-block ml-1 font-bold align-middle" style={{ fontSize: 10, background: '#EEF2FF', border: '1px solid rgba(99,102,241,0.3)', color: '#4F46E5', padding: '2px 7px', borderRadius: 4 }}>Strategy only</span>
                      </CheckRow>
                    </ul>

                    <a
                      href="/#contact"
                      className="block w-full text-center font-bold rounded-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
                      style={{
                        padding: '14px 24px',
                        fontSize: 15,
                        background: '#22D3EE',
                        color: '#020617',
                        boxShadow: '0 0 24px rgba(34,211,238,0.25), 0 4px 12px rgba(34,211,238,0.15)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#38BDF8'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#22D3EE'; }}
                    >
                      Get Started →
                    </a>
                  </motion.div>

                  {/* ── Enterprise ── */}
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl p-7 flex flex-col relative"
                    style={{
                      background: '#0F172A',
                      border: '1px solid #1E293B',
                      boxShadow: '0 8px 40px rgba(15,23,42,0.18)',
                    }}
                  >
                    {/* top gradient line */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, #818CF8, transparent)' }}
                    />

                    <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: 12, color: '#818CF8', letterSpacing: '0.12em' }}>
                      Enterprise
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="font-black" style={{ fontSize: 36, color: '#F1F5F9', letterSpacing: '-0.03em', lineHeight: 1 }}>On demand</span>
                    </div>
                    <p className="mb-8 pb-7" style={{ fontSize: 14, color: '#64748B', borderBottom: '1px solid #1E293B' }}>
                      Custom scope for multiple brands, product lines, or geographies.
                    </p>

                    <p className="uppercase tracking-widest mb-5" style={{ fontSize: 11, fontWeight: 700, color: '#334155', letterSpacing: '0.12em' }}>
                      Everything in Growth, plus
                    </p>
                    <ul className="flex flex-col gap-4 mb-9 flex-1">
                      {[
                        'Multi-brand & multi-market coverage',
                        'Custom article volume & content cadence',
                        'Dedicated account manager',
                        'Bespoke reporting & executive dashboards',
                        'Priority onboarding & strategy sessions',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: '#94A3B8' }}>
                          <span
                            className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5"
                            style={{ width: 20, height: 20, background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.25)', flexShrink: 0 }}
                          >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://calendly.com/tejas-gai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: '14px 24px',
                        fontSize: 15,
                        background: 'transparent',
                        color: '#F1F5F9',
                        border: '1px solid #334155',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#818CF8'; e.currentTarget.style.color = '#A5B4FC'; e.currentTarget.style.background = 'rgba(129,140,248,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      Let&apos;s Talk →
                    </a>
                  </motion.div>

                </div>

                {/* Fine print */}
                <motion.p
                  variants={fadeUp}
                  className="text-center mt-6"
                  style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.8 }}
                >
                  Pricing customised after audit based on category, competition &amp; scope · All plans include onboarding call
                  <br />PR articles billed separately · Enterprise plans available on request
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              COMPARISON TABLE
          ══════════════════════════════════════════════ */}
          <section
            ref={tableRef}
            style={{ background: '#FAFBFF', padding: '80px 24px' }}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={tableInView ? 'visible' : 'hidden'}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-center font-bold mb-10"
                  style={{ fontSize: 22, color: '#0F172A', letterSpacing: '-0.01em' }}
                >
                  Feature-by-feature comparison
                </motion.h2>

                <motion.div
                  variants={fadeUp}
                  className="overflow-x-auto rounded-2xl"
                  style={{ border: '1px solid #E8EDFB', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(99,102,241,0.05)' }}
                >
                  <table className="w-full border-collapse" style={{ background: '#FFFFFF', minWidth: 640 }}>
                    <thead>
                      <tr>
                        <th className="text-left font-bold uppercase tracking-widest" style={{ padding: '18px 20px', fontSize: 11, color: '#94A3B8', borderBottom: '1px solid #F1F5F9', letterSpacing: '0.1em' }}>Feature</th>
                        <th className="text-center font-bold uppercase tracking-widest" style={{ padding: '18px 16px', fontSize: 11, color: '#94A3B8', borderBottom: '1px solid #F1F5F9', letterSpacing: '0.1em' }}>Starter</th>
                        <th className="text-center font-bold uppercase tracking-widest" style={{ padding: '18px 16px', fontSize: 11, color: '#0891B2', borderBottom: '1px solid #F1F5F9', letterSpacing: '0.1em', background: 'rgba(34,211,238,0.04)' }}>Growth</th>
                        <th className="text-center font-bold uppercase tracking-widest" style={{ padding: '18px 16px', fontSize: 11, color: '#818CF8', borderBottom: '1px solid #F1F5F9', letterSpacing: '0.1em', background: 'rgba(129,140,248,0.05)' }}>Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['AI visibility scan',                     { type: 'val', v: 'Full' },      { type: 'val', v: 'Full' },       { type: 'val', v: 'Full' }],
                        ['Competitor benchmarking',                { type: 'check' },               { type: 'check' },                { type: 'check' }],
                        ['Gap analysis report',                    { type: 'check' },               { type: 'check' },                { type: 'check' }],
                        ['AEO strategy & architecture plan',       { type: 'check' },               { type: 'check' },                { type: 'check' }],
                        ['Website & content structure optimisation', { type: 'check' },             { type: 'check' },                { type: 'check' }],
                        ['AEO-optimised articles per month',       { type: 'val', v: '250' },       { type: 'val', v: '500' },        { type: 'ent', v: 'Custom' }],
                        ['Performance reporting',                  { type: 'plain', v: 'Monthly' }, { type: 'val', v: 'Bi-monthly' }, { type: 'ent', v: 'Bespoke' }],
                        ['PR articles (written & published)',      { type: 'dash' },                { type: 'val', v: '2 / month' },  { type: 'ent', v: 'Custom' }],
                        ['Quora, Reddit & Wikipedia strategy',     { type: 'dash' },                { type: 'strat', v: 'Strategy' }, { type: 'strat', v: 'Strategy' }],
                        ['Social media content strategy',          { type: 'dash' },                { type: 'strat', v: 'Strategy' }, { type: 'strat', v: 'Strategy' }],
                        ['Multi-brand & multi-market coverage',    { type: 'dash' },                { type: 'dash' },                 { type: 'check' }],
                        ['Dedicated account manager',              { type: 'dash' },                { type: 'dash' },                 { type: 'check' }],
                      ] as [string, { type: string; v?: string }, { type: string; v?: string }, { type: string; v?: string }][]).map(([feature, starter, growth, enterprise], i, arr) => {
                        const cell = (c: { type: string; v?: string }, col: 'starter' | 'growth' | 'enterprise') => {
                          if (c.type === 'check') return <span style={{ color: '#059669', fontSize: 17, fontWeight: 700 }}>✓</span>
                          if (c.type === 'dash')  return <span style={{ color: '#CBD5E1', fontSize: 18 }}>—</span>
                          if (c.type === 'strat') return <span style={{ color: '#4F46E5', fontWeight: 600, fontSize: 13 }}>{c.v}</span>
                          if (c.type === 'ent')   return <span style={{ color: '#818CF8', fontWeight: 600, fontSize: 13 }}>{c.v}</span>
                          if (c.type === 'val')   return <span style={{ color: col === 'growth' ? '#0891B2' : '#1E293B', fontWeight: 600, fontSize: 14 }}>{c.v}</span>
                          return <span style={{ color: '#64748B', fontSize: 14 }}>{c.v}</span>
                        }
                        return (
                          <tr key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid #F8FAFF' : 'none' }}>
                            <td className="font-medium" style={{ padding: '14px 20px', fontSize: 13.5, color: '#334155' }}>{feature}</td>
                            <td className="text-center" style={{ padding: '14px 16px' }}>{cell(starter, 'starter')}</td>
                            <td className="text-center" style={{ padding: '14px 16px', background: 'rgba(34,211,238,0.03)' }}>{cell(growth, 'growth')}</td>
                            <td className="text-center" style={{ padding: '14px 16px', background: 'rgba(129,140,248,0.04)' }}>{cell(enterprise, 'enterprise')}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              FREE AUDIT STRIP  (below plans, subtle)
          ══════════════════════════════════════════════ */}
          <section style={{ background: '#F5F7FF', padding: '0 24px 80px' }}>
            <div className="max-w-4xl mx-auto">
              <div
                ref={auditRef}
                className="rounded-2xl p-7 md:p-9 relative overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8EDFB',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  opacity: auditInView ? 1 : 0,
                  transform: auditInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
              >
                {/* subtle rainbow top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #22D3EE, #818CF8, #C084FC)' }}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: '#CBD5E1', letterSpacing: '0.12em' }}>
                      Not sure where to start?
                    </p>
                    <h3 className="font-bold mb-2" style={{ fontSize: 18, color: '#0F172A' }}>
                      Free AI Visibility Audit
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, maxWidth: 480 }}>
                      See where you stand across ChatGPT, Claude, Gemini &amp; Perplexity — before committing
                      to any plan. No credit card, no obligation.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Multi-model scan', 'Competitor benchmarking', 'Gap analysis', 'Full report delivered'].map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                          style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B' }}
                        >
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-left sm:text-center">
                    <div className="font-black mb-0.5" style={{ fontSize: 30, color: '#0F172A', letterSpacing: '-0.02em' }}>Free</div>
                    <div className="mb-4" style={{ fontSize: 12, color: '#94A3B8' }}>zero commitment</div>
                    <a
                      href="/#contact"
                      className="inline-flex items-center font-bold rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                      style={{
                        background: '#22D3EE', color: '#020617',
                        padding: '11px 22px', fontSize: 14,
                        boxShadow: '0 0 20px rgba(34,211,238,0.22)',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#38BDF8'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#22D3EE'; }}
                    >
                      Get Free Audit →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              THE LLM OPPORTUNITY
          ══════════════════════════════════════════════ */}
          <section
            ref={opportunityRef}
            style={{ background: '#F5F7FF', padding: '80px 24px', position: 'relative' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />

            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={oppInView ? 'visible' : 'hidden'}
              >
                <motion.div variants={fadeUp} className="text-center mb-14">
                  <SectionPill color="indigo">The Opportunity</SectionPill>
                  <h2
                    className="font-black tracking-tight mb-4"
                    style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A' }}
                  >
                    LLM traffic is growing — <GradientText>and most brands aren&apos;t tracking it</GradientText>
                  </h2>
                  <p style={{ fontSize: 16, color: '#64748B', maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>
                    Across every category, AI assistants are now a primary discovery channel for buyers.
                    The brands getting cited today are compounding an advantage that will be very hard to close in 12 months.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                          <polyline points="17 6 23 6 23 12" />
                        </svg>
                      ),
                      accent: '#22D3EE',
                      stat: 'Growing monthly',
                      title: 'AI-Referred Traffic Is Real',
                      body: "Sessions originating from ChatGPT, Claude, Perplexity, and Gemini are growing month-over-month across every category. Most of it doesn't appear in Google Analytics — it's dark traffic. But it's there, and it converts.",
                    },
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      ),
                      accent: '#818CF8',
                      stat: 'Window is open now',
                      title: 'First-Mover Advantage Is Still Real',
                      body: "AI models build citation preference through repeated exposure to authoritative sources. Brands building that authority today will be significantly harder to displace. The window for first-mover advantage is open — but it won't be open indefinitely.",
                    },
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      ),
                      accent: '#C084FC',
                      stat: '< 10% brands optimised',
                      title: 'Your Competitors Are Likely Invisible Too',
                      body: "Fewer than 10% of brands are actively optimised for AI citation. That's your opportunity. The earlier you build your AI citation architecture, the stronger your moat — and the harder you become to displace when your competitors eventually wake up.",
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="rounded-2xl p-7"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E8EDFB',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(99,102,241,0.05)',
                      }}
                    >
                      <div
                        className="flex items-center justify-center rounded-xl mb-5"
                        style={{ width: 44, height: 44, background: `rgba(${card.accent === '#22D3EE' ? '34,211,238' : card.accent === '#818CF8' ? '129,140,248' : '192,132,252'},0.1)`, color: card.accent }}
                      >
                        {card.icon}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: card.accent, letterSpacing: '0.1em' }}>
                        {card.stat}
                      </div>
                      <h3 className="font-bold mb-2" style={{ fontSize: 16, color: '#0F172A' }}>{card.title}</h3>
                      <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.75 }}>{card.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              IS AEO RIGHT FOR YOU?
          ══════════════════════════════════════════════ */}
          <section
            ref={fitRef}
            style={{ background: '#FAFBFF', padding: '80px 24px' }}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div variants={stagger} initial="hidden" animate={fitInView ? 'visible' : 'hidden'}>
                <motion.div variants={fadeUp} className="text-center mb-12">
                  <SectionPill color="violet">Honest Expectations</SectionPill>
                  <h2
                    className="font-black tracking-tight mb-4"
                    style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A' }}
                  >
                    AEO is a <GradientText>long game.</GradientText> Here&apos;s who it&apos;s for.
                  </h2>
                  <p style={{ fontSize: 16, color: '#64748B', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
                    We&apos;d rather tell you upfront than have you sign up for the wrong reasons.
                    AEO delivers compounding returns — but not overnight.
                  </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl p-8 mb-8 relative overflow-hidden"
                  style={{ background: '#FFFFFF', border: '1px solid #E8EDFB', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(99,102,241,0.07)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #22D3EE, #818CF8, #C084FC)' }} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
                    {[
                      { phase: 'Month 1',    icon: '📍', label: 'Baseline & Architecture',      body: 'We audit your current AI visibility, benchmark competitors, and build your citation architecture. You see exactly where you stand — day one.' },
                      { phase: 'Months 2–3', icon: '📈', label: 'First Citation Improvements',   body: 'Content and signal layers go live. Most clients see measurable citation frequency improvements within the first few months as AI models start picking up new signals.' },
                      { phase: 'Ongoing',    icon: '🔁', label: 'Compound & Maintain',           body: "AI models update continuously. Maintaining and growing your citation share requires ongoing work \u2014 like SEO, you don\u2019t stop when you rank. The brands that compound, win." },
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span style={{ fontSize: 22 }}>{step.icon}</span>
                          <span className="font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: '#F1F5F9', color: '#475569', letterSpacing: '0.1em' }}>{step.phase}</span>
                        </div>
                        <h4 className="font-bold" style={{ fontSize: 15, color: '#0F172A' }}>{step.label}</h4>
                        <p style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.7 }}>{step.body}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Two-column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div variants={fadeUp} className="rounded-2xl p-7" style={{ background: '#FFFBFB', border: '1px solid #FDE8E8' }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: '#FEE2E2' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      </div>
                      <h3 className="font-bold" style={{ fontSize: 16, color: '#0F172A' }}>AEO is probably not for you if…</h3>
                    </div>
                    <ul className="flex flex-col gap-3.5 mb-6">
                      {[
                        'You need qualified leads this week or this month',
                        "You're running a short campaign rather than building a channel",
                        "You're not willing to invest consistently for 3+ months",
                        'You expect overnight results from any marketing channel',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: '#64748B' }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: '#FCA5A5', fontSize: 16 }}>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 rounded-xl text-sm" style={{ background: '#FEF2F2', color: '#991B1B', lineHeight: 1.75 }}>
                      <strong>Ads and performance channels are the right call</strong> if you need short-term pipeline. Come back to AEO when you&apos;re ready to build a channel that compounds.
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="rounded-2xl p-7" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: '#D1FAE5' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <h3 className="font-bold" style={{ fontSize: 16, color: '#0F172A' }}>AEO is exactly right for you if…</h3>
                    </div>
                    <ul className="flex flex-col gap-3.5 mb-6">
                      {[
                        'You want a compounding acquisition channel with lower long-term CAC',
                        "You're tired of bidding against competitors for the same paid inventory",
                        "You want to own your category's AI recommendation before it gets crowded",
                        'You&apos;re building a brand that should be the default answer when buyers ask AI',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: '#374151' }}>
                          <span className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{ width: 18, height: 18, background: '#D1FAE5', flexShrink: 0 }}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 rounded-xl text-sm" style={{ background: '#DCFCE7', color: '#166534', lineHeight: 1.75 }}>
                      <strong>AEO is less competitive today — and that&apos;s precisely why now is the right time.</strong> The CAC on AI-driven discovery is still low. Get in before your competitors do.
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              BOTTOM CTA BAND
          ══════════════════════════════════════════════ */}
          <section style={{ background: '#FAFBFF', padding: '0 24px 80px' }}>
            <div className="max-w-4xl mx-auto">
              <div
                className="rounded-2xl relative overflow-hidden text-center"
                style={{
                  padding: 'clamp(40px, 6vw, 60px) clamp(24px, 6vw, 64px)',
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(129,140,248,0.06) 50%, rgba(192,132,252,0.06) 100%)',
                  border: '1px solid #E8EDFB',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 12px 40px rgba(99,102,241,0.07)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #22D3EE, #818CF8, #C084FC)' }}
                />
                <h2
                  className="font-black tracking-tight mb-3"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', color: '#0F172A', letterSpacing: '-0.025em' }}
                >
                  Ready to see where you stand?
                </h2>
                <p className="mb-8 mx-auto" style={{ fontSize: 16, color: '#64748B', maxWidth: 460, lineHeight: 1.8 }}>
                  Start with a free audit. We&apos;ll show you exactly how AI sees your brand today —
                  no commitment, just data.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                    style={{
                      background: '#22D3EE', color: '#020617', fontSize: 15,
                      boxShadow: '0 0 32px rgba(34,211,238,0.28), 0 4px 14px rgba(34,211,238,0.18)',
                    }}
                  >
                    Get a Free AI Visibility Audit →
                  </a>
                  <a
                    href="https://calendly.com/tejas-gai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-full border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:bg-white transition-all duration-200"
                    style={{ fontSize: 15 }}
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
