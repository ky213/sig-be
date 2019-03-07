var GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = (tab, schem) => {

  const schemParse = JSON.parse(JSON.stringify(schem));
  ({ topo, ...colons } = schemParse);
  switch (topo) {
    case 'Point':
      colons.geometry = mongoose.Schema.Types.Point;
      break;
    case 'LineString':
      colons.geometry = mongoose.Schema.Types.LineString;
      break;
    case 'Polygon':
      colons.geometry = mongoose.Schema.Types.Polygon;
      break;
    case 'MultiPolygon':
      colons.st_asgeojson = mongoose.Schema.Types.MultiPolygon;
      break;
    default:
      colons.geometry = mongoose.Schema.Types.Geometry;
      break;
  }

  const TaskMSANModel = Schema(colons);
  return mongoose.model(tab, TaskMSANModel);
};
