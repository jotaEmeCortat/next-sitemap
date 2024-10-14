/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000', // Your website's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 7000, // Number of URLs per sitemap file
  // ...other options
};
