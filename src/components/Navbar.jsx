import { useEffect, useState } from 'react'
import { NAV } from '../data/nav'
import { isImageValue } from '../utils/imgSrc'
import { IconLotus, IconMenu, IconClose, IconPhone } from './icons'

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoIsImage = isImageValue(data.logo)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          {logoIsImage ? (
            <img src={data.logo} alt={data.brand} className="h-8 w-8 rounded-full object-cover" />
          ) : data.logo ? (
            <span className="text-2xl leading-none">{data.logo}</span>
          ) : (
            <IconLotus className={`h-8 w-8 ${scrolled ? '' : 'text-cream'}`} style={scrolled ? { color: 'var(--c-600)' } : undefined} />
          )}
          <span
            className={`font-display text-xl tracking-wide ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          >
            {data.brand}
          </span>
        </a>

        <ul
          className={`hidden items-center gap-8 text-sm font-medium lg:flex ${
            scrolled ? 'text-charcoal' : 'text-cream'
          }`}
        >
          {NAV.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${data.phone}`}
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          >
            <IconPhone className="h-4 w-4" />
            {data.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-cream shadow transition hover:brightness-110"
            style={{ background: 'var(--c-500)' }}
          >
            Liên hệ ngay
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          aria-label="Mở menu"
        >
          <IconMenu className="h-7 w-7" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-charcoal/40 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="ml-auto flex h-full w-72 flex-col gap-6 bg-cream p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-charcoal">{data.brand}</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Đóng menu">
                <IconClose className="h-6 w-6 text-charcoal" />
              </button>
            </div>
            <ul className="flex flex-col gap-5 text-base font-medium text-charcoal">
              {NAV.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-auto rounded-full px-5 py-3 text-center text-sm font-semibold text-cream"
              style={{ background: 'var(--c-500)' }}
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
