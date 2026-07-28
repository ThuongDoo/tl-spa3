import { isImageValue } from '../utils/imgSrc'

export default function Gallery({ data }) {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--c-600)' }}>
            Không gian
          </span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{data.gallery.heading}</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {data.gallery.items.map((img, i) => {
            const hasImg = isImageValue(img.img)
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-square' : 'aspect-square'
                }`}
                style={!hasImg ? { background: 'linear-gradient(135deg, var(--c-200), var(--c-50))' } : undefined}
              >
                {hasImg && <img src={img.img} alt={img.label} className="h-full w-full object-cover" />}
                <div className="absolute inset-0 flex items-end bg-charcoal/0 p-4 transition group-hover:bg-charcoal/20">
                  <span className="translate-y-2 text-sm font-medium text-charcoal/80 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    {img.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
