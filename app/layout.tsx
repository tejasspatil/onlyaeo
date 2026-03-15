import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OnlyAEO | Get visibility across AI Search Engines.',
  description:
    'OnlyAEO structures your brand\'s knowledge so ChatGPT, Claude, Gemini, and DeepSeek cite you when buyers ask. Measured in citations. Built to compound. Get your free AI visibility audit.',
  keywords: [
    'Answer Engine Optimization',
    'AEO agency',
    'GEO agency',
    'AI visibility',
    'LLM citation',
    'ChatGPT optimization',
    'Claude optimization',
    'Gemini optimization',
    'AI search optimization',
    'brand AI mentions',
    'AI recommendation optimization',
  ],
  authors: [{ name: 'OnlyAEO' }],
  creator: 'OnlyAEO',
  publisher: 'OnlyAEO',
  metadataBase: new URL('https://onlyaeo.com'),
  alternates: {
    canonical: 'https://onlyaeo.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onlyaeo.com',
    siteName: 'OnlyAEO',
    title: 'OnlyAEO — AI Visibility & Answer Engine Optimization Agency',
    description:
      'We structure your brand\'s knowledge so every major LLM — ChatGPT, Claude, Gemini, DeepSeek — cites you when your buyers ask. Measured in citations. Built to compound.',
    images: [
      {
        url: 'https://onlyaeo.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OnlyAEO — Answer Engine Optimization Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyAEO — Answer Engine Optimization Agency',
    description:
      'We structure your brand\'s knowledge so ChatGPT, Claude, Gemini, and DeepSeek cite you when buyers ask.',
    images: ['https://onlyaeo.com/og-image.png'],
    creator: '@onlyaeo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://onlyaeo.com/#organization',
      name: 'OnlyAEO',
      url: 'https://onlyaeo.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://onlyaeo.com/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'tejas@gai.ventures',
        contactType: 'customer service',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://onlyaeo.com/#website',
      url: 'https://onlyaeo.com',
      name: 'OnlyAEO',
      description: 'Answer Engine Optimization Agency specializing in AI visibility and LLM citations',
      publisher: { '@id': 'https://onlyaeo.com/#organization' },
    },
    {
      '@type': 'Service',
      '@id': 'https://onlyaeo.com/#service',
      name: 'Answer Engine Optimization (AEO)',
      provider: { '@id': 'https://onlyaeo.com/#organization' },
      description:
        'We structure your brand\'s knowledge so every major LLM — ChatGPT, Claude, Gemini, DeepSeek — cites you when your buyers ask.',
      serviceType: 'Answer Engine Optimization',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Visibility Audit',
              description:
                'We run your brand through every major LLM and map exactly where you stand: mention rate, citation frequency, and which competitors own the conversation in your category.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Citation Architecture',
              description:
                'We identify the specific entities, citations, and knowledge gaps keeping you invisible to AI, then build the structured content that LLMs trust and cite.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Entity & Knowledge Graph Build',
              description:
                'We construct your brand\'s entity profile, authority signals, and knowledge graph so AI models recognise, recall, and recommend you by name.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Citation Monitoring & Compounding',
              description:
                'We track your brand\'s mention rate, citation share, and recommendation frequency across all major models. Month over month, visibility compounds.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://onlyaeo.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Answer Engine Optimization (AEO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Answer Engine Optimization (AEO) is the practice of structuring your brand\'s content, knowledge, and digital presence so that AI systems like ChatGPT, Claude, Gemini, and DeepSeek can understand, cite, and recommend your brand when users ask relevant questions. Unlike traditional SEO which targets search engine rankings, AEO targets AI-generated answers and recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is AEO different from traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO optimizes for search engine rankings — getting your website to appear on page one of Google. AEO optimizes for AI recommendations — getting your brand to be cited, mentioned, and recommended when people ask AI assistants for advice. AI doesn\'t show pages; it gives answers. AEO ensures your brand is in those answers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results from AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients see first measurable citation improvements within 60 days. We establish a baseline in week one, begin building citation architecture in weeks two through four, and track measurable mention rate improvements from month two onward. Citation rates continue to compound over 3–6 months. We offer a 60-day guarantee: measurable results or we work for free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI platforms do you optimize for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We optimize for all four major AI platforms simultaneously: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), and DeepSeek. Each model has different knowledge structures and training signals — we build citation architecture that works across all of them.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you measure AEO success?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We measure success through citation share (what percentage of AI responses in your category mention your brand), mention rate (how often your brand appears across a standardized set of category queries), and LLM recall frequency (how consistently each major model recommends your brand across different query phrasings). We provide monthly reports with all metrics tracked.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the free AI visibility audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The free AI visibility audit includes: full mention rate analysis across ChatGPT, Claude, Gemini, and DeepSeek; competitor citation benchmark showing who owns your category\'s AI recommendations; the top 5 knowledge gaps and entity weaknesses keeping your brand invisible to AI; and a prioritized action roadmap. Delivered within 48 hours at no cost.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body className="bg-bg text-white font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
