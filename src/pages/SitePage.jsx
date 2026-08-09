import { useEffect } from 'react'
import { useWebsiteConfig } from '../lib/content'
import { normalizeWebsiteData } from '../lib/websiteData'
import { useThemeVars } from '../hooks/useThemeVars'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Map from '../components/Map'
import Footer from '../components/Footer'
import PromoPopup from '../components/PromoPopup'

export default function SitePage() {
  const { config, loading, error } = useWebsiteConfig()
  const data = normalizeWebsiteData(config)
  const themeVars = useThemeVars(data?.theme?.themePrimary, data?.theme?.themeAccent)

  useEffect(() => {
    if (data) document.title = data.brand.pageTitle || data.brand.brand
  }, [data])

  if (loading) return null
  if (error) return <p className="p-16 text-center">Không tải được nội dung.</p>
  if (!data) return null

  return (
    <div style={themeVars}>
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <Services data={data} />
        <About data={data} />
        <Gallery data={data} />
        <Testimonials data={data} />
        <Booking data={data} />
      </main>
      <Footer data={data} />
      <Map data={data} />
      <PromoPopup data={data} />
    </div>
  )
}
