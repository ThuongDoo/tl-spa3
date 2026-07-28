// Identifies which Firestore `websites/{websiteId}` doc this build serves.
// Set per-deployment via .env (see .env.example) — every deployment shares
// the same Firebase project but reads/writes its own website doc.
export const websiteId = import.meta.env.VITE_WEBSITE_ID

if (!websiteId) {
  throw new Error(
    'Missing VITE_WEBSITE_ID. Copy .env.example to .env and set it to this deployment\'s websites/{id} doc.',
  )
}
