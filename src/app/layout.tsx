import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'
import { siteBrand, siteUrl } from '../data/seo'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteBrand.name,
  alternateName: siteBrand.alternateNames,
  legalName: siteBrand.legalName,
  url: siteUrl,
  logo: `${siteUrl}/images/nippon-system-logo.png`,
  telephone: siteBrand.phone,
  address: {
    '@type': 'PostalAddress',
    postalCode: siteBrand.address.postalCode,
    addressRegion: siteBrand.address.region,
    addressLocality: siteBrand.address.locality,
    streetAddress: siteBrand.address.streetAddress,
    addressCountry: siteBrand.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteBrand.phone,
    contactType: 'customer support',
    availableLanguage: ['ja', 'en'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteBrand.name,
  alternateName: siteBrand.alternateNames,
  url: siteUrl,
  inLanguage: ['ja', 'en'],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NIPPON SYSTEM（日本システム）| Web開発・EC/CMS・AIチャットボット',
    template: '%s | NIPPON SYSTEM（日本システム）',
  },
  description: siteBrand.description,
  applicationName: siteBrand.name,
  keywords: [...siteBrand.keywords],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'NIPPON SYSTEM（日本システム）',
    title: 'NIPPON SYSTEM（日本システム）',
    description: siteBrand.description,
    images: [
      {
        url: '/images/nippon-system-logo.png',
        width: 1200,
        height: 630,
        alt: 'NIPPON SYSTEM 日本システム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIPPON SYSTEM（日本システム）',
    description: siteBrand.description,
    images: ['/images/nippon-system-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="extension-attribute-cleanup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const shouldRemove = (name) =>
                  name === 'bis_skin_checked' ||
                  name === 'bis_register' ||
                  name.startsWith('__processed_');

                const clean = (node) => {
                  if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
                  for (const attr of Array.from(node.attributes)) {
                    if (shouldRemove(attr.name)) node.removeAttribute(attr.name);
                  }
                  for (const child of node.children) clean(child);
                };

                clean(document.documentElement);

                new MutationObserver((records) => {
                  for (const record of records) {
                    if (record.type === 'attributes' && shouldRemove(record.attributeName || '')) {
                      record.target.removeAttribute(record.attributeName);
                    }

                    for (const node of record.addedNodes) clean(node);
                  }
                }).observe(document.documentElement, {
                  attributes: true,
                  childList: true,
                  subtree: true,
                });
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
