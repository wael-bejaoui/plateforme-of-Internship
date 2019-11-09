const Joi = require('joi');
const mongoose = require('mongoose');

const Stage = mongoose.model('Stage', new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  recruiter: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    required: false,
  },
  title:
  {
    type: String,
    required: false,
  },
  url:
  {
    type: String,
    required: false,
  }
  
}));



exports.Stage = Stage; 