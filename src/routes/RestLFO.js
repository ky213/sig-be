const express = require("express");
const router = express.Router();
const LFOModel = require("../model/LFOModel");

//add
router.post("/lfo", async (req, res, next) => {
  const lfo = new LFOModel(req.body);
  await lfo.save();
  res.send(lfo);
});
//get all
router.get("/lfo", async (req, res, next) => {
  const lfo = await LFOModel.find({});
  res.send({ lfo });
});
//get one
router.get("/lfo/:id", async (req, res, next) => {
  const lfo = await LFOModel.findById(req.params.id);
  res.send({ lfo });
});
//update
router.put("/lfo/:id", async (req, res, next) => {
  let { id } = req.params;
  await LFOModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/lfo/:id", async (req, res, next) => {
  let { id } = req.params;
  await LFOModel.remove({ _id: id });
  res.send(req.body);
});

module.exports = router;
