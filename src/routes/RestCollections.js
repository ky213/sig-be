const express = require("express");
const router = express.Router();
const SchemasModel = require("../model/SchemasModel");
const mongoose = require("mongoose");
const getModel = require("../methode/getModel");

//add documents
router.post("/collections/:tab", async (req, res, next) => {
  let { tab } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1, geometry: 1 }
  );
  const CollectionsModel = getModel(tab, Schemas);
  const createCollectionsModel = new CollectionsModel(req.body);
  await createCollectionsModel.save();
  res.send(createCollectionsModel);
  delete mongoose.connection.models[tab];
});
//add array documents
router.post("/arraycollections/:tab", async (req, res, next) => {
  let { tab } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1 }
  );
  const CollectionsModel = getModel(tab, Schemas);
  const createCollectionsModel = CollectionsModel.insertMany(req.body, (err, docs) => {
    res.send(docs);
  });
  delete mongoose.connection.models[tab];
});
//get all
router.get("/collections/:tab", async (req, res, next) => {
  let { tab } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1 }
  );
  console.log('----------------get all')
  const CollectionsModel = getModel(tab, Schemas);
  const Collections = await CollectionsModel.find({});
  res.send({ Collections });
  delete mongoose.connection.models[tab];
});
//get one
router.get("/collections/:tab/:id", async (req, res, next) => {
  let { tab } = req.params;
  let { id } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1 }
  );
  const CollectionsModel = getModel(tab, Schemas);
  const Collections = await CollectionsModel.findById(id);
  res.send({ Collections });
  delete mongoose.connection.models[tab];
});
//update
router.put("/collections/:tab/:id", async (req, res, next) => {
  let { tab } = req.params;
  let { id } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1 }
  );
  const CollectionsModel = getModel(tab, Schemas);
  await CollectionsModel.update({ _id: id }, req.body);
  res.send(req.body);
  delete mongoose.connection.models[tab];
});
//delete
router.delete("/collections/:tab/:id", async (req, res, next) => {
  let { tab } = req.params;
  let { id } = req.params;
  const Schemas = await SchemasModel.findOne(
    { slug: tab },
    { _id: 0, topo: 1, type: 1, properties: 1 }
  );
  const CollectionsModel = getModel(tab, Schemas);
  await CollectionsModel.remove({ _id: id });
  res.send({ _id: id });
  delete mongoose.connection.models[tab];
});

module.exports = router;
