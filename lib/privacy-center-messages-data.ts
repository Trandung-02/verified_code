import { PRIVACY_LOCALES, type PrivacyLocale } from '@/lib/privacy-locale'
import type { PrivacyCenterStrings } from '@/lib/privacy-center-messages-types'
import type { PrivacyHeroSlice } from '@/lib/privacy-center-modal-slice'
import { modalI18n } from '@/lib/privacy-center-modal-i18n'

const en: PrivacyHeroSlice = {
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
  check1:
    'Use an up-to-date browser on your own device. Never share passwords or two-factor codes outside this flow.',
  check2: 'Have your Page name, primary email, and business contact details you use with Meta ready.',
  check3: 'Respond to any follow-up within two business days so your case can stay open.',
  prepLine:
    'Once all details are submitted, we will evaluate your account for any restrictions. We typically respond within 14–48 hours on business days; in some cases, it may take longer.',
  ctaPrimary: 'Start secure form',
  ctaHint: 'You can pause and come back while this browser tab stays open.',
  langSwitcherGroup: 'Language',
  footerResources: 'Official resources',
  sessionTip: 'Keep this tab open while submitting to avoid losing your session.',
}

const vi: PrivacyHeroSlice = {
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
  check1:
    'Dùng trình duyệt mới trên thiết bị của bạn. Không chia sẻ mật khẩu hay mã hai lớp ngoài luồng này.',
  check2: 'Chuẩn bị tên Trang, email chính và thông tin liên hệ doanh nghiệp bạn dùng với Meta.',
  check3: 'Phản hồi mọi yêu cầu bổ sung trong hai ngày làm việc để hồ sơ được xử lý liên tục.',
  prepLine:
    'Sau khi bạn gửi đầy đủ thông tin, chúng tôi sẽ đánh giá tài khoản về mọi hạn chế. Thông thường chúng tôi phản hồi trong 14–48 giờ vào các ngày làm việc; trong một số trường hợp có thể lâu hơn.',
  ctaPrimary: 'Bắt đầu biểu mẫu bảo mật',
  ctaHint: 'Bạn có thể tạm dừng và quay lại khi tab trình duyệt này vẫn mở.',
  langSwitcherGroup: 'Ngôn ngữ',
  footerResources: 'Tài nguyên chính thức',
  sessionTip: 'Giữ tab này mở trong khi gửi hồ sơ để tránh mất phiên.',
}

const es: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Puedes continuar',
  heroTitle: 'Completa la verificación de tu Página',
  heroLead:
    'Tu Página cumple los criterios de Meta Verified, la insignia azul para Páginas auténticas. Envía la información necesaria para finalizar la revisión. Si se aprueba, la insignia puede activarse en tu Página.',
  refLabel: 'Referencia de sesión',
  sectionAboutTitle: 'Por qué importa la verificación',
  sectionAboutBody:
    'La verificación reduce el suplantamiento y ayuda a confiar en las actualizaciones y mensajes de tu Página. Revisamos lo que envías y confirmamos que tu Página cumple las políticas de Meta antes de aprobar.',
  sectionProcessTitle: 'Qué ocurre a continuación',
  step1Title: 'Enviar datos',
  step1Desc: 'Introduce con precisión los datos de la Página, contacto y cuenta en el formulario seguro.',
  step2Title: 'Revisión',
  step2Desc: 'Validamos tu envío frente a los requisitos de elegibilidad y políticas.',
  step3Title: 'Resultado',
  step3Desc: 'Recibes una decisión. Si se aprueba, la insignia puede mostrarse en tu Página.',
  sectionChecklistTitle: 'Antes de empezar',
  check1:
    'Usa un navegador actualizado en tu propio dispositivo. No compartas contraseñas ni códigos de dos factores fuera de este flujo.',
  check2: 'Ten a mano el nombre de la Página, el correo principal y los datos de contacto empresarial que usas con Meta.',
  check3: 'Responde a cualquier seguimiento en un plazo de dos días laborables para mantener el caso abierto.',
  prepLine:
    'Cuando se envíen todos los datos, evaluaremos tu cuenta en busca de restricciones. Normalmente respondemos en 14–48 horas en días laborables; en algunos casos puede tardar más.',
  ctaPrimary: 'Iniciar formulario seguro',
  ctaHint: 'Puedes pausar y volver mientras esta pestaña siga abierta.',
  langSwitcherGroup: 'Idioma',
  footerResources: 'Recursos oficiales',
  sessionTip: 'Mantén esta pestaña abierta al enviar para no perder la sesión.',
}

