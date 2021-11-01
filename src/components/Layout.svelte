<script>
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import {
    faTwitter,
    faGithubAlt,
    faDeviantart,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

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
          <img
            id="icon-image"
            src="favicon.png"
            width="144"
            height="144"
            alt="Windows 98-styled Icon"
          />
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
        <div class="field-row">
          <div class="button-flex-container">
            <button
              onclick="window.open('https://twitter.com/altOverflow','_blank')"
              aria-label="My Twitter"><Fa icon={faTwitter} size="lg" /></button
            >
            <button
              onclick="window.open('https://github.com/IamRifki/','_blank')"
              aria-label="My GitHub"><Fa icon={faGithubAlt} size="lg" /></button
            >
            <button
              onclick="window.open('https://www.deviantart.com/daniaascii','_blank')"
              aria-label="My DeviantArt"
              ><Fa icon={faDeviantart} size="lg" /></button
            >
            <button
              onclick="window.open('https://www.youtube.com/c/DaniaRifki/','_blank')"
              aria-label="My YouTube"><Fa icon={faYoutube} size="lg" /></button
            >
          </div>
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
    max-width: 125px;
    height: auto;
    float: right;
    image-rendering: crisp-edges;
  }
  #header-name {
    margin: 0 0;
    font-size: 5rem;
  }
  #subheader {
    font-size: 1.3rem;
  }
  fieldset * {
    font-size: 14px !important;
  }
  .button-flex-container > button {
    padding: 0.25rem;
  }
  .button-flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 1100px) {
    #main-window {
      position: absolute;
      width: 50vw;
    }
  }
  @media only screen and (max-width: 850px) {
    #main-window {
      width: 85vw;
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
    .button-flex-container > button {
      height: 100%;
      width: 100%;
      margin: 0.25rem 0;
      object-fit: contain;
    }
    #header-name {
      font-size: 20vw;
      object-fit: contain;
    }
  }
</style>
