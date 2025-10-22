// __test__/logger.test.ts
import { log } from '../src/logger'

describe('log', () => {
  // テストごとに console.log をモック化
  beforeEach(() => {
      vi.spyOn(console, 'log');
  });

  // テスト後にモックをクリーンアップ
  afterEach(() => {
      vi.clearAllMocks();
  });

  it('should call console.log with prefixed message', () => {
      // Act
      log('Hello World');

      // Assert
      expect(console.log).toHaveBeenCalledWith('[LOG] Hello World');
  });

  it('should not modify the original message', () => {
      // Arrange & Act
      log('Test Message');

      // Assert
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Test Message'));
  });
});