var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskLTEModel = Schema({

    type: String,
    properties: {
      name: String,
      adresse: String, 
      description: String,
      codeCommune: String,
      image: String
    },
    geometry: mongoose.Schema.Types.Polygon
});

module.exports = mongoose.model('LTEModel', TaskLTEModel);
