const express = require("express");
const router = express.Router();
const SchemasModel = require("../model/SchemasModel");
const cerateSchema = require("../methode/createSchema");
//add 
router.post("/schemas", async (req, res, next) => {
  const cerateSchemaBody = cerateSchema(req.body);
  const Schemas = new SchemasModel(cerateSchemaBody);
  await Schemas.save();
  res.send(Schemas);
});
//get all
router.get("/schemas", async (req, res, next) => {
  const Schemas = await SchemasModel.find({});
  res.send({ Schemas });
});
//get one
router.get("/schemas/:id", async (req, res, next) => {
  const Schemas = await SchemasModel.findById(req.params.id);
  res.send({ Schemas });
});
//update
router.put("/schemas/:id", async (req, res, next) => {
  let { id } = req.params;
  await SchemasModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/schemas/:id", async (req, res, next) => {
  let { id } = req.params;
  await SchemasModel.remove({ _id: id });
  res.send({ _id: id });
});
module.exports = router;
