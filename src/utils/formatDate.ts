// src/utils/formatDate.ts
export function formatDate(date: Date): string {
  if (!(date instanceof Date)) {
    throw new TypeError('Argument must be a Date instance');
  }
  if (isNaN(date.getTime())) {
      throw new Error('Invalid Date');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 01–12
  const day = String(date.getDate()).padStart(2, '0');        // 01–31

  return `${year}-${month}-${day}`;
}