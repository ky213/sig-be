const papaparse = require('papaparse')
const fetch = require('node-fetch');
var fs = require('fs');

const SchemasModel = require("../model/SchemasModel");
const getModel = require("../methode/getModel")
module.exports = () => {
  const path = '/home/abdesselam/abdesselam/solution/eadn/geometry-crud/src/data/communes_shurt.csv'
  fs.readFile(path, 'utf8', function (err, contents) {

    let communeFileJSON = papaparse.parse(contents, { header: true });



    let tabSchemat = ["commune"];
    tabSchemat.forEach(async tab => {
      const Schemas = await SchemasModel.findOne(
        { slug: tab },
        { _id: 0, topo: 1, type: 1, properties: 1, geometry: 1 }
      );
      console.log('csvfileToDb-------------Schemas---------', Schemas)
      console.log('csvfileToDb-------------communeFileJSON---------', communeFileJSON.data)

      const CollectionsModel = getModel(tab, Schemas);


      CollectionsModel.count((err, count) => {
        console.log('----------------------count---', count);
        // if (count == 0) CollectionsModel.insertMany(communeFileJSON);
        CollectionsModel.insertMany(communeFileJSON, (err, doc) => {
          console.log('----------------------err', err, doc);
        });
      });


    });



    // console.log(communeFileJSON.data);
    //"id";"code_commune";"commune";"daira";"wilaya";"st_asgeojson"

    // let arr = new Array() 
    // v.data.forEach(row => {
    //   let obj = JSON.parse(row.st_asgeojson);
    //   let f = JSON.stringify({
    //     "type": "Feature",
    //     "properties": {
    //       "code_commune": parseInt(row.code_commune),
    //       "commune": row.commune,
    //       "daira": row.daira,
    //       "wilaya": row.wilaya,
    //     },
    //     "geometry": obj
    //   });
    //   arr.push(f)

    //   /*
    //    fetch("http://localhost:3000/collections/commune",
    //      {
    //        headers: {
    //          'Accept': 'application/json',
    //          'Content-Type': 'application/json'
    //        },
    //        method: "POST",
    //        body: f
    //      })
    //      .then(function (res) { console.log('-----********************-----------', res) })
    //      .catch(function (res) { console.log('-----********************-----------1111', res) })*/

    // });

    // console.log(arr)

  });

};
