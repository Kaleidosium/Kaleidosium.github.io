<script>
  import { onMount } from "svelte";
  import {
    BackgroundLayer as BGLayer,
    Engine,
  } from "earthbound-battle-backgrounds-rollup";

  let canvas;

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onMount(() => {
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
  });
</script>

<canvas bind:this={canvas} width={256} height={224} />
