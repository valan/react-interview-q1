import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string.
 * Removes any falsy values and intelligently merges tailwind classes.
 * @param {ClassValue[]} args - The class names to be combined.
 * @returns {string} The combined class names as a string.
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

/**
 * Creates a debounced version of the provided function.
 * @param {Function} fn - The function to be debounced.
 * @param {number} delay - The delay in milliseconds before invoking the debounced function.
 * @returns {Function} The debounced function.
 */
export function debounce(fn: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
