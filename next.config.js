const withOptimizedImages = require("next-optimized-images");
const path = require("path");
const withPlugins = require('next-compose-plugins');
// -- todo -  this for SEO - https://snipcart.com/blog/react-seo-nextjs-tutorial

const nextConfig = {
  target: 'serverless',
};

module.exports = withPlugins([
  [ withOptimizedImages, {
    webpack(config){
      config.resolve.alias.images = path.join(__dirname, "images");
      return config;
    },
  }],
], nextConfig);