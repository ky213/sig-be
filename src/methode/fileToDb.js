const algeriePosteGeojson = require("../data/algeriePoste");
const djezzyGeojson = require("../data/djezzy");
const fibreObtiqueGeojson = require("../data/fibreObtique");
const reseau4GLteGeojson = require("../data/reseau4GLte");
const MSANGeojson = require("../data/MSAN");
const ooredooGeojson = require("../data/ooredoo");

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
  AlgeriePosteModel.count((err, count) => {
    if (count == 0) AlgeriePosteModel.insertMany(algeriePosteGeojson.features);
  });

  DjezzyModel.count((err, count) => {
    if (count == 0) DjezzyModel.insertMany(djezzyGeojson.features);
  });

  LFOModel.count((err, count) => {
    if (count == 0) LFOModel.insertMany(fibreObtiqueGeojson.features);
  });

  LTEModel.count((err, count) => {
    if (count == 0) LTEModel.insertMany(reseau4GLteGeojson.features);
  });

  MSANModel.count((err, count) => {
    if (count == 0) MSANModel.insertMany(MSANGeojson.features);
  });

  OoredooModel.count((err, count) => {
    if (count == 0) OoredooModel.insertMany(ooredooGeojson.features);
  });
};
