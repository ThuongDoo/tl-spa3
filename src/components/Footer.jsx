import { NAV } from '../data/nav'
import { isImageValue } from '../utils/imgSrc'
import { IconLotus } from './icons'

export default function Footer({ data }) {
  const logoIsImage = isImageValue(data.brand.logo)

  return (
    <footer className="bg-[#201b16] py-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              {logoIsImage ? (
                <img src={data.brand.logo} alt={data.brand.brand} className="h-7 w-7 rounded-full object-cover" />
              ) : data.brand.logo ? (
                <span className="text-xl leading-none">{data.brand.logo}</span>
              ) : (
                <IconLotus className="h-7 w-7" style={{ color: 'var(--c-400)' }} />
              )}
              <span className="font-display text-lg text-cream">{data.brand.brand}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{data.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-base text-cream">Liên kết nhanh</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-cream">Dịch vụ</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {data.services.items.map((s, i) => (
                <li key={i}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-cream">Liên hệ</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Hotline: {data.brand.phone}</li>
              <li>Email: {data.footer.email}</li>
              <li>{data.booking.address1}</li>
              <li>{data.booking.address2}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{data.footer.copyright}</p>
          <p>{data.footer.note}</p>
        </div>
      </div>
    </footer>
  )
}
