// src/services/api.ts
export const fetchUser = async (id: number): Promise<{ id: number; name: string }> => {
  if (id <= 0) throw new Error('Invalid ID');
  return { id, name: `User ${id}` };
}