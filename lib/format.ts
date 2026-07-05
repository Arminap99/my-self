const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'

export function toFaDigits(n: number | string): string {
  return String(n).replace(/\d/g, (d) => FA_DIGITS[Number(d)])
}

export function fromFaDigits(s: string): string {
  return s.replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)))
}

/** Split a stat like '۸۰K+' into { value: 80, suffix: 'K+' }; null if non-numeric (e.g. 'MVP'). */
export function parseStat(raw: string): { value: number; suffix: string } | null {
  const m = raw.match(/^([۰-۹0-9]+)(.*)$/)
  if (!m) return null
  return { value: Number(fromFaDigits(m[1])), suffix: m[2] }
}
