var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskMSANModel = Schema({

    type: String,
    properties: {
      name: String,
      capacite: Number,
      adresse: String,
      description: String,
      codeCommune: String,
      image: String
    },
    geometry: mongoose.Schema.Types.Point
});

module.exports = mongoose.model('MSANModel', TaskMSANModel);
