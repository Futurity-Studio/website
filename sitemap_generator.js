const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'www.futurity.studio',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'public/'
});