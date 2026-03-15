'use client'

import { useEffect, useRef } from 'react'

const QUERIES = [
  { q: 'Best CRM for B2B SaaS?',             brand: 'HubSpot' },
  { q: 'Top email marketing platform?',       brand: 'Klaviyo' },
  { q: 'Best project management tool?',       brand: 'Asana' },
  { q: 'Who leads in cloud security?',        brand: 'CrowdStrike' },
  { q: 'Best HR software for startups?',      brand: 'Rippling' },
  { q: 'Top customer support platform?',      brand: 'Zendesk' },
  { q: 'Best workflow automation tool?',      brand: 'Zapier' },
  { q: 'Top cybersecurity company?',          brand: 'Palo Alto' },
  { q: 'Best analytics for e-commerce?',     brand: 'Triple Whale' },
  { q: 'Who should I hire for digital PR?',  brand: 'Edelman' },
  { q: 'Top marketing automation platform?', brand: 'Marketo' },
  { q: 'Best SEO tool for agencies?',        brand: 'Semrush' },
]

const N      = QUERIES.length
const RADIUS = 290   // px — distance from axis to text
const SPEED  = 0.22  // degrees per frame ≈ 13°/s ≈ 27s per full rotation

export default function TextCylinder() {
  const wrapRef      = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs     = useRef<(HTMLDivElement | null)[]>([])
  const chipRefs     = useRef<(HTMLSpanElement | null)[]>([])
  const rafRef       = useRef<number>()
  const prevHlRef    = useRef(-1)

  useEffect(() => {
    let angle = 0

    const tick = () => {
      angle = (angle + SPEED) % 360

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${-angle}deg)`
      }

      // Determine front face
      let hlIdx = 0
      let hlDist = 999

      for (let i = 0; i < N; i++) {
        const faceBase = i * (360 / N)
        const world    = ((faceBase - angle) % 360 + 360) % 360
        const dist     = world > 180 ? 360 - world : world
        const cos      = Math.cos((world * Math.PI) / 180)
        const opacity  = Math.max(0, cos)

        const el = itemRefs.current[i]
        if (el) el.style.opacity = opacity.toFixed(3)

        if (dist < hlDist) { hlDist = dist; hlIdx = i }
      }

      // Swap highlight
      if (hlIdx !== prevHlRef.current) {
        // Un-highlight old
        const old = prevHlRef.current
        if (old >= 0) {
          const el   = itemRefs.current[old]
          const chip = chipRefs.current[old]
          if (el)   { el.style.color = ''; el.style.textShadow = ''; el.style.fontWeight = '400' }
          if (chip) chip.style.opacity = '0'
        }
        // Highlight new
        const el   = itemRefs.current[hlIdx]
        const chip = chipRefs.current[hlIdx]
        if (el) {
          el.style.color      = '#F59E0B'
          el.style.textShadow = '0 0 18px rgba(245,158,11,0.6), 0 0 50px rgba(245,158,11,0.18)'
          el.style.fontWeight = '600'
        }
        if (chip) chip.style.opacity = '1'

        prevHlRef.current = hlIdx
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden
      style={{
        perspective:       '1500px',
        perspectiveOrigin: '50% 50%',
        width:             '100%',
        height:            '440px',
        display:           'flex',
        alignItems:        'center',
        justifyContent:    'center',
        overflow:          'hidden',
        maskImage:         'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        WebkitMaskImage:   'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        position:          'relative',
      }}
    >
      {/* Warm spotlight at centre-front */}
      <div
        style={{
          position:    'absolute',
          left:        '50%',
          top:         '50%',
          transform:   'translate(-50%, -50%)',
          width:       '260px',
          height:      '260px',
          borderRadius: '50%',
          background:  'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex:      2,
        }}
      />

      {/* Rotating cylinder */}
      <div
        ref={containerRef}
        style={{ transformStyle: 'preserve-3d', position: 'relative', width: 0, height: 0 }}
      >
        {QUERIES.map((item, i) => {
          const faceAngle = i * (360 / N)
          return (
            <div
              key={i}
              ref={el => { itemRefs.current[i] = el }}
              style={{
                position:     'absolute',
                transform:    `rotateY(${faceAngle}deg) translateZ(${RADIUS}px)`,
                width:        '440px',
                left:         '-220px',
                top:          '-14px',
                display:      'flex',
                alignItems:   'center',
                gap:          '10px',
                color:        'rgba(148,163,184,0.45)',
                fontFamily:   '"JetBrains Mono", "Fira Code", monospace',
                fontSize:     '13px',
                fontWeight:   '400',
                letterSpacing: '0.01em',
                whiteSpace:   'nowrap',
                userSelect:   'none',
                pointerEvents: 'none',
                opacity:      '0',
                transition:   'text-shadow 0.4s ease, color 0.4s ease',
              }}
            >
              <span>{item.q}</span>
              <span
                ref={el => { chipRefs.current[i] = el }}
                style={{
                  display:      'inline-flex',
                  alignItems:   'center',
                  background:   'rgba(245,158,11,0.12)',
                  border:       '1px solid rgba(245,158,11,0.32)',
                  borderRadius: '4px',
                  padding:      '2px 7px',
                  color:        '#FEF3C7',
                  fontSize:     '11px',
                  fontWeight:   '700',
                  flexShrink:   0,
                  opacity:      '0',
                  transition:   'opacity 0.45s ease',
                  letterSpacing: '0.02em',
                }}
              >
                → {item.brand}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
