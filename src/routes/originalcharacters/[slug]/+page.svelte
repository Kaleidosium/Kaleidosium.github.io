<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{data.meta.title}" />
  <meta name="description" content="{data.meta.description}." />
  <meta property="og:description" content="{data.meta.description}." />
</svelte:head>

<article>
  <!-- Title -->
  <hgroup>
    <h2 class="title">{data.meta.title}</h2>
  </hgroup>

  <!-- Tags -->
  <p class="date --accent-font">
    <strong>Published at {formatDate(data.meta.date)}</strong>
  </p>
  <div class="tags">
    {#each data.meta.categories as category}
      <span class="surface-4">&num;{category}&nbsp</span>
    {/each}
  </div>

  <!-- Post -->
  <div class="prose">
    <svelte:component this="{data.content}"></svelte:component>
  </div>
</article>
