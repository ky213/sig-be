const express = require("express");
const router = express.Router();
const AlgeriePosteModel = require("../model/AlgeriePosteModel");

//add
router.post("/algerieposte", async (req, res, next) => {
  const algerieposte = new AlgeriePosteModel(req.body);
  await algerieposte.save();
  res.send(algerieposte);
});
//get all
router.get("/algerieposte", async (req, res, next) => {
  const algerieposte = await AlgeriePosteModel.find({});
  res.send({ algerieposte });
});
//get one
router.get("/algerieposte/:id", async (req, res, next) => {
  const algerieposte = await AlgeriePosteModel.findById(req.params.id);
  res.send({ algerieposte });
});
//update
router.put("/algerieposte/:id", async (req, res, next) => {
  let { id } = req.params;
  await AlgeriePosteModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/algerieposte/:id", async (req, res, next) => {
  let { id } = req.params;
  await AlgeriePosteModel.remove({ _id: id });
  res.send(req.body);
});

module.exports = router;
