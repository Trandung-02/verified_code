'use client'

import React from 'react'
import type { PrivacyLocale } from '@/lib/privacy-center-messages'
import { isPrivacyLocale } from '@/lib/privacy-locale'

const STORAGE_KEY = 'privacy_center_locale'

type Ctx = {
  locale: PrivacyLocale
  setLocale: (l: PrivacyLocale) => void
}

const PrivacyCenterLocaleContext = React.createContext<Ctx | null>(null)

export function PrivacyCenterLocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<PrivacyLocale>('en')

  /** Đọc storage / geo trước paint để giảm nháy; đồng bộ khi từ trang reCAPTCHA sang Privacy Center */
  React.useLayoutEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const s = localStorage.getItem(STORAGE_KEY)
        if (s && isPrivacyLocale(s)) {
          setLocaleState(s)
          return
        }
      } catch {
        /* ignore */
      }
      try {
        const res = await fetch('/api/locale-hint', { cache: 'no-store' })
        if (!res.ok || cancelled) return
        const data = (await res.json()) as { suggestedLocale?: string }
        const next = data?.suggestedLocale
        if (!next || !isPrivacyLocale(next) || cancelled) return
        setLocaleState(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* ignore */
        }
      } catch {
        /* ignore */
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const setLocale = React.useCallback((l: PrivacyLocale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return (
    <PrivacyCenterLocaleContext.Provider value={value}>{children}</PrivacyCenterLocaleContext.Provider>
  )
}

export function usePrivacyCenterLocale(): Ctx {
  const ctx = React.useContext(PrivacyCenterLocaleContext)
  if (!ctx) {
    throw new Error('usePrivacyCenterLocale must be used within PrivacyCenterLocaleProvider')
  }
  return ctx
}
