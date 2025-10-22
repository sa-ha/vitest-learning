// __tests__/utils/string.test.ts
import { capitalize } from '../../src/utils/string';

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('lowercases the rest', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });
});