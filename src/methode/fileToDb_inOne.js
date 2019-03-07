const SchemasModel = require("../model/SchemasModel");
const mongoose = require("mongoose");
const getModel = require("../methode/getModel");


const algeriePosteGeojson = require("../data/algeriePoste");
const djezzyGeojson = require("../data/djezzy");
const fibreObtiqueGeojson = require("../data/fibreObtique");
const reseau4GLteGeojson = require("../data/reseau4GLte");
const MSANGeojson = require("../data/MSAN");
const ooredooGeojson = require("../data/ooredoo");

const data = require('../data')

const AlgeriePosteModel = require("../model/AlgeriePosteModel");
const DjezzyModel = require("../model/DjezzyModel");
const LFOModel = require("../model/LFOModel");
const LTEModel = require("../model/LTEModel");
const MSANModel = require("../model/MSANModel");
const OoredooModel = require("../model/OoredooModel");

/*
module.exports = async () => {
  const count = await MSANModel.count( count => {
    count;
  });
*/




module.exports = () => {
  let tabSchemat = ["ap", "msan", "lfo", "lte", "djezzy", "ooredoo"];
  tabSchemat.forEach(async tab => {
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, type: 1, properties: 1, geometry: 1 }
    );
    const CollectionsModel = getModel(tab, Schemas);
    CollectionsModel.count((err, count) => {
      if (count == 0) CollectionsModel.insertMany(data[tab].features);
    });
    delete mongoose.connection.models[tab];
  });

};
