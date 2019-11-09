const Joi = require('joi');
const mongoose = require('mongoose');
const _=require('lodash');
const bcrypt=require('bcrypt');
const config=require('config');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    specialite: { type: String, required: true },
    cv: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);






exports.User = User; 
