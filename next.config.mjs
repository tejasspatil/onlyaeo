/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei'],
  },

  // HTTP → HTTPS redirect (catches any HTTP request that slips past Vercel/CDN)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://onlyaeo.com/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    // CSP directive list — kept as an array for readability, joined before use.
    // 'unsafe-inline' on script-src is required by Next.js inline scripts and
    // the JSON-LD dangerouslySetInnerHTML block in layout.tsx.
    // 'unsafe-eval' is required by Three.js / GLSL shader compilation via GSAP.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // blob: needed for Three.js geometry workers; data: for inlined assets
      "img-src 'self' data: blob: https:",
      // /api/audit proxies to Anthropic; formspree for contact form
      "connect-src 'self' https://formspree.io https://formspree.io/f/",
      // Three.js / R3F may spawn OffscreenCanvas workers
      "worker-src 'self' blob:",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
      "object-src 'none'",
      // Trusted Types: allow Next.js bundler policy; blocks unsafe DOM sinks
      "require-trusted-types-for 'script'",
      "trusted-types nextjs#bundler",
    ].join('; ')

    return [
      {
        source: '/:path*',
        headers: [
          // ── Transport security ──────────────────────────────────────────
          // 2-year max-age + includeSubDomains + preload satisfies HSTS preload list
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          // ── Clickjacking ────────────────────────────────────────────────
          // frame-ancestors 'none' in CSP is the modern equivalent;
          // X-Frame-Options covers older browsers that don't parse CSP
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },

          // ── MIME sniffing ───────────────────────────────────────────────
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // ── Origin isolation (COOP) ─────────────────────────────────────
          // same-origin-allow-popups lets OAuth / Formspree popups work
          // while still isolating the browsing context from cross-origin openers
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },

          // ── Referrer ────────────────────────────────────────────────────
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },

          // ── Permissions ─────────────────────────────────────────────────
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },

          // ── Content Security Policy ─────────────────────────────────────
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
    ]
  },
}

export default nextConfig
