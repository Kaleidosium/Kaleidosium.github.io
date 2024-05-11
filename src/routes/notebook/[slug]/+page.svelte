<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article>
  <!-- Title -->
  <hgroup>
    <h1 class="title">{data.meta.title}</h1>
    {#if data.meta.description}
      <div class="description">{data.meta.description}</div>
    {/if}
  </hgroup>

  <!-- Date and Tags -->
  <div class="meta">
    <span class="date --accent-font">
      <i>Published on {formatDate(data.meta.date)}</i>
    </span>
    <span>·</span>
    <span class="tags --accent-font --accent-color">
      {#each data.meta.categories as category}
        <span class="surface-4">&num;{category}&nbsp</span>
      {/each}
    </span>
  </div>

  <hr />

  <!-- Post -->
  <div class="prose">
    <svelte:component this="{data.content}"></svelte:component>
  </div>
</article>

<style lang="scss">
  .description {
    padding-bottom: 1rem;
  }
</style>