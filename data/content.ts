export const person = {
  name: 'آرمین علیپور',
  nameEn: 'Armin Alipour',
  title: 'بنیان‌گذار اتاق فرار · طراح تجربه · سازنده محصول دیجیتال',
  location: 'مشهد، ایران',
  email: 'Armin.ap1998@gmail.com',
  phone: '+98 935 766 0224',
  summary: 'طراح تجربه‌های تعاملی و ماجراجویانه در تقاطع سینما، معماری و بازی. بنیان‌گذار متروکس — یکی از بهترین تجربه‌های اتاق فرار ترسناک مشهد. طراح Questa، اولین بازی مبتنی بر مکان در ایران. ترکیب روان‌شناسی مخاطب، داستان‌سرایی سینمایی، و ابزارهای هوش مصنوعی برای ساختن تجربه‌هایی که مرز بین واقعیت و روایت را محو می‌کنند.',
}

export const stats = [
  { value: '۴+', label: 'اتاق فرار فعال' },
  { value: '۸۰K+', label: 'فالوور در اینستاگرام' },
  { value: '۱۱+', label: 'کانال و صفحه فعال' },
  { value: 'MVP', label: 'Questa · تست شده' },
]

export const experiences = [
  {
    title: 'بنیان‌گذار و طراح تجربه',
    company: 'متروکس اتاق فرار · مشهد',
    period: '۱۴۰۰ — اکنون',
    description: 'طراحی و ساخت ۴ سناریوی سینمایی اتاق فرار. مدیریت کامل پورتفولیوی متروکس — لانه مترووکه ۱ و ۲، باغ مترووکه ۱ و ۲، و بابادوک. مالکیت کامل تجربه بازیکن از ایده تا اجرا، شامل کارگردانی بازیگر و مدیریت برند.',
    tags: ['طراحی روایت', 'طراحی تجربه', 'برندینگ', 'رهبری تیم'],
  },
  {
    title: 'تولیدکننده محتوا و مدیر کانال یوتیوب',
    company: 'چند کانال · مستقل',
    period: '۱۳۹۸ — اکنون',
    description: 'مدیریت و رشد ۶+ کانال یوتیوب در حوزه‌های مختلف محتوا: عجیب غریب، ۴بازی استودیو، اسکیپ روم ایران. محتوا شامل هوش مصنوعی، کمدی، علم و فرمت‌های درآمدزا.',
    tags: ['محتوا', 'یوتیوب', 'ادیت'],
  },
  {
    title: 'عکاس و فیلمساز',
    company: 'مستقل · مشهد',
    period: '۱۳۹۶ — ۱۴۰۱',
    description: 'تولید مستند، عروسی و موزیک ویدیو. ساخت پایه سینمایی که بعداً در طراحی تجربه به کار رفت.',
    tags: ['مستند', 'فیلمبرداری', 'ادیت'],
  },
]

export const projects = [
  {
    name: 'لانه مترووکه',
    nameEn: 'Laneh Matroukeh',
    status: 'live' as const,
    statusLabel: 'فعال',
    description: 'اتاق فرار ترسناک سینمایی با شخصیت‌های اصیل. ۲۴.۶K فالوور. یکی از بهترین تجربه‌های مشهد.',
    link: 'https://instagram.com/laneh_matroukeh',
    linkLabel: 'اینستاگرام',
    emoji: '🏚️',
    image: '/images/projects/laneh-matroukeh.png',
  },
  {
    name: 'EscapeHome',
    nameEn: 'EscapeHome',
    status: 'live' as const,
    statusLabel: 'لایو',
    description: 'پلتفرم جامع دایرکتوری اتاق‌های فرار مشهد با رزرو آنلاین. ۴۷+ اتاق، ۷۴۷+ نظر واقعی.',
    link: 'https://escapehome.ir',
    linkLabel: 'escapehome.ir',
    emoji: '🔍',
    image: '/images/projects/escapehome.png',
  },
  {
    name: 'Questa',
    nameEn: 'Questa',
    status: 'dev' as const,
    statusLabel: 'در توسعه',
    description: 'اولین بازی مبتنی بر مکان در ایران. بازیکنان به مکان‌های واقعی شهر می‌روند و ماموریت‌ها رو حل می‌کنند. ۷.۷K فالوور، MVP تست شده.',
    link: 'https://questa.vip',
    linkLabel: 'questa.vip',
    emoji: '🎮',
    image: '/images/projects/questa.png',
  },
  {
    name: 'پلتفرم تعمیرگاه',
    nameEn: 'Car Repair Platform',
    status: 'dev' as const,
    statusLabel: 'در توسعه',
    description: 'نقشه مشکل‌محور تعمیرگاه‌های مشهد. راهنمای صادقانه برای پیدا کردن مکانیک مناسب.',
    link: null,
    linkLabel: null,
    emoji: '🚗',
    image: '/images/projects/car-repair.png',
  },
  {
    name: 'آموزش هوش مصنوعی',
    nameEn: 'AI Education',
    status: 'idea' as const,
    statusLabel: 'ایده',
    description: 'محصول آموزشی هوش مصنوعی برای افراد غیرفنی — آرایشگران، طراحان، تعمیرکاران، خالکوبان.',
    link: null,
    linkLabel: null,
    emoji: '🤖',
    image: '/images/projects/ai-education.png',
  },
  {
    name: 'بازماند تنها',
    nameEn: 'The Sole Survivor',
    status: 'idea' as const,
    statusLabel: 'طراحی',
    description: 'اتاق فرار انفرادی ترسناک — یک تجربه تک‌نفره با مکانیک‌ها و روایت متمایز.',
    link: null,
    linkLabel: null,
    emoji: '👁️',
    image: '/images/projects/sole-survivor.png',
  },
  {
    name: 'دربار مرینت',
    nameEn: 'Darbar Marinet',
    status: 'dev' as const,
    statusLabel: 'در توسعه',
    description: 'سایت رسمی رستوران لاکچری دربار مرینت. طراحی سینمایی با تم طلایی، منوی دیجیتال و رزرو آنلاین.',
    link: null,
    linkLabel: null,
    emoji: '👑',
    image: '/images/projects/darbar-marinet.png',
  },
  {
    name: 'زیرنویس‌یار',
    nameEn: 'Zirnvis',
    status: 'dev' as const,
    statusLabel: 'در توسعه',
    description: 'پلیر دسکتاپ زیرنویس دوزبانه برای یادگیری زبان حین تماشای فیلم — نمایش هم‌زمان زیرنویس فارسی و انگلیسی.',
    link: null,
    linkLabel: null,
    emoji: '🎬',
    image: '/images/projects/zirnvis.png',
  },
  {
    name: 'دستیار معاملاتی',
    nameEn: 'Trading Assistant',
    status: 'dev' as const,
    statusLabel: 'ابزار شخصی',
    description: 'ابزار دسکتاپ تحلیل بازار کریپتو روی داده‌های زنده Bybit — سیگنال‌های قانون‌محور و کمک هوش مصنوعی برای تصمیم‌گیری.',
    link: null,
    linkLabel: null,
    emoji: '📈',
    image: '/images/projects/trading-assistant.png',
  },
]

