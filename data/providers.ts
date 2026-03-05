export type ProviderCategory =
  | "top"
  | "popular"
  | "budget"
  | "premium";

export type FeatureTag =
  | "4k"
  | "sport"
  | "vod"
  | "adult"
  | "archive"
  | "multiscreen"
  | "cheap"
  | "many-channels";

export interface Provider {
  slug: string;
  name: string;
  position: number;
  logoEmoji: string;
  rating: number;
  reviewsCount: number;
  channelsCount: string;
  trialInfo: string;
  monthlyFromUsd: number;
  category: ProviderCategory;
  tags: FeatureTag[];
  shortDescription: string;
  pros: string[];
  cons: string[];
  websiteUrl?: string;
  archiveDaysApprox?: number;
  paymentsNote?: string;
}

export const providers: Provider[] = [
  {
    slug: "tv-team",
    name: "TV Team",
    position: 2,
    logoEmoji: "🏆",
    rating: 5.0,
    reviewsCount: 7,
    channelsCount: "2400+",
    trialInfo: "3 дня теста",
    monthlyFromUsd: 1.2,
    category: "top",
    tags: ["4k", "sport", "archive", "multiscreen", "many-channels"],
    shortDescription:
      "Стабильный российский IPTV-провайдер с огромным количеством каналов и поддержкой 4K, хорош для семейного просмотра и спорта.",
    pros: [
      "Собственная серверная инфраструктура в разных странах",
      "Отдельные пакеты для спорта и 18+",
      "Поддержка Smart TV, приставок и мобильных приложений"
    ],
    cons: ["Интерфейс личного кабинета довольно простой по дизайну"],
    websiteUrl: "https://tv.team/116926",
    archiveDaysApprox: 5,
    paymentsNote: "Банковские карты, возможно криптовалюта"
  },
  {
    slug: "all-tv",
    name: "All TV",
    position: 4,
    logoEmoji: "🌍",
    rating: 5.0,
    reviewsCount: 4,
    channelsCount: "1300+",
    trialInfo: "7 дней теста",
    monthlyFromUsd: 1.2,
    category: "top",
    tags: ["sport", "archive", "multiscreen"],
    shortDescription:
      "Сервис с сильным упором на российские и региональные каналы, удобен как «основное» ТВ для дома.",
    pros: [
      "Много федеральных и региональных каналов",
      "Длинный тестовый период на 7 дней",
      "Удобная разбивка по странам и жанрам"
    ],
    cons: ["Интерфейс сайта перегружен информацией для новых пользователей"],
    websiteUrl: "http://alltv.club/p-67716",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, электронные платежи"
  },
  {
    slug: "sharavoz",
    name: "Sharavoz TV",
    position: 5,
    logoEmoji: "💥",
    rating: 5.0,
    reviewsCount: 21,
    channelsCount: "1900+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 3.0,
    category: "top",
    tags: ["sport", "archive", "many-channels"],
    shortDescription:
      "Провайдер с упором на большое количество каналов и гибкую работу с плейлистом, в том числе для любителей спорта и фильмов.",
    pros: [
      "Очень широкий список каналов по категориям",
      "Есть архив передач на несколько дней",
      "Удобный редактор плейлистов"
    ],
    cons: ["Нет самого дешёвого тарифа на рынке"],
    websiteUrl:
      "https://ztempz.xyz/zZS3SlCiMOdaoQYtnmDJzYctGwstY7MN_lnvj1HcFII=",
    archiveDaysApprox: 3,
    paymentsNote: "Карты, электронные кошельки"
  },
  {
    slug: "tvizi",
    name: "Tvizi",
    position: 6,
    logoEmoji: "🎛️",
    rating: 4.7,
    reviewsCount: 2,
    channelsCount: "1200+",
    trialInfo: "24 часа теста",
    monthlyFromUsd: 2.5,
    category: "top",
    tags: ["4k", "vod", "archive"],
    shortDescription:
      "Удобный сервис с хорошей медиатекой и возможностью смотреть фильмы и каналы в высоком качестве, включая 4K.",
    pros: [
      "Большая медиатека и кинозалы",
      "Поддержка 4K-контента",
      "Один плейлист сразу на два устройства"
    ],
    cons: ["Не все спортивные и взрослые каналы входят в базовый тариф"],
    websiteUrl: "https://tvizi.net?rl=922821",
    archiveDaysApprox: 5,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "bit-tv",
    name: "Bit TV",
    position: 8,
    logoEmoji: "🧊",
    rating: 4.7,
    reviewsCount: 2,
    channelsCount: "1300+",
    trialInfo: "24 часа теста",
    monthlyFromUsd: 2.0,
    category: "popular",
    tags: ["vod", "many-channels"],
    shortDescription:
      "Онлайн-сервис с единым тарифом и понятной настройкой для большинства популярных устройств и операционных систем.",
    pros: [
      "Один простой тариф без сложных градаций",
      "Поддержка Windows, macOS, Android, iOS и Smart TV",
      "Каналы с повышенным битрейтом и несколькими звуковыми дорожками"
    ],
    cons: ["Нет очень дешёвого стартового варианта, только общий пакет"],
    websiteUrl: "http://bittv.ltd/r/4759/",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты СНГ, электронные деньги"
  },
  {
    slug: "cbilling",
    name: "Cbilling",
    position: 9,
    logoEmoji: "🏗️",
    rating: 4.7,
    reviewsCount: 6,
    channelsCount: "1100+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.5,
    category: "premium",
    tags: ["vod", "archive", "many-channels"],
    shortDescription:
      "Платформа, ориентированная на тех, кто хочет собрать собственный IPTV-сервис или гибко настроить плейлист под себя.",
    pros: [
      "Готовое решение для собственного IPTV проекта",
      "Большая медиатека и архив передач",
      "Множество российских и региональных каналов"
    ],
    cons: ["Избыточный функционал, если нужен просто «домашний плейлист»"],
    websiteUrl: "https://cbillingtv.com/pl/70432",
    archiveDaysApprox: 7,
    paymentsNote: "Безналичная оплата, онлайн-платежи"
  },
  {
    slug: "crdru",
    name: "CRDRU",
    position: 10,
    logoEmoji: "🚀",
    rating: 4.7,
    reviewsCount: 6,
    channelsCount: "1300+",
    trialInfo: "2 дня теста",
    monthlyFromUsd: 2.0,
    category: "popular",
    tags: ["multiscreen", "archive"],
    shortDescription:
      "Российский провайдер с регулярным обновлением плейлистов и архивом, рассчитанный на просмотр на популярных Smart TV и приставках.",
    pros: [
      "Собственные сервера в России и за рубежом",
      "Мультирум на популярных моделях телевизоров",
      "Частые обновления списка каналов"
    ],
    cons: ["Архив хранится не так долго, как у некоторых конкурентов"],
    websiteUrl: "https://crdtv.net/registration/1b34358ee35eb6f.htm",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "antifriz-tv",
    name: "Antifriz TV",
    position: 7,
    logoEmoji: "❄️",
    rating: 4.7,
    reviewsCount: 3,
    channelsCount: "500+",
    trialInfo: "72 часа теста",
    monthlyFromUsd: 1.5,
    category: "budget",
    tags: ["archive", "cheap"],
    shortDescription:
      "Новый, но уже популярный сервис с акцентом на базовые пакеты и возможностью собрать индивидуальный плейлист.",
    pros: [
      "До трёх дней бесплатного теста",
      "Конструктор собственного плейлиста",
      "Архив передач и поддержка мультирума"
    ],
    cons: ["Не самый большой выбор каналов по сравнению с ТОП-лидерами"],
    websiteUrl: "https://antifriz.tv/?ref=PNOCGGu",
    archiveDaysApprox: 7,
    paymentsNote: "Банковские карты, онлайн-платежи"
  },
  {
    slug: "iptv-online",
    name: "IPTV Online",
    position: 11,
    logoEmoji: "🌐",
    rating: 5.0,
    reviewsCount: 5,
    channelsCount: "1400+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.49,
    category: "top",
    tags: ["4k", "sport", "archive", "multiscreen"],
    shortDescription:
      "Провайдер с хорошей поддержкой спорта и 4K-каналов, несколькими тарифами и архивом передач.",
    pros: [
      "Несколько тарифов, включая 4K-пакет",
      "Архив передач на несколько дней",
      "Работает на популярных плеерах и приставках"
    ],
    cons: ["Цена VIP-тарифа выше среднего по рынку"],
    websiteUrl: "http://iptv.online/user/register?ref=544529",
    archiveDaysApprox: 5,
    paymentsNote: "Банковские карты, электронные кошельки"
  },
  {
    slug: "sharatv",
    name: "SharaTV",
    position: 12,
    logoEmoji: "📦",
    rating: 4.3,
    reviewsCount: 3,
    channelsCount: "600+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 1.8,
    category: "budget",
    tags: ["multiscreen", "archive"],
    shortDescription:
      "Доступный по цене провайдер с набором международных каналов и мультирумом на несколько устройств.",
    pros: [
      "Несколько готовых пакетов каналов",
      "Архив передач и поддержка 4K/FullHD",
      "Мультирум на три устройства"
    ],
    cons: ["Общее количество каналов ниже, чем у лидеров рейтинга"],
    websiteUrl: "https://shara-tv.org/r/105525/",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "viplime",
    name: "VipLime",
    position: 13,
    logoEmoji: "🍋",
    rating: 4.3,
    reviewsCount: 5,
    channelsCount: "1000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.0,
    category: "popular",
    tags: ["multiscreen", "archive", "many-channels"],
    shortDescription:
      "Провайдер с акцентом на стабильность и поддержку разных устройств — от компьютеров до Smart TV и приставок.",
    pros: [
      "Поддержка множества плееров и платформ",
      "Мультирум и архив передач",
      "Собственные сервера в разных странах"
    ],
    cons: ["Дизайн личного кабинета может показаться устаревшим"],
    websiteUrl: "http://viplime.fun/index.php?user=130209",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "iptv-best",
    name: "IpTV Best",
    position: 1,
    logoEmoji: "✨",
    rating: 4.3,
    reviewsCount: 4,
    channelsCount: "700+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.0,
    category: "premium",
    tags: ["4k", "archive", "multiscreen"],
    shortDescription:
      "Премиальный плейлист с фокусом на качество картинки и аккуратное деление каналов по тематике.",
    pros: [
      "Отборные каналы в 4K, HD и SD",
      "Архив телепередач до 7 дней",
      "Удобная структура тематических пакетов"
    ],
    cons: ["Меньше общее количество каналов по сравнению с ТОП-1–3"],
    websiteUrl: "https://ip-tv.best?referrer_id=50597",
    archiveDaysApprox: 7,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "2-tv",
    name: "2 TV",
    position: 14,
    logoEmoji: "2️⃣",
    rating: 4.3,
    reviewsCount: 5,
    channelsCount: "1000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 1.8,
    category: "budget",
    tags: ["archive", "multiscreen"],
    shortDescription:
      "Один из старых игроков рынка, делает ставку на простоту, архив и стабильный доступ к базовым каналам.",
    pros: [
      "Гибкая длительность подписки (от месяца до года)",
      "Архив передач на несколько дней",
      "Мультирум на два устройства"
    ],
    cons: ["Редко появляются по-настоящему новые тематические пакеты"],
    websiteUrl: "https://2tv.biz?referrer_id=20435",
    archiveDaysApprox: 5,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "vip-drive",
    name: "Vip Drive",
    position: 15,
    logoEmoji: "🚗",
    rating: 4.0,
    reviewsCount: 2,
    channelsCount: "4000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.5,
    category: "premium",
    tags: ["many-channels", "multiscreen"],
    shortDescription:
      "Сервис с очень большим количеством каналов и поддержкой популярных приставок и Smart TV.",
    pros: [
      "До нескольких тысяч каналов в одном плейлисте",
      "Работает на разных приставках и платформах",
      "Есть мультирум и архив каналов"
    ],
    cons: ["Из-за большого числа каналов сложнее быстро найти нужное"],
    websiteUrl: "https://vipdrive.net/welcome/signup/9d40b6860134712c",
    archiveDaysApprox: 4,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "kineskop-iptv",
    name: "Кинескоп",
    position: 3,
    logoEmoji: "🎥",
    rating: 4.0,
    reviewsCount: 3,
    channelsCount: "1000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.3,
    category: "premium",
    tags: ["vod", "multiscreen"],
    shortDescription:
      "Премиальный сервис с хорошей поддержкой приставок и Android-устройств, ориентирован на качественную картинку.",
    pros: [
      "Поддержка большого числа приложений и плееров",
      "Мультирум и архив передач",
      "Хорошее качество трансляции"
    ],
    cons: ["Интерфейс и сайт больше ориентированы на продвинутых пользователей"],
    websiteUrl: "http://kineskop.club/?p=MTAzNDUzOA",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "russian-iptv",
    name: "Russian IPTV",
    position: 16,
    logoEmoji: "🇷🇺",
    rating: 4.0,
    reviewsCount: 2,
    channelsCount: "400+ / 800+ / 1000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.0,
    category: "popular",
    tags: ["4k", "archive"],
    shortDescription:
      "Провайдер с несколькими вариантами плейлистов и акцентом на российские телеканалы, включая UltraHD.",
    pros: [
      "Несколько пакетов по количеству каналов",
      "Есть 4K-каналы и медиатека",
      "Бонусная система при пополнении баланса"
    ],
    cons: ["Фокус в основном на российском контенте, минимум зарубежных каналов"],
    websiteUrl: "https://smotrivip.com/?pp=70432",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "itv-live",
    name: "ITV Live",
    position: 17,
    logoEmoji: "📡",
    rating: 3.7,
    reviewsCount: 3,
    channelsCount: "700+",
    trialInfo: "без теста / уточняется",
    monthlyFromUsd: 1.8,
    category: "budget",
    tags: ["cheap"],
    shortDescription:
      "Бюджетный вариант для тех, кому нужен базовый набор каналов без лишних опций.",
    pros: [
      "Достаточно большой базовый пакет каналов",
      "Подходит как недорогое IPTV «на попробовать»",
      "Несколько вариантов подписки по длительности"
    ],
    cons: ["Рейтинг ниже среднего по сравнению с конкурентами"],
    websiteUrl: "https://itv.live/?r=8bff9ab8da44de",
    archiveDaysApprox: 0,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "ilook-tv",
    name: "ILook",
    position: 18,
    logoEmoji: "👀",
    rating: 3.7,
    reviewsCount: 5,
    channelsCount: "4000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.5,
    category: "premium",
    tags: ["many-channels", "multiscreen", "archive"],
    shortDescription:
      "Провайдер с очень большим количеством каналов и возможностью просматривать архив передач за неделю.",
    pros: [
      "Сотни и тысячи каналов по пакетам",
      "Мультирум и архив до 7 дней",
      "Работает на популярных приставках и платформах"
    ],
    cons: ["Из-за масштабности сложно сориентироваться новичку"],
    websiteUrl: "https://tvlider.net/welcome/signup/9d40b6860134712c",
    archiveDaysApprox: 7,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "glanz-tv",
    name: "Glanz",
    position: 19,
    logoEmoji: "✨",
    rating: 3.3,
    reviewsCount: 4,
    channelsCount: "800+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 1.7,
    category: "budget",
    tags: ["multiscreen", "archive"],
    shortDescription:
      "IPTV-провайдер с классическим DVB-оборудованием и упором на каналы России и стран СНГ.",
    pros: [
      "Неплохой выбор каналов России и СНГ",
      "Поддержка до трёх устройств",
      "История каналов за несколько дней"
    ],
    cons: ["Рейтинг и отзывы заметно ниже, чем у лидеров топа"],
    websiteUrl: "https://ottg.tv/ref/Romango",
    archiveDaysApprox: 7,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "tv-lider",
    name: "Lider",
    position: 20,
    logoEmoji: "🏅",
    rating: 3.3,
    reviewsCount: 0,
    channelsCount: "4000+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.3,
    category: "budget",
    tags: ["many-channels"],
    shortDescription:
      "Сервис с очень большим количеством каналов, который пока набирает отзывы и репутацию.",
    pros: [
      "Очень большой объём плейлиста",
      "Разнообразные каналы по странам и тематикам",
      "Есть архив и дополнительные опции"
    ],
    cons: ["Мало отзывов, сложнее оценить стабильность заранее"],
    websiteUrl: "https://tvlider.net/welcome/signup/9d40b6860134712c",
    archiveDaysApprox: 4,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "snegiri-tv",
    name: "Снегири",
    position: 21,
    logoEmoji: "❄️",
    rating: 3.3,
    reviewsCount: 6,
    channelsCount: "3500+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 2.0,
    category: "popular",
    tags: ["many-channels", "archive"],
    shortDescription:
      "Провайдер с большим количеством каналов и архивом, ориентирован на зрителей из России и СНГ.",
    pros: [
      "До нескольких тысяч каналов в плейлисте",
      "Архив каналов за несколько дней",
      "Несколько тарифов под разные сценарии использования"
    ],
    cons: ["Рейтинг средний, встречаются разные отзывы по стабильности"],
    websiteUrl: "https://snegiri.tv/",
    archiveDaysApprox: 5,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "top-iptv",
    name: "Top IPTV",
    position: 22,
    logoEmoji: "🔝",
    rating: 3.0,
    reviewsCount: 0,
    channelsCount: "300+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 1.2,
    category: "budget",
    tags: ["cheap"],
    shortDescription:
      "Минималистичный провайдер с небольшим, но аккуратно подобранным набором каналов и архивом.",
    pros: [
      "Невысокая цена за месяц",
      "Архив за несколько дней",
      "Работает на широком спектре устройств"
    ],
    cons: ["Малое количество каналов относительно конкурентов"],
    websiteUrl: "https://topiptv.ink/r.php?ref=romango",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  },
  {
    slug: "uz-tv",
    name: "UZ",
    position: 23,
    logoEmoji: "🌙",
    rating: 3.0,
    reviewsCount: 1,
    channelsCount: "1200+",
    trialInfo: "1 день теста",
    monthlyFromUsd: 1.5,
    category: "budget",
    tags: ["cheap", "many-channels"],
    shortDescription:
      "Провайдер с хорошим соотношением количества каналов и стоимости, который только формирует базу отзывов.",
    pros: [
      "Много каналов при умеренной цене",
      "Есть тестовый период",
      "Поддерживаются разные устройства и плееры"
    ],
    cons: ["Мало независимых отзывов и обзоров"],
    websiteUrl: "https://iptv-top.ru/qvii",
    archiveDaysApprox: 3,
    paymentsNote: "Банковские карты, онлайн-оплата"
  }
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}

