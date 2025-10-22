// __tests__/userService.test.ts
import { getUser } from '../src/userService';

// fetch をグローバルにモック
const fetchMock = vi.spyOn(globalThis, 'fetch');

describe('getUser', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // 各テスト前にリセット
  });

  it('fetches user name', async () => {
    // https://vitest.dev/api/mock.html#mockresolvedvalue
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ name: 'Alice' }),
    });

    const name = await getUser(1);
    expect(name).toBe('Alice');
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

  it('throws on network error', async () => {
    fetchMock.mockResolvedValue({ ok: false });

    await expect(getUser(1)).rejects.toThrow('Failed to fetch');
  });
});