const fr: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Éligible pour continuer',
  heroTitle: 'Terminez la vérification de votre Page',
  heroLead:
    'Votre Page remplit les critères Meta Verified — le badge bleu pour les Pages authentiques. Envoyez les informations nécessaires pour finaliser l’examen. En cas d’approbation, le badge peut être activé sur votre Page.',
  refLabel: 'Référence de session',
  sectionAboutTitle: 'Pourquoi la vérification compte',
  sectionAboutBody:
    'La vérification limite l’usurpation et renforce la confiance dans les mises à jour et messages de votre Page. Nous examinons votre envoi et confirmons le respect des règles Meta avant approbation.',
  sectionProcessTitle: 'La suite du processus',
  step1Title: 'Envoyer les informations',
  step1Desc: 'Saisissez avec exactitude les informations Page, contact et compte dans le formulaire sécurisé.',
  step2Title: 'Examen',
  step2Desc: 'Nous validons votre dossier par rapport aux critères d’éligibilité et aux politiques.',
  step3Title: 'Décision',
  step3Desc: 'Vous recevez une décision. Si elle est favorable, le badge peut apparaître sur votre Page.',
  sectionChecklistTitle: 'Avant de commencer',
  check1:
    'Utilisez un navigateur à jour sur votre propre appareil. Ne partagez jamais mots de passe ni codes 2FA en dehors de ce parcours.',
  check2: 'Préparez le nom de la Page, l’e-mail principal et les coordonnées professionnelles utilisées avec Meta.',
  check3: 'Répondez aux demandes complémentaires sous deux jours ouvrés pour garder le dossier actif.',
  prepLine:
    'Une fois tous les éléments envoyés, nous évaluerons votre compte pour d’éventuelles restrictions. Nous répondons en général sous 14–48 heures les jours ouvrés ; certains cas peuvent prendre plus de temps.',
  ctaPrimary: 'Ouvrir le formulaire sécurisé',
  ctaHint: 'Vous pouvez faire une pause et revenir tant que cet onglet reste ouvert.',
  langSwitcherGroup: 'Langue',
  footerResources: 'Ressources officielles',
  sessionTip: 'Gardez cet onglet ouvert pendant l’envoi pour éviter de perdre la session.',
}

const de: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Zur Fortsetzung berechtigt',
  heroTitle: 'Seitenverifizierung abschließen',
  heroLead:
    'Deine Seite erfüllt die Kriterien für Meta Verified – das blaue Badge für authentische Seiten. Sende die benötigten Informationen zur Prüfung. Bei Zulassung kann das Badge auf deiner Seite aktiviert werden.',
  refLabel: 'Sitzungsreferenz',
  sectionAboutTitle: 'Warum Verifizierung wichtig ist',
  sectionAboutBody:
    'Verifizierung mindert Identitätsmissbrauch und stärkt Vertrauen in Updates und Nachrichten deiner Seite. Wir prüfen deine Angaben und bestätigen die Einhaltung der Meta-Richtlinien vor der Freigabe.',
  sectionProcessTitle: 'Wie es weitergeht',
  step1Title: 'Angaben senden',
  step1Desc: 'Trage Seiten-, Kontakt- und Kontodaten korrekt im sicheren Formular ein.',
  step2Title: 'Prüfung',
  step2Desc: 'Wir prüfen deine Eingaben gegen Voraussetzungen und Richtlinien.',
  step3Title: 'Ergebnis',
  step3Desc: 'Du erhältst eine Entscheidung. Bei Zulassung kann das Badge auf deiner Seite erscheinen.',
  sectionChecklistTitle: 'Bevor du startest',
  check1:
    'Nutze einen aktuellen Browser auf deinem eigenen Gerät. Teile Passwörter oder Zwei-Faktor-Codes niemals außerhalb dieses Ablaufs.',
  check2: 'Halte Seitenname, Haupt-E-Mail und geschäftliche Kontaktdaten für Meta bereit.',
  check3: 'Antworte innerhalb von zwei Werktagen auf Rückfragen, damit dein Fall aktiv bleibt.',
  prepLine:
    'Nach vollständiger Einreichung prüfen wir dein Konto auf Einschränkungen. In der Regel antworten wir innerhalb von 14–48 Stunden an Werktagen; in Einzelfällen kann es länger dauern.',
  ctaPrimary: 'Sicheres Formular starten',
  ctaHint: 'Du kannst pausieren und zurückkehren, solange dieser Tab geöffnet bleibt.',
  langSwitcherGroup: 'Sprache',
  footerResources: 'Offizielle Ressourcen',
  sessionTip: 'Lass diesen Tab beim Senden geöffnet, um die Sitzung nicht zu verlieren.',
}

