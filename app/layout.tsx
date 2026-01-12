import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'nezeritov | Портфолио',
  description: 'Портфолио разработчика nezeritov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://brawllife.shop&size=64" />
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  )
}

