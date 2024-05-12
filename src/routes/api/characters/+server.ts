import { json } from '@sveltejs/kit';
import type { Characters } from '$lib/types';

async function getCharacters() {
  let posts: Characters[] = [];

  const paths = import.meta.glob('/src/characters/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Characters, 'slug'>;
      const post = { ...metadata, slug } satisfies Characters;
      post.published && posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) => first.name.localeCompare(second.name)
  );

  return posts;
}

export async function GET() {
  const posts = await getCharacters();
  return json(posts);
}