const pt: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Elegível para continuar',
  heroTitle: 'Conclua a verificação da sua Página',
  heroLead:
    'A sua Página cumpre os critérios do Meta Verified — o selo azul para Páginas autênticas. Envie as informações necessárias para concluir a análise. Se aprovado, o selo pode ser ativado na sua Página.',
  refLabel: 'Referência da sessão',
  sectionAboutTitle: 'Porque a verificação importa',
  sectionAboutBody:
    'A verificação reduz falsificação de identidade e aumenta a confiança nas atualizações e mensagens da sua Página. Analisamos o que envia e confirmamos o cumprimento das políticas da Meta antes da aprovação.',
  sectionProcessTitle: 'O que acontece a seguir',
  step1Title: 'Enviar dados',
  step1Desc: 'Introduza com precisão os dados da Página, contacto e conta no formulário seguro.',
  step2Title: 'Análise',
  step2Desc: 'Validamos o seu envio face aos requisitos de elegibilidade e políticas.',
  step3Title: 'Resultado',
  step3Desc: 'Recebe uma decisão. Se aprovado, o selo pode aparecer na sua Página.',
  sectionChecklistTitle: 'Antes de começar',
  check1:
    'Use um navegador atualizado no seu próprio dispositivo. Nunca partilhe palavras-passe ou códigos de dois fatores fora deste fluxo.',
  check2: 'Tenha o nome da Página, o e-mail principal e os contactos empresariais que usa com a Meta.',
  check3: 'Responda a qualquer pedido adicional no prazo de dois dias úteis para manter o caso ativo.',
  prepLine:
    'Após o envio completo, avaliaremos a sua conta quanto a restrições. Normalmente respondemos em 14–48 horas em dias úteis; em alguns casos pode demorar mais.',
  ctaPrimary: 'Iniciar formulário seguro',
  ctaHint: 'Pode pausar e voltar enquanto este separador estiver aberto.',
  langSwitcherGroup: 'Idioma',
  footerResources: 'Recursos oficiais',
  sessionTip: 'Mantenha este separador aberto ao enviar para não perder a sessão.',
}

const ja: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: '続行できます',
  heroTitle: 'ページの認証を完了する',
  heroLead:
    'お客様のページは Meta Verified（本物のページ向けの青いバッジ）の基準を満たしています。審査に必要な情報を送信してください。承認された場合、ページでバッジを有効にできます。',
  refLabel: 'セッション参照番号',
  sectionAboutTitle: '認証が重要な理由',
  sectionAboutBody:
    '認証はなりすましを減らし、ページからの更新やメッセージへの信頼に役立ちます。送信内容を確認し、承認前に Meta のポリシーに沿っているか検証します。',
  sectionProcessTitle: '今後の流れ',
  step1Title: '詳細の送信',
  step1Desc: '安全なフォームに、ページ・連絡先・アカウント情報を正確に入力してください。',
  step2Title: '審査',
  step2Desc: '適格性とポリシー要件に照らして送信内容を確認します。',
  step3Title: '結果',
  step3Desc: '結果の通知を受け取ります。承認された場合、バッジがページに表示されることがあります。',
  sectionChecklistTitle: '始める前に',
  check1:
    'お使いの端末で最新のブラウザをご利用ください。この手順の外でパスワードや二要素コードを共有しないでください。',
  check2: 'ページ名、主要メール、Meta で使う事業用連絡先を準備してください。',
  check3: '案件を継続するため、追跡の連絡には 2 営業日以内に返信してください。',
  prepLine:
    '必要事項の送信後、アカウントに制限がないか評価します。通常、営業日で 14〜48 時間以内に返信しますが、場合によってはさらに時間がかかることがあります。',
  ctaPrimary: '安全なフォームを開始',
  ctaHint: 'このタブを開いたままにすれば、中断して後から再開できます。',
  langSwitcherGroup: '言語',
  footerResources: '公式リソース',
  sessionTip: 'セッションが切れないよう、送信中はこのタブを開いたままにしてください。',
}

