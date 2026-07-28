import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from './firebase'
import { websiteId } from './site'

const websiteRef = doc(db, 'websites', websiteId)

// `config` is now written as a native Firestore map by the editor. Older
// docs still have it as a JSON string, so this tolerates both — a site
// keeps rendering under the old format until it's next saved in the editor
// (which upgrades it to the map form).
function parseConfig(raw) {
  if (raw == null) return null
  if (typeof raw !== 'string') return raw
  return JSON.parse(raw)
}

// Live read-only view of this deployment's `websites/{websiteId}` doc.
export function useWebsiteConfig() {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      websiteRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setConfig(null)
          setLoading(false)
          return
        }
        try {
          setConfig(parseConfig(snapshot.data().config))
          setError(null)
        } catch {
          setError(new Error('Trường config không phải JSON hợp lệ.'))
        }
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      },
    )
    return unsubscribe
  }, [])

  return { config, loading, error }
}
