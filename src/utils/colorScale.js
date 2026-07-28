// Sinh bảng sắc độ (50..700) từ 1 màu gốc (HSL), dùng cho theme 2-màu:
// người dùng chỉ chọn "primary" (dùng làm mốc 500) + "accent" (điểm cuối gradient).

function hexToHsl(hex) {
  const h = hex.replace('#', '')
  const bigint = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  const r = ((bigint >> 16) & 255) / 255
  const g = ((bigint >> 8) & 255) / 255
  const b = (bigint & 255) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let hue = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        hue = (b - r) / d + 2
        break
      default:
        hue = (r - g) / d + 4
    }
    hue /= 6
  }

  return { h: hue * 360, s: s * 100, l: l * 100 }
}

function hslToHex(h, s, l) {
  const sN = s / 100
  const lN = l / 100
  const c = (1 - Math.abs(2 * lN - 1)) * sN
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lN - c / 2
  let r
  let g
  let b

  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]

  const toHex = (v) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

// Nội suy độ sáng (L) theo 2 đoạn: trắng -> màu gốc (cho 50..400) và
// màu gốc -> tối (cho 600..700), giữ nguyên Hue/Saturation của màu người dùng chọn.
export function buildShadeScale(primaryHex) {
  const { h, s, l } = hexToHsl(primaryHex)
  const lightSteps = { 50: 0, 100: 0.15, 200: 0.35, 300: 0.55, 400: 0.78 }
  const darkSteps = { 600: 0.35, 700: 0.65 }
  const scale = {}

  for (const [stop, t] of Object.entries(lightSteps)) {
    scale[stop] = hslToHex(h, s, lerp(l, 96, 1 - t))
  }
  scale[500] = primaryHex
  for (const [stop, t] of Object.entries(darkSteps)) {
    scale[stop] = hslToHex(h, Math.min(s + 5, 100), lerp(l, Math.max(l - 30, 8), t))
  }

  return scale
}

// Theme đầy đủ (CSS vars) từ 2 màu người dùng chọn.
export function buildThemeFromColors(primaryHex, accentHex) {
  const scale = buildShadeScale(primaryHex)
  return {
    ...scale,
    gradientFrom: primaryHex,
    gradientTo: accentHex,
  }
}
