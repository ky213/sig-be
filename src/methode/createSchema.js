var slugify = require("slugify");

module.exports = schamaTab => {
  console.log('---------------------schamaTab--------->', schamaTab);
  schamaTab.slug = slugify(schamaTab.name);
  return schamaTab;
};
