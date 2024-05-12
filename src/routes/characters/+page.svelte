<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Original Characters</title>
</svelte:head>

<section>
  <h1 id="Title" class="title">Original Characters</h1>

  <p>My Original Characters! The most important ones.</p>
  <ul class="posts">
    {#each data.characters as character}
      <li class="post">
        <a href="{`characters/${character.slug}`}" class="title">{character.name}</a>
      </li>
    {/each}
  </ul>
</section>
