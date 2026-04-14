import type { PrivacyLocale } from '@/lib/privacy-locale'
import type { RecaptchaSlice } from '@/lib/privacy-center-messages-types'

const EN: RecaptchaSlice = {
  recaptchaPageTitle: 'Security verification',
  recaptchaPageSubtitle:
    'Help us protect your account and our community. Complete the check below to continue to Meta Verified.',
  recaptchaCheckboxLabel: "I'm not a robot",
  recaptchaPrivacyTerms: 'Privacy - Terms',
  recaptchaHelpP1:
    'This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.',
  recaptchaHelpP2:
    "We've used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google's Privacy Policy and Terms of Use.",
  recaptchaHelpP3:
    'reCAPTCHA Enterprise collects hardware and software information, such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.',
}

const VI: RecaptchaSlice = {
  recaptchaPageTitle: 'Xác minh bảo mật',
  recaptchaPageSubtitle:
    'Giúp chúng tôi bảo vệ tài khoản và cộng đồng của bạn. Hoàn tất bước kiểm tra bên dưới để tiếp tục tới Meta Verified.',
  recaptchaCheckboxLabel: 'Tôi không phải người máy',
  recaptchaPrivacyTerms: 'Quyền riêng tư - Điều khoản',
  recaptchaHelpP1:
    'Điều này giúp chúng tôi chống hành vi có hại, phát hiện và ngăn spam, đồng thời duy trì tính toàn vẹn của các sản phẩm.',
  recaptchaHelpP2:
    'Chúng tôi dùng sản phẩm reCAPTCHA Enterprise của Google để thực hiện kiểm tra bảo mật này. Việc bạn dùng reCAPTCHA Enterprise phải tuân theo Chính sách quyền riêng tư và Điều khoản sử dụng của Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise thu thập thông tin phần cứng và phần mềm, chẳng hạn dữ liệu thiết bị và ứng dụng, rồi gửi cho Google để cung cấp, duy trì và cải thiện reCAPTCHA Enterprise cũng như cho mục đích bảo mật chung. Google không dùng thông tin này cho quảng cáo cá nhân hóa.',
}

const ES: RecaptchaSlice = {
  recaptchaPageTitle: 'Verificación de seguridad',
  recaptchaPageSubtitle:
    'Ayúdanos a proteger tu cuenta y nuestra comunidad. Completa la comprobación para continuar con Meta Verified.',
  recaptchaCheckboxLabel: 'No soy un robot',
  recaptchaPrivacyTerms: 'Privacidad - Términos',
  recaptchaHelpP1:
    'Esto nos ayuda a combatir conductas dañinas, detectar y prevenir spam y mantener la integridad de nuestros productos.',
  recaptchaHelpP2:
    'Hemos utilizado el producto reCAPTCHA Enterprise de Google para esta comprobación de seguridad. Su uso está sujeto a la Política de privacidad y a las Condiciones de uso de Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise recopila información de hardware y software (por ejemplo, datos del dispositivo y la aplicación) y la envía a Google para prestar, mantener y mejorar reCAPTCHA Enterprise y con fines de seguridad general. Google no utiliza esta información para publicidad personalizada.',
}

const FR: RecaptchaSlice = {
  recaptchaPageTitle: 'Vérification de sécurité',
  recaptchaPageSubtitle:
    'Aidez-nous à protéger votre compte et notre communauté. Effectuez la vérification ci-dessous pour accéder à Meta Verified.',
  recaptchaCheckboxLabel: 'Je ne suis pas un robot',
  recaptchaPrivacyTerms: 'Confidentialité - Conditions',
  recaptchaHelpP1:
    'Cela nous aide à lutter contre les comportements nuisibles, à détecter et prévenir le spam et à préserver l’intégrité de nos produits.',
  recaptchaHelpP2:
    'Nous utilisons la solution reCAPTCHA Enterprise de Google pour cette vérification de sécurité. Son utilisation est soumise à la Politique de confidentialité et aux Conditions d’utilisation de Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise collecte des informations matérielles et logicielles (données d’appareil et d’application, par exemple) et les transmet à Google pour fournir, maintenir et améliorer reCAPTCHA Enterprise et à des fins de sécurité générale. Google n’utilise pas ces données pour la publicité personnalisée.',
}

