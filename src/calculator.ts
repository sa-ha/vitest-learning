// src/calculator.ts
export function multiply(a: number, b: number): number {
  return a * b;
}

export function calculateTotal(price: number, taxRate: number, discountFn: (n: number) => number): number {
  const withTax = price * (1 + taxRate);
  return discountFn(withTax);
}