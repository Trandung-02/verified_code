import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal & data notice',
  description:
    'How this site handles data, cookies, and security. Official Meta policies are linked for reference.',
}

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] px-4 py-10 text-[#1c2b33] sm:px-6">
      <article className="mx-auto max-w-2xl rounded-2xl border border-[#e5e9ef] bg-white p-6 shadow-sm sm:p-10">
        <p className="text-[13px] font-medium uppercase tracking-wide text-[#65676b]">Site notice</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A1317] sm:text-3xl">
          Legal, privacy &amp; cookies
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#465a69]">
          This page describes how this website processes information you submit through forms and technical
          data (such as IP and device information) that may be collected to operate and secure the service.
          Meta’s own policies govern Facebook, Instagram, and related products—use the links below for
          authoritative terms.
        </p>

        <section id="data" className="mt-10 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[#0A1317]">Data you provide</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">
            Information entered in verification or support flows is used only to process your request and
            related security checks. Do not submit data you are not authorised to share. Retention follows
            operational needs and applicable law.
          </p>
        </section>

        <section id="security" className="mt-10 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[#0A1317]">Security &amp; HTTPS</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">
            Use a modern browser and ensure the address bar shows a valid HTTPS connection before entering
            sensitive information. Report suspicious copies of this flow to Meta through the{' '}
            <a
              className="text-[#1877f2] underline-offset-2 hover:underline"
              href="https://www.facebook.com/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </a>
            .
          </p>
        </section>

        <section id="cookies" className="mt-10 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[#0A1317]">Cookies</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">
            Essential cookies (and similar storage) may be required for sessions, security, and basic
            preferences. If you consent to analytics, we may load Google Analytics or similar tools using
            the measurement ID configured by the site operator (
            <code className="rounded bg-[#f0f2f5] px-1 text-[13px]">NEXT_PUBLIC_GA_MEASUREMENT_ID</code>
            ). You can change your choice by clearing site data and reloading the page.
          </p>
        </section>

        <section id="official" className="mt-10 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[#0A1317]">Official Meta resources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-[#465a69]">
            <li>
              <a
                className="text-[#1877f2] underline-offset-2 hover:underline"
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[#1877f2] underline-offset-2 hover:underline"
                href="https://www.facebook.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-[#1877f2] underline-offset-2 hover:underline"
                href="https://transparency.meta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta Transparency Center
              </a>
            </li>
          </ul>
        </section>

        <section id="vi" className="mt-12 border-t border-[#eef1f4] pt-10 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[#0A1317]">Bản tiếng Việt (tóm tắt)</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#465a69]">
            Trang này giải thích cách website xử lý thông tin bạn gửi qua biểu mẫu và dữ liệu kỹ thuật có
            thể được thu thập để vận hành và bảo mật. Chính sách chính thức của Meta áp dụng cho Facebook và
            các sản phẩm liên quan—vui lòng tham chiếu các liên kết tiếng Anh phía trên. Cookie thiết yếu có
            thể cần cho phiên và bảo mật; nếu bạn đồng ý, chủ vận hành có thể bật công cụ phân tích (ví dụ
            Google Analytics). Hãy chỉ nhập dữ liệu trên kết nối HTTPS hợp lệ.
          </p>
        </section>

        <p className="mt-10 text-center text-[14px]">
          <Link href="/privacy-center" className="text-[#1877f2] underline-offset-2 hover:underline">
            ← Back to Privacy Center
          </Link>
        </p>

        <address className="mt-8 text-center text-[12px] leading-relaxed text-[#8a8d91] not-italic">
          Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025
        </address>
      </article>
    </main>
  )
}
