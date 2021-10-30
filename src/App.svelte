<script>
  import Layout from "./components/Layout.svelte";
  import VideoDrugs from "./components/VideoDrugs.svelte";

  // Get Current URL
  const parsedUrl = new URL(window.location.href);
  // Define the variable that we'll use to check if VideoDrugs should be disabled
  const videoDrugsDisable =
    parsedUrl.searchParams.get("videodrugsdisable") === "true" ? false : true;
</script>

<!-- Check if VideoDrugs should be disabled -->
{#if videoDrugsDisable}
  <VideoDrugs />
{/if}

<Layout />
