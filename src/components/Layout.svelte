<script>
  import { onMount } from "svelte";

  export let parsedUrl;
  export let videoDrugsDisable;

  function close() {
    document.getElementById("window-container").style.display = "none";
  }

  // From https://stackoverflow.com/a/41737171
  Element.prototype.drag = function (setupParameters) {
    let setup = setupParameters || {};

    // document mousemove
    const mousemove = (e) => {
      this.style.left = `${e.clientX - this.dragStartX}px`;
      this.style.top = `${e.clientY - this.dragStartY}px`;

      setup.ondrag && setup.ondrag(e); // ondrag event
    };

    // document mouseup
    const mouseup = (e) => {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);

      handle.classList.remove("dragging");

      setup.ondragend && setup.ondragend(e); // ondragend event
    };

    let handle = setup.handle || this;

    // element mousedown
    handle.addEventListener("mousedown", (e) => {
      this.dragStartX = e.offsetX;
      this.dragStartY = e.offsetY;

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);

      handle.classList.add("dragging");

      setup.ondragstart && setup.ondragstart(e); // ondragstart event
    });

    handle.classList.add("draggable");

    setup.ondraginit && setup.ondraginit(e); // ondraginit event
  };

  onMount(() => {
    const setup = {
      handle: document.querySelector(".title-bar"),
      // ondragstart : e => { document.querySelector(".draggable.dragging").cursor = "grabbing" },
      // ondrag      : e => { console.log('drag!'); },
      ondragend: (e) => {
        document.querySelector(".draggable.dragging").cursor = "grab";
      },
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
          width="32px"
          height="32px"
          alt="Windows 98-styled Icon"
          style="image-rendering: pixelated"
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
          <h1 id="header-name">Kaleidosium</h1>
          <span id="subheader">
            The element of beautiful forms.
          </span>
        </div>
      </div>
      <span style="padding: 0 1rem" />
      <fieldset id="fieldset-options">
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
      <fieldset id="fieldset-links">
        <legend>Links</legend>
        <div class="field-row slash-prefix">
          <a href="https://kaleidosium.github.io/md/">md</a>
          <a href="https://twitter.com/kaleidosium">twitter (art only)</a>
          <a href="https://liberal.lgbt/@kaleidosium">mastodon</a>
          <a href="https://kaleidosium.tumblr.com">tumblr</a>
          <a href="https://github.com/kaleidosium">github</a>
          <a href="https://kaleidosium.newgrounds.com">newgrounds</a>
          <a href="https://youtube.com/@Kaleidosium">youtube</a>
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
  .slash-prefix a::before {
    content: "/";
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
    #fieldset-options,
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
