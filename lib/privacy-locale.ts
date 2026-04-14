/** Các ngôn ngữ giao diện Privacy Center (mã BCP 47 rút gọn) */
export const PRIVACY_LOCALES = [
  'en',
  'vi',
  'es',
  'fr',
  'de',
  'pt',
  'ja',
  'ko',
  'zh',
  'th',
  'id',
  'it',
  'nl',
  'ru',
  'hi',
] as const

export type PrivacyLocale = (typeof PRIVACY_LOCALES)[number]

export function isPrivacyLocale(s: string): s is PrivacyLocale {
  return (PRIVACY_LOCALES as readonly string[]).includes(s)
}

/** Tên ngôn ngữ theo chính ngôn đó (hiển thị trong dropdown) */
export const LOCALE_NATIVE_NAME: Record<PrivacyLocale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ja: '日本語',
  ko: '한국어',
  zh: '简体中文',
  th: 'ไทย',
  id: 'Bahasa Indonesia',
  it: 'Italiano',
  nl: 'Nederlands',
  ru: 'Русский',
  hi: 'हिन्दी',
}

/** Thứ tự trong menu chọn */
export const PRIVACY_LOCALE_ORDER: PrivacyLocale[] = [...PRIVACY_LOCALES]
