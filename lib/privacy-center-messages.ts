export type PrivacyLocale = 'en' | 'vi'

export const privacyCenterMessages: Record<
  PrivacyLocale,
  {
    metaKicker: string
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
    cta: string
    securityHeading: string
    securityBodyBeforeHelp: string
    securityBodyBetween: string
    securityBodyAfter: string
    helpCenter: string
    transparency: string
    langEn: string
    langVi: string
    footerLegal: string
  }
> = {
  en: {
    metaKicker: 'Meta · Page verification',
    title: 'Verified badge request',
    lead: 'Confirm your eligibility and submit the information needed for our team to review your Page.',
    section1Title: 'Recognition for authentic Pages',
    section1p1:
      'If your Page meets our criteria, you may be invited to complete verification. A blue badge indicates that Meta has confirmed this Page represents the public figure, brand, or organization it claims to be.',
    section1p2:
      'Completing the steps below does not guarantee approval; all requests are reviewed against our policies.',
    refId: 'Reference ID:',
    section2Title: 'Before you submit',
    bullet1: 'Requests that contain threats, harassment, or hate speech will not be processed.',
    bullet2:
      'Provide accurate contact details. Invalid email or no reply to follow-up messages within two business days may result in closure of the request. Unattended requests may time out after the period stated in your notice.',
    bullet3:
      'After submission, we may review your account for policy compliance. Reviews often complete within one business day; complex cases can take longer. You will be notified of the outcome in line with our processes.',
    trustLine:
      'Only continue if you received this link from an official Meta communication or your Page admin tools.',
    cta: 'Continue to request form',
    securityHeading: 'Security reminder',
    securityBodyBeforeHelp: 'Meta will not ask for your password or two-factor codes by email, SMS, or unofficial websites. Use only this secure flow and official in-app messages. If something looks suspicious, visit the',
    securityBodyBetween: 'or',
    securityBodyAfter: '.',
    helpCenter: 'Help Center',
    transparency: 'Meta Transparency Center',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Legal & data notice',
  },
  vi: {
    metaKicker: 'Meta · Xác minh Trang',
    title: 'Yêu cầu huy hiệu xác minh',
    lead: 'Xác nhận đủ điều kiện và gửi thông tin để đội ngũ xem xét Trang của bạn.',
    section1Title: 'Ghi nhận Trang chính chủ',
    section1p1:
      'Nếu Trang đáp ứng tiêu chí, bạn có thể được mời hoàn tất xác minh. Huy hiệu xanh cho biết Meta đã xác nhận Trang đại diện đúng cho cá nhân, thương hiệu hoặc tổ chức được nêu.',
    section1p2:
      'Hoàn thành các bước dưới đây không đảm bảo được duyệt; mọi yêu cầu đều được xét theo chính sách.',
    refId: 'Mã tham chiếu:',
    section2Title: 'Trước khi gửi',
    bullet1: 'Yêu cầu có đe dọa, quấy rối hoặc ngôn từ thù hận sẽ không được xử lý.',
    bullet2:
      'Cung cấp thông tin liên hệ chính xác. Email không hợp lệ hoặc không phản hồi yêu cầu bổ sung trong hai ngày làm việc có thể khiến hồ sơ bị đóng. Hồ sơ không được xử lý có thể hết hạn theo thông báo.',
    bullet3:
      'Sau khi gửi, chúng tôi có thể rà soát tài khoản theo chính sách. Thời gian xử lý thường trong một ngày làm việc; trường hợp phức tạp có thể lâu hơn. Bạn sẽ được thông báo kết quả theo quy trình.',
    trustLine:
      'Chỉ tiếp tục nếu bạn nhận liên kết từ kênh chính thức của Meta hoặc công cụ quản trị Trang.',
    cta: 'Tiếp tục tới biểu mẫu',
    securityHeading: 'Nhắc bảo mật',
    securityBodyBeforeHelp:
      'Meta sẽ không yêu cầu mật khẩu hoặc mã hai lớp qua email, SMS hay trang không chính thức. Chỉ dùng luồng bảo mật này và tin nhắn trong ứng dụng chính thức. Nếu nghi ngờ lừa đảo, hãy vào',
    securityBodyBetween: 'hoặc',
    securityBodyAfter: '.',
    helpCenter: 'Trung tâm trợ giúp',
    transparency: 'Trung tâm minh bạch Meta',
    langEn: 'English',
    langVi: 'Tiếng Việt',
    footerLegal: 'Thông báo pháp lý & dữ liệu',
  },
}
