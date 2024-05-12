import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const character = await import(`../../../characters/${params.slug}.md`);

    return {
      content: character.default,
      meta: character.metadata,
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
