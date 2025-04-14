import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        // Add any other paths you want to disallow
      ],
    },
    sitemap: 'https://kristiansenutvikling.no/sitemap.xml',
  }
}