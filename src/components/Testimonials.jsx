import { IconStar } from './icons'

export default function Testimonials({ data }) {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--c-600)' }}>
            Đánh giá
          </span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{data.testimonials.heading}</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.testimonials.items.map((r, i) => (
            <div key={i} className="rounded-3xl bg-cream p-8 shadow-sm">
              <div className="flex gap-1" style={{ color: 'var(--c-500)' }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75">“{r.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full font-display"
                  style={{ background: 'var(--c-100)', color: 'var(--c-600)' }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{r.name}</p>
                  <p className="text-xs text-charcoal/55">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
