const crypto = require('crypto');

function User(name) {
    this.name = name;
    this.id = crypto.createHash('md5').update(name).digest('hex');
}

async function getUser(name) {
    return new User(name);
}

module.exports = {
    getUser,
};