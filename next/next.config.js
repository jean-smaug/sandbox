const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules');
module.exports = 
withTM({
  transpileModules: ['super-saiyan'],
  ...withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      }
})})