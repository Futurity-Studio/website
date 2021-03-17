const fs = require('fs');
const blogPostsFolder = './content/blogPosts';
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
const withPlugins = require('next-compose-plugins');
const sitemap = require('nextjs-sitemap-generator');
// const withPWA = require('next-pwa')


// do this for SEO - https://snipcart.com/blog/react-seo-nextjs-tutorial


const nextConfig = {
  distDir: 'build',
  webpack: (configuration, options) => {
  //   configuration.module.rules.push({
  //     test: /\.md$/,
  //     use: 'frontmatter-markdown-loader',
  //   })
  //   configuration.resolve.alias.images = path.join(__dirname, "images");
  //   return configuration
  },
  // async exportPathMap(defaultPathMap) {
  //   return {
  //     ...defaultPathMap,
  //     // ...getPathsForPosts(),
  //   }
  // },
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