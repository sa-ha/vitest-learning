// __tests__/services/api.test.ts
import { fetchUser } from '../../src/services/api';

describe('fetchUser', () => {
  // 方法1: async/await
  it('fetches user with valid ID', async () => {
    const user = await fetchUser(1);
    expect(user).toEqual({ id: 1, name: 'User 1' });
  });

  // 方法2: .resolves
  it('resolves with correct user', () => {
    // https://vitest.dev/api/expect.html#resolves
    expect(fetchUser(2)).resolves.toEqual({ id: 2, name: 'User 2' });
  });

  // 方法3: .rejects（例外テスト）
  it('rejects when ID is invalid', () => {
    // https://vitest.dev/api/expect.html#rejects
    expect(fetchUser(-1)).rejects.toThrow('Invalid ID');
  });

  // 方法4: async + expect().toThrow() は使えない → 関数をラップ
  it('rejects with error message (async style)', async () => {
    await expect(fetchUser(-1)).rejects.toThrow('Invalid ID');
  });
});