// vitest.integration.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // テストファイルの拡張子
    include: ['__tests__/**/*.test.ts'],
    // グローバルに describe, it, expect を使う
    globals: true,
    // TypeScript の型解決を有効化
    environment: 'node',
    // カバレッジ設定
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'html', 'json'], // レポート形式
      reportsDirectory: '__tests__/coverage',     // 出力先
      exclude: [
        'node_modules/',
        'coverage/',
        '**/vitest.config.**',
      ],
      // 閾値設定（%）
      thresholds: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
      // 全体としての閾値
      // 100 にすると全コードがテストされていないと失敗
      },
    },
  },
});
