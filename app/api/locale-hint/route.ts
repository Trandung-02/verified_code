import { NextRequest, NextResponse } from 'next/server'
import { countryToPrivacyLocale } from '@/lib/locale-from-country'

function clientIp(req: NextRequest): string {
  const xf = req.headers.get('x-forwarded-for')
  if (xf) {
    const first = xf.split(',')[0]?.trim()
    if (first) return first
  }
  return req.headers.get('x-real-ip') || 'unknown'
}

function countryFromEdgeHeaders(req: NextRequest): string | null {
  const vercel = req.headers.get('x-vercel-ip-country')
  const cf = req.headers.get('cf-ipcountry')
  for (const raw of [vercel, cf]) {
    if (!raw) continue
    const c = raw.trim().toUpperCase()
    if (c.length === 2 && /^[A-Z]{2}$/.test(c) && c !== 'XX') return c
  }
  return null
}

async function countryFromIpLookup(req: NextRequest): Promise<string | null> {
  const edge = countryFromEdgeHeaders(req)
  if (edge) return edge

  const ip = clientIp(req)
  if (!ip || ip === 'unknown' || ip === '::1' || ip.startsWith('127.')) return null

  try {
    const res = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,countryCode`,
      { cache: 'no-store' }
    )
    const data = (await res.json()) as { status?: string; countryCode?: string }
    if (data?.status === 'success' && data.countryCode) {
      return String(data.countryCode).toUpperCase()
    }
  } catch {
    /* ignore */
  }
  return null
}

/** Gợi ý locale theo quốc gia IP (Vercel/Cloudflare header hoặc ip-api). */
export async function GET(req: NextRequest) {
  const country = await countryFromIpLookup(req)
  const suggestedLocale = countryToPrivacyLocale(country)
  return NextResponse.json({ country, suggestedLocale })
}
