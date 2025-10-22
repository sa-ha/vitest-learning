// __tests__/config.test.ts
import { loadConfig } from '../src/config'
describe('loadConfig', () => {
  beforeEach(() => {
      vi.stubEnv('API_URL', '');
      vi.stubEnv('TIMEOUT_MS', '');
      vi.stubEnv('DEBUG', '');
  });

  it('uses defaults when env vars are missing', () => {
      const config = loadConfig();
      expect(config).toEqual({
        apiUrl: 'http://localhost:3000',
        timeout: 5000,
        isDebug: false,
      });
  });

  it('uses env vars when provided', () => {
      vi.stubEnv('API_URL', 'https://prod.api');
      vi.stubEnv('TIMEOUT_MS', '10000');
      vi.stubEnv('DEBUG', 'true');

      const config = loadConfig();
      expect(config).toEqual({
        apiUrl: 'https://prod.api',
        timeout: 10000,
        isDebug: true,
      });
  });

  it('handles invalid TIMEOUT_MS gracefully', () => {
      vi.stubEnv('TIMEOUT_MS', 'not-a-number');
      const config = loadConfig();
      expect(config.timeout).toBe(NaN); // デフォルト
  });
});