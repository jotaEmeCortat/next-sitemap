# How to Install and Use `next-sitemap` in a Next.js App: A Step-by-Step Guide

[#nextjs](https://dev.to/t/nextjs)[#seo](https://dev.to/t/seo)[#javascript](https://dev.to/t/javascript)[#frontend](https://dev.to/t/frontend)

If you're building a website with Next.js, you likely want search engines to discover and index your pages efficiently. One way to improve this process is by creating a sitemap. A sitemap is a file that lists all the URLs on your website, helping search engines like Google crawl and index your site faster.

In this guide, we'll walk through how to install and configure `next-sitemap` in a Next.js project. We'll also cover the benefits of having a sitemap and include sample code with a "Hello World" Next.js app to illustrate how it works.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#benefits-of-using-raw-nextsitemap-endraw-)Benefits of Using `next-sitemap`

Before we dive into the installation process, let’s briefly discuss the key benefits of using `next-sitemap`:

1.  **Improved SEO**: A well-structured sitemap helps search engines like Google discover your pages more efficiently, leading to better indexing and potentially higher search rankings.
2.  **Faster Crawling**: By providing search engines with a roadmap of your website, you allow them to crawl and index your pages faster.
3.  **Handling Dynamic Routes**: For websites with dynamic routes, `next-sitemap` makes it easy to generate URLs for dynamic content, ensuring that all your pages are discoverable.
4.  **Custom Sitemaps**: `next-sitemap` allows you to customize your sitemaps with options like setting priority, change frequency, and even excluding certain pages.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#step-1-install-raw-nextsitemap-endraw-)Step 1: Install `next-sitemap`

To get started, you'll need to install the `next-sitemap` package in your Next.js project. Run the following command in your terminal:

```bash
npm install next-sitemap
```

Or, if you're using Yarn:

```bash
yarn add next-sitemap
```

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#step-2-create-raw-nextsitemapjs-endraw-configuration-file)Step 2: Create `next-sitemap.js` Configuration File

After installing the package, the next step is to create a configuration file named `next-sitemap.config.js` at the root of your project. This file will contain settings for generating your sitemap.

Here’s a basic configuration:

```js
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://localhost:3000', // Your website's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 7000, // Number of URLs per sitemap file
  // ...other options
};
```

In the above code, we’re specifying the base URL for your site using `siteUrl`. The `generateRobotsTxt` option generates a `robots.txt` file alongside the sitemap, and `sitemapSize` determines the number of URLs to include in each sitemap file.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#step-3-update-raw-packagejson-endraw-with-sitemap-script)Step 3: Update `package.json` with Sitemap Script

Now, you’ll need to add a script to your `package.json` file to generate the sitemap whenever you build your project.

Here’s how to do it:

```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}
```

This will ensure that after each build, the sitemap is automatically generated based on your configuration.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#step-4-build-and-generate-the-sitemap)Step 4: Build and Generate the Sitemap

Now that everything is set up, run the following command to build your project and generate the sitemap:

```
npm run build

```

Or with Yarn:

```
yarn build

```

After the build is complete, a `sitemap.xml` file (and optionally a `robots.txt` file) will be generated in the `public/` folder of your project. These files will contain all the URLs of your Next.js app, ready to be crawled by search engines.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#example-hello-world-nextjs-app-with-raw-nextsitemap-endraw-)Example: "Hello World" Next.js App with `next-sitemap`

To demonstrate how `next-sitemap` works, let’s create a simple "Hello World" Next.js app. Here’s a basic Next.js page:

```
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to my Next.js app!</p>
    </div>
  );
}

```

Now, configure your `next-sitemap.config.js` like this:

```
// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
};

```

Next, add the following to your `package.json`:

```
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}

```

After running `npm run build`, you’ll find your sitemap in the `public/` directory, containing the URL for your "Hello World" homepage.

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#live-demo)Live Demo

My website [https://rajeshkumaryadav.com](https://rajeshkumaryadav.com/) is using this package to auto generate the sitemap on build process. Below is the robot.txt which contains sitemap.xml

[https://rajeshkumaryadav.com/robots.txt](https://rajeshkumaryadav.com/robots.txt)  
[https://www.rajeshkumaryadav.com/sitemap.xml](https://www.rajeshkumaryadav.com/sitemap.xml)  
[https://www.rajeshkumaryadav.com/sitemap-0.xml](https://www.rajeshkumaryadav.com/sitemap-0.xml)

## [](https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l#conclusion)Conclusion

By following the steps outlined in this guide, you’ve now integrated `next-sitemap` into your Next.js project. This tool provides an easy way to generate a sitemap and `robots.txt` file, which can significantly improve your website’s SEO and ensure that search engines can efficiently discover all of your content.

With this setup, you’re well on your way to making your Next.js app more search-engine-friendly and better indexed!
