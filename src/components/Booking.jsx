import { IconClock, IconMessenger, IconPhone, IconPin, IconZalo } from './icons'

export default function Booking({ data }) {
  const contacts = [
    { icon: IconPhone, label: 'Gọi điện', value: data.booking.phone, href: `tel:${data.booking.phone}` },
    { icon: IconZalo, label: 'Chat Zalo', value: 'Nhắn tin ngay', href: data.booking.zalo },
    { icon: IconMessenger, label: 'Messenger', value: 'Nhắn tin ngay', href: data.booking.messenger },
  ]

  return (
    <section id="booking" className="bg-charcoal py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--c-300)' }}>
          Liên hệ
        </span>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{data.booking.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">{data.booking.subtext}</p>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('tel:') ? undefined : '_blank'} rel="noreferrer" className="group flex flex-col items-center gap-3">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/25 transition group-hover:-translate-y-1 group-hover:ring-cream/60">
                <Icon className="h-7 w-7" style={{ color: 'var(--c-300)' }} />
              </span>
              <span className="font-display text-base text-cream">{label}</span>
              <span className="text-sm text-cream/50">{value}</span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-cream/10 pt-8 text-sm text-cream/70">
          <div className="flex items-center gap-2">
            <IconPin className="h-4 w-4 shrink-0" style={{ color: 'var(--c-300)' }} />
            <span>
              {data.booking.address1} · {data.booking.address2}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock className="h-4 w-4 shrink-0" style={{ color: 'var(--c-300)' }} />
            <span>{data.booking.hours}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