const DE: RecaptchaSlice = {
  recaptchaPageTitle: 'Sicherheitsprüfung',
  recaptchaPageSubtitle:
    'Helfen Sie uns, Ihr Konto und unsere Community zu schützen. Schließen Sie die Prüfung ab, um mit Meta Verified fortzufahren.',
  recaptchaCheckboxLabel: 'Ich bin kein Roboter',
  recaptchaPrivacyTerms: 'Datenschutz - Nutzungsbedingungen',
  recaptchaHelpP1:
    'So bekämpfen wir schädliches Verhalten, erkennen und verhindern Spam und wahren die Integrität unserer Produkte.',
  recaptchaHelpP2:
    'Wir nutzen Googles reCAPTCHA Enterprise für diese Sicherheitsprüfung. Die Nutzung unterliegt der Datenschutzerklärung und den Nutzungsbedingungen von Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise erfasst Hardware- und Softwareinformationen (z. B. Geräte- und App-Daten) und sendet sie an Google, um reCAPTCHA Enterprise bereitzustellen, zu warten und zu verbessern sowie aus allgemeinen Sicherheitsgründen. Google nutzt diese Daten nicht für personalisierte Werbung.',
}

const PT: RecaptchaSlice = {
  recaptchaPageTitle: 'Verificação de segurança',
  recaptchaPageSubtitle:
    'Ajude-nos a proteger a sua conta e a nossa comunidade. Conclua a verificação abaixo para continuar para o Meta Verified.',
  recaptchaCheckboxLabel: 'Não sou um robô',
  recaptchaPrivacyTerms: 'Privacidade - Termos',
  recaptchaHelpP1:
    'Isto ajuda-nos a combater condutas prejudiciais, detetar e prevenir spam e manter a integridade dos nossos produtos.',
  recaptchaHelpP2:
    'Utilizámos o produto reCAPTCHA Enterprise da Google para esta verificação de segurança. A utilização está sujeita à Política de Privacidade e aos Termos de Utilização da Google.',
  recaptchaHelpP3:
    'O reCAPTCHA Enterprise recolhe informações de hardware e software (por exemplo, dados do dispositivo e da aplicação) e envia-as à Google para fornecer, manter e melhorar o reCAPTCHA Enterprise e para fins de segurança geral. A Google não utiliza estas informações para publicidade personalizada.',
}

const JA: RecaptchaSlice = {
  recaptchaPageTitle: 'セキュリティ確認',
  recaptchaPageSubtitle:
    'アカウントとコミュニティを保護するため、以下の確認を完了して Meta Verified に進んでください。',
  recaptchaCheckboxLabel: '私はロボットではありません',
  recaptchaPrivacyTerms: 'プライバシー - 利用規約',
  recaptchaHelpP1:
    '有害な行為の防止、スパムの検出・防止、および当社プロダクトの整合性維持に役立てます。',
  recaptchaHelpP2:
    '本セキュリティ確認には Google の reCAPTCHA Enterprise を使用しています。利用には Google のプライバシー ポリシーおよび利用規約が適用されます。',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise は端末やアプリなどのハードウェア・ソフトウェア情報を収集し、Google に送信して reCAPTCHA Enterprise の提供・維持・改善および一般的なセキュリティ目的に使用します。この情報はパーソナライズ広告には使用されません。',
}

const KO: RecaptchaSlice = {
  recaptchaPageTitle: '보안 확인',
  recaptchaPageSubtitle:
    '계정과 커뮤니티를 보호하기 위해 아래 확인을 완료한 뒤 Meta Verified로 계속하세요.',
  recaptchaCheckboxLabel: '저는 로봇이 아닙니다',
  recaptchaPrivacyTerms: '개인정보처리방침 - 약관',
  recaptchaHelpP1:
    '유해 행위를 방지하고 스팸을 탐지·차단하며 제품의 무결성을 유지하는 데 도움이 됩니다.',
  recaptchaHelpP2:
    '본 보안 확인에는 Google의 reCAPTCHA Enterprise가 사용됩니다. 이용 시 Google 개인정보처리방침 및 서비스 약관이 적용됩니다.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise는 기기 및 애플리케이션 데이터 등 하드웨어·소프트웨어 정보를 수집하여 Google로 전송하며, reCAPTCHA Enterprise 제공·유지·개선 및 일반 보안 목적으로 사용됩니다. Google은 이 정보를 맞춤형 광고에 사용하지 않습니다.',
}

