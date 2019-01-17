var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskLFOModel = Schema({
 
    type: String,
    properties: {
      name: String,
      liaison_fo : [{ 
        trans : String,
        distanceKM : Number
      }],
      adresse: String,
      description: String,
      codeCommune: String,
      image: String
    },
    geometry: mongoose.Schema.Types.LineString
});

module.exports = mongoose.model('LFOModel', TaskLFOModel);
