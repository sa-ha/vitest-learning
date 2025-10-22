// __tests__/service.test.ts
import { process } from '../src/service';
import { log } from '../src/logger';

// モジュール全体をモック（自動）
vi.mock('../src/logger', () => ({
  log: vi.fn(),
}));

describe('process', () => {
  it('calls log twice', () => {
    const result = process('hello');
    expect(result).toBe('HELLO');
    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(1, 'Processing started');
    expect(log).toHaveBeenNthCalledWith(2, 'Processing finished');
  });
});