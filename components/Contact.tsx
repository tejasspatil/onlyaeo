'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  company: string
  website: string
  product: string
  geo: string
  audience: string
  email: string
}

const defaultForm: FormData = {
  company: '',
  website: '',
  product: '',
  geo: '',
  audience: '',
  email: '',
}

const CHECKLIST = [
  'Full AI visibility audit across all major models',
  'Competitor citation benchmark in your category',
  'Top citation gaps blocking your AI visibility',
  'Prioritised action roadmap, delivered free',
]

const inputClass = `
  w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0F172A] text-[14px]
  placeholder:text-[#CBD5E1] outline-none transition-all duration-200
  focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]
`

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<FormData>(defaultForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      )
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{ background: 'linear-gradient(160deg, #F7F8FC 0%, #EEF2FF 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }}
      />

      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-14">

          {/* Section label — cyan pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="text-[#22D3EE] text-[11px] font-semibold tracking-[0.12em] uppercase">Get Started</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-black leading-[1.05] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', color: '#0F172A' }}
          >
            Let&apos;s get your brand{' '}
            <span style={{ color: '#0891B2' }}>into AI answers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#64748B] text-lg max-w-xl mx-auto leading-[1.75]"
          >
            Tell us about your business. We&apos;ll run a free AI visibility audit and share
            exactly where you stand and what the opportunity looks like.
          </motion.p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8"
              style={{ boxShadow: '0 4px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(226,232,240,0.8)' }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(34,211,238,0.1)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-[#0F172A] font-bold text-xl mb-2">Audit request received.</h3>
                    <p className="text-[#64748B] text-[15px] leading-relaxed">
                      We&apos;ll review your brand and be in touch within 1 business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Company Name */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>

                    {/* Website URL */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Website URL <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="website"
                        type="url"
                        required
                        value={form.website}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className={inputClass}
                      />
                    </div>

                    {/* Primary Product */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Primary Product or Service <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="product"
                        type="text"
                        required
                        value={form.product}
                        onChange={handleChange}
                        placeholder="e.g. CRM software, marketing agency, HR platform"
                        className={inputClass}
                      />
                    </div>

                    {/* Geographic Focus */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Geographic Focus <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="geo"
                        type="text"
                        required
                        value={form.geo}
                        onChange={handleChange}
                        placeholder="e.g. United States, London, Global"
                        className={inputClass}
                      />
                    </div>

                    {/* Target Audience */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Target Audience <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="audience"
                        type="text"
                        required
                        value={form.audience}
                        onChange={handleChange}
                        placeholder="e.g. B2B SaaS founders, e-commerce store owners"
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#0F172A] text-[13px] font-semibold mb-1.5">
                        Your Email <span className="text-[#64748B] font-normal">(to send the report)</span> <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@yourcompany.com"
                        className={inputClass}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-[13px]">Something went wrong. Please try again or email us directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 font-bold text-[15px] py-3.5 rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                      style={{
                        background: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 100%)',
                        color: '#020617',
                        boxShadow: '0 0 32px rgba(34,211,238,0.25)',
                      }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        'Get My Free AI Audit →'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — value + Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-6"
          >
            {/* What you'll receive */}
            <div
              className="bg-white rounded-2xl border border-[#E2E8F0] p-7"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-[#0F172A] font-bold text-[16px] mb-5">What you&apos;ll receive</h3>
              <ul className="space-y-3.5">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34,211,238,0.12)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </span>
                    <span className="text-[#475569] text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendly card */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: 'linear-gradient(135deg, #080D1A 0%, #0A1020 100%)',
                borderColor: 'rgba(34,211,238,0.15)',
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <circle cx="8" cy="16" r="1" fill="#22D3EE" stroke="none" />
                    <circle cx="12" cy="16" r="1" fill="#22D3EE" stroke="none" />
                    <circle cx="16" cy="16" r="1" fill="#22D3EE" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[15px] mb-1" style={{ color: '#F1F5F9' }}>Prefer a conversation?</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>
                    Book a 30-minute call. We&apos;ll walk through your AI visibility picture live.
                  </p>
                </div>
              </div>
              <a
                href="https://calendly.com/tejas-gai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-[14px] transition-all hover:-translate-y-0.5 border"
                style={{
                  borderColor: 'rgba(34,211,238,0.3)',
                  color: '#22D3EE',
                  background: 'rgba(34,211,238,0.06)',
                }}
              >
                Book a 30-min call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)' }}
      />
    </section>
  )
}
