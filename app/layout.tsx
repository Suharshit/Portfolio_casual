import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Suharshit Singh — Full-Stack Developer',
  description: 'Building performant full-stack systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  )
}