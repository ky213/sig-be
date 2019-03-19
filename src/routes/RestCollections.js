const express = require("express");
const router = express.Router();
const SchemasModel = require("../model/SchemasModel");
const mongoose = require("mongoose");
const getModel = require("../methode/getModel");

//add documents
router.post("/collections/:tab", async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//add array documents
router.post("/arraycollections/:tab", async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//get all
router.get("/collections/:tab", async (req, res, next) => {
  try {
    let { tab } = req.params;
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, type: 1, properties: 1 }
    );
    const CollectionsModel = getModel(tab, Schemas);
    let arr = {};
    const Collections = await CollectionsModel.find({});
    arr[tab] = Collections;
    res.send(arr);
    delete mongoose.connection.models[tab];
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//get one
router.get("/collections/:tab/:id", async (req, res, next) => {
  try {
    let { tab } = req.params;
    let { id } = req.params;
    let arr = {}
    const Schemas = await SchemasModel.findOne(
      { slug: tab },
      { _id: 0, topo: 1, type: 1, properties: 1 }
    );
    const CollectionsModel = getModel(tab, Schemas);
    const Collections = await CollectionsModel.findById(id);
    arr[tab] = Collections
    res.send(arr);
    delete mongoose.connection.models[tab];
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//update
router.put("/collections/:tab/:id", async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//delete
router.delete("/collections/:tab/:id", async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});

module.exports = router;
