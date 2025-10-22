// src/config.ts
export interface AppConfig {
  apiUrl: string;
  timeout: number;
  isDebug: boolean;
}

export function loadConfig(): AppConfig {
  return {
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    timeout: parseInt(process.env.TIMEOUT_MS || '5000', 10),
    isDebug: process.env.DEBUG === 'true',
  };
}