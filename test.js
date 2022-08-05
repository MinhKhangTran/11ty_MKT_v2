const { readFileSync, writeFileSync } = require("fs");
const matter = require("gray-matter");

const first = readFileSync("./src/blog/woche-2.md", "utf8");
const { content } = matter(first);

console.log(typeof first);

// suche nach headings
const lel = first.replace(/##/g, "<h2>");

console.log(lel);
