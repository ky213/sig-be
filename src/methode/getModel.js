var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = (tab, schem) => {

  const schemParse = JSON.parse(JSON.stringify(schem));
  ({ topo, ...clons } = schemParse)
  console.log('clons-----------------', clons)

  switch (topo) {
    case 'Point':
      clons.geometry = mongoose.Schema.Types.Point;
      break;
    case 'LineString':
      clons.geometry = mongoose.Schema.Types.LineString;
      break;
    case 'Polygon':
      clons.geometry = mongoose.Schema.Types.Polygon;
      break;
    case 'MultiPolygon':
      clons.geometry = mongoose.Schema.Types.MultiPolygon;
      break;
    default:
      clons.geometry = mongoose.Schema.Types.Geometry;
      break;
  }

  const TaskMSANModel = Schema(clons);
  return mongoose.model(tab, TaskMSANModel);
};
