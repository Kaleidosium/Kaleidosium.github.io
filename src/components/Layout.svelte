<script>
  export let parsedUrl;
  export let videoDrugsDisable;

  function close() {
    document.getElementById("window-container").style.display = "none";
  }

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
      <span style="padding: 0 3rem"></span>
      <fieldset>
        <legend>Options</legend>
        <div class="field-row">
          <input type=checkbox bind:checked={videoDrugsDisable} id="videodrugs-checkbox">
          <label for="videodrugs-checkbox">Enable Video Drugs</label>
        </div>
        <div class="field-row">
          <button onclick="window.open('https://twitter.com/altOverflow','_blank')">Go to Twitter</button>
          <button onclick="window.open('https://github.com/IamRifki/','_blank')">Go to GitHub</button>
          <button onclick="window.open('https://furaffinity.net/user/daniaascii/','_blank')">Go to FurAffinity</button>
          <button onclick="window.open('https://twitter.com/art_overflow','_blank')">Go to Art Twitter</button>
          <button onclick="window.open('https://www.youtube.com/c/DaniaRifki/','_blank')">Go to YouTube</button>
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
  }
  .window {
    margin: auto;
  }
  #main-window {
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
