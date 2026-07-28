// Mỗi preset chỉ định nghĩa 2 màu (primary + accent) làm gợi ý chọn nhanh.
// Toàn bộ sắc độ 50..700 được tính tự động từ "primary" — xem src/utils/colorScale.js.
export const THEME_PRESETS = [
  { name: 'terracotta', label: '🧡 Đất nung', primary: '#a6633c', accent: '#5c6b4f' },
  { name: 'emerald', label: '🌿 Xanh lá', primary: '#10b981', accent: '#0d9488' },
  { name: 'rose', label: '🌹 Hồng đỏ', primary: '#f43f5e', accent: '#db2777' },
  { name: 'violet', label: '💜 Tím', primary: '#8b5cf6', accent: '#6d28d9' },
  { name: 'sky', label: '☁️ Xanh biển', primary: '#0ea5e9', accent: '#0891b2' },
  { name: 'amber', label: '🍊 Cam', primary: '#f59e0b', accent: '#ea580c' },
  { name: 'nude', label: '🤎 Nude', primary: '#c97260', accent: '#aa5445' },
  { name: 'gold', label: '✨ Vàng', primary: '#c09a28', accent: '#9e7d1e' },
  { name: 'plum', label: '🍒 Đỏ mận', primary: '#a52449', accent: '#831538' },
  { name: 'black', label: '🖤 Đen', primary: '#2c2620', accent: '#000000' },
]

export const DEFAULT_THEME = THEME_PRESETS.find((t) => t.name === 'terracotta')
