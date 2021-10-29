<script>
    import { onMount } from 'svelte';
    import { BackgroundLayer, Engine } from "earthbound-battle-backgrounds-rollup";

    let canvas;

    onMount(() => {
        const engine = new Engine([new BackgroundLayer(153), new BackgroundLayer(298)], {
            canvas: context,
        });
        engine.animate();
    });
</script>

<canvas
    bind:this={canvas}
    width={256}
    height={224}
></canvas>