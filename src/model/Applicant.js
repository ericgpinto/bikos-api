const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const ApplicantSchema = mongoose.Schema({

    ad:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ad'
    },

    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Applicant', ApplicantSchema)