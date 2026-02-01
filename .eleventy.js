export default function(config) {
  // Passthrough static assets
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/css");

  // Reload CSS / assets during development
  config.setBrowserSyncConfig({
    files: ["_site/css/*.css", "_site/assets/**/*"]
  });

  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
        input: 'src',
        output: 'dist',
    },
    passthroughFileCopy: true
  };
}
