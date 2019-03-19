const express = require("express");
const router = express.Router();
const SchemasModel = require("../model/SchemasModel");
const cerateSchema = require("../methode/createSchema");
const { alreadyExist } = require("../methode/function");
//add 
router.post("/schemas", async (req, res, next) => {
  try {
    if (await alreadyExist('name', req.body.name)) {
      res.status(401).send('Already exist ')
    } else {
      const cerateSchemaBody = cerateSchema(req.body);
      const Schemas = new SchemasModel(cerateSchemaBody);
      await Schemas.save();
      res.send(Schemas);
    }
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//get all
router.get("/schemas", async (req, res, next) => {
  try {
    const Schemas = await SchemasModel.find({});
    res.send({ Schemas });
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//get one
router.get("/schemas/:id", async (req, res, next) => {
  try {
    const Schemas = await SchemasModel.findById(req.params.id);
    res.send({ Schemas });
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//update
router.put("/schemas/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await SchemasModel.update({ _id: id }, req.body);
    res.send(req.body);
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
//delete
router.delete("/schemas/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await SchemasModel.remove({ _id: id });
    res.send({ _id: id });
  } catch (error) {
    res.status('500').send({ error: error.message })
  }
});
module.exports = router;
