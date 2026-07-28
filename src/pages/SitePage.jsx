import { useWebsiteConfig } from '../lib/content'
import './SitePage.css'

export default function SitePage() {
  const { config, loading, error } = useWebsiteConfig()

  if (loading) return null
  if (error) return <p className="site-error">Không tải được nội dung.</p>
  if (!config) return null

  return (
    <main className="site-page">
      <pre className="config-dump">{JSON.stringify(config, null, 2)}</pre>
    </main>
  )
}
