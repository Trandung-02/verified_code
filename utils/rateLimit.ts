type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

function pruneExpired(now: number): void {
  for (const [key, b] of buckets) {
    if (now > b.resetAt) buckets.delete(key)
  }
}

export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number }

/**
 * Giới hạn số request theo IP (in-memory). Phù hợp single-instance; cluster cần Redis.
 */
export function rateLimit(
  key: string,
  maxRequests: number,
  windowMs: number,
  now: number = Date.now()
): RateLimitResult {
  pruneExpired(now)
  let bucket = buckets.get(key)
  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + windowMs }
    buckets.set(key, bucket)
  }
  if (bucket.count >= maxRequests) {
    const retryAfterSec = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))
    return { ok: false, retryAfterSec }
  }
  bucket.count += 1
  return { ok: true }
}
