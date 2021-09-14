const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eric:yck4z47ifv7xdqGz@cluster0.cc048.mongodb.net/user-ms?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
mongoose.Promise = global.Promise

module.exports = mongoose