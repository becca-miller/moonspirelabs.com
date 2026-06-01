import markdownIt from "markdown-it";

export default function(config) {
  // Passthrough static assets
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/css");

  // Reload CSS / assets during development
  config.setBrowserSyncConfig({
    files: ["_site/css/*.css", "_site/assets/**/*"]
  });

  const md = markdownIt();
  config.addFilter("markdown", function(content) {
    return md.render(content || "");
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

