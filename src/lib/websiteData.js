// Fills in the nested defaults spa-3's UI components expect (empty strings/arrays instead of
// undefined) so a `websites/{id}.config` doc that hasn't set every field yet still renders.
const DEFAULTS = {
  theme: { themePrimary: '', themeAccent: '' },
  brand: { logo: '', brand: '', phone: '', pageTitle: '' },
  hero: {
    badge: '',
    headline1: '',
    headline2: '',
    subtext: '',
    ctaPrimary: '',
    ctaSecondary: '',
    hours: '',
    locationsNote: '',
    ratingValue: '',
    ratingLabel: '',
    img: '',
  },
  services: { heading: '', subtitle: '', items: [] },
  about: { label: '', heading: '', paragraph1: '', paragraph2: '', img: '', stats: [] },
  gallery: { heading: '', items: [] },
  testimonials: { heading: '', items: [] },
  booking: {
    heading: '',
    subtext: '',
    phone: '',
    zalo: '',
    messenger: '',
    address1: '',
    address2: '',
    hours: '',
  },
  map: { embedUrl: '' },
  promo: { badge: '', heading: '', subtext: '', img: '' },
  footer: { tagline: '', email: '', copyright: '', note: '' },
}

export function normalizeWebsiteData(config) {
  if (!config) return null
  return {
    ...DEFAULTS,
    ...config,
    theme: { ...DEFAULTS.theme, ...config.theme },
    brand: { ...DEFAULTS.brand, ...config.brand },
    hero: { ...DEFAULTS.hero, ...config.hero },
    services: { ...DEFAULTS.services, ...config.services, items: config.services?.items ?? [] },
    about: { ...DEFAULTS.about, ...config.about, stats: config.about?.stats ?? [] },
    gallery: { ...DEFAULTS.gallery, ...config.gallery, items: config.gallery?.items ?? [] },
    testimonials: {
      ...DEFAULTS.testimonials,
      ...config.testimonials,
      items: config.testimonials?.items ?? [],
    },
    booking: { ...DEFAULTS.booking, ...config.booking },
    map: { ...DEFAULTS.map, ...config.map },
    promo: { ...DEFAULTS.promo, ...config.promo },
    footer: { ...DEFAULTS.footer, ...config.footer },
  }
}
