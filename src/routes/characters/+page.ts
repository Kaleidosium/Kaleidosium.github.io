import type { Characters } from '$lib/types';

export async function load({ fetch }) {
  const response = await fetch('api/characters');
  const characters: Characters[] = await response.json();
  return { characters };
}
