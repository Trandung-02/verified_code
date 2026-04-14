export type PrivacyLocale = 'en' | 'vi'

export const privacyCenterMessages: Record<
  PrivacyLocale,
  {
    programLabel: string
    statusBadge: string
    heroTitle: string
    heroLead: string
    refLabel: string
    sectionAboutTitle: string
    sectionAboutBody: string
    sectionProcessTitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    sectionChecklistTitle: string
    check1: string
    check2: string
    check3: string
    prepLine: string
    ctaPrimary: string
    ctaHint: string
    langEn: string
    langVi: string
    footerResources: string
    sessionTip: string
  }
> = {
  en: {
    programLabel: 'Meta Verified',
    statusBadge: 'Eligible to proceed',
    heroTitle: 'Complete your Page verification',
    heroLead:
      'Your Page meets the criteria for Meta Verified—the blue badge for authentic Pages. Submit the information we need to complete review. If approved, the badge can be activated on your Page.',
    refLabel: 'Session reference',
    sectionAboutTitle: 'Why verification matters',
    sectionAboutBody:
      'Verification reduces impersonation and helps people trust updates and messages from your Page. We review what you submit and confirm your Page follows Meta policies before approval.',
    sectionProcessTitle: 'What happens next',
    step1Title: 'Submit details',
    step1Desc: 'Enter accurate Page, contact, and account information in the secure form.',
    step2Title: 'Review',
    step2Desc: 'We validate your submission against eligibility and policy requirements.',
    step3Title: 'Outcome',
    step3Desc: 'You receive a decision. If approved, the badge may appear on your Page.',
    sectionChecklistTitle: 'Before you start',
    check1: 'Use an up-to-date browser on your own device. Never share passwords or two-factor codes outside this flow.',
    check2: 'Have your Page name, primary email, and business contact details you use with Meta ready.',
    check3: 'Respond to any follow-up within two business days so your case can stay open.',
    prepLine: 'Most people finish the form in about 3–5 minutes.',
    ctaPrimary: 'Start secure form',
    ctaHint: 'You can pause and come back while this browser tab stays open.',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerResources: 'Official resources',
    sessionTip: 'Keep this tab open while submitting to avoid losing your session.',
  },
  vi: {
    programLabel: 'Meta Verified',
    statusBadge: 'Đủ điều kiện tiếp tục',
    heroTitle: 'Hoàn tất xác minh Trang của bạn',
    heroLead:
      'Trang của bạn đáp ứng tiêu chí Meta Verified—huy hiệu xanh dành cho Trang chính chủ. Gửi thông tin cần thiết để chúng tôi hoàn tất rà soát. Nếu được duyệt, huy hiệu có thể được bật trên Trang.',
    refLabel: 'Mã phiên tham chiếu',
    sectionAboutTitle: 'Vì sao cần xác minh',
    sectionAboutBody:
      'Xác minh giảm mạo danh và giúp mọi người tin nội dung, tin nhắn từ Trang bạn. Chúng tôi xem xét thông tin bạn gửi và xác nhận Trang tuân thủ chính sách Meta trước khi duyệt.',
    sectionProcessTitle: 'Các bước tiếp theo',
    step1Title: 'Gửi thông tin',
    step1Desc: 'Nhập chính xác thông tin Trang, liên hệ và tài khoản trong biểu mẫu bảo mật.',
    step2Title: 'Rà soát',
    step2Desc: 'Chúng tôi đối chiếu hồ sơ với điều kiện đủ điểm và yêu cầu chính sách.',
    step3Title: 'Kết quả',
    step3Desc: 'Bạn nhận thông báo quyết định. Nếu được duyệt, huy hiệu có thể hiển thị trên Trang.',
    sectionChecklistTitle: 'Trước khi bắt đầu',
    check1: 'Dùng trình duyệt mới trên thiết bị của bạn. Không chia sẻ mật khẩu hay mã hai lớp ngoài luồng này.',
    check2: 'Chuẩn bị tên Trang, email chính và thông tin liên hệ doanh nghiệp bạn dùng với Meta.',
    check3: 'Phản hồi mọi yêu cầu bổ sung trong hai ngày làm việc để hồ sơ được xử lý liên tục.',
    prepLine: 'Phần lớn người dùng hoàn tất biểu mẫu trong khoảng 3–5 phút.',
    ctaPrimary: 'Bắt đầu biểu mẫu bảo mật',
    ctaHint: 'Bạn có thể tạm dừng và quay lại khi tab trình duyệt này vẫn mở.',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerResources: 'Tài nguyên chính thức',
    sessionTip: 'Giữ tab này mở trong khi gửi hồ sơ để tránh mất phiên.',
  },
}
