<script>
  import { onMount } from "svelte";

  export let parsedUrl;
  export let videoDrugsDisable;

  function close() {
    document.getElementById("window-container").style.display = "none";
  }

  // From https://stackoverflow.com/a/41737171
  // This version doesn't include the Events, but it's fine for here
  Element.prototype.drag = function (setupParameters) {
    const setup = setupParameters || {};

    // document mousemove
    const mousemove = ({ clientX, clientY }) => {
      this.style.left = `${clientX - this.dragStartX}px`;
      this.style.top = `${clientY - this.dragStartY}px`;
    };

    // document mouseup
    const mouseup = (e) => {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    };

    const handle = setup.handle || this;

    // element mousedown
    handle.addEventListener("mousedown", ({ offsetX, offsetY }) => {
      this.dragStartX = offsetX;
      this.dragStartY = offsetY;

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);

      handle.classList.add("dragging");
    });

    handle.classList.add("draggable");

    this.style.position = "absolute"; // fixed might work as well
  };

  onMount(() => {
    const setup = {
      handle: document.querySelector(".title-bar"),
    };
    document.querySelector(".window").drag(setup);
  });
</script>

<div id="window-container">
  <div class="window" id="main-window">
    <div class="title-bar">
      <div class="title-bar-text">
        <img
          id="icon-image"
          src="favicon.png"
          width="16px"
          height="16px"
          alt="Windows 98-styled Icon"
        />
        {parsedUrl}
      </div>
      <div class="title-bar-controls">
        <!-- <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button> -->
        <button on:click={close} aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <div class="flex-container">
        <div class="col">
        <h1 id="header-name">kaleidosium</h1>
        <span id="subheader">
          Formally known as Dania Rifki. Programmer/Artist from Jakarta.
        </span>
      </div>
      </div>
      <span style="padding: 0 1rem" />
      <fieldset>
        <legend>Options</legend>
        <div class="field-row" id="videodrugs-checkbox-row">
          <input
            type="checkbox"
            bind:checked={videoDrugsDisable}
            id="videodrugs-checkbox"
          />
          <label for="videodrugs-checkbox">Enable Video Drugs</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Links</legend>
        <div class="field-row">
          <a href="https://twitter.com/kaleidosium">Twitter</a>
          <a href="https://github.com/kaleidosium/">GitHub</a>
          <a href="https://www.deviantart.com/daniaascii">DeviantArt</a>
          <a href="https://www.youtube.com/c/DaniaRifki/">YouTube</a>
          </div>
      </fieldset>
    </div>
  </div>
</div>

<style>
  #window-container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .window {
    margin: auto;
  }
  #main-window {
    position: absolute;
    width: 40vw;
  }
  .window-body {
    padding: 0.1rem;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
  }
  #icon-image {
    width: 100%;
    max-width: 12px;
    height: auto;
    float: left;
    padding-right: 5px;
    image-rendering: crisp-edges;
  }
  #header-name {
    margin: 0 0;
    font-size: 5rem;
  }
  #subheader {
    font-size: 16px !important;
  }
  fieldset * {
    font-size: 14px !important;
  }
  @media only screen and (max-width: 1300px) {
    #main-window {
      position: absolute;
      width: 50vw;
    }
  }
  @media only screen and (max-width: 1100px) {
    #main-window {
      position: absolute;
      width: 60vw;
    }
  }
  @media only screen and (max-width: 850px) {
    #main-window {
      width: 80vw;
    }
    #videodrugs-checkbox-row {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    #icon-image {
      display: none;
    }
    .field-row {
      display: block;
      margin: 0;
    }
    #header-name {
      font-size: 10vw;
      object-fit: contain;
    }
  }
</style>