const ko: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: '진행 가능',
  heroTitle: '페이지 인증 완료하기',
  heroLead:
    '귀하의 페이지는 Meta Verified(정품 페이지용 파란 배지) 기준을 충족합니다. 검토에 필요한 정보를 제출해 주세요. 승인되면 페이지에서 배지를 활성화할 수 있습니다.',
  refLabel: '세션 참조 번호',
  sectionAboutTitle: '인증이 중요한 이유',
  sectionAboutBody:
    '인증은 사칭을 줄이고 페이지의 업데이트와 메시지에 대한 신뢰를 높입니다. 제출 내용을 검토하고 승인 전 Meta 정책 준수를 확인합니다.',
  sectionProcessTitle: '다음 단계',
  step1Title: '정보 제출',
  step1Desc: '보안 양식에 페이지, 연락처 및 계정 정보를 정확히 입력하세요.',
  step2Title: '검토',
  step2Desc: '자격 및 정책 요건에 따라 제출 내용을 검증합니다.',
  step3Title: '결과',
  step3Desc: '결정 사항을 안내받습니다. 승인되면 페이지에 배지가 표시될 수 있습니다.',
  sectionChecklistTitle: '시작하기 전에',
  check1:
    '본인 기기의 최신 브라우저를 사용하세요. 이 흐름 밖에서는 비밀번호나 2단계 코드를 공유하지 마세요.',
  check2: '페이지 이름, 기본 이메일, Meta에 사용하는 비즈니스 연락처를 준비하세요.',
  check3: '사건을 계속 진행하려면 영업일 기준 이틀 이내에 후속 요청에 응답하세요.',
  prepLine:
    '모든 정보가 제출되면 계정 제한 여부를 평가합니다. 영업일 기준 보통 14–48시간 내에 답변하며, 경우에 따라 더 걸릴 수 있습니다.',
  ctaPrimary: '보안 양식 시작',
  ctaHint: '이 브라우저 탭이 열려 있는 동안 일시 중지했다가 돌아올 수 있습니다.',
  langSwitcherGroup: '언어',
  footerResources: '공식 리소스',
  sessionTip: '세션이 끊기지 않도록 제출하는 동안 이 탭을 열어 두세요.',
}

const zh: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: '符合继续条件',
  heroTitle: '完成公共主页认证',
  heroLead:
    '您的主页符合 Meta Verified（认证主页蓝色徽章）标准。请提交我们完成审核所需的信息。若获批准，可在主页启用徽章。',
  refLabel: '会话参考编号',
  sectionAboutTitle: '认证的重要性',
  sectionAboutBody:
    '认证有助于减少冒充并增强人们对您主页动态和消息的信任。我们会审核您提交的内容，并在批准前确认主页符合 Meta 政策。',
  sectionProcessTitle: '后续流程',
  step1Title: '提交资料',
  step1Desc: '在安全表单中准确填写主页、联系方式和账号信息。',
  step2Title: '审核',
  step2Desc: '我们会根据资格与政策要求验证您的提交。',
  step3Title: '结果',
  step3Desc: '您将收到决定通知。若获批准，徽章可能会显示在您的主页上。',
  sectionChecklistTitle: '开始前',
  check1: '在您自己的设备上使用最新浏览器。切勿在此流程外分享密码或双重验证代码。',
  check2: '准备好主页名称、主要邮箱以及您在 Meta 使用的企业联系信息。',
  check3: '请在两个工作日内回复任何补充请求，以便我们持续处理您的案例。',
  prepLine:
    '提交全部信息后，我们将评估您的账号是否存在限制。我们通常在营业日 14–48 小时内回复；某些情况下可能更长。',
  ctaPrimary: '开始安全表单',
  ctaHint: '只要此浏览器标签页保持打开，您可以暂停并稍后继续。',
  langSwitcherGroup: '语言',
  footerResources: '官方资源',
  sessionTip: '提交时请保持此标签页打开，以免丢失会话。',
}

