// src/userService.ts
export async function getUser(id: number): Promise<string> {
  const res = await fetch(`https://api.example.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  return data.name;
}