const crypto = require('crypto');

inMemoryStorage = {};

class User {
    constructor (name) {
        this.name = name;
        this.id = crypto.createHash('md5').update(name).digest('hex');
    }
}

async function createUser(name) {
    const user = new User(name);

    inMemoryStorage[name] = user;

    return user;
}

async function getByName(name) {
    return inMemoryStorage[name];
}

module.exports = {
    createUser,
};