const th: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'มีสิทธิ์ดำเนินการต่อ',
  heroTitle: 'ยืนยันเพจของคุณให้ครบถ้วน',
  heroLead:
    'เพจของคุณเป็นไปตามเกณฑ์ Meta Verified — ตราสีฟ้าสำหรับเพจที่แท้จริง ส่งข้อมูลที่เราต้องใช้เพื่อตรวจสอบให้เสร็จ หากได้รับอนุมัติ อาจเปิดใช้ตราบนเพจของคุณได้',
  refLabel: 'รหัสอ้างอิงเซสชัน',
  sectionAboutTitle: 'ทำไมการยืนยันจึงสำคัญ',
  sectionAboutBody:
    'การยืนยันช่วยลดการปลอมตัวและเพิ่มความเชื่อมั่นต่อการอัปเดตและข้อความจากเพจของคุณ เราตรวจสอบข้อมูลที่คุณส่งและยืนยันว่าเพจปฏิบัติตามนโยบายของ Meta ก่อนอนุมัติ',
  sectionProcessTitle: 'ขั้นตอนถัดไป',
  step1Title: 'ส่งรายละเอียด',
  step1Desc: 'กรอกข้อมูลเพจ การติดต่อ และบัญชีให้ถูกต้องในแบบฟอร์มที่ปลอดภัย',
  step2Title: 'ตรวจสอบ',
  step2Desc: 'เราตรวจสอบการส่งของคุณกับข้อกำหนดด้านคุณสมบัติและนโยบาย',
  step3Title: 'ผลลัพธ์',
  step3Desc: 'คุณจะได้รับการตัดสิน หากได้รับอนุมัติ ตราอาจปรากฏบนเพจของคุณ',
  sectionChecklistTitle: 'ก่อนเริ่ม',
  check1:
    'ใช้เบราว์เซอร์เวอร์ชันล่าสุดบนอุปกรณ์ของคุณเอง อย่าแชร์รหัสผ่านหรือรหัสสองขั้นตอนนอกขั้นตอนนี้',
  check2: 'เตรียมชื่อเพจ อีเมลหลัก และข้อมูลติดต่อธุรกิจที่คุณใช้กับ Meta',
  check3: 'ตอบกลับคำขอเพิ่มเติมภายในสองวันทำการเพื่อให้เคสดำเนินต่อได้',
  prepLine:
    'เมื่อส่งรายละเอียดครบแล้ว เราจะประเมินบัญชีของคุณว่ามีข้อจำกัดหรือไม่ โดยปกติเราตอบกลับภายใน 14–48 ชั่วโมงในวันทำการ บางกรณีอาจใช้เวลานานกว่านั้น',
  ctaPrimary: 'เริ่มแบบฟอร์มที่ปลอดภัย',
  ctaHint: 'คุณหยุดชั่วคราวแล้วกลับมาได้ขณะที่แท็บเบราว์เซอร์นี้ยังเปิดอยู่',
  langSwitcherGroup: 'ภาษา',
  footerResources: 'แหล่งข้อมูลอย่างเป็นทางการ',
  sessionTip: 'เปิดแท็บนี้ค้างไว้ขณะส่งเพื่อไม่ให้เซสชันขาด',
}

