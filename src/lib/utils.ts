import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as USD currency.
 */
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Generates an Amazon affiliate link for a given ASIN.
 */
export function getAffiliateLink(asin: string) {
  const tag = 'bestpickshub-20';
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}
