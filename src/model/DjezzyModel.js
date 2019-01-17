var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskDjezzy = Schema({

    type: String,
    properties: {
      name: String,
      moyenCommunication: String,
      adresse: String,
      description: String,
      codeCommune: String,
      image: String
    },
    geometry: mongoose.Schema.Types.Point
});

module.exports = mongoose.model('DjezzyModel', TaskDjezzy);
