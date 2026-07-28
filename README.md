# Site template (multi-project, multi-client)

React + Vite site that renders a single page from data stored in Firestore.
This codebase is **read-only** — it fetches `websites/{websiteId}` and
renders it; content is edited elsewhere (a separate back-office app), not
here.

One Firebase project is shared across every project and every client. What
separates them is a per-deployment **website ID**
(see [`src/lib/site.js`](src/lib/site.js)): each client gets its own build
(its own `.env`), pointed at its own `websites/{websiteId}` doc, but all
builds read from the same Firebase backend.

## Data model

```
users/{uid}                doc: { role }
templates/{templateId}     doc: (owned by the back office, not read by this app)
websites/{websiteId}       doc: { ownerId, templateId, config }
```

`websiteId` comes from `VITE_WEBSITE_ID`. `config` is a native Firestore map
(the back office writes it that way so it's browsable/editable directly in
the Firestore console, not an opaque blob). Older docs may still have it as
a JSON string from before that change — `useWebsiteConfig` in
[`src/lib/content.js`](src/lib/content.js) tolerates both, so nothing here
needs to change again once every site has been re-saved at least once in
the editor. Current shape, rendered by
[`src/pages/SitePage.jsx`](src/pages/SitePage.jsx):

```json
{
  "name": "Spa Rose",
  "phone": "0909123456",
  "theme": { "primary": "#FF6B81", "secondary": "#FFFFFF" },
  "hero": {
    "title": "Spa chăm sóc da",
    "subtitle": "Đẹp tự nhiên",
    "button": { "text": "Đặt lịch", "link": "/contact" }
  }
}
```

`theme.primary`/`theme.secondary` are applied as CSS custom properties
(`--theme-primary`/`--theme-secondary`) on the page root.

## Running a client site

1. Copy `.env.example` to `.env` and set `VITE_WEBSITE_ID` to that client's
   `websites/{id}` doc ID (provisioned by the back office).
2. `npm run dev`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — eslint
"# template" 
