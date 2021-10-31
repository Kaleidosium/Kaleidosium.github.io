<script>
  import { onMount } from "svelte";

  export let parsedUrl;
  export let videoDrugsDisable;

  function close() {
    document.getElementById("window-container").style.display = "none";
  }

  function dragElement(elmnt) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  onMount(() => {
    dragElement(document.getElementById("main-window"));
    console.log("ASSERT!")
  });
</script>

<div id="window-container">
  <div class="window" id="main-window">
    <div class="title-bar">
      <div class="title-bar-text">{parsedUrl}</div>
      <div class="title-bar-controls">
        <!-- <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button> -->
        <button on:click={close} aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <div class="flex-container">
        <div class="col">
          <h1 id="header-name">IamRifki</h1>
          <span id="subheader">
            Also known as <u>alt</u>Overflow. Programmer/Artist from Jakarta.
          </span>
        </div>
        <div class="col">
          <img id="icon-image" src="favicon.png" alt="Windows 98-styled Icon" />
        </div>
      </div>
      <span style="padding: 0 3rem" />
      <fieldset>
        <legend>Options</legend>
        <div class="field-row">
          <input
            type="checkbox"
            bind:checked={videoDrugsDisable}
            id="videodrugs-checkbox"
          />
          <label for="videodrugs-checkbox">Enable Video Drugs</label>
        </div>
        <div class="field-row">
          <button
            onclick="window.open('https://twitter.com/altOverflow','_blank')"
            >Go to Twitter</button
          >
          <button onclick="window.open('https://github.com/IamRifki/','_blank')"
            >Go to GitHub</button
          >
          <button
            onclick="window.open('https://furaffinity.net/user/daniaascii/','_blank')"
            >Go to FurAffinity</button
          >
          <button
            onclick="window.open('https://twitter.com/art_overflow','_blank')"
            >Go to Art Twitter</button
          >
          <button
            onclick="window.open('https://www.youtube.com/c/DaniaRifki/','_blank')"
            >Go to YouTube</button
          >
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
    width: 45vw;
  }
  .window-body {
    padding: 0.5rem;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
  }
  #icon-image {
    width: 100%;
    max-width: 125px;
    height: auto;
    float: right;
    image-rendering: crisp-edges;
  }
  #header-name {
    margin: 0 0;
    font-size: 10vh;
  }
  #subheader {
    font-size: 2vh;
  }
  @media only screen and (max-width: 850px) {
    #main-window {
      width: 80vw;
    }
  }
</style>
