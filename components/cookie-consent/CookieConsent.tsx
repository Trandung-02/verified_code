'use client'

import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const STORAGE_KEY = 'cookie_preferences_v1'

type Consent = 'essential' | 'analytics'

export function CookieConsent() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  const [visible, setVisible] = React.useState(false)
  const [analyticsOn, setAnalyticsOn] = React.useState(false)

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Consent | null
      if (saved === 'analytics' && gaId) {
        setAnalyticsOn(true)
        return
      }
      if (saved === 'essential') {
        return
      }
    } catch {
      /* ignore */
    }
    setVisible(true)
  }, [gaId])

  const save = (choice: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* ignore */
    }
    if (choice === 'analytics' && gaId) {
      setAnalyticsOn(true)
    }
    setVisible(false)
  }

  if (visible) {
    return (
      <div
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-live="polite"
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#e5e9ef] bg-white/95 p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-5"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-[13px] leading-relaxed text-[#465a69] md:pr-6">
            <p id="cookie-consent-title" className="font-semibold text-[#0A1317]">
              Cookies &amp; privacy
            </p>
            <p className="mt-1">
              We use essential cookies to run this site securely.
              {gaId
                ? ' With your consent we also use analytics to understand traffic. See our'
                : ' See our'}{' '}
              <Link href="/legal#cookies" className="text-[#1877f2] underline-offset-2 hover:underline">
                cookie notice
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            {gaId ? (
              <>
                <button
                  type="button"
                  onClick={() => save('essential')}
                  className="rounded-full border border-[#ccd0d5] bg-white px-4 py-2 text-[13px] font-medium text-[#1c2b33] hover:bg-[#f5f6f7]"
                >
                  Essential only
                </button>
                <button
                  type="button"
                  onClick={() => save('analytics')}
                  className="rounded-full bg-[#1877f2] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#166fe5]"
                >
                  Accept analytics
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => save('essential')}
                className="rounded-full bg-[#1877f2] px-5 py-2 text-[13px] font-semibold text-white hover:bg-[#166fe5]"
              >
                OK
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (analyticsOn && gaId) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
        <Script id="ga-config-consent" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
        </Script>
      </>
    )
  }

  return null
}
