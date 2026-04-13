import type { Metadata } from 'next'
import { shouldBlockSearchIndexing } from '@/lib/searchIndexing'

const block = shouldBlockSearchIndexing()

export const metadata: Metadata = {
  robots: block
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
}

export default function PrivacyCenterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="privacy-center-layout min-h-screen antialiased [-webkit-font-smoothing:antialiased]">
      {children}
    </div>
  )
}
