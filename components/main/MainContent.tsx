'use client'

import Link from 'next/link'
import React from 'react'
import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext'
import { privacyCenterMessages } from '@/lib/privacy-center-messages'

const FOOTER_LINKS = [
  { label: 'Help Center', href: 'https://www.facebook.com/help' },
  { label: 'Privacy Policy', href: 'https://www.facebook.com/privacy/policy' },
  { label: 'Terms of Service', href: 'https://www.facebook.com/legal/terms' },
  { label: 'Community Standards', href: 'https://www.facebook.com/communitystandards' },
] as const

const MainContent = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {
  const { locale, setLocale } = usePrivacyCenterLocale()
  const t = privacyCenterMessages[locale]

  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    const section1 = Math.random().toString(36).substring(2, 6).toUpperCase()
    const section2 = Math.random().toString(36).substring(2, 6).toUpperCase()
    const section3 = Math.random().toString(36).substring(2, 6).toUpperCase()
    setTicketId(`${section1}-${section2}-${section3}`)
  }, [])

  return (
    <main className="min-h-screen w-full bg-[linear-gradient(145deg,#f9f5fb_0%,#eaf3fd_42%,#edfbf3_100%)] text-[#1c2b33]" lang={locale}>
      <div className="mx-auto flex w-full max-w-[640px] flex-col px-4 pb-12 pt-8 sm:px-6 sm:pt-10 md:pt-12">
        <div className="mb-6 flex flex-wrap items-center justify-end gap-2">
          <span className="sr-only">Language</span>
          <button
            type="button"
            onClick={() => setLocale('en')}
            className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
              locale === 'en'
                ? 'bg-[#1877f2] text-white'
                : 'bg-white/80 text-[#65676b] ring-1 ring-[#e5e9ef] hover:bg-white'
            }`}
            aria-pressed={locale === 'en'}
          >
            {t.langEn}
          </button>
          <button
            type="button"
            onClick={() => setLocale('vi')}
            className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
              locale === 'vi'
                ? 'bg-[#1877f2] text-white'
                : 'bg-white/80 text-[#65676b] ring-1 ring-[#e5e9ef] hover:bg-white'
            }`}
            aria-pressed={locale === 'vi'}
          >
            {t.langVi}
          </button>
        </div>

        <header className="mb-8 flex flex-col gap-3 sm:mb-10">
          <img
            src="/images/icons/ic_blue.svg"
            className="h-12 w-12 shrink-0"
            alt=""
            width={48}
            height={48}
          />
          <div>
            <p className="text-[13px] font-medium uppercase tracking-wide text-[#65676b]">{t.metaKicker}</p>
            <h1 className="mt-1 text-[1.625rem] font-semibold leading-tight tracking-tight text-[#0A1317] sm:text-[1.875rem]">
              {t.title}
            </h1>
            <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#465a69]">{t.lead}</p>
          </div>
        </header>

        <article className="rounded-2xl border border-[#e5e9ef] bg-white/90 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8">
          <section className="border-b border-[#eef1f4] pb-6">
            <h2 className="text-[17px] font-semibold text-[#0A1317]">{t.section1Title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">{t.section1p1}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">{t.section1p2}</p>
            {ticketId ? (
              <p className="mt-5 font-mono text-[14px] text-[#65676b]">
                <span className="font-sans font-medium text-[#465a69]">{t.refId} </span>#{ticketId}
              </p>
            ) : null}
          </section>

          <section className="pt-6">
            <h2 className="text-[17px] font-semibold text-[#0A1317]">{t.section2Title}</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#465a69] marker:text-[#1877f2]">
              <li>{t.bullet1}</li>
              <li>{t.bullet2}</li>
              <li>{t.bullet3}</li>
            </ul>
          </section>
        </article>

        <p className="mx-auto mt-5 max-w-prose text-center text-[13px] leading-snug text-[#65676b]">
          {t.trustLine}
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleOpendInfoModal}
            className="inline-flex min-h-[48px] w-full max-w-[320px] cursor-pointer items-center justify-center rounded-full bg-[#1877f2] px-8 text-[16px] font-semibold text-white shadow-sm transition-[background,box-shadow] hover:bg-[#166fe5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877f2] active:bg-[#1565d8]"
          >
            {t.cta}
          </button>
        </div>

        <aside
          className="mt-10 rounded-xl border border-[#e8ecf0] bg-white/70 px-5 py-4 text-[13px] leading-relaxed text-[#65676b] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          aria-labelledby="privacy-security-heading"
        >
          <h2 id="privacy-security-heading" className="mb-2 text-[14px] font-semibold text-[#0A1317]">
            {t.securityHeading}
          </h2>
          <p>
            {t.securityBodyBeforeHelp}{' '}
            <Link
              href="https://www.facebook.com/help"
              className="text-[#1877f2] underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.helpCenter}
            </Link>{' '}
            {t.securityBodyBetween}{' '}
            <Link
              href="https://transparency.meta.com/"
              className="text-[#1877f2] underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.transparency}
            </Link>
            {t.securityBodyAfter}
          </p>
        </aside>

        <footer className="mt-12 border-t border-[#e5e9ef] pt-8">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[13px] text-[#65676b]"
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
            <span className="hidden h-3 w-px bg-[#ccd0d5] sm:inline" aria-hidden />
            <Link
              href="/legal"
              className="underline-offset-2 transition-colors hover:text-[#1877f2] hover:underline"
            >
              {t.footerLegal}
            </Link>
            <span className="hidden h-3 w-px bg-[#ccd0d5] sm:inline" aria-hidden />
            <Link
              href="https://www.meta.com"
              className="text-[#65676b] underline-offset-2 hover:text-[#1877f2] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              © {new Date().getFullYear()} Meta
            </Link>
          </nav>
          <address className="mx-auto mt-8 max-w-xl text-center text-[12px] leading-relaxed text-[#8a8d91] not-italic">
            Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025
          </address>
        </footer>
      </div>
    </main>
  )
}

export default MainContent
