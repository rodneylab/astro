---
description: "Astro vanilla-extract: how to set up vanilla-extract in your Astro project for zero runtime overhead styling, theming, contracts and more."
layout: "~layouts/BaseLayout.astro"
title: "Newsletter: 16-Nov-2022 — Issue #1"
---

## Pick of the month &mdash; Directus

Have you tried Directus yet? It’s a content management system backed by an SQL database with some great developer and user experience features. For example, you can **upload data to the DB as JSON files**. Another feature I liked was the image API. Once you upload your full-res JPEG images, their API makes any sharp plugin transformation available. As well as **generate smaller WebP images**, you can resize for **responsive image sets** or thumbnails, or even apply sharp image transforms.

We used Directus in the [latest Plus tutorial to store product data and images for a SvelteKit eCommerce site using Snipcart](https://plus.rodneylab.com/tutorials/svelte-ecommerce-site). Nice linking Directus right through from JSON inputs to the site and onto eCommerce structured SEO data loved by Google.

## Follower Feedback

Thanks for all your feedback and **post ideas**. My favourite recently was to write a blog post on deploying a **SvelteKit node app**. With services like Cloudflare, Netlify and Render offering free or affordable hosting, and let’s not forget convenience, it’s been a while since I spun up a **self-managed Linux server**. Doing so does brings a lot of advantages. For example we were able to run node on the server and use the **sharp image plugin**. There is also much scope for optimisation with nginx caching, plus **Redis caching at no extra cost**. It’s not ideal for every project, though, I still recommend trying it out on a hobby project — not just for the enjoyment but also to keep skills current.

Was fun using this app as a excuse to [try out some future CSS using :has in hover images and springy overscroll](https://rodneylab.com/svelte-css-image-slider/). The two part post, was split into building the site locally and deploying to Linode. You can [jump straight in to the second one](https://rodneylab.com/sveltekit-node-app-deploy/) if you’re not as excited by the CSS as I am!

## Fun Finds

- **Git Repo** — [**Whisper Speech-to-Text**](https://github.com/openai/whisper): already amazed at how awesome Google and Descript transcription are, I was mind-blown to try our Whisper. On a GPU it took about four minutes to transcribe a minute of audio (was about an hour per minute on my local machine 😅). Accuracy was impeccable, it seems to pick up the context too; correctly capitalising technical terms.

- **Tooling** — [**`vite-node`**](https://www.npmjs.com/package/vite-node) - if you have projects where you need to run node scripts, before or after your build, it can be annoying to make import aliases (`$lib` in SvelteKit or `~components` in Astro) work when your script needs to reference them. `vite-node` takes care of this for you and supports TypeScript too. Config is fairly straightforward.
- **Resources** — [**web.dev patterns**](https://web.dev/patterns/): check out this site. There’s example code for just about any Web API you can imagine.

## Until next time!

Hope there was something valuable in here for you, as always reach out with feedback and until next time, here’s a few highlight posts/tutorials:

- [Get started with SvelteKit Headless WordPress](https://plus.rodneylab.com/tutorials/get-started-sveltekit-headless-wordpress)
- [Fastify GraphQL API Stack](https://rodneylab.com/fastify-graphql-api-stack/)
- [Trying out Deno Fresh](https://rodneylab.com/trying-out-deno-fresh/)
