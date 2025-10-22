// __tests__/math.test.ts

// expect
// https://vitest.dev/api/expect
import { add, isEven, createPerson } from 'src/utils/math';

describe('math utilities', () => {
  it('adds 1 + 2 to equal 3', () => {
    // https://vitest.dev/api/expect.html#tobe
    expect(add(1, 2)).toBe(3);
  });

  it('2 is even', () => {
    // https://vitest.dev/api/expect.html#tobetruthy
    expect(isEven(2)).toBeTruthy();
  });

  it('3 is not even', () => {
    // https://vitest.dev/api/expect.html#tobefalsy
    expect(isEven(3)).toBeFalsy();
  });

  it('creates person with name', () => {
    const person = createPerson('Alice');
    // https://vitest.dev/api/expect.html#expect-objectcontaining
    expect(person).toEqual(expect.objectContaining({ name: 'Alice' }));
    // https://vitest.dev/api/expect.html#tobeinstanceof
    expect(person.createdAt).toBeInstanceOf(Date);
  });
});