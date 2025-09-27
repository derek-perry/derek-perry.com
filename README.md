# Derek-Perry.com

**Code for Derek Perry's Portfolio/Website, derek-perry.com.**

**Made Using:** [Astro v5](https://astro.build), [Decap CMS](https://decapcms.org), [DecapBridge](https://decapbridge.com), [Netlify](https://netlify.com)

---

## Links

* **Derek-Perry.com Website:** [derek-perry.com](https://derek-perry.com)
* **Derek-Perry.com GitHub:** [github.com/derek-perry/derek-perry.com](https://github.com/derek-perry/derek-perry.com)
* **Website By:** [Derek Perry](https://derek-perry.com)

---

## Copyright/License Information

**Copyright © 2025 [Derek Perry](https://derek-perry.com)**

**Some rights reserved.**

Use of [the code for the Derek-Perry.com](https://github.com/derek-perry/derek-perry.com "Visit the GitHub repo for the derek-perry.com") is licensed under the [Creative Commons Zero v1.0 Universal license](https://creativecommons.org/publicdomain/zero/1.0). [Derek-Perry.com](https://github.com/derek-perry/derek-perry.com "Visit the GitHub repo for the derek-perry.com") uses the [Output Starter](https://github.com/outputwebsites/stater "Output Starter GitHub Repository") which is also licensed under the [Creative Commons Zero v1.0 Universal license](https://creativecommons.org/publicdomain/zero/1.0).

The font used on this website is [Saira](https://github.com/Omnibus-Type/Saira "View the Saira font by Omnibus-Type on GitHub") by Omnibus-Type ([omnibus-type.com](https://omnibus-type.com) | [omnibus.type@gmail.com](mailto:omnibus.type@gmail.com)) (Copyright 2020 Omnibus-Type) (Licensed under [SIL Open Font License 1.1](http://scripts.sil.org/OFL)).

---

## Development Information

### Getting Started

1. Clone this repository to your local machine.
2. Open a cmd window in the root of that cloned folder.
3. Run `npm install` to install all dependencies.
4. Run `npm run dev` to start the project and spin up a development server on `localhost:4321` and a Decap CMS admin server. Access the admin dashboard at `localhost:4321/admin`.

### Configuring the CMS

In `public/admin/` , you'll find a `config.yml` file which contains the configuration for the blog. While this project is set up to work with a blog out of the box, you are welcome to make changes using
the [Decap CMS documentation](https://decapcms.org/docs/add-to-your-site/#configuration).

Blog content lives in `/src/content/blog` in the form of markdown files, with a front matter similar to that of the pages. MDX files can also be used if you want to include JSX components. The title, description, and tags are defined in the frontmatter of the markdown. The permalink will be the same as the file name.

Files uploaded through the dashboard's media library will be stored in `src/assets/images/media` so that they can be accessed and optimised by Astro components if you wish.

When `npm run dev` is run, a proxy server for the CMS is spun up on `localhost:8081` . That can often mean you run into errors if `localhost:8080` is already taken, so look out for that. You can locally access the blog via navigating to the `/admin` path (e.g. `http://localhost:4321/admin` ). While running the local dev server, you won't need to login to access the admin dashboard. All blog content can be easily created, updated and deleted via this admin panel, and is the very system that your clients can use to manage their website without your involvement. 

Everything on the blog should be fairly intuitive, but feel free to experiment with using this panel first.

**NOTE:** With this kit, you can add _featured_ to the comma-separated list of tags to have them show up as so in the frontend.

### Astro content collections

In `/src/content` , you will see a `config.ts` file. This is where you can configure [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/). This step is **not necessary** to run the blog with Decap CMS, but it will supercharge your Astro pages and content. Collections help to 
  + organize your documents, 
  + validate your frontmatter, 
  + provide automatic TypeScript type-safety for all of your content, 
  + use Astro's `<Image />` and `<Picture />` components with user-uploaded images via the CMS. 

This template already has Content Collections configured for immediate use of the blog content, but you could use them to power up the Portfolio or Gallery for example.

Content Collections can also be used on content that is not created via the CMS.

### Sitemap Configuration

This template includes automatic sitemap generation using [ `@astrojs/sitemap` ](https://docs.astro.build/en/guides/integrations-guide/sitemap). The sitemap helps search engines better crawl and index your site.

#### Features

* Automatically generates `sitemap-index.xml` and `sitemap-0.xml`
* Excludes admin routes from indexing
* No manual XML creation needed

#### Configuration

The sitemap is pre-configured in `astro.config.mjs` . Here's what's included:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://yourwebsite.com', // Replace with your site URL
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/admin'),
            changefreq: 'weekly',
            priority: 0.7
        })
    ]
});
```

> Note: Make sure to replace `https://yourwebsite.com` with your actual site URL in `astro.config.mjs` and `robots.txt` .

Fore more configuration options, read the [full Astro Sitemap documentation](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

### Deployment

0. **Before** you deploy, it is recommended to test the build. Run `npm run build` to build the project. Once done, run `npm run preview` which you can access on `http://localhost:4321/`. This allows you to test your website as if it was deployed on your host. 
1. Ensure the astro.config.mjs, client.json, robots.txt and \_redirects have been filled out. 
2. Navigate to your Netlify Admin Panel, click _Add new site | Import an existing project_
3. Follow the instructions to connect your GitHub repository to Netlify.
4. Once deployed, go to the project's page, click on `Site configuration` then `Identity` in the navigation, then click `Enable Identity`
5. Invite yourself, and the client, to the site
6. While in the Identity tab, click the "Settings and usage" button to open the settings options. Then, do the following:
    - Go to `Registration / Registration Preferences`, and set registration from Public to Invite Only
    - Go to `Registration / External Providers` and add a provider. We recommend Google, so the client can login with Google in 1 click.
    - Go to `Services / Git Gateway` and enable it.
