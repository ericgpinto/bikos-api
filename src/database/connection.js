const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eric:2t3KOxZMGHbRHvQ4@cluster0.cc048.mongodb.net/user-ms?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
mongoose.Promise = global.Promise

module.exports = mongoose