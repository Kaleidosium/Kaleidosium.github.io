<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<svelte:head>
  <title>Notebook</title>
</svelte:head>

<section>
  <h1 id="Title" class="title">Notebook</h1>

  <p>
    A collection of writings and announcements which I deem appropriate to be hosted on this site.
  </p>
  <ul class="posts">
    {#each data.posts as post}
      <li class="post">
        <a href={post.slug} class="title">{post.title}</a> -
        <span class="date">{formatDate(post.date)}</span>
      </li>
    {/each}
  </ul>
</section>
