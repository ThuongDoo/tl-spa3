import { isImageValue } from '../utils/imgSrc'
import { IconClock, IconPin, IconStar } from './icons'

export default function Hero({ data }) {
  const hasImg = isImageValue(data.hero.img)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: 'linear-gradient(135deg, var(--c-grad-from) 0%, var(--c-500) 55%, var(--c-grad-to) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 70%, white 0, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 pt-28 pb-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-sm font-medium text-cream ring-1 ring-cream/30">
            <IconStar className="h-4 w-4" />
            {data.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            {data.hero.headline1}
            <br /> {data.hero.headline2}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cream/85">{data.hero.subtext}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold shadow-lg transition hover:bg-white"
              style={{ color: 'var(--c-600)' }}
            >
              {data.hero.ctaPrimary}
            </a>
            <a
              href="#services"
              className="rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              {data.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/85">
            <div className="flex items-center gap-2">
              <IconClock className="h-5 w-5" />
              {data.hero.hours}
            </div>
            <div className="flex items-center gap-2">
              <IconPin className="h-5 w-5" />
              {data.hero.locationsNote}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-cream/10 shadow-2xl ring-1 ring-cream/20 backdrop-blur-sm">
            {hasImg && <img src={data.hero.img} alt="" className="h-full w-full object-cover" />}
          </div>
          <div className="absolute -bottom-8 -left-8 w-56 rounded-2xl bg-cream p-5 shadow-xl">
            <p className="font-display text-3xl" style={{ color: 'var(--c-600)' }}>
              {data.hero.ratingValue}
            </p>
            <p className="mt-1 text-sm text-charcoal/70">{data.hero.ratingLabel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
