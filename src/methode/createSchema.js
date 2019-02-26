var slugify = require("slugify");

module.exports = schamaTab => {
  schamaTab.slug = slugify(schamaTab.name);
  return schamaTab;
};
