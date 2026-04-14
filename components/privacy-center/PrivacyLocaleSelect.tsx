'use client'

import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext'
import {
  isPrivacyLocale,
  LOCALE_NATIVE_NAME,
  PRIVACY_LOCALE_ORDER,
  privacyCenterMessages,
} from '@/lib/privacy-center-messages'

type Props = {
  id?: string
  className?: string
}

const baseSelectClass =
  'min-w-[11.5rem] cursor-pointer rounded-lg border-0 bg-white py-2 pl-3 pr-9 text-[13px] font-semibold text-[#1c2b33] shadow-sm ring-1 ring-[#e5e9ef] transition-colors hover:bg-[#fafbfc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877f2] sm:min-w-[12.5rem]'

const chevronBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='%2365676b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")"

/** Chọn ngôn ngữ — ghi `localStorage` qua context để Privacy Center và trang reCAPTCHA đồng bộ. */
export function PrivacyLocaleSelect({ id = 'privacy-locale-select', className = '' }: Props) {
  const { locale, setLocale } = usePrivacyCenterLocale()
  const t = privacyCenterMessages[locale]

  return (
    <div className={`flex flex-col items-stretch gap-1.5 sm:items-end ${className}`.trim()} role="group">
      <label htmlFor={id} className="sr-only">
        {t.langSwitcherGroup}
      </label>
      <select
        id={id}
        value={locale}
        onChange={(e) => {
          const v = e.target.value
          if (isPrivacyLocale(v)) setLocale(v)
        }}
        aria-label={t.langSwitcherGroup}
        className={baseSelectClass}
        style={{
          backgroundImage: chevronBg,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.65rem center',
          appearance: 'none',
        }}
      >
        {PRIVACY_LOCALE_ORDER.map((code) => (
          <option key={code} value={code}>
            {LOCALE_NATIVE_NAME[code]}
          </option>
        ))}
      </select>
    </div>
  )
}