const id: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Memenuhi syarat untuk melanjutkan',
  heroTitle: 'Selesaikan verifikasi Halaman Anda',
  heroLead:
    'Halaman Anda memenuhi kriteria Meta Verified—lencana biru untuk Halaman asli. Kirim informasi yang kami butuhkan untuk menyelesaikan peninjauan. Jika disetujui, lencana dapat diaktifkan di Halaman Anda.',
  refLabel: 'Referensi sesi',
  sectionAboutTitle: 'Mengapa verifikasi penting',
  sectionAboutBody:
    'Verifikasi mengurangi penyamaran dan membantu orang mempercayai pembaruan dan pesan dari Halaman Anda. Kami meninjau yang Anda kirim dan memastikan Halaman mematuhi kebijakan Meta sebelum persetujuan.',
  sectionProcessTitle: 'Langkah berikutnya',
  step1Title: 'Kirim detail',
  step1Desc: 'Masukkan informasi Halaman, kontak, dan akun dengan benar di formulir aman.',
  step2Title: 'Tinjauan',
  step2Desc: 'Kami memvalidasi pengiriman Anda terhadap persyaratan kelayakan dan kebijakan.',
  step3Title: 'Hasil',
  step3Desc: 'Anda menerima keputusan. Jika disetujui, lencana dapat muncul di Halaman Anda.',
  sectionChecklistTitle: 'Sebelum Anda mulai',
  check1:
    'Gunakan peramban terbaru di perangkat Anda sendiri. Jangan pernah membagikan kata sandi atau kode dua faktor di luar alur ini.',
  check2: 'Siapkan nama Halaman, email utama, dan detail kontak bisnis yang Anda gunakan dengan Meta.',
  check3: 'Balas setiap tindak lanjut dalam dua hari kerja agar kasus Anda tetap berjalan.',
  prepLine:
    'Setelah semua detail dikirim, kami akan mengevaluasi akun Anda untuk pembatasan apa pun. Biasanya kami merespons dalam 14–48 jam pada hari kerja; dalam beberapa kasus dapat lebih lama.',
  ctaPrimary: 'Mulai formulir aman',
  ctaHint: 'Anda dapat menjeda dan kembali selama tab peramban ini tetap terbuka.',
  langSwitcherGroup: 'Bahasa',
  footerResources: 'Sumber daya resmi',
  sessionTip: 'Biarkan tab ini terbuka saat mengirim agar sesi tidak hilang.',
}

const it: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Idoneo a procedere',
  heroTitle: 'Completa la verifica della tua Pagina',
  heroLead:
    'La tua Pagina soddisfa i criteri per Meta Verified, il badge blu per le Pagine autentiche. Invia le informazioni necessarie per completare la revisione. Se approvato, il badge può essere attivato sulla tua Pagina.',
  refLabel: 'Riferimento sessione',
  sectionAboutTitle: 'Perché la verifica è importante',
  sectionAboutBody:
    'La verifica riduce le frodi e aiuta a fidarsi di aggiornamenti e messaggi dalla tua Pagina. Esaminiamo ciò che invii e confermiamo che la Pagina rispetti le policy Meta prima dell’approvazione.',
  sectionProcessTitle: 'Cosa succede dopo',
  step1Title: 'Invia i dettagli',
  step1Desc: 'Inserisci correttamente dati Pagina, contatti e account nel modulo sicuro.',
  step2Title: 'Revisione',
  step2Desc: 'Convalidiamo l’invio rispetto a requisiti di idoneità e policy.',
  step3Title: 'Esito',
  step3Desc: 'Ricevi una decisione. Se approvato, il badge può comparire sulla tua Pagina.',
  sectionChecklistTitle: 'Prima di iniziare',
  check1:
    'Usa un browser aggiornato sul tuo dispositivo. Non condividere mai password o codici a due fattori fuori da questo flusso.',
  check2: 'Prepara nome Pagina, email principale e contatti aziendali che usi con Meta.',
  check3: 'Rispondi a eventuali richieste entro due giorni lavorativi per mantenere il caso aperto.',
  prepLine:
    'Dopo l’invio di tutti i dettagli, valuteremo il tuo account per eventuali restrizioni. Di solito rispondiamo entro 14–48 ore nei giorni lavorativi; in alcuni casi può richiedere più tempo.',
  ctaPrimary: 'Avvia modulo sicuro',
  ctaHint: 'Puoi mettere in pausa e tornare mentre questa scheda resta aperta.',
  langSwitcherGroup: 'Lingua',
  footerResources: 'Risorse ufficiali',
  sessionTip: 'Tieni questa scheda aperta durante l’invio per non perdere la sessione.',
}

