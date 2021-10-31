<script>
  import Layout from "./components/Layout.svelte";
  import VideoDrugs from "./components/VideoDrugs.svelte";

  // Get Current URL
  let parsedUrl = new URL(window.location.href);
  // Define the variable that we'll use to check if VideoDrugs should be disabled
  let videoDrugsDisable =
    parsedUrl.searchParams.get("videodrugsdisable") === "true" ? false : true;
</script>

<!-- Check if VideoDrugs should be disabled -->
{#if window.innerWidth >= "650"} 
  {#if videoDrugsDisable }
    <VideoDrugs />
  {/if}
{/if}

<Layout bind:parsedUrl bind:videoDrugsDisable />
