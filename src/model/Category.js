const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const CategorySchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    actionArea:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActionArea'
    },
})

module.exports = mongoose.model('Category', CategorySchema)