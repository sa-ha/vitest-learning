// src/service.ts
import { log } from './logger';

export function process(data: string): string {
  log('Processing started');
  const result = data.toUpperCase();
  log('Processing finished');
  return result;
}