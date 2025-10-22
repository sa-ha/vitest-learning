// __tests__/utils/formatDate.test.ts
import { formatDate } from '../../src/utils/formatDate';

describe('formatDate', () => {
  // 成功ケース
  it('formats a valid date correctly', () => {
    const date = new Date(2025, 9, 13); // 2025-10-13（注意：月は0起点）
    expect(formatDate(date)).toBe('2025-10-13');
  });

  // 境界値：うるう年
  it('handles leap year', () => {
    const date = new Date(2024, 1, 29); // 2024-02-29
    expect(formatDate(date)).toBe('2024-02-29');
  });

  // 境界値：年末
  it('handles year end', () => {
    const date = new Date(2025, 11, 31);
    expect(formatDate(date)).toBe('2025-12-31');
  });

  // 異常系：無効な Date
  it('throws for invalid date string', () => {
    const invalidDate = new Date('not-a-date');
    expect(() => formatDate(invalidDate)).toThrow('Invalid Date');
  });

  // 異常系：非 Date 型
  it('throws for non-Date input', () => {
    expect(() => formatDate('2025-01-01' as any)).toThrow(TypeError);
    expect(() => formatDate(null as any)).toThrow(TypeError);
    expect(() => formatDate(undefined as any)).toThrow(TypeError);
  });

  // 追加：1桁の月・日がゼロ埋めされるか
  it('zero-pads single-digit month and day', () => {
    const date = new Date(2025, 0, 5); // 2025-01-05
    expect(formatDate(date)).toBe('2025-01-05');
  });
});