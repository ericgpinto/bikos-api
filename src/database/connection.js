const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eric:cwFmJ6EZqolQJ7AO@bikos-cluster.up7z6.mongodb.net/bikos-db?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
mongoose.Promise = global.Promise

module.exports = mongoose
