import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number with currency format (thousands separator)
 * @param value - The number to format
 * @param currency - The currency code (INR or USD)
 * @returns Formatted string with commas as thousands separator
 */
export function formatCurrency(value: number, currency: 'INR' | 'USD' = 'INR'): string {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';
  return value.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Formats a number for input display (with thousands separator)
 * @param value - The number or string to format
 * @returns Formatted string with commas
 */
export function formatNumberForInput(value: string | number): string {
  if (value === '' || value === null || value === undefined) return ''
  const num = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value
  if (isNaN(num)) return ''
  return num.toLocaleString('en-IN')
}

/**
 * Removes formatting from a formatted number string
 * @param value - The formatted string
 * @returns Clean number string without commas
 */
export function unformatNumber(value: string): string {
  return value.replace(/,/g, '')
}