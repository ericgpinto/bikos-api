const mongoose = require('../database/connection');
const { Schema } = require('mongoose');

const AdSchema = mongoose.Schema({

    description:{
        type: String,
        required: true
    },

    period:{
        type: String,
        enum: [
            'O mais breve possível',
            'Entre 15 a 30 dias',
            'Entre 30 a 60 dias',
            '60 dias ou mais'
        ]
    },

    announcer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    category:{
        type: String,
        enum: [
            'Saúde',
            'Eventos',
            'Informática',
            'Manutenção',
            'Serviços domésticos'
        ]
    },

    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Ad', AdSchema)
