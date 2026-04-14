import type { PrivacyLocale } from '@/lib/privacy-locale'

/**
 * ISO 3166-1 alpha-2 → locale giao diện (ngôn ngữ thường dùng tại quốc gia đó).
 * Quốc gia không có trong map → 'en'.
 */
const COUNTRY_TO_LOCALE: Record<string, PrivacyLocale> = {
  // Tiếng Việt
  VN: 'vi',
  // English
  US: 'en',
  GB: 'en',
  AU: 'en',
  NZ: 'en',
  IE: 'en',
  ZA: 'en',
  NG: 'en',
  KE: 'en',
  GH: 'en',
  TZ: 'en',
  UG: 'en',
  ZW: 'en',
  BW: 'en',
  NA: 'en',
  MW: 'en',
  ZM: 'en',
  RW: 'en',
  JM: 'en',
  TT: 'en',
  BZ: 'en',
  BS: 'en',
  BB: 'en',
  LC: 'en',
  SG: 'en',
  PH: 'en',
  PK: 'en',
  LK: 'en',
  MM: 'en',
  HK: 'en',
  IN: 'hi',
  NP: 'en',
  // Spanish
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  VE: 'es',
  EC: 'es',
  GT: 'es',
  CU: 'es',
  BO: 'es',
  DO: 'es',
  HN: 'es',
  PY: 'es',
  SV: 'es',
  NI: 'es',
  CR: 'es',
  PA: 'es',
  UY: 'es',
  PR: 'es',
  // French
  FR: 'fr',
  BE: 'nl',
  LU: 'fr',
  MC: 'fr',
  CH: 'de',
  SN: 'fr',
  CI: 'fr',
  CM: 'fr',
  MG: 'fr',
  ML: 'fr',
  BF: 'fr',
  NE: 'fr',
  TD: 'fr',
  CF: 'fr',
  GA: 'fr',
  CG: 'fr',
  CD: 'fr',
  BI: 'fr',
  DJ: 'fr',
  HT: 'fr',
  CA: 'en',
  // German
  DE: 'de',
  AT: 'de',
  LI: 'de',
  // Portuguese
  PT: 'pt',
  BR: 'pt',
  AO: 'pt',
  MZ: 'pt',
  GW: 'pt',
  CV: 'pt',
  ST: 'pt',
  TL: 'pt',
  // Japanese
  JP: 'ja',
  // Korean
  KR: 'ko',
  // Chinese (Simplified UI; TW/HK/MO dùng chung zh)
  CN: 'zh',
  TW: 'zh',
  MO: 'zh',
  // Thai
  TH: 'th',
  // Indonesian
  ID: 'id',
  // Italian
  IT: 'it',
  SM: 'it',
  VA: 'it',
  // Dutch
  NL: 'nl',
  AW: 'nl',
  SR: 'nl',
  BQ: 'nl',
  // Russian
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  KG: 'ru',
  TJ: 'ru',
  UZ: 'ru',
  MD: 'ru',
}

export function countryToPrivacyLocale(country: string | null | undefined): PrivacyLocale {
  if (!country || country.length !== 2) return 'en'
  const c = country.toUpperCase()
  if (c === 'XX' || c === 'T1') return 'en'
  return COUNTRY_TO_LOCALE[c] ?? 'en'
}
