// __tests__/calculator.test.ts
import { calculateTotal } from '../src/calculator';

describe('calculateTotal', () => {
  it('applies discount function', () => {
    const mockDiscount = vi.fn((n: number) => n * 0.9);
    const total = calculateTotal(100, 0.1, mockDiscount);
    
    expect(total).toBeCloseTo(99);
    expect(mockDiscount).toHaveBeenCalledTimes(1);
    expect(mockDiscount.mock.calls[0][0]).toBeCloseTo(110);
  });
});