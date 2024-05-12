<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{data.meta.name}" />
  <meta name="description" content="{data.meta.description}." />
  <meta property="og:description" content="{data.meta.description}." />
</svelte:head>

<article>
  <!-- Title -->
  <hgroup>
    <h1 class="title">{data.meta.name}</h1>
  </hgroup>

  <!-- Post -->
  <div class="prose">
    <svelte:component this="{data.content}"></svelte:component>
  </div>
</article>
