/**
 * Khi true: trang không được index (staging, preview, hoặc cấu hình thủ công).
 * Production trên Vercel với VERCEL_ENV=production và không bật BLOCK → cho phép index.
 */
export function shouldBlockSearchIndexing(): boolean {
  if (process.env.NEXT_PUBLIC_BLOCK_SEARCH_INDEXING === 'true') {
    return true
  }
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === 'preview' || vercelEnv === 'development') {
    return true
  }
  return false
}
