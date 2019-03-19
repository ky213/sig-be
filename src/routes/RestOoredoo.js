const express = require("express");
const router = express.Router();
const OoredooModel = require("../model/OoredooModel");

//add
router.post("/ooredoo", async (req, res, next) => {
  const ooredoo = new OoredooModel(req.body);
  await ooredoo.save();
  res.send(ooredoo);
});
//get all
router.get("/ooredoo", async (req, res, next) => {
  const ooredoo = await OoredooModel.find({});
  res.send({ ooredoo });
});
//get one
router.get("/ooredoo/:id", async (req, res, next) => {
  const ooredoo = await OoredooModel.findById(req.params.id);
  res.send({ ooredoo });
});
//update
router.put("/ooredoo/:id", async (req, res, next) => {
  let { id } = req.params;
  await OoredooModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/ooredoo/:id", async (req, res, next) => {
  let { id } = req.params;
  await OoredooModel.remove({ _id: id });
  res.send(req.body);
});

module.exports = router;
