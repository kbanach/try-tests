const crypto = require('crypto');

let inMemoryStorage = {};

class User {
    constructor (name) {
        this.name = name;
    }
}

function create(name) {
    const user = new User(name);

    inMemoryStorage[name] = user;

    return user;
}

function remove(name) {
    delete inMemoryStorage[name];
}

function getByName(name) {
    return inMemoryStorage[name];
}

module.exports = {
    create,
    getByName,
    remove,
};
