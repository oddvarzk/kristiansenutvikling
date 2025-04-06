// src/app/metadata.ts
import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Your Company',
    default: 'Your Company | Professional Services'
  },
  description: 'Your company provides professional services in [your industry].',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourcompany.com',
    siteName: 'Your Company',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Company',
    description: 'Professional services in [your industry]',
    images: ['/images/twitter-image.jpg']
  }
}