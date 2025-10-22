// src/utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function createPerson(name: string) {
  return { name, createdAt: new Date() };
}