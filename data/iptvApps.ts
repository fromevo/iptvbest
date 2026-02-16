export type IPTVApp = {
  slug: string;
  name: string;
  platforms: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  providerNote?: string;
};

export const iptvApps: IPTVApp[] = [
  {
    slug: "televizo",
    name: "Televizo",
    platforms: ["Android", "Android TV", "Fire TV"],
    pros: [
      "Удобный интерфейс, быстрая настройка плейлиста",
      "Поддержка EPG и архива",
      "Бесплатная базовая версия"
    ],
    cons: [
      "Нет версии для iOS и Smart TV Samsung/LG"
    ],
    bestFor: "Пользователи Android и Android TV, которым нужен простой и стабильный плеер.",
    providerNote: "Хорошо работает с большинством провайдеров из нашего рейтинга."
  },
  {
    slug: "ott-navigator",
    name: "OTT Navigator",
    platforms: ["Android", "Android TV", "Fire TV"],
    pros: [
      "Мощный функционал: мультиплейлисты, EPG, запись",
      "Гибкая настройка интерфейса и групп каналов",
      "Поддержка архива и timeshift"
    ],
    cons: [
      "Сложнее для новичков, много опций"
    ],
    bestFor: "Продвинутые пользователи и те, кто смотрит на нескольких устройствах с разными плейлистами.",
    providerNote: "Удобен с провайдерами, дающими стабильный EPG и архив (TV Team, Sharavoz, IPTV Online)."
  },
  {
    slug: "iptv-smarters",
    name: "IPTV Smarters Pro",
    platforms: ["Android", "iOS", "Android TV", "Smart TV (частично)"],
    pros: [
      "Кроссплатформенность",
      "Поддержка плейлистов M3U и Xtream Codes",
      "Встроенный VPN-опция в платной версии"
    ],
    cons: [
      "Платная версия для полного функционала",
      "Реклама в бесплатной версии"
    ],
    bestFor: "Те, кому нужен один плеер на телефоне и телевизоре с простой настройкой.",
    providerNote: "Подходит для All TV, Bit TV, Tvizi и других провайдеров с M3U/XC."
  },
  {
    slug: "tivimate",
    name: "TiviMate",
    platforms: ["Android", "Android TV", "Fire TV"],
    pros: [
      "Один из самых удобных интерфейсов для ТВ",
      "Отличная поддержка EPG и архива",
      "Удобное управление с пульта"
    ],
    cons: [
      "Платный премиум для нескольких плейлистов и продвинутых функций",
      "Только экосистема Android"
    ],
    bestFor: "Владельцы Android TV и Fire TV, которые смотрят IPTV как основное ТВ.",
    providerNote: "Отлично сочетается с провайдерами с качественным EPG: TV Team, Cbilling, CRDRU."
  },
  {
    slug: "kodi",
    name: "Kodi + PVR IPTV Simple Client",
    platforms: ["Windows", "macOS", "Linux", "Android", "Android TV"],
    pros: [
      "Бесплатно и без рекламы",
      "Единая медиацентр: IPTV, фильмы, музыка",
      "Много дополнений и скинов"
    ],
    cons: [
      "Требует ручной настройки аддона",
      "Интерфейс может быть перегружен"
    ],
    bestFor: "Пользователи ПК и приставок, которые уже используют Kodi как центр развлечений.",
    providerNote: "Работает с любым провайдером, отдающим M3U; удобен с Bit TV, Cbilling, Ilook TV."
  },
  {
    slug: "vlc",
    name: "VLC",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    pros: [
      "Бесплатно, открытый код",
      "Минимальная настройка: вставить ссылку на M3U и смотреть",
      "Надёжность и низкая нагрузка"
    ],
    cons: [
      "Нет EPG и удобного переключения каналов как в ТВ-приложениях",
      "Слабо подходит для постоянного просмотра на телевизоре"
    ],
    bestFor: "Быстрый тест плейлиста на ПК или смартфоне без установки тяжёлых приложений.",
    providerNote: "Подходит для проверки любого провайдера перед оплатой."
  }
];

export function getAppBySlug(slug: string): IPTVApp | undefined {
  return iptvApps.find((a) => a.slug === slug);
}
