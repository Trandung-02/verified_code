'use client'

import React from 'react'
import type { PrivacyLocale } from '@/lib/privacy-center-messages'

const STORAGE_KEY = 'privacy_center_locale'

type Ctx = {
  locale: PrivacyLocale
  setLocale: (l: PrivacyLocale) => void
}

const PrivacyCenterLocaleContext = React.createContext<Ctx | null>(null)

export function PrivacyCenterLocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<PrivacyLocale>('en')

  React.useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s === 'vi' || s === 'en') {
        setLocaleState(s)
      }
    } catch {
      /* ignore */
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
