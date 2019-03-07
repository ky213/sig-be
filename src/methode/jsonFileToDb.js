const papaparse = require('papaparse')
const fetch = require('node-fetch');
var fs = require('fs');
module.exports = () => {
  console.log('New asassas ----------------------------------------')
  const path = '/home/abdesselam/abdesselam/solution/eadn/geometry-crud/src/data/communes.csv'
  fs.readFile(path, 'utf8', function (err, contents) {

    let v = papaparse.parse(contents, { header: true });

    //console.log(v.data);
    //"id";"code_commune";"commune";"daira";"wilaya";"st_asgeojson"


    let arr = new Array()
    v.data.forEach(row => {
      let obj = JSON.parse(row.st_asgeojson);
      let f = JSON.stringify({
        "type": "Feature",
        "properties": {
          "code_commune": parseInt(row.code_commune),
          "commune": row.commune,
          "daira": row.daira,
          "wilaya": row.wilaya,
        },
        "geometry": obj
      });
      arr.push(f)


      /*
       fetch("http://localhost:3000/collections/commune",
         {
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           method: "POST",
           body: f
         })
         .then(function (res) { console.log('-----********************-----------', res) })
         .catch(function (res) { console.log('-----********************-----------1111', res) })*/

    });

    console.log(arr)

  });

};
