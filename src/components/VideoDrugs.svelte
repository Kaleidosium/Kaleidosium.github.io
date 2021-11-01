<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import {
    BackgroundLayer as BGLayer,
    Engine,
  } from "earthbound-battle-backgrounds-rollup";

  // Define some variables
  let canvas;
  let onLoad = false;

  // Get random integer from a min and a max
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onMount(() => {
    // This will load first by setting onLoad to True
    setTimeout(() => (onLoad = true), 50);

    // This will load second, initialise EBB's Engine
    setTimeout(() => {
      const engine = new Engine(
        [
          new BGLayer(
            randomIntFromInterval(BGLayer.MINIMUM_LAYER, BGLayer.MAXIMUM_LAYER)
          ),
          new BGLayer(
            randomIntFromInterval(BGLayer.MINIMUM_LAYER, BGLayer.MAXIMUM_LAYER)
          ),
        ],
        {
          canvas,
        }
      );
      engine.animate();
    }, 100);
  });
</script>

<!-- 
  If the website is already loaded, 
  insert the canvas declaration 
-->
{#if onLoad}
  <canvas bind:this={canvas} width="256px" height="224px" in:fade={{ duration: 3500 }} />
{/if}

<style>
  canvas {
    position: fixed;
    display: block;
    height: 100vh;
    width: 100vw;
    image-rendering: pixelated;
    z-index: -1;
  }
</style>
