const express = require("express");
const router = express.Router();
const MSANModel = require("../model/MSANModel");

//add
router.post("/msan", async (req, res, next) => {
  const msan = new MSANModel(req.body);
  await msan.save();
  res.send(msan);
});
//get all
router.get("/msan", async (req, res, next) => {
  const msan = await MSANModel.find({});
  res.send({ msan });
});
//get one
router.get("/msan/:id", async (req, res, next) => {
  const msan = await MSANModel.findById(req.params.id);
  res.send({ msan });
});
//update
router.put("/msan/:id", async (req, res, next) => {
  let { id } = req.params;
  await MSANModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/msan/:id", async (req, res, next) => {
  let { id } = req.params;
  await MSANModel.remove({ _id: id });
  res.send(req.body);
});

module.exports = router;
