+++
title = "Website Redesign"
date = 2023-03-31
categories = "opinion, lovelace"
+++

Well, It's finally here, my site redesign is finally finished after months of wanting to touch WebDev after [I was finished with HEXES](https://kaleidosium.itch.io/hexes). I'm making a small writeup on this topic because I really like this look.

## The Design

I started 2023 off with some revisions to my "design philosophy", you can probably guess I was much influenced by Dieter Rams.

- All design philosophies should be applied with restraint
- Design should be honest
- Design should be unobtrusive
- Design should be accessible by default
- Design when applied, should be functional
- Design should have personality
- Design should be durable, ideally last forever

On the one hand, I'm not a huge fan of clinical minimalism in some modern websites, on the other hand, I'm also not a fan of overt skeuomorphs and detail in most "Web 1.0" websites, they're just not me. My current design philosophy merges what I think are the best of both worlds. This website, along with my new logo are the products of it.

For the site, I went for a sort-of design brutalism, it's comparatively bare and doesn't have much going on, If you removed the scrolling BG which I added for some personality, there's nothing much interesting going on. Regardless I feel quite happy with what I've made.

I've also added a printer-friendly layout if anyone is interested in printing my site.

## The Code

While I don't have much to say about the design of the website, the code I have plenty to say. This website was made with the [Zola SSG](https://www.getzola.org/), It's pretty barebones and has a learning curve, but it is very flexible and powerful if you manage to wield it.

The stylesheets were done in SCSS, which I love and missed working with for the longest time. One feature that I quite like is the lack of JavaScript use for the website, while I'm not a anti-JS luddite like *some people*, I do believe in minimising the usage of it when possible.

The HTML is also mainly semantic to make it work nice with screen readers and increase accessibility. I was inspired by the [CUBE CSS](https://cube.fyi/) methodology for the styling structure of the website, particularly since I wasn't a huge fan of BEM's avoidance of CSS when I designed websites in the past, and CUBE made CSS genuinely enjoyable for me again, albeit I did diverge from the methodology in minor ways.

I tried to be economical with the styling and not rely on expensive CSS tricks, while the website won't run on early Web 2.0 browsers, I think it's a safe bet that [it could run on IE 11 with minimal hiccups](https://caniuse.com/flexbox). I tried to be as universal as possible for the layouts of the site, with the mobile friendly layout being achievable in only a few blocks of media queries.

While I planned on adding a Dark/Light mode toggle, it required JavaScript, and I could not seem to get a minimal version working, so I decided to just use `prefers-color-scheme: dark` instead.

---

And I think that's all I have to say, thank you for spending the time to read this article!
