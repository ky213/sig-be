var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskOoredoo = Schema({

    type: String,
    properties: {
      name: String,
      moyenCommunication: String,
      adresse: String,
      description: String,
      codeCommune: Number,
      image: String
    },
    geometry: mongoose.Schema.Types.Point
});

module.exports = mongoose.model('OoredooModel', TaskOoredoo);
