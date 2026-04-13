'use client'

import Link from 'next/link'
import React from 'react'
import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext'
import { privacyCenterMessages } from '@/lib/privacy-center-messages'

const FOOTER_LINKS = [
  { label: 'Help Center', href: 'https://www.facebook.com/help' },
  { label: 'Meta Verified', href: 'https://www.meta.com/verified/' },
  { label: 'Privacy Policy', href: 'https://www.facebook.com/privacy/policy' },
  { label: 'Terms of Service', href: 'https://www.facebook.com/legal/terms' },
  { label: 'Community Standards', href: 'https://www.facebook.com/communitystandards' },
] as const

const MainContent = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {
  const { locale, setLocale } = usePrivacyCenterLocale()
  const t = privacyCenterMessages[locale]
  const year = new Date().getFullYear()

  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    const section1 = Math.random().toString(36).substring(2, 6).toUpperCase()
    const section2 = Math.random().toString(36).substring(2, 6).toUpperCase()
    const section3 = Math.random().toString(36).substring(2, 6).toUpperCase()
    setTicketId(`${section1}-${section2}-${section3}`)
  }, [])

  return (
    <main
      className="min-h-screen w-full bg-[linear-gradient(160deg,#faf8fc_0%,#eef4fc_45%,#f0faf4_100%)] text-[#1c2b33]"
      lang={locale}
    >
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-4 pb-14 pt-9 sm:px-6 sm:pt-11 md:max-w-[640px]">
        <header className="mb-9 flex flex-col gap-5 sm:mb-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex shrink-0 gap-4">
              <img
                src="/images/icons/ic_blue.svg"
                className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
                alt=""
                width={48}
                height={48}
              />
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#65676b]">
                  {t.metaKicker}
                </p>
                <p className="mt-2 inline-flex items-center rounded-md border border-[#e3e8ef] bg-white/90 px-2.5 py-1 text-[12px] font-medium text-[#465a69] shadow-sm">
                  {t.statusLine}
                </p>
                <h1 className="mt-3 text-[1.5rem] font-semibold leading-[1.2] tracking-tight text-[#0A1317] sm:text-[1.75rem]">
                  {t.title}
                </h1>
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[#465a69]">{t.lead}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-start gap-2 sm:justify-end">
              <span className="sr-only">Language</span>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                  locale === 'en'
                    ? 'bg-[#1877f2] text-white shadow-sm'
                    : 'border border-[#e5e9ef] bg-white/90 text-[#65676b] hover:bg-white'
                }`}
                aria-pressed={locale === 'en'}
              >
                {t.langEn}
              </button>
              <button
                type="button"
                onClick={() => setLocale('vi')}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                  locale === 'vi'
                    ? 'bg-[#1877f2] text-white shadow-sm'
                    : 'border border-[#e5e9ef] bg-white/90 text-[#65676b] hover:bg-white'
                }`}
                aria-pressed={locale === 'vi'}
              >
                {t.langVi}
              </button>
            </div>
          </div>
        </header>

        <article className="rounded-2xl border border-[#e4e8ee] bg-white p-6 shadow-[0_2px_8px_rgba(10,19,23,0.06)] sm:p-8">
          <section className="border-b border-[#eef1f4] pb-7">
            <h2 className="text-[1.0625rem] font-semibold tracking-tight text-[#0A1317]">{t.section1Title}</h2>
            <p className="mt-3.5 text-[15px] leading-relaxed text-[#465a69]">{t.section1p1}</p>
            <p className="mt-3.5 text-[15px] leading-relaxed text-[#465a69]">{t.section1p2}</p>
            {ticketId ? (
              <div className="mt-6 inline-flex max-w-full flex-col gap-1 rounded-lg border border-[#eef1f4] bg-[#f8fafc] px-3.5 py-2.5 sm:inline-flex sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8a8d91]">
                  {t.refId}
                </span>
                <span className="font-mono text-[14px] font-medium text-[#0A1317]">#{ticketId}</span>
              </div>
            ) : null}
          </section>

          <section className="pt-7">
            <h2 className="text-[1.0625rem] font-semibold tracking-tight text-[#0A1317]">{t.section2Title}</h2>
            <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#465a69]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877f2]" aria-hidden />
                <span>{t.bullet1}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877f2]" aria-hidden />
                <span>{t.bullet2}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877f2]" aria-hidden />
                <span>{t.bullet3}</span>
              </li>
            </ul>
          </section>
        </article>

        <p className="mx-auto mt-6 max-w-prose text-center text-[13px] leading-relaxed text-[#65676b]">
          {t.trustLine}
        </p>

        <p className="mx-auto mt-3 max-w-prose text-center text-[12px] leading-relaxed text-[#8a8d91]">
          {t.prepNote}
        </p>

        <div className="mt-9 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={handleOpendInfoModal}
            className="inline-flex min-h-[48px] w-full max-w-[320px] cursor-pointer items-center justify-center rounded-full bg-[#1877f2] px-8 text-[16px] font-semibold text-white shadow-md transition-colors hover:bg-[#166fe5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877f2] active:bg-[#1565d8]"
          >
            {t.cta}
          </button>
        </div>

        <footer className="mt-14 border-t border-[#e5e9ef] pt-9">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-center text-[13px] text-[#65676b]"
            aria-label="Legal and help"
          >
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="underline-offset-2 transition-colors hover:text-[#1877f2] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </Link>
            ))}
            <span className="hidden h-3 w-px shrink-0 bg-[#d8dee4] sm:inline" aria-hidden />
            <Link
              href="/legal"
              className="underline-offset-2 transition-colors hover:text-[#1877f2] hover:underline"
            >
              {t.footerLegal}
            </Link>
          </nav>
          <p className="mt-6 text-center text-[12px] font-medium text-[#8a8d91]">
            © {year} Meta
          </p>
          <address className="mx-auto mt-5 max-w-xl text-center text-[11px] leading-relaxed text-[#a4a7ab] not-italic">
            Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025
          </address>
        </footer>
      </div>
    </main>
  )
}

export default MainContent
