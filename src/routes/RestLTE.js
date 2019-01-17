const express = require('express');
const router = express.Router();
const LTEModel = require('../model/LTEModel');

//add 
router.post('/lte', async (req, res, next) => {
  const lte = new LTEModel(req.body);
  await lte.save();
  res.send(req.body);
});
//get all
router.get('/lte',async (req,res,next)=>{
  const lte = await LTEModel.find({})
  res.send({lte})
})   
//get one
router.get('/lte/:id',async(req,res,next)=>{
  const lte = await LTEModel.findById(req.params.id)
  res.send({lte})
})
//update
router.put('/lte/:id', async (req, res, next) => {
  let { id } = req.params;
  await LTEModel.update({_id: id},req.body);
  res.send(req.body);
});
//delete
router.delete('/lte/:id', async (req, res, next) => {
  let { id } = req.params;
  await LTEModel.remove({_id: id});
  res.send(req.body);
});

module.exports = router;
