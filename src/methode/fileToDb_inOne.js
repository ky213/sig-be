const cerateSchema = require("../methode/createSchema");
const SchemasModel = require("../model/SchemasModel");
const mongoose = require("mongoose");
const getModel = require("../methode/getModel");


const data = require('../data')
const schemat = require('../data/schemat')

/*
module.exports = async () => {
  const count = await MSANModel.count( count => {
    count;
  });  
*/

module.exports = () => {
  let tabSchemat = ["ap", "msan", "lfo", "lte", "djezzy", "ooredoo", "actel", "agence_djezzy", "agence_mobilis", "agence_ooredoo", "mobilis", "ats", "dw_pttn", "station_atterissement",];
  tabSchemat.forEach(async tab => {
    const Schemassearch = await SchemasModel.findOne({ name: tab }).count();
    if (Schemassearch == 0) {
      console.log('----------------------tab-------->', tab);
      const cerateSchemaBody = cerateSchema(schemat[tab]);
      const Schemas = new SchemasModel(cerateSchemaBody);
      await Schemas.save();
    }
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, type: 1, properties: 1, geometry: 1 }
    );
    const CollectionsModel = getModel(tab, Schemas);
    CollectionsModel.count((err, count) => {
      for (tabJson of data[tab]) {
        CollectionsModel.insertMany(tabJson.features);
        console.log('----------------------ele-------->', tab);
      }
    });
    delete mongoose.connection.models[tab];
  });

};
