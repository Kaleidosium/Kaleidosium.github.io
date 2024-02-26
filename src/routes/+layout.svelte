<script lang="ts">
  import * as config from '$lib/config';

  import '../scss/app.scss';
  import '../scss/dark.scss';
  import '../scss/print.scss';
</script>

<svelte:head>
  <meta name="description" content="{config.description}." />
  <meta name="msapplication-TileColor" content="#c89dcc" />
  <meta name="theme-color" content="#89029c" />
  <meta property="og:title" content={config.title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:description" content="{config.description}." />
  <link
    rel="stylesheet"
    media="screen"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-dark.min.css"
  />

  <link rel="stylesheet" media="screen" href="https://unpkg.com/sanitize.css" />
  <link rel="stylesheet" media="screen" href="https://unpkg.com/sanitize.css/reduce-motion.css" />
  <link rel="stylesheet" media="all" href="https://unpkg.com/sanitize.css/typography.css" />
</svelte:head>

<body>
  <div class="section-container">
    <section class="sidebar">
      <nav>
        <div id="logo-image">
          <a href="/">
            <svg
              alt="The Kaleidosium Symbol, A mauveine compass rose symbolising technological progress and a hopeful future"
              width="160px"
              height="160px"
              id="kaleidosium-symbol"
              data-name="kaleidosium-symbol"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path
                d="M441.29,949.51l-5.49-16.7h0A437.76,437.76,0,0,1,67.19,564.2L50.5,558.71,19,548.35,1.81,542.7A500.09,500.09,0,0,0,457.3,998.19L451.65,981Z"
              />
              <path
                d="M50.49,441.29l16.7-5.49A437.79,437.79,0,0,1,435.8,67.19l5.49-16.69L451.65,19,457.3,1.81A500.09,500.09,0,0,0,1.81,457.3L19,451.65Z"
              />
              <path
                d="M558.71,50.49l5.49,16.7A437.79,437.79,0,0,1,932.81,435.8l16.69,5.49L981,451.65l17.19,5.65A500.09,500.09,0,0,0,542.7,1.81L548.35,19Z"
              />
              <path
                d="M949.51,558.71l-16.7,5.49A437.79,437.79,0,0,1,564.2,932.81l-5.49,16.69L548.35,981l-5.65,17.19A500.09,500.09,0,0,0,998.19,542.7L981,548.35Z"
              />
              <polygon
                points="363.36 712.54 344.58 655.42 287.46 636.64 234.52 741.45 222.26 765.73 210 790 234.27 777.74 258.55 765.48 363.36 712.54"
              />
              <polygon
                points="210 210 222.26 234.27 234.52 258.55 287.46 363.36 344.58 344.58 363.36 287.46 258.55 234.52 234.27 222.26 210 210"
              />
              <polygon
                points="636.64 287.46 655.42 344.58 712.54 363.36 765.48 258.55 777.74 234.27 790 210 765.73 222.26 741.45 234.52 636.64 287.46"
              />
              <polygon
                points="765.48 741.45 712.54 636.64 655.42 655.42 636.64 712.54 741.45 765.48 765.73 777.74 790 790 777.74 765.73 765.48 741.45"
              />
              <polygon
                points="600.52 694.3 600.52 694.29 623.73 623.73 694.29 600.52 694.3 600.52 780.37 572.22 937.01 520.71 968.51 510.35 1000 500 968.51 489.64 937.01 479.29 780.37 427.78 694.3 399.48 694.29 399.48 623.73 376.27 600.52 305.71 600.52 305.7 572.22 219.63 520.71 62.99 510.35 31.49 500 0 489.65 31.49 479.29 62.99 427.78 219.63 399.48 305.7 399.48 305.71 376.27 376.27 305.71 399.48 305.7 399.48 219.63 427.78 62.99 479.29 31.49 489.64 0 500 31.49 510.35 62.99 520.71 219.63 572.22 305.7 600.52 305.71 600.52 376.27 623.73 399.48 694.29 399.48 694.3 427.78 780.37 479.29 937.01 489.65 968.51 500 1000 510.35 968.51 520.71 937.01 572.22 780.37 600.52 694.3"
              />
            </svg>
            <!-- </a> -->
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
            <!-- TODO(Kal): Finish the Original Characters Section -->
            <!-- <li class="nav-element">
              <a href="/originalcharacters">Original Characters</a>
            </li> -->
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
      <div class="content-container"><slot /></div>
    </section>
  </div>
</body>
