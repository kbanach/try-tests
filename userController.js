const userModel = require('./lib/userModel');

function create(name) {
    return userModel.create(name);
}

function remove(name) {
    return userModel.remove(name);
}

function getByName(name) {
    return userModel.getByName(name);
}

module.exports = {
    create,
    getByName,
    remove,
};