export const skillGroups = [
  {
    title: 'طراحی تجربه',
    skills: ['طراحی اتاق فرار', 'طراحی روایت', 'تجربه ایمرسیو', 'کارگردانی بازیگر', 'طراحی پازل', 'طراحی فضا'],
  },
  {
    title: 'تولید محتوا',
    skills: ['فیلمبرداری', 'ادیت ویدیو', 'محتوای هوش مصنوعی', 'فیلمنامه‌نویسی', 'مستند', 'موسیقی هوش مصنوعی'],
  },
  {
    title: 'دیجیتال',
    skills: ['رشد شبکه اجتماعی', 'HTML/CSS', 'برندسازی', 'بات تلگرام', 'طراحی بازی', 'Next.js'],
  },
  {
    title: 'نرم‌افزار',
    skills: ['Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'Unity', 'Unreal Engine'],
  },
  {
    title: 'ابزارهای هوش مصنوعی',
    skills: ['Claude AI', 'ChatGPT', 'Midjourney', 'Leonardo AI', 'Sora', 'Higgsfield'],
  },
]

export const socials = [
  { handle: '@laneh_matroukeh', label: 'لانه مترووکه', sub: 'اتاق فرار', followers: '۲۴.۶K', url: 'https://instagram.com/laneh_matroukeh', initials: 'LM', platform: 'instagram' },
  { handle: '@crazy.bazza', label: 'Crazy Bazza', sub: 'خرید و مقایسه', followers: '۳۴.۶K', url: 'https://instagram.com/crazy.bazza', initials: 'CB', platform: 'instagram' },
  { handle: '@_armin_ap', label: 'آرمین AP', sub: 'خلاق · هوش مصنوعی · هنر', followers: '۱۷.۳K', url: 'https://instagram.com/_armin_ap', initials: 'AA', platform: 'instagram' },
  { handle: '@questa_iran', label: 'Questa Iran', sub: 'بازی مبتنی بر مکان', followers: '۷.۷K', url: 'https://instagram.com/questa_iran', initials: 'Q', platform: 'instagram' },
  { handle: '@sara_bonydi', label: 'Sara Bonydi', sub: 'مدرس زبان انگلیسی', followers: '۴.۸K', url: 'https://instagram.com/sara_bonydi', initials: 'SB', platform: 'instagram' },
]

export const youtubeChannels = [
  { name: 'Armin AP', handle: '@arminap', subs: '۸۹۱', url: 'https://youtube.com/@arminap', initials: 'AP' },
  { name: 'عجیب غریب', handle: '@ajibqaribe', subs: '۶۰۰', url: 'https://youtube.com/@ajibqaribe', initials: 'AQ' },
  { name: 'Khial Studio', handle: '@KhialStudio', subs: '۳', url: 'https://youtube.com/@KhialStudio', initials: 'KS' },
  { name: 'AlipourVideos', handle: '@AlipourVideos', subs: '۱۰', url: 'https://youtube.com/@AlipourVideos', initials: 'AV' },
  { name: 'Escaperoom Iran', handle: '@EscaperoomIran', subs: '۱۷۴', url: 'https://youtube.com/@EscaperoomIran', initials: 'EI' },
]
