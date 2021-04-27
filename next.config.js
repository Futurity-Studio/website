const fs = require('fs');
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
const withPlugins = require('next-compose-plugins');
const sitemap = require('nextjs-sitemap-generator');
// const withPWA = require('next-pwa')
// -- todo -  this for SEO - https://snipcart.com/blog/react-seo-nextjs-tutorial

const nextConfig = {
  distDir: 'build',
  webpack: (configuration, options) => {
  },
  target: 'serverless',
};

module.exports = withPlugins([
  [ withOptimizedImages, {
    webpack(config){
      config.resolve.alias.images = path.join(__dirname, "images");
      return config;
    },
    // optimizeImagesInDev: true
  }],
  // [ withPWA, {
  //   pwa: {
  //     dest: 'public'
  //   }
  // }],
], nextConfig);