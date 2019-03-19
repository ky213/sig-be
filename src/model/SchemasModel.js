const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchemasPoste = Schema({
  name: String,
  properties: {},
  topo: String,
  slug: String,
  type: String,
  geometry: String
});

module.exports = mongoose.model("schemas", TaskSchemasPoste);
