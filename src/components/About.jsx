import { isImageValue } from '../utils/imgSrc'
import { IconLotus } from './icons'

export default function About({ data }) {
  const hasImg = isImageValue(data.about.img)

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div
            className="aspect-square w-full overflow-hidden rounded-[2.5rem]"
            style={{ background: 'linear-gradient(135deg, var(--c-100), var(--c-300), var(--c-50))' }}
          >
            {hasImg && <img src={data.about.img} alt="" className="h-full w-full object-cover" />}
          </div>
          <div
            className="absolute -bottom-6 -right-6 flex h-28 w-28 items-center justify-center rounded-full text-cream shadow-lg sm:h-32 sm:w-32"
            style={{ background: 'var(--c-500)' }}
          >
            <IconLotus className="h-14 w-14" />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--c-600)' }}>
            {data.about.label}
          </span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{data.about.heading}</h2>
          <p className="mt-5 text-charcoal/70">{data.about.paragraph1}</p>
          <p className="mt-4 text-charcoal/70">{data.about.paragraph2}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {data.about.stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-3xl" style={{ color: 'var(--c-600)' }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
