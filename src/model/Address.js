const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const AddressSchema = mongoose.Schema({
    
    city:{
        type: String,
        required: true
    },
    neighborhood:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Address', AddressSchema)