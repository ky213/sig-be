var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskAlgeriePoste = Schema({

    type: String,
    properties: {
      name: String,
      classe: String, 
      Population: Number,
      densitePostal: Number,
      NombreGuichetsExistant: Number,
      NombreGuichetsTenus: Number,
      NombreVisuTotal: Number,
      NombreVisuFrontOffice: Number,
      NombreGAB: Number,
      adresse: String,
      description: String,
      codeCommune: Number,
      image: String
    },
    geometry: mongoose.Schema.Types.Point

     
});

module.exports = mongoose.model('AlgeriePosteModel', TaskAlgeriePoste);
