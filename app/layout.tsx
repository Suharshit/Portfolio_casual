// src/app/layout.tsx
import type { Metadata } from 'next'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suharshit Singh — Full-Stack Developer',
  description: 'Building performant full-stack systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Space Mono from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}