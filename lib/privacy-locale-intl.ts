import type { PrivacyLocale } from '@/lib/privacy-locale'

/** BCP 47 cho Intl (tháng, v.v.) */
export function privacyLocaleToBcp47(locale: PrivacyLocale): string {
  const map: Record<PrivacyLocale, string> = {
    en: 'en-US',
    vi: 'vi-VN',
    es: 'es',
    fr: 'fr-FR',
    de: 'de-DE',
    pt: 'pt-BR',
    ja: 'ja-JP',
    ko: 'ko-KR',
    zh: 'zh-CN',
    th: 'th-TH',
    id: 'id-ID',
    it: 'it-IT',
    nl: 'nl-NL',
    ru: 'ru-RU',
    hi: 'hi-IN',
  }
  return map[locale] ?? 'en-US'
}

/** Tháng 1–12 theo locale (nhãn đầy đủ) */
export function getLocalizedMonthOptions(locale: PrivacyLocale): { value: string; label: string }[] {
  const tag = privacyLocaleToBcp47(locale)
  const dtf = new Intl.DateTimeFormat(tag, { month: 'long' })
  return Array.from({ length: 12 }, (_, i) => {
    const d = new Date(2000, i, 1)
    return { value: String(i + 1), label: dtf.format(d) }
  })
}
