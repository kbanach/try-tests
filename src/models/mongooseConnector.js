const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost/try-tests');

    return mongoose.connection;
}

module.exports = connect();