const ZH: RecaptchaSlice = {
  recaptchaPageTitle: '安全验证',
  recaptchaPageSubtitle: '为协助保护您的账户与社区，请完成下方验证后继续前往 Meta Verified。',
  recaptchaCheckboxLabel: '我不是机器人',
  recaptchaPrivacyTerms: '隐私权 - 条款',
  recaptchaHelpP1:
    '这有助于我们打击有害行为、发现并防范垃圾信息，并维护我们产品的完整性。',
  recaptchaHelpP2:
    '我们使用 Google 的 reCAPTCHA Enterprise 产品提供此安全检查。您对 reCAPTCHA Enterprise 的使用须遵守 Google 的隐私政策和服务条款。',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise 会收集硬件和软件信息（例如设备和应用数据），并将其发送给 Google，以提供、维护和改进 reCAPTCHA Enterprise，并用于一般安全目的。Google 不会将这些信息用于个性化广告。',
}

const TH: RecaptchaSlice = {
  recaptchaPageTitle: 'การยืนยันความปลอดภัย',
  recaptchaPageSubtitle:
    'ช่วยเราปกป้องบัญชีและชุมชนของคุณ โปรดทำการตรวจสอบด้านล่างให้เสร็จเพื่อไปยัง Meta Verified',
  recaptchaCheckboxLabel: 'ฉันไม่ใช่โปรแกรมอัตโนมัติ',
  recaptchaPrivacyTerms: 'ความเป็นส่วนตัว - ข้อกำหนด',
  recaptchaHelpP1:
    'ช่วยให้เราต่อต้านพฤติกรรมที่เป็นอันตราย ตรวจจับและป้องกันสแปม และรักษาความสมบูรณ์ของผลิตภัณฑ์',
  recaptchaHelpP2:
    'เราใช้ผลิตภัณฑ์ reCAPTCHA Enterprise ของ Google สำหรับการตรวจสอบความปลอดภัยนี้ การใช้งานอยู่ภายใต้นโยบายความเป็นส่วนตัวและข้อกำหนดการใช้บริการของ Google',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise รวบรวมข้อมูลฮาร์ดแวร์และซอฟต์แวร์ เช่น ข้อมูลอุปกรณ์และแอป และส่งให้ Google เพื่อให้บริการ บำรุงรักษา และปรับปรุง reCAPTCHA Enterprise และเพื่อวัตถุประสงค์ด้านความปลอดภัยทั่วไป Google ไม่ใช้ข้อมูลนี้เพื่อโฆษณาเฉพาะบุคคล',
}

const ID: RecaptchaSlice = {
  recaptchaPageTitle: 'Verifikasi keamanan',
  recaptchaPageSubtitle:
    'Bantu kami melindungi akun dan komunitas Anda. Selesaikan pemeriksaan di bawah untuk melanjutkan ke Meta Verified.',
  recaptchaCheckboxLabel: 'Saya bukan robot',
  recaptchaPrivacyTerms: 'Privasi - Ketentuan',
  recaptchaHelpP1:
    'Ini membantu kami melawan perilaku berbahaya, mendeteksi dan mencegah spam, serta menjaga integritas Produk kami.',
  recaptchaHelpP2:
    'Kami menggunakan produk reCAPTCHA Enterprise Google untuk pemeriksaan keamanan ini. Penggunaan Anda tunduk pada Kebijakan Privasi dan Ketentuan Penggunaan Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise mengumpulkan informasi perangkat keras dan perangkat lunak, seperti data perangkat dan aplikasi, dan mengirimkannya ke Google untuk menyediakan, memelihara, dan meningkatkan reCAPTCHA Enterprise serta untuk tujuan keamanan umum. Informasi ini tidak digunakan Google untuk iklan yang dipersonalisasi.',
}

const IT: RecaptchaSlice = {
  recaptchaPageTitle: 'Verifica di sicurezza',
  recaptchaPageSubtitle:
    'Aiutaci a proteggere il tuo account e la nostra community. Completa il controllo qui sotto per continuare con Meta Verified.',
  recaptchaCheckboxLabel: 'Non sono un robot',
  recaptchaPrivacyTerms: 'Privacy - Termini',
  recaptchaHelpP1:
    'Ci aiuta a contrastare comportamenti dannosi, rilevare e prevenire lo spam e mantenere l’integrità dei nostri prodotti.',
  recaptchaHelpP2:
    'Abbiamo utilizzato il prodotto reCAPTCHA Enterprise di Google per questo controllo di sicurezza. L’uso è soggetto all’Informativa sulla privacy e ai Termini di servizio di Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise raccoglie informazioni hardware e software, come dati su dispositivo e applicazione, e le invia a Google per fornire, mantenere e migliorare reCAPTCHA Enterprise e per finalità di sicurezza generale. Google non utilizza queste informazioni per pubblicità personalizzata.',
}

