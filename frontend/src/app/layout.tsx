import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, Source_Serif_4, Fira_Code } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-var',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading-var',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-var',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#090a0d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://birwal-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sumit Kumar | Full Stack & Distributed Systems Engineer',
    template: '%s | Sumit Kumar',
  },
  description:
    'Portfolio of Sumit Kumar — Full Stack Developer & Distributed Systems Engineer specializing in Event-Driven Microservices, Model Context Protocol (MCP), RAG & pgvector, RabbitMQ, NestJS, and Next.js.',
  keywords: [
    'Sumit Kumar',
    'Full Stack Developer',
    'Distributed Systems',
    'NestJS',
    'Next.js',
    'Model Context Protocol',
    'MCP',
    'RAG',
    'pgvector',
    'RabbitMQ',
    'Transactional Outbox',
    'Event-Driven Architecture',
    'TypeScript',
    'Portfolio',
    'Software Engineer Mohali',
    'Full Stack Engineer India',
  ],
  authors: [{ name: 'Sumit Kumar', url: 'https://github.com/iamsumitkumar64' }],
  creator: 'Sumit Kumar',
  publisher: 'Sumit Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sumit Kumar Portfolio',
    title: 'Sumit Kumar | Full Stack & Distributed Systems Engineer',
    description:
      'Full Stack Developer & Distributed Systems Engineer specializing in Event-Driven Microservices, Model Context Protocol (MCP), RAG & pgvector, RabbitMQ, and Next.js.',
    images: [
      {
        url: '/assets/logo.png',
        width: 512,
        height: 512,
        alt: 'Sumit Kumar Portfolio Brand Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Kumar | Full Stack & Distributed Systems Engineer',
    description:
      'Full Stack Developer & Distributed Systems Engineer specializing in Event-Driven Microservices, Model Context Protocol (MCP), RAG & pgvector, RabbitMQ, and Next.js.',
    creator: '@iamsumitkumar64',
    images: ['/assets/logo.png'],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sumit Kumar',
  url: siteUrl,
  jobTitle: 'Full Stack & Distributed Systems Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Zenmonk Software & Services',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Chandigarh University',
      department: 'Master of Computer Applications (MCA) in AI/ML',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Kurukshetra University',
      department: 'Bachelor of Computer Applications (BCA)',
    },
  ],
  sameAs: [
    'https://github.com/iamsumitkumar64',
    'https://linkedin.com/in/iamsumitkumar64',
    'https://leetcode.com/u/iamsumitkumar64/',
  ],
  knowsAbout: [
    'Domain-Driven Design',
    'CQRS Architecture',
    'Transactional Outbox Pattern',
    'Event-Driven Microservices',
    'Model Context Protocol (MCP)',
    'Retrieval-Augmented Generation (RAG)',
    'pgvector & HNSW',
    'RabbitMQ',
    'KafkaJS',
    'NestJS',
    'Next.js',
    'TypeScript',
    'C++',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${sourceSerif4.variable} ${firaCode.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var p = new URLSearchParams(window.location.search).get('theme');
                  var t = (p === 'dark' || p === 'light') ? p : localStorage.getItem('portfolio-theme');
                  if (t === 'dark' || t === 'light') {
                    document.documentElement.setAttribute('data-theme', t);
                    document.body && document.body.setAttribute('data-theme', t);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.body && document.body.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