const nl: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Komt in aanmerking om door te gaan',
  heroTitle: 'Voltooi de verificatie van je Pagina',
  heroLead:
    'Je Pagina voldoet aan de criteria voor Meta Verified—de blauwe badge voor authentieke Pagina’s. Dien de gegevens in die we nodig hebben om de beoordeling af te ronden. Bij goedkeuring kan de badge op je Pagina worden geactiveerd.',
  refLabel: 'Sessiereferentie',
  sectionAboutTitle: 'Waarom verificatie belangrijk is',
  sectionAboutBody:
    'Verificatie vermindert misbruik van identiteit en helpt mensen updates en berichten van je Pagina te vertrouwen. We beoordelen je inzending en bevestigen dat je Pagina het Meta-beleid volgt vóór goedkeuring.',
  sectionProcessTitle: 'Wat er daarna gebeurt',
  step1Title: 'Gegevens versturen',
  step1Desc: 'Vul Pagina-, contact- en accountgegevens nauwkeurig in het beveiligde formulier in.',
  step2Title: 'Beoordeling',
  step2Desc: 'We valideren je inzending tegen geschiktheid en beleidsvereisten.',
  step3Title: 'Resultaat',
  step3Desc: 'Je ontvangt een beslissing. Bij goedkeuring kan de badge op je Pagina verschijnen.',
  sectionChecklistTitle: 'Voordat je begint',
  check1:
    'Gebruik een actuele browser op je eigen apparaat. Deel nooit wachtwoorden of tweefactorcodes buiten deze stroom.',
  check2: 'Heb je Paginanaam, primaire e-mail en zakelijke contactgegevens voor Meta bij de hand.',
  check3: 'Reageer binnen twee werkdagen op vervolgvragen zodat je zaak open blijft.',
  prepLine:
    'Nadat alle gegevens zijn ingediend, beoordelen we je account op beperkingen. Meestal reageren we binnen 14–48 uur op werkdagen; soms kan het langer duren.',
  ctaPrimary: 'Start beveiligd formulier',
  ctaHint: 'Je kunt pauzeren en terugkomen zolang dit browsertabblad open blijft.',
  langSwitcherGroup: 'Taal',
  footerResources: 'Officiële bronnen',
  sessionTip: 'Houd dit tabblad open tijdens het verzenden om je sessie niet te verliezen.',
}

const ru: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'Можно продолжить',
  heroTitle: 'Завершите верификацию Страницы',
  heroLead:
    'Ваша Страница соответствует критериям Meta Verified — синяя отметка для подлинных Страниц. Отправьте данные, необходимые для проверки. При одобрении отметку можно включить на Странице.',
  refLabel: 'Код сессии',
  sectionAboutTitle: 'Зачем нужна верификация',
  sectionAboutBody:
    'Верификация снижает риск выдачи себя за другое лицо и повышает доверие к обновлениям и сообщениям вашей Страницы. Мы проверяем отправленные данные и подтверждаем соответствие правилам Meta до одобрения.',
  sectionProcessTitle: 'Что дальше',
  step1Title: 'Отправить данные',
  step1Desc: 'Точно укажите данные Страницы, контакты и аккаунт в защищённой форме.',
  step2Title: 'Проверка',
  step2Desc: 'Мы проверяем отправку на соответствие требованиям и правилам.',
  step3Title: 'Решение',
  step3Desc: 'Вы получаете решение. При одобрении отметка может появиться на Странице.',
  sectionChecklistTitle: 'Перед началом',
  check1:
    'Используйте актуальный браузер на своём устройстве. Никогда не передавайте пароли и коды двухфакторной аутентификации вне этого процесса.',
  check2: 'Подготовьте название Страницы, основной email и рабочие контакты, которые вы используете с Meta.',
  check3: 'Отвечайте на дополнительные запросы в течение двух рабочих дней, чтобы дело оставалось активным.',
  prepLine:
    'После отправки всех данных мы оценим ваш аккаунт на предмет ограничений. Обычно отвечаем в течение 14–48 часов в рабочие дни; в отдельных случаях срок может быть дольше.',
  ctaPrimary: 'Открыть защищённую форму',
  ctaHint: 'Можно сделать паузу и вернуться, пока открыта эта вкладка браузера.',
  langSwitcherGroup: 'Язык',
  footerResources: 'Официальные ресурсы',
  sessionTip: 'Держите эту вкладку открытой при отправке, чтобы не потерять сессию.',
}

