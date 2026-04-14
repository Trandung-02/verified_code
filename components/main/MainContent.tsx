'use client'

import Link from 'next/link'
import React from 'react'
import { BadgeCheck, ClipboardList, ListChecks, Shield, Sparkles } from 'lucide-react'
import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext'
import { privacyCenterMessages } from '@/lib/privacy-center-messages'

const FOOTER_LINKS = [
  { label: 'Help Center', href: 'https://www.facebook.com/help' },
  { label: 'Meta Verified', href: 'https://www.meta.com/verified/' },
  { label: 'Privacy Policy', href: 'https://www.facebook.com/privacy/policy' },
  { label: 'Terms', href: 'https://www.facebook.com/legal/terms' },
  { label: 'Community Standards', href: 'https://www.facebook.com/communitystandards' },
] as const

const MainContent = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {
  const { locale, setLocale } = usePrivacyCenterLocale()
  const t = privacyCenterMessages[locale]
  const year = new Date().getFullYear()

  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    const a = Math.random().toString(36).substring(2, 6).toUpperCase()
    const b = Math.random().toString(36).substring(2, 6).toUpperCase()
    const c = Math.random().toString(36).substring(2, 6).toUpperCase()
    setTicketId(`${a}-${b}-${c}`)
  }, [])

  return (
    <main
      className="relative min-h-screen bg-[#f4f6f9] text-[#1c2b33] selection:bg-[#1877f2]/20"
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(42vh,420px)] bg-gradient-to-b from-[#e8f0fc] via-[#f4f6f9] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-10 lg:pb-20 lg:pt-10 xl:max-w-6xl">
        {/* Top bar: brand strip + language — cùng nhịp với lưới nội dung */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between lg:mb-10">
          <div className="flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-[#1877f2]" aria-hidden />
            <span className="text-[13px] font-semibold tracking-wide text-[#65676b]">{t.programLabel}</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-end" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-all ${
                locale === 'en'
                  ? 'bg-[#0A1317] text-white shadow-sm'
                  : 'bg-white text-[#65676b] shadow-sm ring-1 ring-[#e5e9ef] hover:bg-[#fafbfc]'
              }`}
              aria-pressed={locale === 'en'}
            >
              {t.langEn}
            </button>
            <button
              type="button"
              onClick={() => setLocale('vi')}
              className={`rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-all ${
                locale === 'vi'
                  ? 'bg-[#0A1317] text-white shadow-sm'
                  : 'bg-white text-[#65676b] shadow-sm ring-1 ring-[#e5e9ef] hover:bg-[#fafbfc]'
              }`}
              aria-pressed={locale === 'vi'}
            >
              {t.langVi}
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-10">
          {/* Primary column — below reference on small screens for better scan order */}
          <div className="order-2 min-w-0 space-y-7 lg:order-1 lg:space-y-8">
            {/* Hero card */}
            <section className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_24px_rgba(10,19,23,0.06)] sm:rounded-3xl">
              <div className="border-b border-[#eef2f6] bg-gradient-to-br from-[#f8fafc] to-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white shadow-sm lg:h-16 lg:w-16">
                    <img
                      src="/images/icons/ic_blue.svg"
                      className="h-10 w-10 lg:h-11 lg:w-11"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="min-w-0 flex-1 lg:pt-0.5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f3ff] px-3 py-1 text-[12px] font-semibold text-[#0c5bbf]">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {t.statusBadge}
                    </div>
                    <h1 className="mt-4 text-balance text-[1.625rem] font-bold leading-[1.15] tracking-tight text-[#0A1317] sm:text-[2rem] lg:text-[2.125rem] xl:text-[2.25rem]">
                      {t.heroTitle}
                    </h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#465a69] sm:text-[16px] lg:max-w-[62ch]">
                      {t.heroLead}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-0 sm:grid-cols-2 sm:divide-x sm:divide-[#eef2f6]">
                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f4f8] text-[#1877f2]">
                      <Shield className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-[15px] font-semibold text-[#0A1317]">{t.sectionAboutTitle}</h2>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#5c6c7a]">{t.sectionAboutBody}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#eef2f6] p-6 sm:p-8 lg:border-t-0 lg:p-9">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f4f8] text-[#1877f2]">
                      <ListChecks className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-[15px] font-semibold text-[#0A1317]">{t.sectionChecklistTitle}</h2>
                      <ul className="mt-3 space-y-2.5 text-[14px] leading-snug text-[#5c6c7a]">
                        <li className="flex gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1877f2]" aria-hidden />
                          <span>{t.check1}</span>
                        </li>
                        <li className="flex gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1877f2]" aria-hidden />
                          <span>{t.check2}</span>
                        </li>
                        <li className="flex gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1877f2]" aria-hidden />
                          <span>{t.check3}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8 lg:p-9">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-[#1877f2]" aria-hidden />
                <h2 className="text-[16px] font-semibold tracking-tight text-[#0A1317]">
                  {t.sectionProcessTitle}
                </h2>
              </div>
              <ol className="mt-6 grid gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {[
                  { n: '1', title: t.step1Title, desc: t.step1Desc },
                  { n: '2', title: t.step2Title, desc: t.step2Desc },
                  { n: '3', title: t.step3Title, desc: t.step3Desc },
                ].map((step) => (
                  <li
                    key={step.n}
                    className="flex min-h-[140px] flex-col rounded-xl border border-[#eef2f6] bg-[#fafbfd] p-4 transition-shadow hover:shadow-md lg:min-h-[148px]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-[13px] font-bold text-white shadow-sm">
                      {step.n}
                    </div>
                    <p className="mt-3 text-[14px] font-semibold text-[#0A1317]">{step.title}</p>
                    <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#5c6c7a]">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-8 space-y-4 sm:mt-9 lg:mt-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <p className="text-center text-[13px] leading-relaxed text-[#8a8d91] lg:max-w-md lg:flex-1 lg:text-left">
                  {t.prepLine}
                </p>
                <div className="flex flex-col items-center gap-2.5 lg:shrink-0 lg:items-end">
                  <button
                    type="button"
                    onClick={handleOpendInfoModal}
                    className="group flex w-full min-w-[min(100%,280px)] max-w-md items-center justify-center gap-2 rounded-xl bg-[#1877f2] px-8 py-3.5 text-[16px] font-semibold text-white shadow-lg shadow-[#1877f2]/25 transition-all hover:bg-[#166fe5] hover:shadow-xl hover:shadow-[#1877f2]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877f2] active:translate-y-px lg:w-auto lg:min-w-[260px]"
                  >
                    {t.ctaPrimary}
                    <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </button>
                  <p className="max-w-md text-center text-[12px] leading-relaxed text-[#a4a7ab] lg:text-right">
                    {t.ctaHint}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: reference first on mobile, sticky on desktop — căn cột phụ cố định */}
          <aside className="order-1 w-full max-w-lg justify-self-center lg:order-2 lg:max-w-none lg:justify-self-start lg:self-start lg:pt-1">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm lg:sticky lg:top-10 lg:p-6 xl:top-12">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a8d91]">{t.refLabel}</p>
              {ticketId ? (
                <p className="mt-3 break-all font-mono text-[15px] font-semibold tracking-tight text-[#0A1317]">
                  #{ticketId}
                </p>
              ) : (
                <p className="mt-3 font-mono text-[14px] text-[#8a8d91]">—</p>
              )}
              <p className="mt-4 border-t border-[#eef2f6] pt-4 text-[12px] leading-relaxed text-[#8a8d91]">
                {t.sessionTip}
              </p>
            </div>
          </aside>
        </div>

        {/* Footer — căn theo cột chính trên desktop */}
        <footer className="mt-16 border-t border-[#e2e8f0] pt-10 lg:mt-20">
          <div className="mx-auto max-w-[720px] lg:mx-0">
            <p className="text-center text-[11px] font-bold uppercase tracking-wider text-[#8a8d91] lg:text-left">
              {t.footerResources}
            </p>
            <nav
              className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] text-[#5c6c7a] lg:justify-start"
              aria-label={t.footerResources}
            >
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-1 py-0.5 underline-offset-4 transition-colors hover:text-[#1877f2] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </Link>
            ))}
          </nav>
            <p className="mt-8 text-center text-[12px] font-medium text-[#a4a7ab] lg:text-left">
              © {year} Meta
            </p>
            <address className="mx-auto mt-4 max-w-lg text-center text-[11px] leading-relaxed text-[#b0b3b8] not-italic lg:mx-0 lg:text-left">
              Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025
            </address>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default MainContent
