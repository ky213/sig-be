const papaparse = require('papaparse')
const fetch = require('node-fetch');
var fs = require('fs');

const SchemasModel = require("../model/SchemasModel");
const getModel = require("../methode/getModel")
module.exports = () => {
  const path = '/home/abdesselam/abdesselam/solution/eadn/geometry-crud/src/data/communes_shurt.csv'
  fs.readFile(path, 'utf8', async (err, contents) => {

    let communeFileJSON = papaparse.parse(contents, { header: true });
    console.log('----------------------communeFileJSON.data-----', communeFileJSON.data);
    let arr = []
    for ({ code_commune, commune, daira, wilaya, st_asgeojson } of communeFileJSON.data) {
      console.log('----------------------st_asgeojson------', st_asgeojson);
      arr.push({ properties: { code_commune, commune, daira, wilaya }, geometry: JSON.parse(st_asgeojson) })
    }
    console.log('----------------------arrrrrrrrr----', arr);
    let tab = "commune"
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, properties: 1 }
    );

    console.log('csvfileToDb-------------Schemas---------', Schemas)

    const CollectionsModel = getModel(tab, Schemas);

    CollectionsModel.insertMany(arr);
    // delete mongoose.connection.models[tab];


  });

};