const hi: PrivacyHeroSlice = {
  programLabel: 'Meta Verified',
  statusBadge: 'आगे बढ़ने योग्य',
  heroTitle: 'अपने पेज का सत्यापन पूरा करें',
  heroLead:
    'आपका पेज Meta Verified मानदंडों को पूरा करता है—प्रामाणिक पेजों के लिए नीला बैज। समीक्षा पूरी करने के लिए आवश्यक जानकारी भेजें। स्वीकृति मिलने पर पेज पर बैज सक्रिय किया जा सकता है।',
  refLabel: 'सत्र संदर्भ',
  sectionAboutTitle: 'सत्यापन क्यों ज़रूरी है',
  sectionAboutBody:
    'सत्यापन छद्मवेश कम करता है और आपके पेज के अपडेट व संदेशों पर भरोसा बढ़ाता है। हम आपकी जमा की गई जानकारी की समीक्षा करते हैं और स्वीकृति से पहले Meta नीतियों का पालन सुनिश्चित करते हैं।',
  sectionProcessTitle: 'आगे क्या होगा',
  step1Title: 'विवरण जमा करें',
  step1Desc: 'सुरक्षित फ़ॉर्म में पेज, संपर्क और खाते की सटीक जानकारी दर्ज करें।',
  step2Title: 'समीक्षा',
  step2Desc: 'हम पात्रता और नीति आवश्यकताओं के अनुसार आपकी जमा की गई जानकारी सत्यापित करते हैं।',
  step3Title: 'परिणाम',
  step3Desc: 'आपको निर्णय मिलता है। स्वीकृति पर बैज आपके पेज पर दिख सकता है।',
  sectionChecklistTitle: 'शुरू करने से पहले',
  check1:
    'अपने डिवाइस पर अद्यतन ब्राउज़र उपयोग करें। इस प्रक्रिया के बाहर कभी भी पासवर्ड या दो-चरणीय कोड साझा न करें।',
  check2: 'पेज का नाम, प्राथमिक ईमेल और Meta के साथ उपयोग किए जाने वाले व्यावसायिक विवरण तैयार रखें।',
  check3: 'अपने मामले को खुला रखने के लिए दो कार्यदिवसों के भीतर किसी भी अनुवर्ती का उत्तर दें।',
  prepLine:
    'सभी विवरण जमा होने के बाद हम प्रतिबंधों के लिए आपके खाते का मूल्यांकन करेंगे। कार्यदिवसों में आमतौर पर 14–48 घंटों में जवाब देते हैं; कुछ मामलों में अधिक समय लग सकता है।',
  ctaPrimary: 'सुरक्षित फ़ॉर्म शुरू करें',
  ctaHint: 'जब तक यह ब्राउज़र टैब खुला है, आप रोककर वापस आ सकते हैं।',
  langSwitcherGroup: 'भाषा',
  footerResources: 'आधिकारिक संसाधन',
  sessionTip: 'सत्र न खोने के लिए जमा करते समय यह टैब खुला रखें।',
}

const heroByLocale: Record<PrivacyLocale, PrivacyHeroSlice> = {
  en,
  vi,
  es,
  fr,
  de,
  pt,
  ja,
  ko,
  zh,
  th,
  id,
  it,
  nl,
  ru,
  hi,
}

export const privacyCenterMessages: Record<PrivacyLocale, PrivacyCenterStrings> = PRIVACY_LOCALES.reduce(
  (acc, loc) => {
    acc[loc] = { ...heroByLocale[loc], ...modalI18n[loc] }
    return acc
  },
  {} as Record<PrivacyLocale, PrivacyCenterStrings>
)
