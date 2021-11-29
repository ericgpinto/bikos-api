const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const ApplicantSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Applicant', ApplicantSchema)