export default function Map({ data }) {
  const query = encodeURIComponent(`${data.brand.brand} ${data.booking.address1}`)
  const src = data.map.embedUrl || `https://www.google.com/maps?q=${query}&output=embed`

  return (
    <section className="bg-[#201b16]">
      <iframe
        src={src}
        title={`Bản đồ ${data.brand.brand}`}
        className="h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}
