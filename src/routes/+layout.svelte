<script lang="ts">
  import * as config from '$lib/config';
  import KaleidosiumSymbol from '$lib/images/kaleidosium_symbol.svelte';

  import '../scss/app.scss';
  import '../scss/dark.scss';
  import '../scss/print.scss';
</script>

<svelte:head>
  <meta name="msapplication-TileColor" content="#c89dcc" />
  <meta name="theme-color" content="#89029c" />
  <meta property="og:image" content="/favicon.png" />
  <link
    rel="stylesheet"
    media="screen"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-dark.min.css"
  />
</svelte:head>

<body>
  <div class="section-container">
    <section class="sidebar">
      <nav>
        <div id="logo-image">
          <a href="/">
            <KaleidosiumSymbol></KaleidosiumSymbol>
          </a>
        </div>
        <hr />
        <!-- <button id="menu-toggle" class="menu-toggle">Menu</button> -->
        <div id="nav-links" class="nav-links collapsed">
          <a class="nav-element" href="/">Home</a>
          <ul>
            <li class="nav-header">Creations</li>
            <li class="nav-element">
              <a href="/notebook">Notebook</a>
            </li>
            <!-- <li class="nav-element">
              <a href="/">Programming</a>
            </li> -->
            <li class="nav-element">
              <a href="/characters">Original Characters</a>
            </li>
          </ul>
          <ul>
            <li class="nav-header">Info</li>
            <li class="nav-element">
              <a href="/about">About</a>
            </li>
            <!-- <li class="nav-element">
              <a href="/">Links and Contact</a>
            </li> -->
          </ul>
          <hr />
        </div>
      </nav>
    </section>
    <section class="content">
      <div class="content-container"><slot></slot></div>
    </section>
  </div>
</body>
