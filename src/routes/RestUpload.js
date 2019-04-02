const express = require("express");
const router = express.Router();
const AlgeriePosteModel = require("../model/AlgeriePosteModel");

//add
router.post("/upload", async (req, res, next) => {
  console.log("----------------------upload-------->");
  console.log("------------------------------>", req.files);
});

module.exports = router;
