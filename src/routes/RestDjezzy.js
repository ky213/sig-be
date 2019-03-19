const express = require("express");
const router = express.Router();
const DjezzyModel = require("../model/DjezzyModel");

//add
router.post("/djezzy", async (req, res, next) => {
  const djezzy = new DjezzyModel(req.body);
  await djezzy.save();
  res.send(djezzy);
});
//get all
router.get("/djezzy", async (req, res, next) => {
  const djezzy = await DjezzyModel.find({});
  res.send({ djezzy });
});
//get one
router.get("/djezzy/:id", async (req, res, next) => {
  const djezzy = await DjezzyModel.findById(req.params.id);
  res.send({ djezzy });
});
//update
router.put("/djezzy/:id", async (req, res, next) => {
  let { id } = req.params;
  await DjezzyModel.update({ _id: id }, req.body);
  res.send(req.body);
});
//delete
router.delete("/djezzy/:id", async (req, res, next) => {
  let { id } = req.params;
  await DjezzyModel.remove({ _id: id });
  res.send(req.body);
});

module.exports = router;