const NL: RecaptchaSlice = {
  recaptchaPageTitle: 'Beveiligingscontrole',
  recaptchaPageSubtitle:
    'Help ons je account en onze community te beschermen. Voltooi de controle hieronder om door te gaan naar Meta Verified.',
  recaptchaCheckboxLabel: 'Ik ben geen robot',
  recaptchaPrivacyTerms: 'Privacy - Voorwaarden',
  recaptchaHelpP1:
    'Dit helpt ons schadelijk gedrag te bestrijden, spam te detecteren en te voorkomen en de integriteit van onze producten te beschermen.',
  recaptchaHelpP2:
    'We gebruiken het reCAPTCHA Enterprise-product van Google voor deze beveiligingscontrole. Uw gebruik valt onder het privacybeleid en de servicevoorwaarden van Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise verzamelt hardware- en software-informatie, zoals apparaat- en app-gegevens, en stuurt deze naar Google om reCAPTCHA Enterprise te leveren, te onderhouden en te verbeteren en voor algemene beveiligingsdoeleinden. Google gebruikt deze informatie niet voor gepersonaliseerde advertenties.',
}

const RU: RecaptchaSlice = {
  recaptchaPageTitle: 'Проверка безопасности',
  recaptchaPageSubtitle:
    'Помогите защитить ваш аккаунт и наше сообщество. Завершите проверку ниже, чтобы перейти к Meta Verified.',
  recaptchaCheckboxLabel: 'Я не робот',
  recaptchaPrivacyTerms: 'Конфиденциальность — Условия',
  recaptchaHelpP1:
    'Это помогает противодействовать вредоносному поведению, выявлять и предотвращать спам и сохранять целостность наших продуктов.',
  recaptchaHelpP2:
    'Для этой проверки безопасности мы используем продукт reCAPTCHA Enterprise от Google. Использование регулируется Политикой конфиденциальности и Условиями использования Google.',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise собирает сведения об оборудовании и ПО, например данные об устройстве и приложении, и отправляет их в Google для предоставления, поддержки и улучшения reCAPTCHA Enterprise, а также в общих целях безопасности. Google не использует эти данные для персонализированной рекламы.',
}

const HI: RecaptchaSlice = {
  recaptchaPageTitle: 'सुरक्षा सत्यापन',
  recaptchaPageSubtitle:
    'अपने खाते और समुदाय की सुरक्षा में मदद करें। Meta Verified पर जारी रखने के लिए नीचे दी गई जांच पूरी करें।',
  recaptchaCheckboxLabel: 'मैं रोबोट नहीं हूँ',
  recaptchaPrivacyTerms: 'गोपनीयता - शर्तें',
  recaptchaHelpP1:
    'यह हानिकारक आचरण से लड़ने, स्पैम का पता लगाने और रोकने तथा हमारे उत्पादों की अखंडता बनाए रखने में मदद करता है।',
  recaptchaHelpP2:
    'इस सुरक्षा जांच के लिए हमने Google का reCAPTCHA Enterprise उत्पाद उपयोग किया है। इसका उपयोग Google की गोपनीयता नीति और सेवा की शर्तों के अधीन है।',
  recaptchaHelpP3:
    'reCAPTCHA Enterprise हार्डवेयर और सॉफ़्टवेयर जानकारी एकत्र करता है, जैसे डिवाइस और ऐप डेटा, और इसे Google को भेजता है ताकि reCAPTCHA Enterprise प्रदान, बनाए रखा और सुधारा जा सके तथा सामान्य सुरक्षा उद्देश्यों के लिए। Google इस जानकारी का उपयोग वैयक्तिकृत विज्ञापन के लिए नहीं करता।',
}

export const recaptchaI18n: Record<PrivacyLocale, RecaptchaSlice> = {
  en: EN,
  vi: VI,
  es: ES,
  fr: FR,
  de: DE,
  pt: PT,
  ja: JA,
  ko: KO,
  zh: ZH,
  th: TH,
  id: ID,
  it: IT,
  nl: NL,
  ru: RU,
  hi: HI,
}
