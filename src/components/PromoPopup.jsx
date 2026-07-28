import { useEffect, useState } from 'react'
import { IconClose, IconMessenger, IconPhone, IconPin, IconZalo } from './icons'
import { isImageValue } from '../utils/imgSrc'

export default function PromoPopup({ data, preview = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (preview) return
    const timer = setTimeout(() => setOpen(true), 5000)
    return () => clearTimeout(timer)
  }, [preview])

  function close() {
    setOpen(false)
  }

  if (!open) return null

  const hasImg = isImageValue(data.promo.img)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 px-5" onClick={close}>
      <div
        className="relative flex w-full max-w-3xl overflow-hidden rounded-3xl bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Đóng"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow transition hover:bg-white"
        >
          <IconClose className="h-4 w-4" />
        </button>

        <div
          className="relative hidden w-2/5 shrink-0 sm:block"
          style={!hasImg ? { background: 'linear-gradient(135deg, var(--c-grad-from), var(--c-grad-to))' } : undefined}
        >
          {hasImg && <img src={data.promo.img} alt="" className="h-full w-full object-cover" />}
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold" style={{ color: 'var(--c-600)' }}>
            {data.promo.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <span
            className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold sm:hidden"
            style={{ color: 'var(--c-600)' }}
          >
            {data.promo.badge}
          </span>
          <h3 className="mt-3 font-display text-2xl text-charcoal sm:mt-0">{data.promo.heading}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{data.promo.subtext}</p>

          <div className="mt-6 flex items-center gap-6">
            <a href={`tel:${data.booking.phone}`} className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: 'var(--c-100)', color: 'var(--c-600)' }}
              >
                <IconPhone className="h-5 w-5" />
              </span>
              <span className="text-xs text-charcoal/60">Gọi điện</span>
            </a>
            <a href={data.booking.zalo} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: 'var(--c-100)', color: 'var(--c-600)' }}
              >
                <IconZalo className="h-5 w-5" />
              </span>
              <span className="text-xs text-charcoal/60">Zalo</span>
            </a>
            <a href={data.booking.messenger} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: 'var(--c-100)', color: 'var(--c-600)' }}
              >
                <IconMessenger className="h-5 w-5" />
              </span>
              <span className="text-xs text-charcoal/60">Messenger</span>
            </a>
          </div>

          <div className="mt-5 flex items-start gap-2 text-xs text-charcoal/60">
            <IconPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--c-500)' }} />
            <span>{data.booking.address1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
