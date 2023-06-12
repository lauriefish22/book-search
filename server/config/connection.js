const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://lauriefish22:Fish2893!', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
