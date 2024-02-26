import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [remarkUnwrapImages],
  rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors

  // Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
  extensions: ['.svelte', '.md'],

  preprocess: [
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: ['.md'],

      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      // rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    [vitePreprocess(), mdsvex(mdsvexOptions)],
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({ fallback: '404.html' }),
  },
};

export default config;
