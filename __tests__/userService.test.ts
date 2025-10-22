// __tests__/userService.test.ts
import { getUser } from '../src/userService';

// fetch をグローバルにモック
global.fetch = vi.fn();

describe('getUser', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // 各テスト前にリセット
  });

  it('fetches user name', async () => {
    // https://vitest.dev/api/mock.html#mockresolvedvalue
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ name: 'Alice' }),
    });

    const name = await getUser(1);
    expect(name).toBe('Alice');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

  it('throws on network error', async () => {
    (global.fetch as any).mockResolvedValue({ ok: false });

    await expect(getUser(1)).rejects.toThrow('Failed to fetch');
  });
});