const mongoose = require('mongoose');

require('./mongooseConnector');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
