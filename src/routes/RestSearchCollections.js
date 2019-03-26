const express = require("express");
const router = express.Router();
const SchemasModel = require("../model/SchemasModel");
const mongoose = require("mongoose");
const getModel = require("../methode/getModel");

//get all
router.post("/searches/:tab", async (req, res, next) => {
  try {
    let { tab } = req.params;
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, type: 1, properties: 1 }
    );
    const CollectionsModel = getModel(tab, Schemas);
    let arr = {};
    // console.log('----------------------****-', req.body);
    // const Collections = await CollectionsModel.find({ "properties.codeCommune": "3801", "properties.capacite": "528" }).count();
    // const Collections = await CollectionsModel.find({}).where('properties.Population').limit(24247).count();
    // const Collections = await CollectionsModel.find(req.body);
    // const Collections = await CollectionsModel.find({}).$where(query1);
    let query1 = 'this.properties.Population > 24245 && this.properties.Population < 24249'
    let operatorRoot = req.body[0], tabOp = req.body[1]
    let query = '1==1 && ';
    let wer = {}
    for (ele of tabOp) {
      if (ele.operator == "like") {
        wer[`properties.${ele.field}`] = { $regex: `.*${ele.value}` }
      }
      else
        query = query + `this.properties.${ele.field} ${ele.operator} ${ele.value} ${operatorRoot.operatorRoot} `
    }
    var a = 'mot'
    var lastIndex = query.lastIndexOf(" ");
    query = query.substring(0, lastIndex - 3);
    const Collections = await CollectionsModel.find(wer).$where(query);
    arr[tab] = Collections;
    res.send(arr);
    delete mongoose.connection.models[tab];
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});


module.exports = router;
