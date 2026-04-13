export type PrivacyLocale = 'en' | 'vi'

export const privacyCenterMessages: Record<
  PrivacyLocale,
  {
    metaKicker: string
    statusLine: string
    title: string
    lead: string
    section1Title: string
    section1p1: string
    section1p2: string
    refId: string
    section2Title: string
    bullet1: string
    bullet2: string
    bullet3: string
    trustLine: string
    prepNote: string
    cta: string
    langEn: string
    langVi: string
    footerLegal: string
  }
> = {
  en: {
    metaKicker: 'Meta · Meta Verified',
    statusLine: 'Invitation · Eligibility confirmed',
    title: 'Congratulations — you qualify for Meta Verified',
    lead: 'You have met the requirements to receive Meta Verified (the blue verification badge) for your Page. Complete the steps below so we can finalize issuance of your badge.',
    section1Title: 'What this means',
    section1p1:
      'Meta Verified confirms that your Page authentically represents the public figure, brand, or organization it claims to be. The blue badge signals to your audience that they are engaging with a genuine presence on Meta.',
    section1p2:
      'This invitation reflects your current eligibility. The badge is issued after we review the information you submit and confirm continued compliance with Meta policies.',
    refId: 'Reference ID',
    section2Title: 'Before you submit',
    bullet1: 'Keep all communication respectful. We cannot process requests that include threats, harassment, or hate speech.',
    bullet2:
      'Provide accurate contact details. Invalid email or no response to follow-ups within two business days may delay or close this verification.',
    bullet3:
      'After submission, we may run a final policy check. Many reviews finish within about one business day; some cases take longer. You will be notified of the outcome.',
    trustLine:
      'Continue only if you opened this page from an official Meta message, email, or your Page’s professional tools.',
    prepNote: 'Have your Page name, primary email, and business contact details ready before you continue.',
    cta: 'Continue to Meta Verified',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Legal & data notice',
  },
  vi: {
    metaKicker: 'Meta · Meta Verified',
    statusLine: 'Lời mời · Đã xác nhận đủ điều kiện',
    title: 'Chúc mừng — bạn đủ điều kiện nhận Meta Verified',
    lead: 'Bạn đã đạt đủ điều kiện để nhận Meta Verified (huy hiệu xác minh màu xanh) cho Trang của mình. Hoàn tất các bước bên dưới để chúng tôi khép quy trình cấp huy hiệu.',
    section1Title: 'Ý nghĩa của việc này',
    section1p1:
      'Meta Verified xác nhận Trang của bạn là đại diện chính chủ cho cá nhân, thương hiệu hoặc tổ chức được nêu. Huy hiệu xanh giúp khán giả tin rằng họ đang tương tác với tài khoản thật trên Meta.',
    section1p2:
      'Lời mời này phản ánh điều kiện hiện tại của bạn. Huy hiệu được cấp sau khi chúng tôi xem xét thông tin bạn gửi và xác nhận tuân thủ chính sách Meta.',
    refId: 'Mã tham chiếu',
    section2Title: 'Trước khi gửi',
    bullet1: 'Giữ giao tiếp tôn trọng. Chúng tôi không xử lý yêu cầu có đe dọa, quấy rối hoặc ngôn từ thù hận.',
    bullet2:
      'Cung cấp thông tin liên hệ chính xác. Email không hợp lệ hoặc không phản hồi yêu cầu bổ sung trong hai ngày làm việc có thể làm chậm hoặc đóng hồ sơ xác minh này.',
    bullet3:
      'Sau khi gửi, chúng tôi có thể kiểm tra lần cuối theo chính sách. Nhiều hồ sơ hoàn tất trong khoảng một ngày làm việc; một số trường hợp lâu hơn. Bạn sẽ được thông báo kết quả.',
    trustLine:
      'Chỉ tiếp tục nếu bạn mở trang này từ tin nhắn/email chính thức của Meta hoặc từ công cụ chuyên nghiệp của Trang.',
    prepNote: 'Chuẩn bị sẵn tên Trang, email chính và thông tin liên hệ doanh nghiệp trước khi tiếp tục.',
    cta: 'Tiếp tục Meta Verified',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Thông báo pháp lý & dữ liệu',
  },
}
