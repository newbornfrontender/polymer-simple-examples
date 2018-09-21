module.exports = {
  staticFileGlobs: [
    './src/components/**/*',
    './manifest.json',
    './robots.txt',
    './sitemap.xml',
  ],
  runtimeCaching: [{
    urlPattern: /\/@webcomponents\/webcomponentsjs\//,
    handler: 'fastest',
  }],
};
