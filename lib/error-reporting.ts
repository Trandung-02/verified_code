/**
 * Ghi log lỗi phía server.
 * Tích hợp Sentry (tùy chọn): cài `@sentry/nextjs`, chạy wizard, rồi gọi `Sentry.captureException(error)` ở đây khi `process.env.SENTRY_DSN` có giá trị.
 */
export function logServerError(scope: string, error: unknown, extra?: Record<string, unknown>): void {
  const message = error instanceof Error ? error.message : String(error)
  const stack = error instanceof Error ? error.stack : undefined
  console.error(`[${scope}]`, message, stack ?? '', extra ?? '')
}
