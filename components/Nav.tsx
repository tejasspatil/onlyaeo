'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#proof' },
  { label: 'Pricing', href: '/pricing', isPage: true },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    setMobileOpen(false)
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          scrolled
            ? 'backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <img src="/logo.png" alt="OnlyAEO Logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-[#0F172A]">Only</span>
              <span className="text-[#22D3EE] font-bold">AEO</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.isPage ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://calendly.com/tejas-gai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Talk to us
            </a>
            <button
              onClick={handleContactClick}
              className="bg-[#22D3EE] text-[#020617] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#38BDF8] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-cyan-500/25 whitespace-nowrap"
            >
              Get Free Audit →
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#E2E8F0] transition-all duration-300 origin-center',
                mobileOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#E2E8F0] transition-all duration-300',
                mobileOpen && 'opacity-0 scale-x-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#E2E8F0] transition-all duration-300 origin-center',
                mobileOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-[#020617]/95 backdrop-blur-xl flex flex-col"
          >
            {/* Top bar spacer */}
            <div className="h-16 flex-shrink-0" />

            {/* Nav links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) =>
                link.isPage ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-[#E2E8F0] hover:text-[#22D3EE] transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-semibold text-[#E2E8F0] hover:text-[#22D3EE] transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                )
              )}

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
                className="w-16 h-px bg-white/10 my-2"
              />

              {/* Talk to us */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                href="https://calendly.com/tejas-gai/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-[#94A3B8] hover:text-[#E2E8F0] text-base font-medium transition-colors duration-200"
              >
                Talk to us
              </motion.a>

              {/* Get Free Audit CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.38, duration: 0.3 }}
                onClick={handleContactClick}
                className="bg-[#22D3EE] text-[#020617] font-bold text-base px-10 py-4 rounded-xl hover:bg-[#38BDF8] transition-all duration-200 shadow-lg shadow-cyan-500/25 mt-2"
              >
                Get Free Audit →
              </motion.button>
            </div>

            {/* Bottom branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.42 }}
              className="pb-10 flex justify-center"
            >
              <span className="text-[#475569] text-xs">
                ChatGPT · Claude · Gemini · DeepSeek · Perplexity
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
