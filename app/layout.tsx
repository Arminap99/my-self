import type { Metadata } from 'next'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL('https://armyn.ir'),
  title: 'آرمین علیپور',
  description: 'بنیان‌گذار اتاق فرار | طراح تجربه | سازنده محصول دیجیتال',
  openGraph: {
    title: 'آرمین علیپور',
    description: 'بنیان‌گذار اتاق فرار | طراح تجربه | سازنده محصول دیجیتال',
    url: 'https://armyn.ir',
    locale: 'fa_IR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={cn("dark font-sans", geist.variable)}>
      <body className="noise">
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
