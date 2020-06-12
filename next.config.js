const fs = require('fs');
const blogPostsFolder = './content/blogPosts';
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
const withPlugins = require('next-compose-plugins');


// do this for SEO - https://snipcart.com/blog/react-seo-nextjs-tutorial

const getPathsForPosts = () => {
  fs.readdirSync(blogPostsFolder).reduce((acc, blogName) => {
    const trimmedName = blogName.substring(0, blogName.length - 3)
    return Object.assign(acc, {
      [`/blog/post/${trimmedName}`]: {
        page: '/blog/post/[slug]',
        query: {
          slug: trimmedName,
        },
      },
    })
  }, {})
};


const nextConfig = {
  distDir: 'build',
  webpack: (configuration, options) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    configuration.resolve.alias.images = path.join(__dirname, "images");
    return configuration
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    }
  },
};

module.exports = withPlugins([
  withSass,
  [ withOptimizedImages, {
    optimizeImagesInDev: true
  }]
], nextConfig);