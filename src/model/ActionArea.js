const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const ActionAreaSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ActionArea', ActionAreaSchema)