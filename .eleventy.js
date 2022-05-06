// Filters
const dateFilter = require("./src/filters/date-filter.js");
const subString = require("./src/filters/substring.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addWatchTarget("./src/scss/");

  // add filter for the year
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  // Add filters
  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("subString", subString);

  // add blogs to collections
  eleventyConfig.addCollection("blog", (collection) => {
    return collection.getFilteredByGlob("./src/blog/*.md").reverse();
  });
  // add korean blogs to collections
  eleventyConfig.addCollection("koreanBlogs", (collection) => {
    return collection
      .getFilteredByGlob("./src/blog/*.md")
      .filter((x) => x.tags === "korean");
  });
  // add lifting blogs to collections
  eleventyConfig.addCollection("liftingBlogs", (collection) => {
    return collection
      .getFilteredByGlob("./src/blog/*.md")
      .filter((x) => x.tags === "lifting");
  });
  // add web blogs to collections
  eleventyConfig.addCollection("webBlogs", (collection) => {
    return collection
      .getFilteredByGlob("./src/blog/*.md")
      .filter((x) => x.tags === "web development");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
