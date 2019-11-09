const {Stage} = require('../models/stage'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const stages = await Stage.find().sort('region');
  res.send(stages);
});

router.post('/', async (req, res) => {
  let stage = new Stage({ 
    description: req.body.description,
    recruiter: req.body.recruiter,
    region: req.body.region,
    title: req.body.title,
    url: req.body.url
  });
  stage = await stage.save();
  
  res.send(stage);
});

router.put('/:id', async (req, res) => {
 

  const stage = await Stage.findByIdAndUpdate(req.params.id,
    { 
    description: req.body.description,
    recruiter: req.body.recruiter,
    region: req.body.region,
    title: req.body.title,
    url: req.body.url
    }, { new: true });

  if (!stage) return res.status(404).send('The stage with the given ID was not found.');
  
  res.send(stage);
});

router.delete('/:id', async (req, res) => {
  const stage = await Stage.findByIdAndRemove(req.params.id);

  if (!stage) return res.status(404).send('The stage with the given ID was not found.');

  res.send(stage);
});

router.get('/:id', async (req, res) => {
  const stage = await Stage.findById(req.params.id);

  if (!stage) return res.status(404).send('The stage with the given ID was not found.');

  res.send(stage);
});

module.exports = router; 