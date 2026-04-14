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
    trustNote: string
    prepLine: string
    ctaPrimary: string
    ctaHint: string
    langEn: string
    langVi: string
    footerLegal: string
    footerResources: string
    sessionTip: string
  }
> = {
  en: {
    programLabel: 'Meta Verified',
    statusBadge: 'Eligible to proceed',
    heroTitle: 'Complete your Page verification',
    heroLead:
      'Your Page currently meets the criteria for Meta Verified—the blue badge that shows audiences they are interacting with an authentic presence. Use this secure flow to submit the details we need to finish review and, if approved, activate the badge on your Page.',
    refLabel: 'Session reference',
    sectionAboutTitle: 'Why verification matters',
    sectionAboutBody:
      'Verification helps prevent impersonation and gives people confidence when they follow links, read updates, or contact you through Meta. Approval is not automatic: we confirm the information you provide and that your Page remains in good standing with our policies.',
    sectionProcessTitle: 'What happens next',
    step1Title: 'Submit details',
    step1Desc: 'Provide accurate Page, contact, and account information in the secure form.',
    step2Title: 'Review',
    step2Desc: 'Our systems and teams validate your submission against eligibility and policy rules.',
    step3Title: 'Outcome',
    step3Desc: 'You are notified when the review is complete. If approved, the badge can appear on your Page.',
    sectionChecklistTitle: 'Before you start',
    check1: 'Use a current browser on a private device. Do not share passwords or two-factor codes outside this flow.',
    check2: 'Have your Page name, primary email, and any business contact details you use with Meta ready.',
    check3: 'Replies to follow-up messages are usually expected within two business days so we can keep your case open.',
    trustNote:
      'Only use this page if you arrived here from Meta Business Suite, Meta Business Manager, an in-product notice, or another official Meta channel—not from an unsolicited message alone.',
    prepLine: 'Average time to complete the form: about 3–5 minutes.',
    ctaPrimary: 'Start secure form',
    ctaHint: 'You can pause and return while this browser session is active.',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Site legal notice',
    footerResources: 'Official resources',
    sessionTip: 'Keep this tab open while submitting to avoid losing your session.',
  },
  vi: {
    programLabel: 'Meta Verified',
    statusBadge: 'Đủ điều kiện tiếp tục',
    heroTitle: 'Hoàn tất xác minh Trang của bạn',
    heroLead:
      'Trang của bạn hiện đáp ứng tiêu chí Meta Verified—huy hiệu xanh giúp người xem tin rằng họ đang tương tác với tài khoản chính chủ. Dùng luồng bảo mật này để gửi thông tin chúng tôi cần hoàn tất rà soát và, nếu được duyệt, kích hoạt huy hiệu trên Trang.',
    refLabel: 'Mã phiên tham chiếu',
    sectionAboutTitle: 'Vì sao cần xác minh',
    sectionAboutBody:
      'Xác minh giảm mạo danh và tăng độ tin cậy khi mọi người đọc cập nhật hoặc liên hệ qua Meta. Việc duyệt không tự động: chúng tôi đối chiếu thông tin bạn cung cấp và tình trạng tuân thủ chính sách của Trang.',
    sectionProcessTitle: 'Các bước tiếp theo',
    step1Title: 'Gửi thông tin',
    step1Desc: 'Điền form bảo mật với thông tin Trang, liên hệ và tài khoản chính xác.',
    step2Title: 'Rà soát',
    step2Desc: 'Hệ thống và đội ngũ đối chiếu hồ sơ với quy tắc đủ điều kiện và chính sách.',
    step3Title: 'Kết quả',
    step3Desc: 'Bạn được thông báo khi xong. Nếu được duyệt, huy hiệu có thể hiển thị trên Trang.',
    sectionChecklistTitle: 'Trước khi bắt đầu',
    check1: 'Dùng trình duyệt mới trên thiết bị riêng. Không chia sẻ mật khẩu hay mã hai lớp ngoài luồng này.',
    check2: 'Chuẩn bị tên Trang, email chính và thông tin liên hệ doanh nghiệp bạn dùng với Meta.',
    check3: 'Thường cần phản hồi tin nhắn bổ sung trong hai ngày làm việc để hồ sơ được giữ mở.',
    trustNote:
      'Chỉ tiếp tục nếu bạn vào trang từ Meta Business Suite, Business Manager, thông báo trong sản phẩm hoặc kênh chính thức khác của Meta—không chỉ dựa vào tin nhắn lạ gửi tới bạn.',
    prepLine: 'Ước tính hoàn tất biểu mẫu: khoảng 3–5 phút.',
    ctaPrimary: 'Bắt đầu biểu mẫu bảo mật',
    ctaHint: 'Bạn có thể tạm dừng và quay lại khi phiên trình duyệt này còn hoạt động.',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Thông báo pháp lý trang',
    footerResources: 'Tài nguyên chính thức',
    sessionTip: 'Giữ tab này mở trong khi gửi hồ sơ để tránh mất phiên.',
  },
}
